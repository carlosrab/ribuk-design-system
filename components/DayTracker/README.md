# Day tracker

A row of steps showing where the event is: which days are done, which is live, and what's next.

## Use

- One step per day or round. Set `data-state` to `done`, `live` or `next`, and put `aria-current="step"` on the live one.
- Labels are short ("Day 3", "Finals"); the meta line holds the weekday or "Live now".
- On narrow screens the row scrolls sideways inside itself.

## Markup

```html
<ol class="rb-steps" aria-label="Game week">
  <li class="rb-step" data-state="done">
    <span class="rb-step__dot"><svg …check…></svg><span class="rb-sr">Done:</span></span>
    <span class="rb-step__label">Day 1</span><span class="rb-step__meta">Mon</span>
  </li>
  <li class="rb-step" data-state="live" aria-current="step">
    <span class="rb-step__dot">3</span><span class="rb-step__label">Day 3</span><span class="rb-step__meta">Live now</span>
  </li>
  <li class="rb-step" data-state="next">…</li>
</ol>
```

You provide the steps and each one's state.

## Notes

- Done: `leaf` dot with an ink check. Live: `ink` dot ringed in `leaf`. Next: outlined in `ink-muted`, joined by a dashed line.
