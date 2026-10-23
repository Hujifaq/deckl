#!/usr/bin/env node
// Deckl page inspection: screenshots and layout checks for a rendered page.
// Optional helper. It uses Playwright from the inspected project and never edits that project.
import { mkdir, mkdtemp, realpath, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const usage = `Usage: node inspect.mjs <url> [options]
Capture screenshots and layout checks for a rendered page. Read-only.
  --widths LIST      Viewport widths in CSS pixels; default 390,1440
  --height PX        Viewport height; default 900
  --label NAME       File prefix such as before or after; default capture
  --out DIR          Output directory; default: a new temporary directory
  --scroll-steps N   Extra viewport captures down the page; default 0
  --reduced-motion   Emulate prefers-reduced-motion: reduce
  --channel NAME     Use an installed browser, such as chrome or msedge
  --wait MS          Settle time after load; default 500
Needs Playwright in the inspected project (npm i -D playwright).`;

const integer = (flag, value, min, max) => {
  const n = Number(value);
  if (!Number.isInteger(n) || n < min || n > max) throw new Error(`${flag} must be an integer from ${min} to ${max}.`);
  return n;
};

export function parseArgs(argv) {
  const opts = { widths: [390, 1440], height: 900, label: 'capture', scrollSteps: 0, reducedMotion: false, wait: 500 };
  const valued = ['--widths', '--height', '--label', '--out', '--scroll-steps', '--channel', '--wait'];
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--help') return { help: true };
    if (arg === '--reduced-motion') { opts.reducedMotion = true; continue; }
    if (valued.includes(arg)) {
      const value = argv[++i];
      if (value === undefined || value.startsWith('--')) throw new Error(`Missing value for ${arg}`);
      if (arg === '--widths') opts.widths = [...new Set(value.split(',').map(w => integer(arg, w.trim(), 200, 3840)))];
      if (arg === '--height') opts.height = integer(arg, value, 200, 4000);
      if (arg === '--scroll-steps') opts.scrollSteps = integer(arg, value, 0, 20);
      if (arg === '--wait') opts.wait = integer(arg, value, 0, 30000);
      if (arg === '--out') opts.out = value;
      if (arg === '--channel') {
        if (!/^[a-z][a-z0-9-]{0,30}$/.test(value)) throw new Error('Invalid --channel.');
        opts.channel = value;
      }
      if (arg === '--label') {
        // The label becomes part of file names; keep it to a plain token.
        if (!/^[A-Za-z0-9._-]{1,40}$/.test(value) || value.startsWith('.')) throw new Error('--label may use letters, digits, dot, dash, and underscore.');
        opts.label = value;
      }
      continue;
    }
    if (arg.startsWith('--')) throw new Error(`Unknown option: ${arg}`);
    if (opts.url) throw new Error('Give one URL.');
    opts.url = arg;
  }
  if (!opts.url) throw new Error('Give the page URL, such as http://localhost:3000.');
  let url;
  try { url = new URL(opts.url); } catch { throw new Error(`Not a valid URL: ${opts.url}`); }
  if (!['http:', 'https:', 'file:'].includes(url.protocol)) throw new Error('Use an http, https, or file URL.');
  opts.url = url.href;
  return opts;
}

// Resolve Playwright from the inspected project, not from this skill folder.
export async function loadPlaywright(cwd = process.cwd()) {
  const require = createRequire(path.join(cwd, 'deckl-inspect.cjs'));
  for (const name of ['playwright', '@playwright/test', 'playwright-core']) {
    let resolved;
    try { resolved = require.resolve(name); } catch { continue; }
    const mod = await import(pathToFileURL(resolved).href);
    const chromium = mod.chromium ?? mod.default?.chromium;
    if (chromium) return chromium;
  }
  return null;
}

// Runs inside the page.
function measure() {
  const root = document.documentElement;
  const vw = root.clientWidth;
  const describe = el => el.tagName.toLowerCase() + (el.id ? `#${el.id}` : '') +
    [...el.classList].slice(0, 3).map(c => `.${c}`).join('');
  const clipped = el => {
    for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
      if (getComputedStyle(p).overflowX !== 'visible') return true;
    }
    return false;
  };
  const overflowing = [];
  if (root.scrollWidth > vw) {
    for (const el of document.body.querySelectorAll('*')) {
      const r = el.getBoundingClientRect();
      if (r.width && (r.right > vw + 1 || r.left < -1) && !clipped(el)) {
        overflowing.push({ element: describe(el), left: Math.round(r.left), right: Math.round(r.right) });
        if (overflowing.length === 10) break;
      }
    }
  }
  return {
    title: document.title,
    pageHeight: root.scrollHeight,
    horizontalOverflow: root.scrollWidth > vw ? root.scrollWidth - vw : 0,
    overflowing,
    imagesMissingAlt: [...document.images].filter(img => !img.hasAttribute('alt')).map(img => img.currentSrc || img.src).slice(0, 10),
  };
}

export async function inspect(opts, chromium, log = console.log) {
  const out = opts.out ? path.resolve(opts.out) : await mkdtemp(path.join(tmpdir(), 'deckl-inspect-'));
  await mkdir(out, { recursive: true });
  let browser;
  try { browser = await chromium.launch(opts.channel ? { channel: opts.channel } : {}); }
  catch (error) {
    throw new Error(`Could not start the browser: ${error.message.split('\n')[0]}\nRun npx playwright install chromium, or pass --channel chrome to use an installed Chrome.`);
  }
  const report = { url: opts.url, label: opts.label, reducedMotion: opts.reducedMotion, capturedAt: new Date().toISOString(), viewports: [] };
  try {
    for (const width of opts.widths) {
      const context = await browser.newContext({ viewport: { width, height: opts.height }, reducedMotion: opts.reducedMotion ? 'reduce' : 'no-preference' });
      const page = await context.newPage();
      const problems = { consoleErrors: [], pageErrors: [], failedRequests: [] };
      page.on('console', m => { if (m.type() === 'error') problems.consoleErrors.push(m.text()); });
      page.on('pageerror', e => problems.pageErrors.push(e.message));
      page.on('requestfailed', r => problems.failedRequests.push(`${r.failure()?.errorText ?? 'failed'} ${r.url()}`));
      page.on('response', r => { if (r.status() >= 400) problems.failedRequests.push(`${r.status()} ${r.url()}`); });
      await page.goto(opts.url, { waitUntil: 'load', timeout: 30000 });
      await page.evaluate(() => document.fonts?.ready.then(() => {}));
      await page.waitForTimeout(opts.wait);
      const files = [];
      const shot = async (name, extra = {}) => {
        const file = `${opts.label}-${width}-${name}.png`;
        await page.screenshot({ path: path.join(out, file), ...extra });
        files.push(file);
      };
      await shot('top');
      const layout = await page.evaluate(measure);
      for (let i = 1; i <= opts.scrollSteps; i++) {
        const pct = Math.round((i / opts.scrollSteps) * 100);
        await page.evaluate(p => window.scrollTo(0, ((document.documentElement.scrollHeight - innerHeight) * p) / 100), pct);
        await page.waitForTimeout(400);
        await shot(`scroll-${pct}`);
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(200);
      await shot('full', { fullPage: true });
      report.viewports.push({ width, height: opts.height, files, ...layout, ...problems });
      await context.close();
    }
  } finally {
    await browser.close();
  }
  await writeFile(path.join(out, `${opts.label}-report.json`), JSON.stringify(report, null, 2));
  log(`Saved to ${out}`);
  for (const v of report.viewports) {
    const notes = [
      v.horizontalOverflow ? `horizontal overflow ${v.horizontalOverflow}px (${v.overflowing.map(o => o.element).join(', ') || 'source not located'})` : 'no horizontal overflow',
      `${v.consoleErrors.length + v.pageErrors.length} script errors`,
      `${v.failedRequests.length} failed requests`,
      `${v.imagesMissingAlt.length} images without alt`,
    ];
    log(`${v.width}px: ${notes.join('; ')}`);
  }
  log('Full-page captures can misrepresent pinned or scroll-driven scenes; use --scroll-steps and view them in order.');
  return { out, report };
}

async function main() {
  let opts;
  try { opts = parseArgs(process.argv.slice(2)); }
  catch (error) { console.error(`${error.message}\n\n${usage}`); process.exitCode = 1; return; }
  if (opts.help) { console.log(usage); return; }
  const chromium = await loadPlaywright();
  if (!chromium) {
    console.error('Playwright was not found in this project.\nInstall it only with the project owner\'s agreement: npm i -D playwright && npx playwright install chromium\nOtherwise inspect the page with the browser tools your assistant provides.');
    process.exitCode = 2;
    return;
  }
  try { await inspect(opts, chromium); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}

if (process.argv[1] && await realpath(path.resolve(process.argv[1])) === fileURLToPath(import.meta.url)) await main();
