#!/usr/bin/env node
import { readdir, lstat, mkdir, cp, rm } from 'node:fs/promises';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('../skills/', import.meta.url));
const hosts = { claude: '.claude', codex: '.agents' };
const help = `Deckl local installer (Node.js 22+)
Usage: node scripts/install.mjs --agent claude|codex --scope user|project [options]
  --project PATH  Existing project directory; required for project scope
  --skill NAME    Install one skill; repeat to select several; default: all
  --dry-run       Show destinations without writing
  --list          List available skills
  --help          Show this help
Existing skill folders are never overwritten. No network access is used.`;

async function stat(p) {
  try { return await lstat(p); } catch (e) { if (e.code === 'ENOENT') return null; throw e; }
}

export async function install(args, { home = homedir(), cwd = process.cwd(), log = console.log } = {}) {
  const available = (await readdir(source, { withFileTypes: true }))
    .filter(e => e.isDirectory()).map(e => e.name).sort();
  if (args.length === 1 && args[0] === '--help') { log(help); return; }
  if (args.length === 1 && args[0] === '--list') { log(available.join('\n')); return; }
  const opts = {}, selected = [];
  for (let i = 0; i < args.length; i++) {
    const flag = args[i];
    if (flag === '--dry-run') { opts.dryRun = true; continue; }
    if (!['--agent', '--scope', '--project', '--skill'].includes(flag)) throw new Error(`Unknown option: ${flag}\n${help}`);
    const value = args[++i];
    if (!value || value.startsWith('--')) throw new Error(`Missing value for ${flag}`);
    if (flag === '--skill') selected.push(value);
    else {
      if (Object.hasOwn(opts, flag)) throw new Error(`Repeated option: ${flag}`);
      opts[flag] = value;
    }
  }
  if (!Object.hasOwn(hosts, opts['--agent'])) throw new Error('Choose --agent claude or codex.');
  if (!['user', 'project'].includes(opts['--scope'])) throw new Error('Choose --scope user or project.');
  const projectScope = opts['--scope'] === 'project';
  if (projectScope !== Boolean(opts['--project'])) throw new Error('--project is required only for project scope.');
  const names = [...new Set(selected.length ? selected : available)];
  for (const name of names) if (!available.includes(name)) throw new Error(`Unknown skill: ${name}`);
  const base = projectScope ? path.resolve(cwd, opts['--project']) : home;
  if (!(await stat(base))?.isDirectory()) throw new Error(`Expected an existing real directory: ${base}`);
  const agentRoot = path.join(base, hosts[opts['--agent']]);
  const destination = path.join(agentRoot, 'skills');
  for (const p of [agentRoot, destination]) {
    const info = await stat(p);
    if (info && !info.isDirectory()) throw new Error(`Refusing a symlink or non-directory: ${p}`);
  }
  const targets = names.map(name => ({ name, target: path.join(destination, name) }));
  const conflicts = [];
  for (const { target } of targets) if (await stat(target)) conflicts.push(target);
  if (conflicts.length) throw new Error(`Nothing installed. Existing destinations are preserved:\n${conflicts.join('\n')}\nCompare or move those folders before retrying.`);
  for (const { name, target } of targets) log(`${opts.dryRun ? 'Would install' : 'Install'} ${name} → ${target}`);
  if (opts.dryRun) return;
  await mkdir(destination, { recursive: true });
  const created = [];
  try {
    for (const { name, target } of targets) {
      await mkdir(target);
      created.push(target);
      for (const entry of await readdir(path.join(source, name))) {
        await cp(path.join(source, name, entry), path.join(target, entry), {
          recursive: true, force: false, errorOnExist: true,
        });
      }
    }
  } catch (error) {
    const rollback = await Promise.allSettled(created.map(p => rm(p, { recursive: true, force: true })));
    if (rollback.some(r => r.status === 'rejected')) log('Cleanup was incomplete; inspect the listed destinations.');
    throw error;
  }
  const prefix = opts['--agent'] === 'claude' ? '/' : '$';
  log(`Copied ${names.length} skills. Refresh your assistant and try ${prefix}${names[0]}. Host discovery is not verified by this installer.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  install(process.argv.slice(2)).catch(error => { console.error(error.message); process.exitCode = 1; });
}
