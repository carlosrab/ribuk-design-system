Ribuk uses Lucide icons: rounded 24px line icons drawn with a 2px stroke. These are the ones the components use; any other Lucide icon fits the set.

- In SvelteKit, install `lucide-svelte` and import icons by name (`import { Trophy } from 'lucide-svelte'`), or paste the SVG files from this folder inline.
- Icons take the text colour (`stroke="currentColor"`). Set them in `ink`, `leaf-ink`, `alert` or `paper` depending on the ground; never `highlight`. These previews show them in black.
- Sizes: 24px on their own, 22px inside an Icon tile (`rb-icon-tile`), 18px inside buttons, 16px inside tags and small text. Keep the 2px stroke at every size.
- An icon that carries meaning on its own (an icon-only button) needs an `aria-label` on the button. Decorative icons get `aria-hidden="true"`.
- Copied from lucide-icons/lucide at commit 45b0e14, ISC License (Feather-derived icons: MIT).

| Icon | Used for |
| --- | --- |
| `arrow-up`, `arrow-down` | Rank and score changes on the leaderboard |
| `plus`, `minus` | Score stepper |
| `check`, `x` | Checkbox, date poll answers, close buttons |
| `circle-question-mark` | "Maybe" in the date poll |
| `calendar`, `clock`, `map-pin` | Invite details |
| `chevron-left`, `chevron-right`, `chevron-down` | Calendar paging, dropdowns |
| `circle-check`, `info`, `triangle-alert` | Alerts and toasts |
| `trophy`, `users` | Leader, teams and players; empty states |
| `menu`, `house`, `circle-user` | Nav bar menu button, tab bar |
| `search`, `wifi-off`, `rotate-cw` | Empty states: no results, offline, try again |
