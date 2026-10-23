#!/usr/bin/env node
// Copies shared rule blocks and files into the skills that use them.
// Edit shared/, then run npm run sync. npm test fails when a skill copy drifts.
import { mkdir, readdir, readFile, realpath, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const skills = (await readdir(path.join(root, 'skills'), { withFileTypes: true }))
  .filter(e => e.isDirectory() && !e.name.startsWith('.')).map(e => e.name).sort();
const visual = ['deckl-adapt', 'deckl-audit', 'deckl-design', 'deckl-motion', 'deckl-polish', 'deckl-refine'];

// A block replaces the text between <!-- shared:NAME --> and <!-- /shared:NAME --> in SKILL.md.
export const blocks = [
  { name: 'rules', source: 'shared/blocks/rules.md', skills },
  { name: 'site-first', source: 'shared/blocks/site-first.md', skills: ['deckl-direct', 'deckl-layout'] },
];
export const files = [
  { source: 'shared/references/anti-patterns.md', target: 'references/anti-patterns.md', skills: ['deckl-audit', 'deckl-design', 'deckl-refine'] },
  { source: 'shared/scripts/inspect.mjs', target: 'scripts/inspect.mjs', skills: visual },
];

export async function sync({ check = false } = {}) {
  const drift = new Set();
  const contents = new Map();
  const read = async file => {
    if (!contents.has(file)) {
      contents.set(file, await readFile(file, 'utf8').catch(e => { if (e.code === 'ENOENT') return null; throw e; }));
    }
    return contents.get(file);
  };
  const update = async (file, next) => {
    if (await read(file) === next) return;
    drift.add(path.relative(root, file));
    contents.set(file, next);
    if (!check) { await mkdir(path.dirname(file), { recursive: true }); await writeFile(file, next); }
  };
  for (const block of blocks) {
    const body = (await readFile(path.join(root, block.source), 'utf8')).trim();
    const start = `<!-- shared:${block.name} -->`, end = `<!-- /shared:${block.name} -->`;
    for (const skill of block.skills) {
      const file = path.join(root, 'skills', skill, 'SKILL.md');
      const text = await read(file);
      const from = text.indexOf(start), to = text.indexOf(end);
      if (from < 0 || to < from) throw new Error(`skills/${skill}/SKILL.md is missing ${start} … ${end}`);
      await update(file, `${text.slice(0, from + start.length)}\n${body}\n${text.slice(to)}`);
    }
  }
  for (const shared of files) {
    const body = await readFile(path.join(root, shared.source), 'utf8');
    for (const skill of shared.skills) await update(path.join(root, 'skills', skill, shared.target), body);
  }
  return [...drift].sort();
}

if (process.argv[1] && await realpath(path.resolve(process.argv[1])) === fileURLToPath(import.meta.url)) {
  const check = process.argv.includes('--check');
  const drift = await sync({ check });
  if (check && drift.length) {
    console.error(`Out of sync with shared/:\n${drift.join('\n')}\nRun npm run sync.`);
    process.exitCode = 1;
  } else console.log(drift.length ? `Updated:\n${drift.join('\n')}` : 'Skills match shared/.');
}
