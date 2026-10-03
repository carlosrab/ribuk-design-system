# Progress

A bar showing how far along something is: games played this week, or each team's games so far.

## Use

- Show the count as text too ("35 of 48"), not just the bar.
- Add a team class (`rb-team--1` …) to colour the bar in that team's colour; without one it's `leaf`.
- Use `rb-progress--large` for the one headline bar on a screen.

## Markup

```html
<div class="rb-progress rb-team--1" role="progressbar" aria-label="Team Moss"
     aria-valuemin="0" aria-valuemax="12" aria-valuenow="9" aria-valuetext="9 of 12">
  <div class="rb-progress__head"><span class="rb-progress__label">Team Moss</span><span class="rb-progress__value">9 of 12</span></div>
  <div class="rb-progress__track"><div class="rb-progress__bar" style="--value: 75%"></div></div>
</div>
```

You provide the numbers and set `--value` to the percentage (in Svelte: `style:--value={`${pct}%`}`).

## Notes

- The track has a 2px `ink` border, so even light team colours read clearly. The bar animates its width unless reduced motion is on.
