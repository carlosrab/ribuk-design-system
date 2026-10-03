# Ribuk design system

The tokens and brand guidelines for Ribuk.

- `tokens.json`: every color, type style, spacing step and radius, with a usage note for each.
- `tokens.css`: the same tokens as CSS custom properties (`var(--leaf)`, `var(--space-4)`) and type classes (`.h1`, `.body`, `.label`). It loads Fraunces and DM Sans from `fonts/`, so keep `tokens.css` next to that folder.
- `fonts/`: `Fraunces-Variable.woff` and `DMSans-Variable.woff`, the variable fonts `tokens.css` uses. The `Fraunces/` and `DM_Sans/` folders are the original Google Fonts downloads, with their licenses.
- `components/Cover/preview.html`: the system's cover, which expects `tokens.css` to be loaded first.

## Brand guidelines

Ribuk is bold and playful: a sturdy grass green against near-black ink, a pale marker yellow for the one thing that matters, chunky round shapes, and a characterful serif doing the shouting while a clean sans does the talking.

### Voice

- Short, confident, a little cheeky. Say it in fewer words; verbs first ("Start growing", not "Click here to get started").
- Sentence case everywhere except `label`, which is set in capitals.
- No emoji as decoration.

### Color

- `paper` is the ground. `ink` carries text and the heavy blocks; `leaf` (Grass) is the brand moment. Spend `leaf` boldly, but in big shapes, not everywhere: one or two leaf areas per screen.
- Text on `leaf` is always `on-leaf` (ink). Never set body text in `leaf` on `paper`; when green has to be text, use `leaf-ink`. `leaf` is fine for icons and meaningful borders on `paper`.
- `highlight` is a marker, not a colour block. Put it behind a word or two of a headline, the leading row of a table, or a sticker on an `ink` block, always with `ink` text on it. Use one per screen, and never as text or as a shape on `paper` by itself: it nearly vanishes there.
- `highlight` and `leaf` can sit side by side; they differ in brightness as well as hue.
- `leaf-soft` tints panels and selected states. `line` is for decorative hairlines only.
- `alert` means error or destructive, and always comes with a word or icon.
- Focus ring: 2px solid `ink`, offset 2px (17.9:1 on `paper`; on an ink block, use `leaf`, 5.8:1).

### Type

- Headlines in Fraunces (`display`, `h1`, `h2`), heavy and tight. Everything else in DM Sans (`h3`, `body`, `small`, `label`).
- Load both from the variable font files in `fonts/` (`Fraunces-Variable.woff`, `DMSans-Variable.woff`); each covers every weight. Leave `font-optical-sizing` on its default so big headlines get Fraunces' display cut automatically. Both are open source under the SIL Open Font License.
- One `display` line per page at most. Body copy is always `body` in `ink`; secondary text is `small` in `ink-muted`.

### Shape and space

- Buttons and toggles are pills (`radius-pill`); cards and colour blocks use `radius-md`; inputs and tags use `radius-sm`.
- Space in `space-1`, `space-2`, `space-4` and `space-8` steps. Pad cards with `space-8` and stack related items `space-4` apart.
- Use flat colour blocks instead of shadows. Depth comes from `ink` and `leaf` fields, not elevation.

### Logo and icons

- There's no logo yet: set "Ribuk" in Fraunces 800, `ink` on `paper` or `paper` on `ink`.
- No icon set has been chosen yet.
