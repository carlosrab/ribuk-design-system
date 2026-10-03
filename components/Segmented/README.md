# Segmented control

A pill of 2–4 options where one is always selected: switching views (Teams · Players · Games) or answering a short question (Going · Maybe · Can't).

## Use

- **Switching views:** use buttons with `role="tab"` and `aria-selected`, inside `role="tablist"`. Your code shows the matching panel.
- **Answering a question:** use radios inside labels, so it works in a form and with the keyboard's arrow keys. Add `rb-segmented--full` to stretch it across its container.
- Keep labels to one or two words. More than 4 options → use a Select.

## Markup

```html
<div class="rb-segmented" role="tablist" aria-label="Scores view">
  <button class="rb-segmented__opt" role="tab" aria-selected="true" type="button">Teams</button>
  <button class="rb-segmented__opt" role="tab" aria-selected="false" type="button">Players</button>
</div>

<div class="rb-segmented rb-segmented--full">
  <label class="rb-segmented__opt"><input type="radio" name="rsvp" value="yes">Going</label>
  <label class="rb-segmented__opt"><input type="radio" name="rsvp" value="no">Can't</label>
</div>
```

You provide which option is selected (`aria-selected`, `aria-pressed`, or the checked radio).

## States

- Selected: `paper` text on `ink`. Hover: `leaf-soft`. Focus: 2px `ink` ring.
- An optional 16px icon can lead a label (a check on "Going").
