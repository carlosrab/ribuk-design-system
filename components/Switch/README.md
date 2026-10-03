# Switch

An on/off toggle for settings that take effect straight away, like "Voice chat on".

## Use

- Use a switch when flipping it changes something immediately. In a form that's saved with a button, use a Checkbox instead.
- Write the label as the thing that's on ("Show live scores to guests"), not as a question.
- In settings lists, add `rb-switch--end` to put the label left and the switch right, and separate rows with a `line` hairline.

## Markup

```html
<label class="rb-switch rb-switch--end">
  <input type="checkbox" role="switch" checked>
  Voice chat on
</label>
```

You provide the input's state (`bind:checked` in Svelte) and whatever saving happens on change.

## States

- Off: `paper` track with an `ink-muted` border and knob (6.9:1).
- On: `leaf` track with an `ink` knob.
- Focus: 2px `ink` ring. Disabled: `line` track and `ink-muted` label.
