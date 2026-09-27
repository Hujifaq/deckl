#!/usr/bin/env node
import { createInterface } from 'node:readline/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFile, realpath } from 'node:fs/promises';
import { install } from '../scripts/install.mjs';
import { agents } from '../scripts/agents.mjs';

const help = `
  deckl
  Give the interface a point of view.

  INSTALL
    deckl install                             Guided setup in a terminal
    deckl install --agent claude               All ten skills, user scope
    deckl install --agent codex --scope project Current project
    deckl install --agent cursor --skill deckl-refine
    deckl install --agent claude --agent codex  Multiple agents

  OPTIONS
    --agent NAME      claude, codex, cursor, copilot, gemini, opencode
    --scope SCOPE     user (default) or project
    --project PATH    Project path; default: current directory
    --skill NAME      Select a skill; repeat for several; default: all ten
    --dry-run         Preview destinations without copying

  EXPLORE
    deckl list        Available skills
    deckl agents      Agent directories and documentation
    deckl --version   Package version
    deckl --help      This guide

  Existing skills are preserved. No dependencies or automatic install hooks.
`;

export async function runCli(args, options = {}) {
  const log = options.log ?? console.log;
  const input = options.input ?? process.stdin;
  const output = options.output ?? process.stdout;
  const [command, ...flags] = args;
  if (!command || command === '--help' || command === 'help') { log(help); return; }
  if (command === '--version') {
    const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
    log(pkg.version); return;
  }
  if (command === 'list') {
    if (flags.length) throw new Error('Usage: deckl list');
    return install(['--list'], options);
  }
  if (command === 'agents') {
    if (flags.length) throw new Error('Usage: deckl agents');
    for (const [id, agent] of Object.entries(agents)) {
      log(`${agent.label} (${id})\n  User: ~/${agent.user}\n  Project: ${agent.project}\n  ${agent.docs}\n`);
    }
    return;
  }
  if (command !== 'install') throw new Error(`Unknown command: ${command}. Run deckl --help.`);
  if (flags.includes('--help')) { log(help); return; }
  const normalized = [...flags];
  let rl;
  try {
    if (!normalized.includes('--agent')) {
      if (!input.isTTY || !output.isTTY) throw new Error('Choose an agent: deckl install --agent claude (or run in an interactive terminal).');
      rl = createInterface({ input, output });
      log('\n  deckl / interface craft\n');
      const choices = Object.entries(agents);
      choices.forEach(([id, agent], i) => log(`  ${i + 1}  ${agent.label} (${id})`));
      const answer = (await rl.question('\nAgent number or name: ')).trim();
      const chosen = choices.find(([id]) => id === answer)?.[0] ?? choices[Number(answer) - 1]?.[0];
      if (!chosen) throw new Error('Unknown selection. Run again and choose a listed agent.');
      normalized.push('--agent', chosen);
      if (!normalized.includes('--scope')) {
        const scope = (await rl.question('Scope: user (all projects) or project [user]: ')).trim() || 'user';
        normalized.push('--scope', scope);
      }
    }
    if (!normalized.includes('--scope')) normalized.push('--scope', 'user');
    const scope = normalized[normalized.indexOf('--scope') + 1];
    if (scope === 'project' && !normalized.includes('--project')) normalized.push('--project', options.cwd ?? process.cwd());
    if (rl && !normalized.includes('--dry-run')) {
      await install([...normalized, '--dry-run'], options);
      if ((await rl.question('\nCopy these skills? [y/N]: ')).trim().toLowerCase() !== 'y') { log('Cancelled. No skills copied.'); return; }
    }
    return await install(normalized, options);
  } finally { rl?.close(); }
}

if (process.argv[1] && await realpath(path.resolve(process.argv[1])) === fileURLToPath(import.meta.url)) {
  runCli(process.argv.slice(2)).catch(error => { console.error(`\nDeckl: ${error.message}`); process.exitCode = 1; });
}
