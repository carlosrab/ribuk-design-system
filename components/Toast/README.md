# Toast

A short confirmation that pops up at the bottom of the screen after an action, like "+3 for Team Moss", with an optional Undo.

## Use

- Use toasts to confirm something the person just did. Keep them to one line.
- Offer Undo for quick, reversible actions like a score change. Leave the toast up for about 6 seconds, longer if it has an action.
- Don't use toasts for errors that need a decision; use an Alert or Dialog. A toast error is fine for things that fix themselves ("Retrying…").
- Show at most one or two at a time; newest at the bottom.

## Markup

```html
<div class="rb-toaster" aria-live="polite">
  <div class="rb-toast" role="status">
    <svg …lucide circle-check…></svg>
    <p class="rb-toast__text"><b>+3</b> for Team Moss</p>
    <button class="rb-btn rb-btn--quiet rb-btn--small" type="button">Undo</button>
  </div>
</div>
```

Put one `rb-toaster` near the end of your layout and add or remove `rb-toast` items from your Svelte store. It sits fixed at the bottom centre, clear of the phone's home bar.

## Notes

- `paper` text on `ink`; the success icon is `leaf` (5.8:1). The Undo action is `leaf`. Error toasts (`rb-toast--error`) use a `paper` warning icon.
- The toast slides up on arrival, unless reduced motion is on.
