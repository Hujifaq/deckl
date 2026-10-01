#!/usr/bin/env node
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFile, realpath } from 'node:fs/promises';
import { install } from '../scripts/install.mjs';
import { agents } from '../scripts/agents.mjs';
import { setup } from '../scripts/setup.mjs';

const help = `
  deckl
  Give the interface a point of view.

  INSTALL
    deckl install                             Guided setup in a terminal
    deckl install --agent claude               All ten skills, user scope
    deckl install --agent codex --scope project Current project
    deckl install --agent cursor --skill deckl-refine
    deckl install --agent claude --agent codex  Multiple agents

  MAINTAIN
    deckl update                              Guided update with backups
    deckl update --agent codex                 Back up and replace selected skills
    deckl status --agent codex                 Recorded installed versions

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
  if (!args.length && input.isTTY && output.isTTY) return setup([], options);
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
  if (!['install', 'update', 'status'].includes(command)) throw new Error(`Unknown command: ${command}. Run deckl --help.`);
  if (flags.includes('--help')) { log(help); return; }
  if (!flags.includes('--agent')) {
    if (command === 'status') throw new Error('Choose an agent: deckl status --agent codex');
    return setup(flags, { ...options, mode: command });
  }
  const normalized = [...flags];
    if (!normalized.includes('--scope')) normalized.push('--scope', 'user');
    const scope = normalized[normalized.indexOf('--scope') + 1];
    if (scope === 'project' && !normalized.includes('--project')) normalized.push('--project', options.cwd ?? process.cwd());
    return await install(normalized, { ...options, mode: command });
}

if (process.argv[1] && await realpath(path.resolve(process.argv[1])) === fileURLToPath(import.meta.url)) {
  runCli(process.argv.slice(2)).catch(error => { console.error(`\nDeckl: ${error.message}`); process.exitCode = 1; });
}
