// Display accents inspired by agent identities; not official brand specifications.
export const agentColors = {
  claude: [224, 151, 120], codex: [112, 218, 184], cursor: [220, 225, 239],
  copilot: [184, 158, 255], gemini: [120, 170, 255], opencode: [235, 205, 159],
};
const palette = { text: [240, 240, 240], muted: [155, 155, 155], accent: [255, 255, 255], warning: [255, 255, 255] };
const glyphs = {
  D: ['██████╗ ', '██╔══██╗', '██║  ██║', '██║  ██║', '██████╔╝', '╚═════╝ '],
  E: ['███████╗', '██╔════╝', '█████╗  ', '██╔══╝  ', '███████╗', '╚══════╝'],
  C: [' ██████╗', '██╔════╝', '██║     ', '██║     ', '╚██████╗', ' ╚═════╝'],
  K: ['██╗  ██╗', '██║ ██╔╝', '█████╔╝ ', '██╔═██╗ ', '██║  ██╗', '╚═╝  ╚═╝'],
  L: ['██╗     ', '██║     ', '██║     ', '██║     ', '███████╗', '╚══════╝'],
};
const logo = Array.from({ length: 6 }, (_, row) => [...'DECKL'].map(letter => glyphs[letter][row]).join('  '));

export function renderSetup({ columns = 80, rows = 30, title, step, items, cursor, selected, multiple, notes = [], message = '', color = process.env.NO_COLOR === undefined }) {
  const width = Math.max(1, columns - 1), height = Math.max(1, rows - 1);
  const clip = text => {
    // Terminal-control characters in paths or labels must never affect the screen.
    const chars = [...text.replace(/[\x00-\x1f\x7f-\x9f]/g, '')];
    return chars.length > width ? chars.slice(0, width - 1).join('') + '…' : chars.join('');
  };
  const paint = (text, rgb = palette.text, bold = false) => color ? `\x1b[${bold ? '1;' : ''}38;2;${rgb.join(';')}m${text}\x1b[0m` : text;
  const line = (text, rgb, bold) => paint(clip(text), rgb, bold);
  const roomy = width >= 64 && height >= 27;
  const header = [];
  if (roomy) {
    header.push('', line('  D E C K L   /   I N T E R F A C E  C R A F T', palette.muted), '');
    for (let y = 0; y <= logo.length; y++) {
      let row = '  ';
      for (let x = 0; x < logo[0].length + 2; x++) {
        const face = logo[y]?.[x] ?? ' ';
        const behind = y > 0 && x >= 2 && (logo[y - 1]?.[x - 2] ?? ' ') !== ' ';
        if (face !== ' ') {
          const shade = face === '█' ? 255 - y * 6 : 166;
          row += paint(face, [shade, shade, shade], face === '█');
        } else row += behind ? paint(color ? '█' : '░', [65, 65, 65]) : ' ';
      }
      header.push(row);
    }
    header.push('', line('  Give the interface a point of view.', palette.muted), '');
  } else header.push(line('  ◇ DECKL / SETUP', palette.accent, true));
  const progress = [1, 2, 3, 4].map(n => n <= Number(step) ? '●' : '○').join(' ─ ');
  if (height >= 12) header.push(line(`  ${progress}   ${step} / 04`, palette.accent));
  header.push(line(`  ${title}`, palette.text, true), '');
  const footer = [];
  if (height >= 18) footer.push('', ...notes.slice(0, roomy ? 2 : 1).map(note => line(`  ${note}`, palette.muted)));
  footer.push(line(`  ↑ ↓ move${multiple ? ' · Space select' : ''} · Enter continue`, palette.text));
  if (height >= 12) footer.push(line('  Esc / Ctrl+C cancel', palette.muted));
  footer.push(line(`  ${message || (multiple ? `${selected.size} selected` : 'Choose an option')}`, message ? palette.warning : palette.accent));
  const capacity = Math.max(1, height - header.length - footer.length - 1);
  const start = Math.max(0, Math.min(cursor - Math.floor(capacity / 2), items.length - capacity));
  const body = [];
  for (let i = start; i < Math.min(items.length, start + capacity); i++) {
    const item = items[i], focused = i === cursor, checked = multiple ? selected.has(item.value) : focused;
    const rgb = item.color ?? (checked || focused ? palette.accent : palette.muted);
    body.push(line(`  ${focused ? '›' : ' '} ${checked ? '●' : '○'} ${item.label}`, rgb, focused));
  }
  if (items.length > capacity) body.push(line(`  ${cursor + 1} / ${items.length} · more with ↑ ↓`, palette.muted));
  // Tiny terminals retain the active option and essential controls.
  if (header.length + body.length + footer.length > height) {
    return [line(title, palette.accent, true), line(`› ${items[cursor].label}`, items[cursor].color, true), ...footer.slice(-2)].slice(0, height).join('\n');
  }
  return [...header, ...body, ...footer].join('\n');
}
