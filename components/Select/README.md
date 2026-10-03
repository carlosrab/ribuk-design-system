# Select

A native dropdown styled like Input, with a chevron, for choosing one option from a longer list.

## Use

- Use it for 5 or more options, or when space is tight. For 2–4 options, radios or a Segmented control show every choice at once.
- Always put it in an `rb-field` with a visible `rb-label`.

## Markup

```html
<div class="rb-field">
  <label class="rb-label" for="team">Your team</label>
  <div class="rb-select">
    <select class="rb-input" id="team"><option>Team Moss</option><option>Team Ink</option></select>
  </div>
</div>
```

You provide the `<select>` with its options (`bind:value` in Svelte); the `rb-select` wrapper only draws the chevron.

## States

- Same as Input: hover darkens the border, focus adds the `ink` ring, `aria-invalid="true"` turns it `alert`, disabled is `line` grey with an `ink-muted` chevron.
- It's the browser's own dropdown, so it works with keyboards, screen readers and phone pickers out of the box.
