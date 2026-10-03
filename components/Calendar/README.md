# Calendar

A month grid for picking dates: one day, several separate days, or a range like a game week.

## Use

- Monday-first weeks, with the month in Fraunces and quiet chevron buttons to page.
- Single or multiple days: set `aria-pressed="true"` on each chosen day.
- A range: set `data-range="start"`, `"mid"` and `"end"` on its days (and `aria-pressed="true"`). A one-day range adds `data-range-single`.
- Today gets `aria-current="date"` (an ink ring). Days with something on get `data-mark` (a small dot). Days from other months get `data-outside`. Unavailable days are `disabled` (struck through).
- Summarise the choice under the grid ("Mon 12 – Fri 16 · 5 days") with the confirm button.

## Markup

```html
<div class="rb-calendar">
  <div class="rb-calendar__head">
    <button class="rb-btn rb-btn--quiet rb-btn--icon" type="button" aria-label="Previous month"><svg …chevron-left…></svg></button>
    <h3 class="rb-calendar__month" id="cal-m" aria-live="polite">October 2026</h3>
    <button class="rb-btn rb-btn--quiet rb-btn--icon" type="button" aria-label="Next month"><svg …chevron-right…></svg></button>
  </div>
  <div class="rb-calendar__grid" role="group" aria-labelledby="cal-m">
    <span class="rb-calendar__dow"><abbr title="Monday">M</abbr></span> …
    <button class="rb-day" type="button" aria-label="October 12" data-range="start" aria-pressed="true">12</button> …
  </div>
  <div class="rb-calendar__foot">…</div>
</div>
```

You provide the days of the month and the selection logic; the CSS covers every state. Give each day a full `aria-label` ("October 12, finals").

## Notes

- Selected days are `leaf` with `on-leaf` numbers; range middles are `leaf-soft`. Day buttons are at least 40px.
- For one quick date in a form, the browser's `<input type="date" class="rb-input">` is fine too.
