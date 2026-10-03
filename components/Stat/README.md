# Stat tile

A big number with a label: the leader's score, games played, points today. Use a row of 2–4 at the top of a scores screen.

## Use

- Put tiles in `rb-stats`, which wraps them into columns that fit.
- Default tile is `leaf-soft`. Use `rb-stat--ink` for the one stat that matters most (usually the leader) and `rb-stat--paper` for the rest when the page is already green-heavy.
- Keep labels to two or three words. Use the meta line for context or a change (`rb-delta`).

## Markup

```html
<div class="rb-stats">
  <div class="rb-stat rb-stat--ink">
    <p class="rb-stat__label"><svg …trophy…></svg>Leader</p>
    <p class="rb-stat__value">42</p>
    <p class="rb-stat__meta">Team Moss</p>
  </div>
</div>
```

You provide the label, the value and the optional meta line.

## Notes

- The value is Fraunces 48px with lining, tabular figures. On the ink tile it's `leaf` (5.8:1) and the meta text is `paper-muted`.
