import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sync } from '../tools/sync-shared.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const skillNames = (await readdir(path.join(root, 'skills'), { withFileTypes: true }))
  .filter(e => e.isDirectory() && !e.name.startsWith('.')).map(e => e.name).sort();

async function markdownFiles(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...await markdownFiles(full));
    else if (entry.name.endsWith('.md')) found.push(full);
  }
  return found;
}

// Relative Markdown links, without fenced code, anchors, or external URLs.
function relativeLinks(text) {
  const prose = text.replace(/```[\s\S]*?```/g, '');
  return [...prose.matchAll(/\]\(([^)\s]+)\)/g)].map(m => m[1])
    .filter(href => !/^[a-z]+:/i.test(href) && !href.startsWith('#'))
    .map(href => decodeURIComponent(href.split('#')[0]));
}

test('ten skills with frontmatter names matching their folders', async () => {
  assert.equal(skillNames.length, 10);
  for (const name of skillNames) {
    const text = await readFile(path.join(root, 'skills', name, 'SKILL.md'), 'utf8');
    const front = text.match(/^---\n([\s\S]*?)\n---\n/);
    assert.ok(front, `${name} has frontmatter`);
    const fields = Object.fromEntries(front[1].split('\n').map(line => [line.slice(0, line.indexOf(':')), line.slice(line.indexOf(':') + 1).trim()]));
    assert.equal(fields.name, name);
    assert.match(name, /^[a-z0-9-]{1,64}$/);
    assert.ok(fields.description?.length >= 40, `${name} description is too short to route well`);
    assert.ok(fields.description.length <= 1024, `${name} description exceeds 1024 characters`);
  }
});

test('skill links resolve inside their own skill folder', async () => {
  for (const name of skillNames) {
    const folder = path.join(root, 'skills', name);
    for (const file of await markdownFiles(folder)) {
      for (const href of relativeLinks(await readFile(file, 'utf8'))) {
        const target = path.resolve(path.dirname(file), href);
        assert.ok(target.startsWith(folder + path.sep), `${path.relative(root, file)} links outside its skill: ${href}`);
        await assert.doesNotReject(stat(target), `${path.relative(root, file)} has a broken link: ${href}`);
      }
    }
  }
});

test('repository documentation links resolve', async () => {
  const files = ['README.md', 'workflows.md', 'evaluation.md', 'CONTRIBUTING.md', 'CHANGELOG.md', ...await markdownFiles(path.join(root, 'docs'))];
  for (const file of files.map(f => path.resolve(root, f))) {
    for (const href of relativeLinks(await readFile(file, 'utf8'))) {
      await assert.doesNotReject(stat(path.resolve(path.dirname(file), href)), `${path.relative(root, file)} has a broken link: ${href}`);
    }
  }
});

test('skill copies of shared rules, references, and scripts match shared/', async () => {
  assert.deepEqual(await sync({ check: true }), [], 'Run npm run sync');
});

test('setup menu describes every skill', async () => {
  const source = await readFile(path.join(root, 'scripts/setup.mjs'), 'utf8');
  for (const name of skillNames) assert.ok(source.includes(`'${name}':`), `setup.mjs lacks a description for ${name}`);
});
