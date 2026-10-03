# Empty state

What a screen or list shows when there's nothing in it yet, or when it couldn't load: an icon, a short title, one sentence, and usually a next step.

## Use

- **Empty** (`rb-empty`): nothing here yet. Say what will appear and how to make it happen ("Scores show up here as soon as the first game ends"), and offer the action if the viewer can take it.
- **Error** (`rb-empty--error`): the content couldn't load. Say what went wrong in plain words and offer "Try again". The art turns `alert` on `alert-soft` and drops the leaves.
- **Compact** (`rb-empty--compact`): inside cards, tables and search results. Smaller icon, sans title, no leaves, usually no button.
- Pick a Lucide icon that matches the content: `trophy` for scores, `calendar` for dates, `users` for people, `search` for no results, `wifi-off` for offline.

## Markup

```html
<div class="rb-empty">
  <div class="rb-empty__art" aria-hidden="true"><svg …lucide trophy…></svg></div>
  <h3 class="rb-empty__title">No scores yet</h3>
  <p class="rb-empty__text">Scores show up here as soon as the first game of Day 1 ends.</p>
  <div class="rb-empty__actions"><button class="rb-btn rb-btn--primary" type="button">Add a score</button></div>
</div>
```

You provide the icon, the words and the action. Use a heading level that fits the page.

## Notes

- The full-size art is a 96px `leaf-soft` disc with two `leaf` leaves; it's the brand's friendliest moment, so keep the copy light too.
- Titles are Fraunces 26px; text is `ink-muted` and stays under 36 characters a line.
