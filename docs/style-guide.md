# WW-ESTHE style guide

The single source of truth for how the site looks. Read it before designing a mockup or changing any UI. It describes the design system **as it is implemented** in `app/globals.css` and the CSS Modules; when this file and the code disagree, the code wins and this file must be updated in the same change.

- Code rules (architecture, TypeScript, accessibility, SEO, validation) live in [CLAUDE.md](../CLAUDE.md). This file covers only the visual layer and does not repeat them.
- Every value below is a **token or a class to reuse**, not a number to copy. If a design needs something that is not here, pick the nearest existing value; add a new token only when nothing fits, and add it to this file in the same change.

## 1. Character

Calm, warm-neutral, editorial. A small studio, not a clinic and not a fashion brand.

- **Photography carries the colour.** The UI itself is almost monochrome: off-white background, near-black text, one warm brown accent.
- **Flat and square.** No rounded corners, no cards with shadows, no gradients on UI elements. Structure comes from 1px hairlines (`--line`), whitespace and tinted bands.
- **Circles are the only rounded shape**: numbered steps, icon badges, the before/after slider handle.
- **Typography does the hierarchy**: large, tight, medium-weight headings; quiet grey body text; small uppercase labels.
- **Restrained motion**: colour changes and slow image zooms on hover, nothing that bounces or slides in on scroll.
- Copy is Polish, addressed to the reader in the second person singular, capitalised `Ty/Cię/Ciebie`.

## 2. Colour

All colours are CSS variables in `:root` of `app/globals.css`.

| Token | Value | Use | Contrast on `--background` |
| --- | --- | --- | --- |
| `--background` | `#f3f3f1` | Page background, header, menu panel | — |
| `--section-tint` | `#eee9e1` | Tinted bands (`.section-tinted`), image placeholders, certificate tiles | — |
| `--surface` | `#ffffff` | Text on dark buttons, cookie banner, photo tile backgrounds | — |
| `--foreground` | `#202020` | Headings, primary text, filled button, links at rest | 14.7 : 1 |
| `--accent` | `#444444` | Eyebrows, lead paragraphs, article body | 8.8 : 1 |
| `--muted` | `#666666` | Body paragraphs (global `p`), meta lines, inactive filters | 5.2 : 1 (4.75 on tint) |
| `--line` | `#d6d6d2` | All hairlines and 1px borders, image loading background | decorative |
| `--beige` | `#76614d` | The accent: link hover/active, focus outline, header bottom border, small category labels, icons in circles, list markers | 5.3 : 1 |
| `--brown` | `#665444` | Dark brown surfaces: footer background, filled step circle on `/kontakt` | 6.5 : 1 |
| `--text` | `#f7f4ef` | Text on the `--brown` footer | 6.6 : 1 on footer |
| `--footer-heading` | `#fffdf9` | Footer headings, footer link hover and focus | — |

Colours in use without a token (see §11): hero brown `#9b7964`, warm white `#fffaf5` (text on hero imagery) and the overlay brown `rgba(42, 29, 22, α)` for darkening photos.

Rules:
- `--beige` is the **only** accent. Don't introduce a second accent colour (no gold, pink, green).
- Text colour on light backgrounds is one of `--foreground`, `--accent`, `--muted` or `--beige`. Nothing else.
- Darken photos with the overlay brown, never with pure black.
- Pure `#fff` / `#000` only inside the full-screen image viewer and the before/after slider, and as `mask-image` stops.

## 3. Typography

One family: **Geist** (`--font-geist-sans`, loaded in `app/layout.tsx`), fallback Arial. Weights: 400 body, 500 headings and emphasis, 700 only for small uppercase labels and buttons. No serif. Italic is used on purpose only for the price-category headings on `/cennik`; don't use it elsewhere.

### Scale

| Role | Size | Line height | Other | Where |
| --- | --- | --- | --- | --- |
| Display (hero `h1`) | `--heading-display-size` (34 → 65px) | 0.9 | `max-width: 9ch` in `PageHero` | `PageHero`, `/o-mnie` hero |
| `h1` | `--heading-1-size` (32 → 48px) | 0.98 | 500, `-0.03em` | Page titles; large quotes |
| `h2` | `--heading-2-size` (28 → 40px) | 1 | 500, `-0.03em` | Section titles |
| Card title | `--heading-card-size` (24 → 32px) | — | | Treatment cards in a grid |
| `h3` | `--heading-3-size` (18 → 24px) | default | set 500 in the module (the global `h3` has no weight, so it renders bold) | Step titles, values, certificate names |
| Lead | `1.05rem` | 1.6 | `--accent` | First paragraph under a hero or quote heading |
| Body | `1rem` | 1.6 | `--muted` (global `p`) | All paragraphs |
| Article body | `1.0625rem` | 1.8 | `--accent`, measure `42rem` | Blog posts |
| Small / meta | `0.85–0.95rem` | 1.5 | `--muted` | Prices, dates, card meta, captions |
| Label | `0.75rem` | — | uppercase, `0.08em` (or `0.14em`), `--beige` or `--accent` | Category over a card, step subtitle, section and hero eyebrow |
| Button / text link | `0.75rem` | — | 700, uppercase, `0.08em` | `.button-outline`, `.text-link` |

On desktop each step of the scale is about 1.2–1.33× the next one (65 / 48 / 40 / 32 / 24px); keep that rhythm if a token ever changes. All heading sizes are fluid `clamp()` tokens; never write a new `clamp()` or a fixed `rem` size for a heading. The size follows the role, not the page:

- Page title `h1` without a photo hero (`/galeria`, `/blog`, `/cennik`, `/kontakt`, blog article, legal pages): `--heading-1-size` (the global `h1`, no override).
- Section `h2`: `--heading-2-size` (global). Article `h2` too.
- Sub-heading inside a section, document or banner (article `h3`, legal sections, cookie banner title, blog card title, step and value titles): `--heading-3-size`.
- Group heading in a list and treatment card title (`/cennik` categories, treatment grid): `--heading-card-size`.
- Allowed emphasis: a quote `h2` set at `--heading-1-size` (`/o-mnie`), the hero `h1` at `--heading-display-size`.

Line height may be adjusted locally for long multi-line titles (e.g. `1.05` on blog article titles); the size may not.

### Text rules
- **Eyebrow** (`.eyebrow`): a short line above a section heading styled as a Label: `0.75rem`, uppercase, `0.14em`, `--beige`. Write the markup in normal sentence case; uppercase is CSS only. On a dark background or photo, override the colour locally (like the hero's `#fffaf5`).
- **Readable measure**: headings in `.section-heading` max `38rem`; paragraphs about `28–42rem`; article body `42rem`. Long headings may be capped in `ch` (`13ch`, `14ch`).
- **Justified text** (client request): only long running text is justified, through the global `.text-justified` class (`text-align: justify` on `p` descendants except `.eyebrow`), on mobile and desktop but not on tablet (640–1023px): two-column text is too narrow there and the gaps get too wide. Put it on the wrapper of that text, never on the global `p` (it would break inherited centring). There is no automatic hyphenation: `hyphens: auto` looks poor in Polish, so the word gaps stretch instead, which reads well only in long text, so keep justified blocks long and wide. The class only affects `p`; list items (`li`), `dd` and headings are never justified. To opt a paragraph out inside a justified wrapper, give it its own `text-align` in the module (a class + `p` selector wins, as on the `/o-mnie` values).
  - **Justified**: on `/o-mnie` only the first two paragraphs (hero lead, wrapper `.body` in `about-hero`; the knowledge text, on its section); on treatment pages the intro (`forWho` paragraphs), the description, the recovery paragraphs (the `.text-justified` sections, not the lists in them).
  - **Exception, treatment pages**: the text stays justified on tablet too, but only together with `hyphens: auto` there (640–1023px). The two text columns are narrow at that width and justification needs hyphenation to avoid wide gaps. It is a local rule in `treatment-detail.module.css` that overrides the global tablet opt-out. Mobile and desktop have no hyphenation.
  - **Never justified**: the whole blog (article body and lead, cards, featured post), the legal pages (terms, privacy policy), treatment cards (home and `/zabiegi`), FAQ answers, hero descriptions, the treatment gallery description, `/cennik`, `/kontakt`, `/galeria`, the home page, the footer, the cookie banner, eyebrows, labels, meta lines, captions and centred text.
- Numbers in tables of hours or prices use `font-variant-numeric: tabular-nums`.

## 4. Layout

### Container and sections
Every section uses the global classes; don't recreate them in modules.

| Class | What it does |
| --- | --- |
| `.section-shell` | Content column `max-width: var(--content-max-width)` (1180px), centred. Padding `2.5rem 1.25rem` mobile, `2.5rem 2rem` from 640px. Top padding `1rem` when the section starts with breadcrumbs. |
| `.section-tinted` | Full-width `--section-tint` band; content stays aligned to the content column. Combine with `.section-shell`. |

Anything that has to line up with the content column outside `.section-shell` (header, footer, hero container, full-width hairlines) uses `--content-max-width`, never a literal `1180px`. Inset to the column with `max(<gutter>, calc((100% - var(--content-max-width)) / 2 + <gutter>))`.
| `.section-heading` | Section header: eyebrow, `h2`, optional description. `max-width: 38rem`, `margin-bottom: 2.25rem`. |
| `.section-heading-row` | Heading and an action side by side. |

- Prefer `PageSection` (`components/page-section.tsx`) for a standard section: it renders `.section-shell`, the `.section-heading` header, the eyebrow, the heading (`h2` or `h1`) and `aria-labelledby`.
- **Section rhythm**: sections sit directly on top of each other with their own `2.5rem` padding. Alternate plain and tinted bands to separate topics; between two plain sections use a hairline if they need separation, not extra padding.
- Typical page: hero → content sections (plain / tinted alternating) → `FaqSection` (tinted) and/or `BookingCta` (tinted) → footer.
- Full-bleed content (hero imagery) breaks out of the column with `width: 100vw; margin-left: 50%; transform: translateX(-50%)`, as in `PageHero`.

### Breakpoints and columns
Only `min-width: 640px` (tablet) and `min-width: 1024px` (desktop). The single exception is the site header: the desktop nav appears at `min-width: 800px`, because all links fit in one row only from that width. Mockup frames are 390 / 768 / 1440 px wide; they are not breakpoints.

| | Mobile < 640 | Tablet ≥ 640 | Desktop ≥ 1024 |
| --- | --- | --- | --- |
| Side gutter | `1.25rem` | `2rem` | `2rem` (content max `--content-max-width`) |
| Typical card grid | 1 column (or list rows) | 2–3 columns | 3 columns |
| Photo grid | 2–3 columns, gap `0.15–0.25rem` | 4 columns, gap `0.5rem` | 4 columns |
| Two-part section (text + media/list) | stacked | stacked or 2 equal columns | 2 columns: `2fr 3fr`, `1fr 1fr` or `4fr 6fr`, column gap `4rem` |

Use `minmax(0, 1fr)` in grid tracks and `min-width: 0` on flex/grid text children so long Polish words don't overflow. Where a block only changes position across breakpoints, use grid areas and keep one DOM element.

### Spacing
The site uses `rem` values on a loose 0.25rem grid. Reuse these steps:

| Step | Typical use |
| --- | --- |
| `0.25–0.5rem` | Label to title, icon to text, photo grid gaps |
| `0.75rem` | Button groups, small list gaps |
| `1rem` | Between paragraphs, `h2` bottom margin, card inner gaps |
| `1.25–1.5rem` | Card grid gaps, list item padding, `h1` bottom margin |
| `2–2.5rem` | Column gaps on tablet, section padding, heading → content on mobile |
| `3–4rem` | Column gaps on desktop, large separations inside a section |

## 5. Lines, shapes and depth

- **Hairlines**: `1px solid var(--line)`. Used for list separators (FAQ, certificates, values, price list), dividing a section from the one above (inset to the content column), vertical dividers in fact columns and info blocks (`border-left` + `padding-left: 1.25rem`), and around the map and treatment images.
- **Header**: `1px` bottom border in `--beige` that thickens while collapsing.
- **Radius**: `0` everywhere. `50%` only for circles.
- **Circles**: 1px border, content centred. Numbered steps with a `--beige` (or `--brown`) border and the number in the same colour; icon badges `3.5rem` (`4rem` desktop) with a `--line` border and a `--beige` icon.
- **Shadows**: essentially none. Allowed only on floating layers (open mobile menu `0 0.75rem 1.5rem rgba(32,32,32,.08)`, cookie banner) and a very soft one on featured photos (`0 18px 38px rgba(32,32,32,.05–.08)`).

## 6. Components and patterns

Reuse before building. If a pattern below fits, use it as is.

### Buttons and links
All buttons are square, 1px border, no icons unless they identify a channel (Instagram, WhatsApp, Messenger). Labels are short Polish verbs ("Umów konsultację", "Zobacz zabiegi").

| Class | Look | When |
| --- | --- | --- |
| `.button` | Filled `--foreground`, white text; hover: transparent + dark text | Rare, strong primary action |
| `.button .button-outline` | Uppercase 0.75rem/700, 1px currentColor border; hover: fills dark | Default primary CTA |
| `.button .button-outline .button-outline-beige` | Same; hover fills `--beige` | Booking CTAs in content sections, contact channels |
| `.button .button-outline-secondary` | Text-only uppercase, underline + `--beige` on hover | Secondary action next to a primary one |
| `.text-link` | Uppercase 0.75rem/700, centred block | "Zobacz więcej" under a grid |
| `.interactive-underline` | Underline + `--beige` on hover/focus/`aria-pressed` | Text buttons (filters, tabs) |

- Booking: always `CTAButton` (`components/cta-button.tsx`). It points to `siteConfig.bookingUrl` and keeps analytics working.
- Max two buttons in a group, primary first, `gap: 0.75rem` (or `0.75rem 1.25rem` centred). On mobile a button that is the section's last element may go full width; two buttons side by side use `grid-template-columns: 1fr 1fr`.
- Touch targets: at least `2.75rem` (44px) high.
- Plain links: inherit colour, no underline at rest; hover/focus/current → `--beige` + underline (`--link-underline-thickness`, `--link-underline-offset`). Links inside long text (articles, cookie banner) are underlined at rest.

### Section header
Eyebrow (`.eyebrow`) → `h2` → optional description `p`. Left-aligned. Centred only in `BookingCta` and the desktop `/cennik` intro.

### Filters and tabs
Text buttons in a wrapping row (`gap: 0.25rem 1.25rem`), `--muted` at rest, active one `--beige` and underlined (`aria-pressed` / `aria-selected`). Long lists collapse behind "Więcej..." (2 visible on mobile, 3 on tablet, all on desktop). Use `CategoryFilter` (`components/category-filter.tsx`).

### Lists of items
- **Hairline list**: items separated by `border-top: 1px solid var(--line)`, last item also `border-bottom`; vertical padding `1–1.75rem`. Used for FAQ, values, certificates on mobile, price rows.
- **FAQ**: native `<details>` via `FaqItem` / `FaqSection` with a `▾` marker that rotates.
- **Numbered steps**: `<ol>` with circles carrying the number (see §5).
- **Meta line**: items separated by `·` in `--muted`, `0.85rem` ("Organizator · Rok"). Blog `PostMeta` (date and reading time only) marks each item with a decorative `1rem` icon (`CalendarDays`, `Clock`) instead of the dot. The article author is shown at the end of the post, in the article footer ("Tekst: …").

### Cards
No box, border or background: an image on top, text below, aligned to the image edge.
- Image: fixed aspect ratio, `object-fit: cover`, hover zoom inside an `overflow: hidden` wrapper.
- Then a small uppercase category label in `--beige`, the title (`h3` or `--heading-card-size`), 2–3 lines of `--muted` text, and a meta row pinned to the bottom (`margin-top: auto`) with a top hairline.
- When the whole card is a link, use a stretched `::after` link instead of nesting links (see `blog-card`).
- In a multi-column grid, make the card a subgrid (`grid-row: span <number of children>; grid-template-rows: subgrid`) so titles, text and meta of neighbouring cards line up even when a title wraps to more lines. The parent grid then has `row-gap: 0` and the space between card rows comes from the cards' `margin-top` (see `blog-card` and `post-grid`). Wrappers between the card and its content (`treatment-list-item`: card → row → copy) must be subgrids too, and each subgrid sets `row-gap: 0` because it inherits the parent's row gap.

### Imagery
- Always `next/image`. Photos are warm and natural; never add saturated colour filters.
- Common aspect ratios: `4 / 5` gallery thumbnails, `5 / 3` treatment and blog cards, `4 / 3` certificate tiles and featured posts, `8 / 5` and `5 / 4` treatment detail, `3 / 2` article images. Reuse one of these before inventing a new ratio.
- Placeholder background while loading: `--line` or `--section-tint`.
- Hero photos may fade into the page with `mask-image` gradients instead of a hard edge (`/o-mnie` hero).
- Hover zoom: `transform: scale(var(--image-hover-scale))` over 250ms on gallery and treatment images; a subtle `1.03–1.04` over 500–600ms on blog images.

### Icons
lucide-react only, always `className="icon"`, size through `--icon-size` on a parent (default `1.15rem`; `1rem` in dense rows, `1.25–1.5rem` in badges and quotes). Icons are line icons in `currentColor`; accent icons are `--beige`. Brand glyphs come from `components/icons/`.

### Existing building blocks
`PageHero`, `PageSection`, `BookingCta`, `FaqSection`/`FaqItem`, `CTAButton`, `Breadcrumbs`, `CategoryFilter`, `TreatmentList`/`TreatmentListItem`, `GalleryGrid`/`GalleryPreview`, `Visit`, `Carousel`, `Testimonial`, `LegalDocument`, `StatusPage`, `BackgroundVideo`, `SiteHeader`, `SiteFooter`. Route-specific ones live in `app/<route>/components/`.

## 7. Hero

Two hero styles exist; a new page should use one of them.
- **`PageHero`** (home, `/zabiegi`): full-bleed photo or video. Mobile: light warm gradient over the photo, dark text. From 640px: dark-brown overlay (`rgba(42,29,22,…)`) with warm-white `#fffaf5` text and white outline buttons. Display-size `h1`, uppercase eyebrow, short description.
- **Editorial split** (`/o-mnie`, treatment pages): text column + photo column on desktop, photo first on mobile. No overlay; the photo fades into the background or sits in a 1px `--line` frame.
- Pages without a photo (`/galeria`, `/blog`, `/cennik`, `/kontakt`, legal) start with a plain `.section-shell` and a `.section-heading` holding the `h1`, optionally with breadcrumbs above.

## 8. Interaction states

- **Hover**: colour change to `--beige` (links, text buttons), fill swap (buttons), image zoom (cards). No movement or size change of text and buttons.
- **Focus**: one global rule in `app/globals.css`: `:focus-visible { outline: var(--focus-width) solid var(--focus-color); outline-offset: var(--focus-offset) }` (2px, `--beige`, 3px). Never write an `outline` in a module; set the variables instead:
  - `--focus-color` on a dark container (footer → `--footer-heading`, image viewer → `--section-tint`, buttons on the hero photo → `#fffaf5`). Links take it from `--link-hover-color`, so set it on the link itself, not on a parent.
  - `--focus-offset: -2px`/`-3px` on elements whose outline would overlap a neighbour or get clipped (photo tiles, pager buttons).
  - The only places that draw an outline themselves use the same variables: the stretched link on blog cards (outline on `::after`) and the before/after slider (outline on the handle, not the hidden range input).
  - Never remove focus without a replacement.
- **Active / current**: same as hover, plus underline (`aria-current="page"`, `aria-pressed="true"`, `aria-selected="true"`, `data-active="true"`).
- **Disabled / empty**: a quiet `--muted` message (`BlogEmptyState`), no greyed-out controls.

## 9. Motion

- Durations: `180ms ease` for colour, background and border; `250ms` for image zoom; `340–450ms` for accordions and carousels; `500–600ms` only for slow blog image zoom.
- Gallery thumbnails may fade-and-rise in on mobile (staggered 70ms); no other entrance animations.
- Every transition or animation gets a `@media (prefers-reduced-motion: reduce)` override that removes it.

## 10. Mockups

For agents designing a page or section before implementation (Claude Design, HTML mockups in `docs/design/`):

- Use **only the tokens in this file**, with their real values, so the handoff maps 1:1 to the code. Write colours as the hex values from §2 and fonts as Geist.
- Frames: **390** (mobile), **768** (tablet, covers 640–1023) and **1440** (desktop). Show the layout change at each frame.
- Use real Polish copy from `data/` or the client; mark placeholders clearly.
- Use real images from `public/images/`; don't invent stock photos.
- Draw icons from Lucide and name them in the handoff (`GraduationCap`, `Quote`…).
- Show the page with the real header and footer for context, but mark them out of scope unless they are the subject.
- Every handoff (`docs/design/<topic>/HANDOFF.md`) lists: scope, what changes, final copy, which existing components/classes/tokens to reuse, the layout per breakpoint, an acceptance checklist and open questions. Where the mockup needs something this guide does not have, say so explicitly as an open question instead of silently introducing it.

## 11. Known inconsistencies

Existing deviations. Don't copy them into new work; fix them only when asked.

- Hero colours `#9b7964`, `#fffaf5` and the overlay brown `rgba(42, 29, 22, α)` have no tokens; `#fffaf5` overlaps with `--text` `#f7f4ef`.