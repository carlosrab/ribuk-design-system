import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const tokens = JSON.parse(readFileSync(new URL('../tokens.json', import.meta.url), 'utf8')).color.tokens;
const value = (name, theme) => {
  const raw = tokens.find(t => t.name === name).value[theme];
  return raw.startsWith('{') ? value(raw.slice(1, -1), theme) : raw;
};
function luminance(hex) {
  const channels = hex.slice(1).match(/../g).map(c => parseInt(c, 16) / 255)
    .map(c => c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}
function contrast(a, b) {
  const values = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (values[0] + 0.05) / (values[1] + 0.05);
}
for (const theme of ['light', 'dark']) {
  test(`${theme}: panel text, muted text and links meet AA, and hover pairs stay readable`, () => {
    for (const name of ['panel-text', 'panel-muted', 'panel-accent']) {
      const ratio = contrast(value(name, theme), value('panel', theme));
      assert.ok(ratio >= 4.5, `${name} on panel: ${ratio.toFixed(2)}:1`);
    }
    assert.ok(contrast(value('panel', theme), value('panel-text', theme)) >= 4.5);
    assert.ok(contrast(value('on-leaf', theme), value('leaf', theme)) >= 4.5);
    assert.ok(luminance(value('panel', theme)) < 0.05, 'the prominent panel stays dark');
  });
}
