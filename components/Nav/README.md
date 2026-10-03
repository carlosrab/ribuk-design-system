# Nav bar

The bar across the top of every page: the Ribuk wordmark, the main sections, and a right-hand area for the live indicator and the person's avatar.

## Use

- Keep it to 3–5 links, named for what people go there to do ("Scores", "Schedule"). Mark the current page with `aria-current="page"`; it gets a `leaf` underline.
- `rb-nav--sticky` keeps it at the top while the page scrolls.
- When the nav is narrower than 640px, the links fold into a menu behind the menu button. Your code only flips `aria-expanded` on `rb-nav__toggle`; the CSS shows and hides the links.
- On phones, if you use the Tab bar, add `rb-nav--with-tabbar` so the menu button and links hide and the top bar shows just the wordmark and the right-hand area.

## Live indicator

- `<span class="rb-live">Live<span class="rb-live__more"> · Day 3</span></span>` shows the event is running, with a pulsing `leaf` dot (still when reduced motion is on). In a narrow nav the `rb-live__more` part hides so everything fits on one row. Use it only while something is actually live.

## Count

- `<span class="rb-count" aria-label="2 new">2</span>` is a small number bubble for new or unread items, `paper` on `ink`. It sits on a tab icon or next to a link. Hide it at 0.

## Markup

```html
<header class="rb-nav rb-nav--sticky">
  <a class="rb-nav__brand" href="/"><svg class="rb-nav__mark" …ribuk-mark…></svg>Ribuk</a>
  <button class="rb-btn rb-btn--quiet rb-btn--icon rb-nav__toggle" type="button"
          aria-expanded="false" aria-controls="main-nav" aria-label="Menu"><svg …lucide menu…></svg></button>
  <nav class="rb-nav__links" id="main-nav" aria-label="Main">
    <a class="rb-nav__link" href="/scores" aria-current="page">Scores</a>
    <a class="rb-nav__link" href="/schedule">Schedule</a>
  </nav>
  <div class="rb-nav__end">
    <span class="rb-live">Live<span class="rb-live__more"> · Day 3</span></span>
    <a class="rb-avatar rb-avatar--ink" href="/me" aria-label="Your profile">CR</a>
  </div>
</header>
```

Keep this order in the markup (toggle before links): the CSS relies on it. You provide the links, which one is current, and the toggle's `aria-expanded` (in SvelteKit, from `$page.url.pathname` and a local `open` state; close the menu on navigation).

## Notes

- The brand is the space rock mark (34px, `ribuk-mark.svg` inline, `aria-hidden`) beside "Ribuk" in Fraunces 800 at 26px. Inline the SVG so it can use the colour tokens.
- The collapse uses a container query, so the nav also folds when it's placed in a narrow column, not just on phones.
