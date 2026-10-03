# Input

Text fields with a label above, optional help text below, and an error message that names the fix.

## Use

- Wrap each control in `rb-field` with a `rb-label` on top. Always use a visible label; placeholders are only examples.
- Put help text in `rb-help` under the field. Mark optional fields with `<span class="rb-optional">(optional)</span>` in the label instead of marking required ones.
- Use the same `rb-input` class on `<input>`, `<textarea>` and `<select>`.

## Markup

```html
<div class="rb-field">
  <label class="rb-label" for="handle">Gamer tag</label>
  <input class="rb-input" id="handle" name="handle" aria-describedby="handle-help">
  <p class="rb-help" id="handle-help">Shown on the scoreboard.</p>
</div>
```

You provide the `id`/`for` pair, the `name`, and the `aria-describedby` that points at the help or error text.

## States

- Hover darkens the border to `ink`. Focus adds the 2px `ink` ring.
- Error: set `aria-invalid="true"` on the input and swap the help text for `<p class="rb-error">`. The border and message turn `alert` orange, and the message gets a "!" icon so it never relies on color alone. Say what to do: "Add the rest of your email", not "Invalid input".
- Disabled: the `disabled` attribute gives a `line` grey fill and `ink-muted` text.

## Notes

- Field text is 16px so phones don't zoom in on focus.
- The border is `ink-muted` (6.9:1 on paper), so the field's edge stays visible.
