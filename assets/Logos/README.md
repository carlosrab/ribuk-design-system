The Ribuk mark is the space rock: a lumpy `leaf` asteroid with an `ink` outline and `ink` craters. The lockup sets it beside "Ribuk" in Fraunces 800, outlined so it never depends on the font loading.

| File | Use it for |
| --- | --- |
| `ribuk-lockup.svg` | The default logo on `paper` or other light grounds |
| `ribuk-lockup-on-ink.svg` | The logo on `ink` (outline and wordmark in `paper`) |
| `ribuk-mark.svg` | The mark alone on light grounds: nav bar, avatars, small spaces |
| `ribuk-mark-on-ink.svg` | The mark alone on `ink` |
| `ribuk-mark-ink.svg`, `ribuk-mark-paper.svg` | One-colour versions (craters cut out) for stamps, stickers, engraving or single-colour print |
| `favicon.svg` | Browser tab icon; switches its outline to `paper` in dark mode |
| `favicon-32.png` | Fallback tab icon |
| `apple-touch-icon.png` (180), `icon-192.png`, `icon-512.png` | Home-screen and app icons: the on-ink mark on an `ink` square |
| `icon-maskable-512.png` | Android adaptive icon (mark inside the safe zone) |

A multi-size `favicon.ico` (16, 32, 48) sits with these files in the repository.

## Rules

- Leave clear space around the mark equal to the big crater's width (about a fifth of the mark).
- Smallest sizes: 16px for the mark (favicons), 24px in UI, 96px wide for the lockup.
- Use the light versions on light grounds (`paper` and `leaf-soft` in the light theme) and the on-ink versions on dark grounds (`ink` blocks in light, `paper` in dark mode). Don't place it on `leaf`, where the rock disappears into the ground, or on team colours.
- When inlining the SVG in code, colour it with tokens so it follows the theme: rock fill `leaf`, outline `ink`, craters `on-leaf`.
- Don't recolour the rock, swap the craters, stretch it, add effects or rebuild the wordmark in another font.
- The rock may tumble: a playful rotation (up to about ±20°) is fine for stickers, loaders and party moments, but keep it upright in the nav bar and app icons.

## In SvelteKit

Copy `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` and the `icon-*.png` files to `static/`, then in `src/app.html`:

```html
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

For an installable web app, list `icon-192.png`, `icon-512.png` and `icon-maskable-512.png` (with `"purpose": "maskable"`) in your web manifest.
