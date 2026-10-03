# Button

Pill-shaped buttons for actions: one green primary per view, an ink-outline secondary, and a quiet text button for low-key actions.

## Use

- **Primary** (`rb-btn rb-btn--primary`) is for the main thing the screen is for, like "I'm in" or "Save". Use one per view.
- **Secondary** (`rb-btn rb-btn--secondary`) sits next to a primary for the alternative ("Maybe later", "Invite").
- **Quiet** (`rb-btn rb-btn--quiet`) is for minor actions inside cards and lists ("Details", "Edit").
- **Danger** (`rb-btn rb-btn--danger`) is for destructive actions like "Reset scores", usually inside a Dialog that asks first.
- **Icon-only** (`rb-btn--icon` with `--secondary` or `--quiet`) is a 44px round button for paging, closing and similar. It must have an `aria-label`.
- Add `rb-btn--small` in dense places like table rows and card footers.
- Write labels verb first in sentence case, and keep them to one to three words.

## Markup

```html
<button class="rb-btn rb-btn--primary" type="button">I'm in</button>
<button class="rb-btn rb-btn--secondary" type="button">Maybe later</button>
<a class="rb-btn rb-btn--quiet" href="/schedule">See the lineup</a>
```

You provide the element (`<button>` for actions, `<a>` for navigation), the label, and an optional Lucide icon before or after the label (18px; 20px in icon-only buttons).

```html
<button class="rb-btn rb-btn--danger" type="button">Reset Day 2</button>
<button class="rb-btn rb-btn--quiet rb-btn--icon" type="button" aria-label="Close"><svg …lucide x…></svg></button>
```

## States

- Hover: primary flips to `ink` with `leaf` text; secondary fills with `leaf-soft`; quiet underlines.
- Focus: 2px `ink` ring, offset 2px. Inside `rb-card--ink` the ring turns `leaf`.
- Disabled: use the `disabled` attribute (or `aria-disabled="true"` on a link). It turns `line` grey with `ink-muted` text.

## Notes

- Text on the green fill is `on-leaf` (ink), 5.8:1. Never put white text on `leaf`. Danger is `paper` on `alert`, 5.0:1.
- Minimum height is 44px (36px for small), so buttons are easy to tap.
- In Svelte, use the classes directly: `<button class="rb-btn rb-btn--primary" onclick={join}>I'm in</button>`.
