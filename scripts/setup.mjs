import { emitKeypressEvents } from 'node:readline';
import { readdir } from 'node:fs/promises';
import { homedir } from 'node:os';
import path from 'node:path';
import { agents } from './agents.mjs';
import { install } from './install.mjs';
import { agentColors, renderSetup } from './setup-view.mjs';

export class Cancelled extends Error {}

const descriptions = {
  'deckl-direct': 'Define the art direction', 'deckl-design': 'Build a distinctive website',
  'deckl-refine': 'Improve an existing interface', 'deckl-type': 'Refine typography',
  'deckl-layout': 'Improve composition and spacing', 'deckl-imagery': 'Direct imagery and assets',
  'deckl-motion': 'Create purposeful motion', 'deckl-adapt': 'Adapt for mobile and touch',
  'deckl-polish': 'Finish the details', 'deckl-audit': 'Review before changing',
};

// One key listener per menu. Screen height and width bound every render.
export function choose({ input, output, title, step, items, multiple = false, defaults = [], notes = [] }) {
  return new Promise((resolve, reject) => {
    let cursor = 0, message = '';
    const selected = new Set(defaults);
    const render = () => {
      output.write('\x1b[H\x1b[2J' + renderSetup({ columns: output.columns, rows: output.rows,
        title, step, items, cursor, selected, multiple, notes, message }));
    };
    const finish = (error, value) => {
      input.off('keypress', onKey); input.off('end', onEnd); input.off('error', onError); output.off('resize', render);
      error ? reject(error) : resolve(value);
    };
    const onEnd = () => finish(new Cancelled('Input closed.'));
    const onError = error => finish(error);
    const onKey = (text, key = {}) => {
      if (key.name === 'escape' || (key.ctrl && key.name === 'c')) return finish(new Cancelled('Cancelled.'));
      if (key.name === 'up') cursor = (cursor + items.length - 1) % items.length;
      if (key.name === 'down') cursor = (cursor + 1) % items.length;
      if (key.name === 'space' || text === ' ') {
        if (multiple) selected.has(items[cursor].value) ? selected.delete(items[cursor].value) : selected.add(items[cursor].value);
      }
      if (key.name === 'return') {
        if (!multiple) return finish(null, items[cursor].value);
        if (selected.size) return finish(null, items.filter(item => selected.has(item.value)).map(item => item.value));
        message = 'Select at least one option with Space.';
      } else message = '';
      render();
    };
    input.on('keypress', onKey); input.once('end', onEnd); input.once('error', onError); output.on('resize', render);
    render();
  });
}

export async function setup(flags, options = {}) {
  const input = options.input ?? process.stdin, output = options.output ?? process.stdout;
  const log = options.log ?? console.log;
  if (!input.isTTY || !output.isTTY || typeof input.setRawMode !== 'function') throw new Error('Guided setup needs a terminal. Use deckl install --agent claude for a noninteractive install.');
  // Validate flags before taking over the terminal. The CLI handles explicit agents.
  const allowed = ['--scope', '--project', '--skill'];
  const values = {}, skills = [];
  let dryRun = false;
  for (let i = 0; i < flags.length; i++) {
    const flag = flags[i];
    if (flag === '--dry-run') { dryRun = true; continue; }
    if (!allowed.includes(flag)) throw new Error(`Unknown option: ${flag}`);
    const value = flags[++i];
    if (!value || value.startsWith('--')) throw new Error(`Missing value for ${flag}`);
    if (flag === '--skill') skills.push(value);
    else { if (Object.hasOwn(values, flag)) throw new Error(`Repeated option: ${flag}`); values[flag] = value; }
  }
  if (values['--scope'] && !['user', 'project'].includes(values['--scope'])) throw new Error('Choose --scope user or project.');
  const available = (await readdir(new URL('../skills/', import.meta.url))).filter(name => Object.hasOwn(descriptions, name));
  for (const name of skills) if (!available.includes(name)) throw new Error(`Unknown skill: ${name}`);
  const wasRaw = Boolean(input.isRaw), wasFlowing = input.readableFlowing === true;
  let normalized, confirmed = false;
  emitKeypressEvents(input);
  input.setRawMode(true); input.resume(); output.write('\x1b[?1049h\x1b[?25l');
  try {
    const menu = args => choose({ input, output, ...args });
    const ids = await menu({ title: 'Choose your agents', step: '01', multiple: true,
      items: Object.entries(agents).map(([value, a]) => ({ value, label: a.label, color: agentColors[value] })),
      notes: ['Select one or more. Some agents share skill directories.'] });
    const scope = values['--scope'] ?? await menu({ title: 'Where should Deckl live?', step: '02', items: [
      { value: 'user', label: 'Personal — available across your projects' },
      { value: 'project', label: 'This project — current directory' },
    ], notes: [values['--project'] ?? options.cwd ?? process.cwd()] });
    const chosen = skills.length ? [...new Set(skills)] : await menu({ title: 'Choose your skills', step: '03', multiple: true,
      defaults: available, items: available.map(value => ({ value, label: `${value} — ${descriptions[value]}` })),
      notes: ['All skills selected. Space toggles the highlighted skill.'] });
    normalized = ids.flatMap(id => ['--agent', id]).concat(['--scope', scope], chosen.flatMap(name => ['--skill', name]));
    if (values['--project'] || scope === 'project') normalized.push('--project', values['--project'] ?? options.cwd ?? process.cwd());
    // Run the real preflight before confirmation; this does not write files.
    await install([...normalized, '--dry-run'], { ...options, log() {} });
    const base = scope === 'user' ? options.home ?? homedir() : path.resolve(options.cwd ?? process.cwd(), values['--project'] ?? '.');
    confirmed = await menu({ title: dryRun ? 'Preview ready' : 'Ready to install', step: '04',
      items: [{ value: true, label: dryRun ? 'Show destinations and finish' : `Install ${chosen.length} skills for ${ids.length} agent${ids.length === 1 ? '' : 's'}` }, { value: false, label: 'Cancel' }],
      notes: [`${ids.map(id => agents[id].label).join(', ')}`, `Scope: ${scope} · ${base}`, 'Existing skill folders are preserved.'] });
    if (dryRun) normalized.push('--dry-run');
  } catch (error) {
    if (!(error instanceof Cancelled)) throw error;
  } finally {
    output.write('\x1b[?25h\x1b[?1049l'); input.setRawMode(wasRaw); if (!wasFlowing) input.pause();
  }
  if (!confirmed) { log('\n  ◇ deckl · Cancelled. No skills copied.\n'); return; }
  log('\n  ◇ deckl · Your design toolkit\n');
  await install(normalized, options);
}
