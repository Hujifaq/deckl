import test from 'node:test';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { loadPlaywright, parseArgs } from '../shared/scripts/inspect.mjs';

const script = fileURLToPath(new URL('../shared/scripts/inspect.mjs', import.meta.url));
const run = promisify(execFile);

test('inspect parses defaults and options', () => {
  assert.deepEqual(parseArgs(['http://localhost:3000']), {
    widths: [390, 1440], height: 900, label: 'capture', scrollSteps: 0, reducedMotion: false, wait: 500, url: 'http://localhost:3000/',
  });
  const opts = parseArgs(['https://example.test/a', '--widths', '320, 768,768', '--label', 'after', '--scroll-steps', '4', '--reduced-motion', '--channel', 'chrome']);
  assert.deepEqual(opts.widths, [320, 768]);
  assert.equal(opts.label, 'after');
  assert.equal(opts.scrollSteps, 4);
  assert.equal(opts.reducedMotion, true);
  assert.equal(opts.channel, 'chrome');
  assert.deepEqual(parseArgs(['--help']), { help: true });
});

test('inspect rejects unsafe or invalid input', () => {
  for (const args of [
    [],
    ['javascript:alert(1)'],
    ['data:text/html,hi'],
    ['not a url'],
    ['http://a.test', 'http://b.test'],
    ['http://a.test', '--label', '../escape'],
    ['http://a.test', '--label', '.hidden'],
    ['http://a.test', '--widths', '10'],
    ['http://a.test', '--scroll-steps', '99'],
    ['http://a.test', '--channel', 'chrome; rm'],
    ['http://a.test', '--out'],
    ['http://a.test', '--unknown'],
  ]) assert.throws(() => parseArgs(args), undefined, args.join(' '));
});

test('inspect explains how to proceed when Playwright is missing', async t => {
  const project = await mkdtemp(path.join(tmpdir(), 'deckl-inspect-test-'));
  t.after(() => rm(project, { recursive: true, force: true }));
  assert.equal(await loadPlaywright(project), null);
  await assert.rejects(run(process.execPath, [script, 'http://localhost:9'], { cwd: project }), error => {
    assert.equal(error.code, 2);
    assert.match(error.stderr, /Playwright was not found/);
    return true;
  });
});
