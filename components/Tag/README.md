# Tag & sticker

Small labels for categories and status, plus the round highlight sticker for the one thing that's new.

## Tag

- Default (`rb-tag`): `leaf-ink` on `leaf-soft`. Use for categories like "Co-op" or "4 players".
- Neutral (`rb-tag rb-tag--neutral`): `ink` on `line`, for facts that aren't brand moments.
- Ink (`rb-tag rb-tag--ink`): paper on ink, for the strongest label in a group ("Ranked").
- Keep tags to one or two words. They're set in capitals by the class, so write them in normal case in the markup.

```html
<span class="rb-tag">Co-op</span>
<span class="rb-tag rb-tag--ink">Ranked</span>
```

## Sticker

- `rb-sticker` is a tilted disc in `highlight` yellow with an ink ring and ink text. The ring keeps it visible on paper.
- Use one sticker per screen, for one short word: "New", "Live", "Hot".
- `rb-sticker--leaf` (green) or `rb-sticker--paper` (white, for green backgrounds) replace the yellow on screens that already use the highlight elsewhere. `rb-sticker--small` is 48px instead of 64px.

```html
<span class="rb-sticker">New</span>
```

## Marker

- `rb-mark` draws the highlight behind a word or two, like a marker pen. Use it on `<mark>` in a headline: `Game night is <mark class="rb-mark">on.</mark>`
- It counts as the screen's one highlight, so don't pair it with a yellow sticker.

## Notes

- Tags and stickers are text, not controls. If one needs to be clickable, make it a button or link instead.
