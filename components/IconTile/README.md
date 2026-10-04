# Icon tile

A round tinted disc holding one Lucide icon, used at the start of a list row, menu link or card heading so a list scans at a glance.

## Use

- Default (`rb-icon-tile`): a `leaf-ink` icon on `leaf-soft`. Use it for most rows.
- `rb-icon-tile--paper`: a `paper` disc, for rows that sit on a `leaf-soft` panel, where the default would disappear.
- `rb-icon-tile--open`: a dashed `ink-muted` ring, for something not done yet ("GeoGuessr Daily · Not posted yet"). The row's text still says so.
- `rb-icon-tile--off`: a `line` disc, for a row that isn't available yet. Mark the row itself `aria-disabled="true"` and say why in its text.
- `rb-icon-tile--ink`: an `ink` disc, for host-only or admin rows. Keep it to one or two per list so it still stands out.
- Lead with tiles consistently: if one row in a list has a tile, give every row one.
- One icon per tile, 22px, decorative (`aria-hidden="true"`). The row's text carries the meaning, so the tile is never the only cue for a state.
- Tiles start rows and headings only. Inside buttons and tags, use bare 18px and 16px icons as the Icons group says.

## Markup

```html
<a class="row" href="/rsvp/checklist">
  <span class="rb-icon-tile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">…</svg></span>
  <span>Before game day</span>
</a>
```

You provide the Lucide icon (`stroke="currentColor"`) and the row around it. Leave about 12px (`space-2` + `space-1`) between the tile and the text. Inside an Invite card's details list, the tile centres itself against its line of text.

## Notes

- 40px disc, fully round (`radius-pill`), no border except `--open`.
- Icon contrast, light / dark: default 4.6 / 6.7:1, `--paper` 5.6 / 9.9:1, `--open` 6.9 / 7.8:1, `--off` 5.2 / 5.3:1, `--ink` 17.9 / 16.0:1.
- In dark mode every variant flips with the tokens; `--ink` becomes a light inverse disc, like other ink blocks.
