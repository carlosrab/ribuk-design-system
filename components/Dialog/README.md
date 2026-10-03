# Dialog

A modal box that asks before something important or destructive happens, like "Reset Day 2 scores?".

## Use

- Use it for confirmations and short focused tasks. Don't put long forms in it.
- Title the dialog with the question. In the body, say exactly what will happen. Label buttons with the outcome ("Reset Day 2", "Keep scores"), never "OK" and "Cancel".
- The safe choice is a secondary button; the action is primary, or `rb-btn--danger` when it destroys something. Buttons stack full-width on phones.

## Markup

```html
<dialog class="rb-dialog" aria-labelledby="reset-title">
  <h2 class="rb-dialog__title" id="reset-title">Reset Day 2 scores?</h2>
  <p class="rb-dialog__body">All four teams go back to 0 for Day 2. This can't be undone.</p>
  <div class="rb-dialog__actions">
    <button class="rb-btn rb-btn--secondary" type="button">Keep scores</button>
    <button class="rb-btn rb-btn--danger" type="button">Reset Day 2</button>
  </div>
</dialog>
```

Open it with `dialog.showModal()` and close it with `dialog.close()` from your Svelte code (`bind:this`). The browser handles the backdrop, focus trapping and the Escape key.

## Notes

- The title is Fraunces 28px; the backdrop is `ink` at 60%.
- Return focus to the button that opened it (the browser does this when you use `showModal()`).
