# Score stepper

Minus and plus buttons around a number, for adding points quickly on a phone during the event. The number can also be typed.

## Use

- One stepper per team, labelled with its Team badge. Plus is green because it's the common action.
- Use `rb-stepper--large` (56px buttons) on the scorekeeper's screen.
- Disable minus at 0. Confirm each change with a Toast that offers Undo.

## Markup

```html
<div class="rb-field">
  <span class="rb-label" id="moss-l">Team Moss</span>
  <div class="rb-stepper" role="group" aria-labelledby="moss-l">
    <button class="rb-stepper__btn" type="button" aria-label="Take a point from Team Moss"><svg …minus…></svg></button>
    <input class="rb-stepper__value" type="number" inputmode="numeric" value="12" aria-label="Team Moss points">
    <button class="rb-stepper__btn rb-stepper__btn--add" type="button" aria-label="Give Team Moss a point"><svg …plus…></svg></button>
  </div>
</div>
```

You provide the value (`bind:value` in Svelte), the click handlers, and the minimum (usually 0).

## Notes

- Buttons are 44px (56px large) circles; the number is DM Sans 24px with tabular figures so it doesn't jump as it changes.
- Each button's `aria-label` names the team, so screen readers say what will change.
