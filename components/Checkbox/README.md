# Checkbox & radio

Checkboxes pick any number of options; radios pick exactly one. Both are native inputs inside a label, so the whole row is clickable.

## Use

- Checkbox for independent choices ("Games you'll play"). Radio when only one answer makes sense ("Scoring"). For 2–3 short options that change a view, use a Segmented control instead.
- Group related options in `<fieldset class="rb-fieldset">` with `<legend class="rb-legend">`.
- Add a second line of explanation with `<span class="rb-check__hint">` inside the label text.

## Markup

```html
<fieldset class="rb-fieldset">
  <legend class="rb-legend">Games you'll play</legend>
  <label class="rb-check"><input type="checkbox" name="games" value="kart" checked>Kart racing</label>
  <label class="rb-check"><input type="radio" name="scoring" value="points">
    <span>Points<span class="rb-check__hint">Every win adds to the team total.</span></span></label>
</fieldset>
```

You provide the `name`, `value` and checked state (`bind:checked` or `bind:group` in Svelte). Wrap the label text in a `<span>` when it has more than one part.

## States

- Checked: `leaf` fill with an `on-leaf` check or dot (5.8:1).
- Hover darkens the border to `ink`; focus adds the 2px `ink` ring.
- Disabled: `line` fill, `ink-muted` label.
- Every row is at least 44px tall for easy tapping.
