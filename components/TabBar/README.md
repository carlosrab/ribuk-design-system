# Tab bar

A bar fixed to the bottom of the screen on phones, with 3–5 icon-and-label tabs. It suits the event app, where people hop between scores and the schedule with one thumb.

## Use

- Each tab has a Lucide icon and a one-word label; never icons alone. Mark the current one with `aria-current="page"`; its icon sits in a `leaf` pill.
- Add `rb-tabbar--phone-only` to hide it above 640px, and pair it with `rb-nav--with-tabbar` on the Nav bar.
- Put a `rb-count` inside `rb-tabbar__icon` to flag new items.
- Because the bar is fixed, give your main content bottom padding of about 80px plus the safe area: `padding-bottom: calc(80px + env(safe-area-inset-bottom))`.

## Markup

```html
<nav class="rb-tabbar rb-tabbar--phone-only" aria-label="Main">
  <a class="rb-tabbar__item" href="/scores" aria-current="page">
    <span class="rb-tabbar__icon"><svg …lucide trophy…></svg></span>Scores
  </a>
  <a class="rb-tabbar__item" href="/schedule">
    <span class="rb-tabbar__icon"><svg …lucide calendar…></svg><span class="rb-count" aria-label="2 new">2</span></span>Schedule
  </a>
</nav>
```

You provide the tabs and which one is current. `rb-tabbar--static` turns off the fixed positioning (for previews or embedding).

## Notes

- It sits above the phone's home bar using the safe-area inset. Tabs are at least 56px tall.
- Labels are `ink-muted` (6.9:1); the current tab's label is `ink`.
