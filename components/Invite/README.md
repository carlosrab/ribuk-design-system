# Invite card

The invitation itself: a green band with the sticker, a big Fraunces headline, the when and where, and the RSVP.

## Use

- One invite card per page, as the main content. Max width 560px.
- Headline: short and punchy, with one phrase marked (`rb-mark`). That mark is the screen's one highlight, so the sticker on the band is `rb-sticker--paper`.
- Details use Lucide `calendar`, `clock` and `map-pin` icons in `leaf-ink`, one fact per line.
- End with the RSVP (a full-width Segmented control) and a small host line with the reply-by date.

## Markup

```html
<article class="rb-invite" aria-labelledby="inv-title">
  <div class="rb-invite__band"><span class="rb-sticker rb-sticker--paper">You're in</span></div>
  <span class="rb-tag">Ribuk game week</span>
  <h2 class="rb-invite__title" id="inv-title">Five nights. Four teams. <mark class="rb-mark">One trophy.</mark></h2>
  <ul class="rb-invite__details">
    <li><svg …calendar…></svg><span>Mon 12 – Fri 16 October</span></li>
  </ul>
  <p class="rb-invite__note">Bring a controller and a snack to share.</p>
  <fieldset class="rb-invite__rsvp">
    <legend class="rb-legend">Are you coming?</legend>
    <div class="rb-segmented rb-segmented--full">…Going · Maybe · Can't…</div>
  </fieldset>
  <p class="rb-invite__host">From Carlos and the Ribuk crew · Reply by Wed 7 Oct</p>
</article>
```

You provide the copy, the dates, and what happens when someone answers.

## Notes

- The band is `leaf` with the leaf pattern in `ink`. The tag tucks under the sticker on purpose.
- The headline scales from 36px on phones to 56px.
