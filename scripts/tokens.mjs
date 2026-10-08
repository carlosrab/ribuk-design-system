import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const tokens = JSON.parse(readFileSync(new URL('tokens.json', root), 'utf8'));
const path = new URL('tokens.css', root);
const previous = readFileSync(path, 'utf8');
const declarations = (theme, indent) => tokens.color.tokens.map(({ name, value }) =>
  `${indent}--${name}: ${value[theme].replace(/\{([^}]+)\}/g, 'var(--$1)')};`).join('\n');
// Keep the existing font, spacing and type rules. Generate every color declaration from JSON.
const css = previous.replace(/(\n(?<indent> *)color-scheme: (?<theme>light|dark);\n)[\s\S]*?(?=\n *\})/g,
  (match, start, indent, theme) => start + declarations(theme, indent));
if (process.argv.includes('--check')) {
  if (css !== previous) throw new Error('tokens.css is stale. Run npm run tokens.');
} else writeFileSync(path, css);
