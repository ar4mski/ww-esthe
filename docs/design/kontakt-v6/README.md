# Kontakt – design V6 (reference for implementation)

Static exports of the approved V6 design for `/kontakt`, made in Claude Design.
Open the `.html` files in a browser, or look at the `.png` screenshots.

| Breakpoint (project) | File |
| --- | --- |
| desktop ≥ 1024 px (frame 1440) | `kontakt-v6-desktop-1440.html` / `.png` |
| tablet 640–1023 px (frame 768) | `kontakt-v6-tablet-768.html` / `.png` |
| mobile < 640 px (frame 390) | `kontakt-v6-mobile-390.html` / `.png` |

The HTML uses inline styles and its own font (Instrument Sans) only because it is a
mockup. **Do not copy these values.** Implement with the repo's existing tokens,
fonts, `.eyebrow`, `.button*`, `section-shell` / `section-tinted`, and the three
project breakpoints (see `CLAUDE.md`).

## Scope
- Only the page body. Header and footer are NOT part of the change (the nav/logo
  and footer in the mockup are placeholders).
- No contact form in V6.

## Section order
1. **Kontakt** – h1 + contact lines (Instagram first, labelled "najszybciej", then
   telefon, e-mail, adres) | map with "Wyznacz trasę" button; under the map, two
   side-by-side blocks: **Godziny otwarcia** and **Parking** (free street parking).
2. **Napisz do mnie** (tinted band) – heading, lead, 3 equal buttons: Instagram
   (filled), WhatsApp, Messenger (outlined). 3-step list on the right, **desktop only**.
3. **Najczęstsze pytania** – heading + short lead left, accordion right (desktop);
   no WhatsApp button.
4. **O mnie** (tinted band) – image from `/o-mnie` + eyebrow, "Poznajmy się bliżej.",
   lead, outlined "Poznaj mnie" button to `/o-mnie` (no arrow).
5. Existing company-data block stays below (not in the mockup because the mockup's
   footer shows it).

## Layout notes
- Desktop: two equal columns, 72 px gap, content max 1120 px.
- Tablet: single column; contact lines in 2 columns; 3 buttons in one row; hours and
  parking side by side.
- Mobile: single column; buttons stacked; hours and parking stacked.
- Buttons: 48 px high, small tracked uppercase text, not heavy.
- Steps list is hidden below 1024 px.

## Status
Implemented on branch `feat/kontakt-redesign` (`app/kontakt/components/*`,
`data/contact.ts`). Not yet linted/built; follow-up changes are expected.
