# Stage 2 – Contact page `/kontakt` (design V6)

Static exports of the approved V6 design, made in Claude Design.
Open the `.html` files in a browser or look at the `.png` screenshots.

| Breakpoint | File |
| --- | --- |
| desktop ≥ 1024 px (frame 1440) | `kontakt-v6-desktop-1440.html` / `.png` |
| tablet 640–1023 px (frame 768) | `kontakt-v6-tablet-768.html` / `.png` |
| mobile < 640 px (frame 390) | `kontakt-v6-mobile-390.html` / `.png` |

## Scope
- **Only the `/kontakt` page body** (`app/kontakt/**`, `data/contact.ts`). The header and the footer visible in the mockup are **not** part of this stage. The footer is stage 1 (branch `feat/footer-redesign`, `docs/design/footer/`). Do not change the header or `components/site-footer.*` here.
- Only V6 (no contact form).
- The mockup HTML uses inline styles and Geist from Google Fonts only to preview the design. **Do not copy its values.** Use the existing design tokens, `section-shell` / `section-tinted`, `.eyebrow`, `.button*`, existing components (`FaqItem`, `PageSection`) and the project breakpoints from `CLAUDE.md`.
- The logo, map and photo in the mockup are placeholders. Keep the real map iframe and use the real image (`/images/heroes/about/hero.jpg`).

## Current state of the branch
`feat/kontakt-redesign` already contains a **first draft** of this page (`app/kontakt/components/*`, `data/contact.ts`). It was written before the design was aligned with the site and was never linted or built. Known deviations to fix when iterating:
- Section vertical padding is larger than the site default (use the `section-shell` default, 2.5rem; the mockup uses 40px).
- Buttons use `600 / 0.14em` text; the site uses `700 / 0.08em` (`.button-outline` look). Primary (Instagram) is a filled brown button `#665444`, others are outlined `#202020`.
- Icon sizes/stroke: 18.4px, stroke 1.6, same icons as the site (`components/icons`).
- Run `npm install && npm run lint && npm run build`.

## Section order
1. **Kontakt** – `h1` ("Kontakt", no eyebrow) + contact lines: Instagram, Telefon, E-mail, Adres (small muted label above each value). Right: map with a "Wyznacz trasę" button over its bottom-left corner; under the map two blocks side by side, **Godziny otwarcia** (with Clock icon, 60 %) and **Parking** (with CircleParking icon, 40 %). Hours use the existing `siteConfig.openingHours` strings and keep each row on one line. Row width max 16rem so day and time stay close.
2. **Napisz do mnie** (tinted band) – heading, lead, three equal buttons: Instagram (filled brown), WhatsApp, Messenger (outlined). Steps list on the right, **desktop only** (hidden below 1024px).
3. **Najczęstsze pytania** – heading and short lead on the left, accordion on the right (existing `contactFaqs`). No WhatsApp button.
4. **O mnie** (tinted band) – image + eyebrow "O mnie", H2 "Poznajmy się bliżej.", lead from `/o-mnie`, outlined button "Poznaj mnie" → `/o-mnie` (no arrow).
5. Existing `BusinessInfo` block stays for now. **Remove it only after the footer (stage 1) with company data is merged**, because that data would otherwise disappear from the site.

## Layout notes
- Desktop: two columns (gap 48px). Content width up to 1180px, side padding 32px.
- Tablet: single column; contact lines in two columns; map full width; hours + parking side by side with 48px gap; buttons in one row.
- Mobile: single column; buttons stacked; hours and parking stacked.
- "Wyznacz trasę" opens Google Maps directions straight into navigation:
  `https://www.google.com/maps/dir/?api=1&destination=<address>&travelmode=driving&dir_action=navigate` (starts navigation in the mobile app; on desktop it opens the route planner). Build the URL from `siteConfig.address.lines`.

## Icons
Icons in the mockup are drawn by hand only as a preview. In code use `components/icons` (Phone, Mail, Address, Instagram, Messenger, WhatsApp) and lucide-react (`Clock`, `ArrowUpRight`, and a parking icon: `CircleParking`, older versions call it `ParkingCircle`; confirm the exact name in the installed version).

## Open decision
Whether to shorten "Poniedziałek - Piątek" to "Pn - Pt". Currently the full text from `siteConfig` is used. If shortened, change it in `data/site-config.ts` so the live site stays consistent.
