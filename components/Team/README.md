# Team badge

A round badge in the team's colour with its initial, next to the team name. It's how teams are told apart everywhere: leaderboards, score entry, progress bars.

## Use

- Pick the team's number with `rb-team--1` to `rb-team--4`. That sets `--team` and `--on-team` for everything inside, so the same class also colours a Progress bar.
- Always show the initial in the badge and the name beside it (or as an `aria-label` where space is tight). Colour is never the only cue.
- `rb-team--large` makes a 40px badge for headers and stat tiles.

## Markup

```html
<span class="rb-team rb-team--1">
  <span class="rb-team__badge" aria-hidden="true">M</span>Team Moss
</span>
```

You provide the team number, its initial and its name.

## Notes

- Colours: 1 navy, 2 sky, 3 orange, 4 magenta, chosen to stay distinct with common colour blindness. Initials use `on-team-N` (5.4:1 or better).
- Badges have a 2px `ink` ring so sky and orange stay visible on paper; on ink cards the ring turns `paper`.
- More than 4 teams: reuse colours with different initials, and lean on names.
