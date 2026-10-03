# Loading

Ways to show that something is on its way: a spinner for short waits, skeletons that hold the shape of content, a leaf loader for whole pages, and a busy state for buttons.

## Which one

- **Skeleton** (`rb-skeleton`): when you know the layout (leaderboards, cards, lists). It keeps the page from jumping when data arrives. Variants: `--text`, `--title`, `--circle`, `--block`, `--pill`; set width with `--w` (and `--h` on blocks).
- **Spinner** (`rb-spinner`, `--small`, `--large`): short waits inside a component, like refreshing a list.
- **Busy button**: set `aria-busy="true"` on the button, put a spinner before the label and change the label to what's happening ("Saving…"). It stops extra clicks.
- **Leaf loader** (`rb-loader--page`): the first load of a whole page. Always add a line saying what's loading.
- Show nothing for waits under about 300ms; a flash of loader looks like a glitch.

## Markup

```html
<!-- skeleton: mark the region busy, hide the shapes from screen readers -->
<div aria-busy="true" aria-label="Loading standings">
  <div aria-hidden="true">
    <span class="rb-skeleton rb-skeleton--circle"></span>
    <span class="rb-skeleton rb-skeleton--text" style="--w: 45%"></span>
  </div>
</div>

<span class="rb-spinner" role="status"><span class="rb-sr">Loading</span></span>

<button class="rb-btn rb-btn--primary" type="button" aria-busy="true">
  <span class="rb-spinner" aria-hidden="true"></span>Saving…
</button>

<div class="rb-loader rb-loader--page" role="status">
  <span class="rb-loader__leaves" aria-hidden="true">
    <span class="rb-loader__leaf"></span><span class="rb-loader__leaf"></span><span class="rb-loader__leaf"></span>
  </span>
  Loading the scoreboard…
</div>
```

In SvelteKit, `{#await}` blocks or a `loading` flag can switch between the skeleton and the real content.

## Notes

- Skeletons are `line` grey with a soft shimmer; the spinner arc is `leaf` on a `leaf-soft` track (in buttons it follows the text colour).
- With reduced motion on, the shimmer stops and spinners and leaves gently fade instead of moving.
