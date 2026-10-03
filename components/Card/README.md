# Card

A container for one thing: an event, a table, a feature. It comes in paper with an ink outline, a soft green tint, and a solid ink block for the one card that should stand out.

## Use

- **Paper** (`rb-card`) is the default for lists of events, settings groups and forms.
- **Tint** (`rb-card rb-card--tint`) is for supporting info next to paper cards, like a scoreboard or a summary.
- **Ink** (`rb-card rb-card--ink`) is the feature card. Use at most one per screen, and add the leaf pattern (`<span class="rb-card__leaves" aria-hidden="true"></span>` as its first child) when it's the hero.
- Stack the content with the parts below; the card sets the spacing (`space-4` between parts, `space-8` padding, `space-4` on phones).

## Parts

- `rb-card__title`: the card's title, in the `h3` style. Use the right heading level for the page.
- `rb-card__meta`: date, place or count, in `ink-muted` (`paper-muted` on ink).
- `rb-card__body`: a sentence or two.
- `rb-card__actions`: a row of buttons, primary first.
- A `rb-tag` above the title works as an eyebrow.

## Markup

```html
<article class="rb-card">
  <span class="rb-tag">Friday · 9 pm</span>
  <h3 class="rb-card__title">Game night is on</h3>
  <p class="rb-card__body">Four slots left.</p>
  <div class="rb-card__actions">
    <button class="rb-btn rb-btn--primary" type="button">I'm in</button>
  </div>
</article>
```

You provide the element (`article` or `section`), the content, and the grid or stack that lays cards out.

## Notes

- Buttons inside an ink card adapt: secondary turns paper-outlined, focus rings turn `leaf`.
- To pin a sticker on a card, position it yourself (for example `position: absolute; top: var(--space-4); left: var(--space-4)`); the card is already `position: relative`.
- No shadows. Cards separate by outline, tint or ink fill.
