# Ribuk design system

The tokens and brand guidelines for Ribuk.

- `tokens.json`: every color, type style, spacing step and radius, with a usage note for each.
- `tokens.css`: the same tokens as CSS custom properties (`var(--leaf)`, `var(--space-4)`) and type classes (`.h1`, `.body`, `.label`). It loads Fraunces and DM Sans from Google Fonts.
- `components/Cover/preview.html`: the system's cover, which expects `tokens.css` to be loaded first.

## Brand guidelines

Ribuk is bold and playful: one loud green against near-black ink, chunky round shapes, and a characterful serif doing the shouting while a clean sans does the talking.

### Voice

- Short, confident, a little cheeky. Say it in fewer words; verbs first ("Start growing", not "Click here to get started").
- Sentence case everywhere except `label`, which is set in capitals.
- No emoji as decoration.

### Color

- `paper` is the ground. `ink` carries text and the heavy blocks; `leaf` is the brand moment. Spend `leaf` boldly, but in big shapes, not everywhere: one or two leaf areas per screen.
- Text on `leaf` is always `on-leaf` (ink). Never put `leaf` text on `paper`; when green has to be text, use `leaf-ink`.
- `leaf-soft` tints panels and selected states. `line` is for decorative hairlines only.
- `alert` means error or destructive, and always comes with a word or icon.
- Focus ring: 2px solid `ink`, offset 2px (17.9:1 on `paper`; on an ink block, use `leaf`).

### Type

- Headlines in Fraunces (`display`, `h1`, `h2`), heavy and tight. Everything else in DM Sans (`h3`, `body`, `small`, `label`). Both are Google Fonts.
- One `display` line per page at most. Body copy is always `body` in `ink`; secondary text is `small` in `ink-muted`.

### Shape and space

- Buttons and toggles are pills (`radius-pill`); cards and colour blocks use `radius-md`; inputs and tags use `radius-sm`.
- Space in `space-1`, `space-2`, `space-4` and `space-8` steps. Pad cards with `space-8` and stack related items `space-4` apart.
- Use flat colour blocks instead of shadows. Depth comes from `ink` and `leaf` fields, not elevation.

### Logo and icons

- There's no logo yet: set "Ribuk" in Fraunces 800, `ink` on `paper` or `paper` on `ink`.
- No icon set has been chosen yet.
