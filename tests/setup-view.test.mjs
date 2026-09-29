import test from 'node:test';
import assert from 'node:assert/strict';
import { renderSetup, agentColors } from '../scripts/setup-view.mjs';
import { agents } from '../scripts/agents.mjs';

const strip = value => value.replace(/\x1b\[[0-9;]*m/g, '');
const state = { title: 'Choose your agents', step: '01', multiple: true, cursor: 5,
  selected: new Set(['claude']), notes: ['Choose the agents you use.'],
  items: Object.entries(agents).map(([value, a]) => ({ value, label: a.label, color: agentColors[value] })) };

test('focused option remains visible without wrapping across terminal sizes', () => {
  for (const [columns, rows] of [[120, 30], [80, 30], [60, 20], [36, 12], [20, 8]]) {
    const screen = strip(renderSetup({ ...state, columns, rows, color: true }));
    assert.ok(screen.includes('OpenCode'));
    const lines = screen.split('\n');
    assert.ok(lines.length < rows);
    assert.ok(lines.every(line => [...line].length < columns));
  }
});
test('colorless output retains focus and checked circles', () => {
  const screen = renderSetup({ ...state, columns: 80, rows: 30, color: false });
  assert.ok(!screen.includes('\x1b'));
  assert.ok(screen.includes('● Claude Code'));
  assert.ok(screen.includes('› ○ OpenCode'));
});
test('labels and path notes cannot inject terminal control sequences', () => {
  const screen = renderSetup({ ...state, color: false, notes: ['path\x1b[2J\ncontrol'] });
  assert.ok(!screen.includes('\x1b'));
});
