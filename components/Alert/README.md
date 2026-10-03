# Alert

A message that stays in the page: information to know, a confirmation, or an error with a way forward.

## Use

- **Info** (`rb-alert`): neutral facts like "Scores lock at midnight". Icon `info`.
- **Success** (`rb-alert--success`): something worked and the person should know. Icon `circle-check`.
- **Error** (`rb-alert--error`): something failed. Say what happened and what to do; add an action button when there's something to try. Icon `triangle-alert`.
- Lead with a short title, then one sentence. Errors never blame the person.
- For brief confirmations after an action, use a Toast instead.

## Markup

```html
<div class="rb-alert rb-alert--error" role="alert">
  <svg …lucide triangle-alert…></svg>
  <div class="rb-alert__content">
    <p class="rb-alert__title">Couldn't save the score</p>
    <p class="rb-alert__text">You're offline. We'll keep it on this phone and try again.</p>
    <div class="rb-alert__actions"><button class="rb-btn rb-btn--secondary rb-btn--small">Try now</button></div>
  </div>
</div>
```

Optional: a dismiss button as the last child, `<button class="rb-btn rb-btn--quiet rb-btn--icon rb-btn--small rb-alert__close" aria-label="Dismiss">`.

## Notes

- Use `role="alert"` for errors that appear after an action, `role="status"` for the others.
- Colours: info is `paper` with an `ink` border; success `leaf-soft` with a `leaf-ink` icon; error `alert-soft` with an `alert` border and icon. Text is always `ink`.
