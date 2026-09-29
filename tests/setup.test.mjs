import test from 'node:test';
import assert from 'node:assert/strict';
import { PassThrough } from 'node:stream';
import { mkdtemp, rm, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { runCli } from '../bin/deckl.mjs';

async function fixture(t) {
  const root = await mkdtemp(path.join(tmpdir(), 'deckl-keys-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const input = new PassThrough(), output = new PassThrough();
  input.isTTY = output.isTTY = true;
  input.isRaw = false; input.setRawMode = value => { input.isRaw = value; };
  output.columns = 72; output.rows = 24;
  let screen = '';
  output.on('data', data => { screen = data.toString(); });
  const options = { input, output, cwd: root, home: root, log() {} };
  const waitFor = async text => {
    for (let i = 0; i < 2000; i++) {
      if (screen.includes(text)) return;
      await new Promise(resolve => setTimeout(resolve, 1));
    }
    throw new Error(`Menu did not appear: ${text}\n${screen}`);
  };
  const key = (name, ctrl = false) => input.emit('keypress', name === 'space' ? ' ' : '', { name, ctrl });
  return { root, input, output, options, waitFor, key };
}

test('no-argument CLI installs with arrows, Space and Enter only', async t => {
  const f = await fixture(t);
  const running = runCli([], f.options);
  await f.waitFor('Choose your agents');
  f.key('return'); // Empty selections cannot proceed.
  await f.waitFor('Select at least one');
  f.key('space'); f.key('down'); f.key('space'); f.key('return');
  await f.waitFor('Where should Deckl live'); f.key('down'); f.key('return');
  await f.waitFor('Choose your skills'); f.key('space'); f.key('return'); // Exclude the first skill.
  await f.waitFor('Ready to install');
  assert.deepEqual(await readdir(f.root), []); // No writes before confirmation.
  f.key('return'); await running;
  for (const dir of ['.claude', '.agents']) assert.equal((await readdir(path.join(f.root, dir, 'skills'))).length, 9);
  assert.equal(f.input.isRaw, false);
  assert.equal(f.input.isPaused(), true);
  assert.equal(f.input.listenerCount('keypress'), 0);
});

for (const cancel of ['escape', 'ctrl-c']) {
  test(`${cancel} cancels and restores terminal state without writes`, async t => {
    const f = await fixture(t);
    const running = runCli(['install'], f.options);
    await f.waitFor('Choose your agents');
    f.key(cancel === 'escape' ? 'escape' : 'c', cancel === 'ctrl-c');
    await running;
    assert.deepEqual(await readdir(f.root), []);
    assert.equal(f.input.isRaw, false);
    assert.equal(f.input.listenerCount('keypress'), 0);
  });
}

test('end of input cancels without leaving raw mode enabled', async t => {
  const f = await fixture(t);
  const running = runCli(['install'], f.options);
  await f.waitFor('Choose your agents'); f.input.emit('end'); await running;
  assert.equal(f.input.isRaw, false);
  assert.deepEqual(await readdir(f.root), []);
});
