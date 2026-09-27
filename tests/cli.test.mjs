import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, readdir, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { agents } from '../scripts/agents.mjs';
import { install } from '../scripts/install.mjs';
import { runCli } from '../bin/deckl.mjs';

async function fixture(t) {
  const root = await mkdtemp(path.join(tmpdir(), 'deckl-cli-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const logs = [];
  return { root, logs, options: { home: root, cwd: root, input: { isTTY: false }, output: { isTTY: false }, log: value => logs.push(value) } };
}

for (const [id, agent] of Object.entries(agents)) {
  for (const scope of ['user', 'project']) {
    test(`${agent.label}: ${scope} adapter copies a complete skill`, async t => {
      const { root, options } = await fixture(t);
      const home = path.join(root, 'home');
      const project = path.join(root, 'Client Site');
      await mkdir(home); await mkdir(project);
      await runCli(['install', '--agent', id, '--scope', scope, '--skill', 'deckl-refine'], { ...options, home, cwd: project });
      const base = scope === 'user' ? home : project;
      const skill = path.join(base, agent[scope], 'deckl-refine');
      assert.match(await readFile(path.join(skill, 'SKILL.md'), 'utf8'), /name: deckl-refine/);
      assert.equal((await readdir(path.join(skill, 'references'))).length, 3);
      assert.deepEqual(await readdir(scope === 'user' ? project : home), []);
    });
  }
}

test('multiple agents install once per unique adapter', async t => {
  const { root, options } = await fixture(t);
  await runCli(['install', '--agent', 'claude', '--agent', 'cursor', '--agent', 'claude', '--skill', 'deckl-type'], options);
  for (const id of ['claude', 'cursor']) assert.match(await readFile(path.join(root, agents[id].user, 'deckl-type/SKILL.md'), 'utf8'), /deckl-type/);
});
test('conflict in a later agent prevents every selected installation', async t => {
  const { root, options } = await fixture(t);
  const existing = path.join(root, agents.cursor.user, 'deckl-type');
  await mkdir(existing, { recursive: true }); await writeFile(path.join(existing, 'SKILL.md'), 'custom');
  await assert.rejects(runCli(['install', '--agent', 'claude', '--agent', 'cursor', '--skill', 'deckl-type'], options), /Nothing installed/);
  await assert.rejects(readdir(path.join(root, '.claude')), { code: 'ENOENT' });
  assert.equal(await readFile(path.join(existing, 'SKILL.md'), 'utf8'), 'custom');
});
test('OpenCode refuses symlinks in intermediate config directories', { skip: process.platform === 'win32' }, async t => {
  const { root, options } = await fixture(t);
  const elsewhere = path.join(root, 'elsewhere'); await mkdir(elsewhere);
  await symlink(elsewhere, path.join(root, '.config'));
  await assert.rejects(runCli(['install', '--agent', 'opencode'], options), /symlink/);
  assert.deepEqual(await readdir(elsewhere), []);
});
test('CLI help, version, agents, and skills are informational', async t => {
  const { root, logs, options } = await fixture(t);
  for (const args of [[], ['--help'], ['--version'], ['agents'], ['list']]) await runCli(args, options);
  assert.ok(logs.includes('0.1.0'));
  assert.ok(logs.some(line => line.includes('deckl-refine')));
  assert.deepEqual(await readdir(root), []);
});
test('noninteractive install needs an agent; invalid commands do not write', async t => {
  const { root, options } = await fixture(t);
  for (const args of [['install'], ['unknown'], ['install', '--agent', 'invalid'], ['install', '--agent', 'claude', '--scope', 'nope']]) await assert.rejects(runCli(args, options));
  assert.deepEqual(await readdir(root), []);
});
test('CLI defaults to user scope and honors dry-run', async t => {
  const { root, options } = await fixture(t);
  await runCli(['install', '--agent', 'claude', '--dry-run'], options);
  assert.deepEqual(await readdir(root), []);
});
