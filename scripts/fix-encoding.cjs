// One-off repair: a PowerShell Get-Content/WriteAllText round trip read the
// UTF-8 source files as Windows-1252 and re-wrote them as UTF-8, doubling the
// encoding of every non-ASCII character. This restores the original bytes.
const fs = require('fs');
const path = require('path');

// Windows-1252 code points for 0x80-0x9F (the range that differs from Latin-1).
const CP1252_HIGH = [
  0x20ac, 0x0081, 0x201a, 0x0192, 0x201e, 0x2026, 0x2020, 0x2021,
  0x02c6, 0x2030, 0x0160, 0x2039, 0x0152, 0x008d, 0x017d, 0x008f,
  0x0090, 0x2018, 0x2019, 0x201c, 0x201d, 0x2022, 0x2013, 0x2014,
  0x02dc, 0x2122, 0x0161, 0x203a, 0x0153, 0x009d, 0x017e, 0x0178,
];

const CHAR_TO_BYTE = new Map();
for (let b = 0; b < 0x80; b++) CHAR_TO_BYTE.set(String.fromCharCode(b), b);
for (let b = 0x80; b < 0xa0; b++) CHAR_TO_BYTE.set(String.fromCharCode(CP1252_HIGH[b - 0x80]), b);
for (let b = 0xa0; b < 0x100; b++) CHAR_TO_BYTE.set(String.fromCharCode(b), b);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(jsx|js|css|html|json)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const root = path.resolve(__dirname, '..');
const targets = [...walk(path.join(root, 'src')), path.join(root, 'index.html')];

const summary = {};
for (const file of targets) {
  const text = fs.readFileSync(file, 'utf8');
  const bytes = Buffer.alloc(text.length);
  let ok = true;
  for (let i = 0; i < text.length; i++) {
    const byte = CHAR_TO_BYTE.get(text[i]);
    if (byte === undefined) { ok = false; break; }
    bytes[i] = byte;
  }
  if (!ok) { summary.unmappable = (summary.unmappable || 0) + 1; continue; }

  let restored = bytes.toString('utf8');
  const hadTag = restored.includes('</content>');
  restored = restored.replace(/<\/content>/g, '');
  fs.writeFileSync(file, restored, 'utf8');
  const key = hadTag ? 'repaired+tagRemoved' : 'repaired';
  summary[key] = (summary[key] || 0) + 1;
}

console.log(JSON.stringify(summary, null, 2));
