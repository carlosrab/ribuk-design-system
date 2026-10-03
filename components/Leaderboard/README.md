# Leaderboard

The standings table: rank, team, games played, points and how each team moved since the last update.

## Use

- Sort by points. Mark the leader's row with `rb-board__lead` (the screen's one `highlight`) and the viewer's own team with `rb-board__you`.
- Show movement with `rb-delta--up`, `--down` or `--same`: an arrow plus a number, with screen-reader text like "1 place up".
- Add `rb-board__opt` to columns that can drop on phones (they hide under 480px).
- Wrap the table in `rb-board-wrap` so very wide tables scroll inside themselves.

## Markup

```html
<div class="rb-board-wrap">
  <table class="rb-board">
    <caption>Standings after Day 3</caption>
    <thead><tr><th scope="col">#</th><th scope="col">Team</th>
      <th scope="col" class="rb-board__num rb-board__opt">Played</th>
      <th scope="col" class="rb-board__num">Points</th><th scope="col" class="rb-board__num">Change</th></tr></thead>
    <tbody>
      <tr class="rb-board__lead">
        <td class="rb-board__rank">1</td>
        <td><span class="rb-team rb-team--1"><span class="rb-team__badge" aria-hidden="true">M</span>Team Moss</span></td>
        <td class="rb-board__num rb-board__opt">9</td>
        <td class="rb-board__num rb-board__points">42</td>
        <td class="rb-board__num"><span class="rb-delta rb-delta--up"><svg …arrow-up…></svg>1<span class="rb-sr"> place up</span></span></td>
      </tr>
    </tbody>
  </table>
</div>
```

You provide the sorted rows and the movement since the last update.

## Notes

- Numbers are right-aligned and tabular so columns line up. Ranks are Fraunces.
- Up is `leaf-ink`, down is `alert`; they differ in direction and sign, not just colour.
