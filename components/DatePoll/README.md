# Date poll

A grid for "which days work?": people down the side, candidate dates across, and each answer as yes, maybe or no. The best date is highlighted.

## Use

- Mark each answer with `data-vote="yes"`, `"maybe"` or `"no"` on an `rb-vote`; leave it off for no answer yet (a dashed box).
- The viewer's own row (`rb-poll__you`) uses buttons that cycle through the answers; other rows use spans.
- Put the screen's highlight on the best date's header (`rb-poll__best`) and say why in screen-reader text.
- Total the yeses in the footer.

## Markup

```html
<div class="rb-poll-wrap">
  <table class="rb-poll">
    <thead><tr><td></td>
      <th scope="col" class="rb-poll__best"><span class="rb-poll__dow">Fri</span><span class="rb-poll__date">16</span></th></tr></thead>
    <tbody>
      <tr class="rb-poll__you"><th scope="row"><span class="rb-poll__who"><span class="rb-avatar rb-avatar--ink">CR</span>You</span></th>
        <td><button class="rb-vote" type="button" data-vote="yes" aria-label="Fri 16 Oct: yes. Change"><svg …check…></svg></button></td></tr>
      <tr><th scope="row"><span class="rb-poll__who"><span class="rb-avatar">AN</span>Ana</span></th>
        <td><span class="rb-vote" data-vote="maybe" role="img" aria-label="Ana, Fri 16 Oct: maybe"><svg …circle-question-mark…></svg></span></td></tr>
    </tbody>
  </table>
</div>
```

You provide the people, dates and answers, and cycle the viewer's answer on click.

## Parts

- `rb-avatar` is a 32px circle with initials (`leaf-soft`, or `rb-avatar--ink` for "you"). It takes an `<img>` too.

## Notes

- Yes is `leaf` with an ink check, maybe is `leaf-soft` with a `leaf-ink` question mark, no is outlined with an `ink-muted` cross. Each answer has an icon, never colour alone.
