import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, readdir, writeFile, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { install } from '../scripts/install.mjs';

async function fixture(t) {
  const root = await mkdtemp(path.join(tmpdir(), 'deckl-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  return { root, options: { home: root, cwd: root, log() {} } };
}
test('Claude selection includes skill and supporting references', async t => {
  const { root, options } = await fixture(t);
  await install(['--agent', 'claude', '--scope', 'user', '--skill', 'deckl-refine'], options);
  const p = path.join(root, '.claude/skills/deckl-refine');
  assert.match(await readFile(path.join(p, 'SKILL.md'), 'utf8'), /name: deckl-refine/);
  assert.equal((await readdir(path.join(p, 'references'))).length, 3);
});
test('Codex project path with spaces installs all ten locally', async t => {
  const { root, options } = await fixture(t);
  await mkdir(path.join(root, 'Client Site'));
  await install(['--agent', 'codex', '--scope', 'project', '--project', 'Client Site'], options);
  assert.equal((await readdir(path.join(root, 'Client Site/.agents/skills'))).length, 10);
  await assert.rejects(readdir(path.join(root, '.agents')), { code: 'ENOENT' });
});
test('dry-run creates nothing', async t => {
  const { root, options } = await fixture(t);
  await install(['--agent', 'claude', '--scope', 'user', '--dry-run'], options);
  assert.deepEqual(await readdir(root), []);
});
test('conflicts prevent all writes and preserve existing edits', async t => {
  const { root, options } = await fixture(t);
  const existing = path.join(root, '.claude/skills/deckl-type');
  await mkdir(existing, { recursive: true });
  await writeFile(path.join(existing, 'SKILL.md'), 'local edits');
  await assert.rejects(install(['--agent', 'claude', '--scope', 'user'], options), /Nothing installed/);
  assert.equal(await readFile(path.join(existing, 'SKILL.md'), 'utf8'), 'local edits');
  assert.deepEqual(await readdir(path.dirname(existing)), ['deckl-type']);
});
test('invalid inputs cannot write', async t => {
  const { root, options } = await fixture(t);
  for (const args of [
    ['--agent', 'toString', '--scope', 'user'],
    ['--agent', 'claude', '--scope', 'project'],
    ['--agent', 'claude', '--scope', 'project', '--project', 'missing'],
    ['--agent', 'claude', '--scope', 'user', '--project', '.'],
    ['--agent', 'claude', '--scope', 'user', '--skill', '../outside'],
    ['--agent', 'claude', '--scope', 'user', '--force'],
    ['--agent', 'claude', '--scope', 'user', '--skill'],
  ]) await assert.rejects(install(args, options));
  assert.deepEqual(await readdir(root), []);
});
test('repeat install preserves the first installation', async t => {
  const { root, options } = await fixture(t);
  const args = ['--agent', 'codex', '--scope', 'user', '--skill', 'deckl-type'];
  await install(args, options);
  const p = path.join(root, '.agents/skills/deckl-type/SKILL.md');
  const original = await readFile(p, 'utf8');
  await assert.rejects(install(args, options), /Nothing installed/);
  assert.equal(await readFile(p, 'utf8'), original);
});
test('symlink discovery directory is rejected', { skip: process.platform === 'win32' }, async t => {
  const { root, options } = await fixture(t);
  await mkdir(path.join(root, 'elsewhere'));
  await symlink(path.join(root, 'elsewhere'), path.join(root, '.claude'));
  await assert.rejects(install(['--agent', 'claude', '--scope', 'user'], options), /symlink/);
  assert.deepEqual(await readdir(path.join(root, 'elsewhere')), []);
});
