# Ribuk design system

The tokens and brand guidelines for Ribuk.

- `tokens.json`: every color, type style, spacing step and radius, with a usage note for each.
- `tokens.css`: the same tokens as CSS custom properties (`var(--leaf)`, `var(--space-4)`) and type classes (`.h1`, `.body`, `.label`), for both the light and dark themes. It loads Fraunces and DM Sans from `fonts/`, so keep `tokens.css` next to that folder.
- `fonts/`: `Fraunces-Variable.woff` and `DMSans-Variable.woff`, the variable fonts `tokens.css` uses. The `Fraunces/` and `DM_Sans/` folders are the original Google Fonts downloads, with their licenses.
- `components/bundle.css`: every component's styles as plain `rb-` classes. Each component folder has a `README.md` with usage and markup and a `preview.html` you can open in a browser.
- `assets/Logos/`: the space rock logo (mark, lockups, one-colour versions), favicons and app icons, with usage rules in its README.
- `assets/Icons/`: the Lucide icons the components use (ISC license in `LICENSE-lucide.txt`). In the app, `lucide-svelte` gives you the full set.
- `components/Cover/preview.html`: the system's cover, which expects `tokens.css` to be loaded first.

## Using it in SvelteKit

Copy `tokens.css`, `fonts/` and `components/` into your app (for example under `static/ribuk/`) and link `tokens.css` and then `components/bundle.css` in `src/app.html`. Install `lucide-svelte` for icons. Then use the classes in your markup:

```svelte
<button class="rb-btn rb-btn--primary" onclick={join}>I'm in</button>
```

## Brand guidelines

Ribuk is bold and playful: a sturdy grass green against near-black ink, a pale marker yellow for the one thing that matters, chunky round shapes, and a characterful serif doing the shouting while a clean sans does the talking.

### Voice

- Short, confident, a little cheeky. Say it in fewer words; verbs first ("Start growing", not "Click here to get started").
- Sentence case everywhere except `label`, which is set in capitals.
- No emoji as decoration.

### Color

- `paper` is the ground. `ink` carries text and the heavy blocks; `leaf` (Grass) is the brand moment. Spend `leaf` boldly, but in big shapes, not everywhere: one or two leaf areas per screen.
- Text on `leaf` is always `on-leaf` (the dark one in both themes). Never set body text in `leaf` on `paper`; when green has to be text, use `leaf-ink`. `leaf` is fine for icons and meaningful borders on `paper`.
- `highlight` is a marker, not a colour block. Put it behind a word or two of a headline (`rb-mark`), on the leading row of a table, or in a sticker (`rb-sticker`, which has an ink ring so it reads on paper), always with `on-highlight` text on it. Use one per screen, and never as text or as a bare shape on `paper`: it nearly vanishes there.
- `highlight` and `leaf` can sit side by side; they differ in brightness as well as hue.
- On an `ink` block, body text is `paper`, secondary text is `paper-muted`, and green is `leaf-on-ink`.
- `leaf-soft` tints panels and selected states. `line` is for decorative hairlines only.
- `alert` means error or destructive, and always comes with a word or icon.
- Team colors (`team-1` navy, `team-2` sky, `team-3` orange, `team-4` magenta) are only for telling teams apart: badges, bars, chart marks. They were picked to stay distinct for colour-blind players, and every use still carries the team's initial or name. Text on them is `on-team-N`. Never use them for buttons, links or status.
- Focus ring: 2px solid `ink`, offset 2px (16:1 or better on `paper` in both themes; on an ink block, use `leaf-on-ink`).

### Dark mode

- Every colour token has a light and a dark value. Set `data-theme="dark"` (or `"light"`) on `<html>` to choose. The repository's `tokens.css` follows the device's light or dark setting when neither is set.
- `ink` and `paper` swap: dark ground, light text. An "ink block" (ink cards, toasts, ink stat tiles, the selected segment) becomes a light inverse block in dark mode, so it still stands out. Write components with the tokens and they flip on their own.
- `leaf` stays the same green. Text on it (`on-leaf`) and on `highlight` (`on-highlight`) is always the dark one; text on team colours uses `on-team-N`. Green text on paper is `leaf-ink`; green on an ink block is `leaf-on-ink`.
- `highlight` and the team colours shift slightly brighter in dark mode so they hold contrast on the dark ground; `alert` turns a lighter orange.
- On dark grounds use the logo's `-on-ink` files. The favicon switches by itself.
- Check new screens in both themes: every text pair in the token notes holds 4.5:1 in each.

### Type

- Headlines in Fraunces (`display`, `h1`, `h2`), heavy and tight. Everything else in DM Sans (`h3`, `body`, `small`, `label`).
- Load both from the variable font files in `fonts/` (`Fraunces-Variable.woff`, `DMSans-Variable.woff`); each covers every weight. Leave `font-optical-sizing` on its default so big headlines get Fraunces' display cut automatically. Both are open source under the SIL Open Font License.
- One `display` line per page at most. Body copy is always `body` in `ink`; secondary text is `small` in `ink-muted`.

### Shape and space

- Buttons and toggles are pills (`radius-pill`); cards and colour blocks use `radius-md`; inputs and tags use `radius-sm`.
- Space in `space-1`, `space-2`, `space-4` and `space-8` steps. Pad cards with `space-8` and stack related items `space-4` apart.
- Use flat colour blocks instead of shadows. Depth comes from `ink` and `leaf` fields, not elevation.

### Components

- Components are plain HTML elements with `rb-` classes from `components/bundle.css`. Load `tokens.css` first, then `bundle.css`. The CSS covers the look and every state; your Svelte code supplies behaviour (opening dialogs, cycling poll answers, changing scores) by toggling the attributes each README names.
- Basics: Button, Input, Card, Tag & sticker, Icon tile.
- Forms: Checkbox & radio, Switch, Select, Segmented control.
- Navigation: Nav bar (with the live indicator and count bubble), Tab bar.
- Feedback: Alert, Toast, Dialog, Empty state, Loading.
- Scores: Leaderboard, Team badge, Score stepper, Stat tile, Progress, Day tracker.
- Invite: Invite card, Calendar, Date poll.
- Build screens from these before writing new styles, and keep new styles on the same tokens.

### Logo and icons

- The logo is the space rock: a lumpy `leaf` asteroid with an `ink` outline and craters, set beside "Ribuk" in Fraunces 800. Use the SVG files in the Logos asset group and never redraw it. In the nav bar the mark sits beside live Fraunces text (`rb-nav__brand`), which keeps the name readable to screen readers.
- On `paper` use `ribuk-lockup` or `ribuk-mark`; on `ink` use the `-on-ink` versions. Don't put it on `leaf` or team colours. Keep clear space equal to the big crater around it, and don't go below 16px for the mark.
- The rock can tumble (rotate up to about ±20°) in playful moments, but stays upright in the nav bar and app icons.
- Icons are Lucide: rounded 24px line icons with a 2px stroke, in the text colour. In SvelteKit use `lucide-svelte`; the ones the components use are in the Icons asset group. Use 18px icons in buttons and 16px in tags and small text.
- When an icon leads a list row, menu link or card heading, put it in an Icon tile (`rb-icon-tile`): a 22px icon in a 40px round disc. If one row in a list has a tile, every row gets one.
- An icon-only button always has an `aria-label`. Icons never replace a word where meaning matters: pair arrows with numbers and status icons with a short message.
