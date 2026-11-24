# WW-ESTHE style guide

The single source of truth for how the site looks. Read it before designing a mockup or changing any UI. It describes the design system **as it is implemented** in `app/globals.css` and the CSS Modules; when this file and the code disagree, the code wins and this file must be updated in the same change.

- Code rules (architecture, TypeScript, accessibility, SEO, validation) live in [CLAUDE.md](../CLAUDE.md). This file covers only the visual layer and does not repeat them.
- Every value below is a **token or a class to reuse**, not a number to copy. If a design needs something that is not here, pick the nearest existing value; add a new token only when nothing fits, and add it to this file in the same change.

## 1. Character

Calm, warm-neutral, editorial. A small studio, not a clinic and not a fashion brand.

- **Photography carries the colour.** The UI itself is almost monochrome: off-white background, near-black text, one warm brown accent.
- **Flat and square.** No rounded corners, no cards with shadows, no gradients on UI elements. Structure comes from 1px hairlines (`--line`), whitespace and tinted bands.
- **Circles are the only rounded shape**: numbered steps, icon badges, the before/after slider handle.
- **Typography does the hierarchy**: light uppercase Montserrat headings; quiet Geist body text; small uppercase labels.
- **Restrained motion**: colour changes and slow image zooms on hover, nothing that bounces or slides in on scroll.
- Copy is Polish, addressed to the reader in the second person singular, capitalised `Ty/Cię/Ciebie`.

## 2. Colour

All colours are CSS variables in `:root` of `app/globals.css`.

| Token | Value | Use | Contrast on `--background` |
| --- | --- | --- | --- |
| `--background` | `#f3f3f1` | Page background, header, menu panel | — |
| `--section-tint` | `#d5cdc2` | Tinted bands (`.section-tinted`; the gift-voucher colour), image placeholders, certificate tiles | — |
| `--surface` | `#ffffff` | Text on a hovered secondary button, cookie banner, photo tile backgrounds | — |
| `--foreground` | `#202020` | Headings, primary text, links at rest | 14.7 : 1 |
| `--accent` | `#444444` | Eyebrows, lead paragraphs, article body | 8.8 : 1 |
| `--muted` | `#666666` | Body paragraphs (global `p`), meta lines, inactive filters | 5.2 : 1 (4.75 on tint) |
| `--line` | `#d6d6d2` | All hairlines and 1px borders, image loading background | decorative |
| `--beige` | `#76614d` | The accent: primary and secondary buttons, button links, link hover/active, focus outline, header bottom border, small category labels, icons in circles, list markers | 5.3 : 1 |
| `--brown` | `#665444` | Dark brown surfaces: footer background, filled step circle on `/kontakt`, primary button hover (via `--button-primary-hover`) | 6.5 : 1 |
| `--text` | `#f7f4ef` | Text on the `--brown` footer | 6.6 : 1 on footer |
| `--footer-heading` | `#fffdf9` | Footer headings, footer link hover and focus, text on the primary button | 5.8 : 1 on `--beige` |

Colours in use without a token (see §11): hero brown `#9b7964`, warm white `#fffaf5` (text on hero imagery) and the overlay brown `rgba(42, 29, 22, α)` for darkening photos.

Google Maps attribution is the one place where Google's own look wins over the tokens: the official Google Maps logo is used unchanged (no recolouring, cropping or effects), and its text fallback is `Google Maps` in Roboto/system sans-serif 400, `#5e5e5e`, never uppercase. Don't reuse that grey anywhere else.

Inside `.section-tinted` (and the map facade) `--muted` is redefined as `--accent`, `--line` becomes a 14% `--foreground` mix, and eyebrows, link hover, `.button-secondary` and `.button-link` use `--brown`: `--muted` (3.65 : 1) and `--beige` (3.72 : 1) fail 4.5 : 1 as small text on `#d5cdc2`. `--beige` stays fine for icons, borders and the focus ring (3 : 1). Put no other `--beige` text on the tint; use `--brown`.

Rules:
- `--beige` is the **only** accent. Don't introduce a second accent colour (no gold, pink, green).
- Text colour on light backgrounds is one of `--foreground`, `--accent`, `--muted` or `--beige`. Nothing else.
- Darken photos with the overlay brown, never with pure black.
- Pure `#fff` / `#000` only inside the full-screen image viewer and the before/after slider, and as `mask-image` stops.

## 3. Typography

Two families, both loaded in `app/layout.tsx`: **Geist** (`--font-geist-sans`) for body text and UI, fallback Arial; **Montserrat** 300 (`--font-display`, normal only, no italic) for `h1`–`h3`, set globally in uppercase with `0.04em` letter-spacing and line height `1.15`. Write heading text in normal sentence case; uppercase is CSS only. Geist weights: 400 body, 500 emphasis, 700 only for small uppercase labels and buttons.

**Which typeface:** Montserrat uppercase for short names: page and section titles, treatment, card, step and value titles (certificate names on `/o-mnie` are treatment names, so they count). Geist in sentence case, through the `.heading-text` class, for titles that are a sentence or question meant to be read, headings inside long-form documents, and small labels and UI chrome:
- the blog: article title `h1`, featured post title, blog card titles (also on the home page and under related posts), the empty state, article body `h2`/`h3`. Article titles are long questions that would take 3–4 uppercase lines on a card, so blog cards stay Geist next to Montserrat treatment cards on purpose;
- treatment pages (`/zabiegi/[slug]`): every `h2`/`h3`, including the shared sections on the page (video, "Moje prace"); only the hero headings (treatment name `h1` and the subtitle `h2` "Dla kogo jest zabieg?") and the FAQ title `h2` (as on other pages) are Montserrat. The page has many long content headings (client decision). Set by `.page :is(h2, h3):not(.heroSubtitle, .faq h2)` in `treatment-detail.module.css`;
- legal section headings, the FAQ contact `h3`, the "Godziny otwarcia" / "Parking" labels on `/kontakt`, the cookie banner title;
- the footer group headings reset only `font-family` and keep their own uppercase label style. One serif exception: **Cormorant Garamond** 500 (`--font-serif`, loaded in `components/about-stats.tsx`, so it is preloaded only where the stats render) for the stat numbers of the shared `AboutStats` component (`AboutMe` section on home and contact and the `/o-mnie` hero); don't use it elsewhere. Italic is not used anywhere.

### Scale

| Role | Size | Line height | Other | Where |
| --- | --- | --- | --- | --- |
| Display (hero `h1`) | `--heading-display-size` (32 → 48px) | 1.15 | `max-width: 13ch` in `PageHero` | `PageHero`, `/o-mnie` hero |
| `h1` | `--heading-1-size` (28 → 40px) | 1.15 | Montserrat 300, uppercase | Page titles; large quotes |
| `h2` | `--heading-2-size` (24 → 32px) | 1.15 | Montserrat 300, uppercase | Section titles |
| Card title | `--heading-card-size` (18 → 24px) | 1.15 | Same value as `h3`; the roles stay distinct | Treatment cards in a grid |
| `h3` | `--heading-3-size` (18 → 24px) | 1.15 | Montserrat 300, uppercase | Step titles, values, certificate names |
| Lead | `1.05rem` | 1.6 | `--accent` | First paragraph under a hero or quote heading |
| Body | `1rem` | 1.6 | `--muted` (global `p`) | All paragraphs |
| Article body | `1.0625rem` | 1.8 | `--accent`, measure `42rem` | Blog posts |
| Small / meta | `0.85–0.95rem` | 1.5 | `--muted` | Prices, dates, card meta, captions |
| Label | `0.75rem` | — | uppercase, `0.08em` (or `0.14em`), `--beige` or `--accent` | Category over a card, step subtitle, section and hero eyebrow |
| Button / text link | `0.75rem` | — | 700, uppercase, `0.08em` | `.button`, `.text-link` |

On desktop each step of the scale is about 1.2–1.33× the next one (48 / 40 / 32 / 24px); keep that rhythm if a token ever changes. All heading sizes are fluid `clamp()` tokens; never write a new `clamp()` or a fixed `rem` size for a heading. The size follows the role, not the page:

- Page title `h1` without a photo hero (`/galeria`, `/blog`, `/cennik`, `/kontakt`, blog article, legal pages): `--heading-1-size` (the global `h1`, no override).
- Section `h2`: `--heading-2-size` (global). Article `h2` too.
- Sub-heading inside a section, document or banner (article `h3`, legal sections, cookie banner title, blog card title, step and value titles): `--heading-3-size`.
- Group heading in a list and treatment card title (`/cennik` categories, treatment grid): `--heading-card-size`.
- Allowed emphasis: a quote `h2` set at `--heading-1-size` (`/o-mnie`), the hero `h1` at `--heading-display-size`.

Line height may be adjusted locally for long multi-line titles (not below `1.1` for Montserrat headings; the Geist article title uses `1.05`); the size may not.

### Text rules
- **Eyebrow** (`.eyebrow`): a short line above a section heading styled as a Label: `0.75rem`, uppercase, `0.14em`, `--beige`. Write the markup in normal sentence case; uppercase is CSS only. On a dark background or photo, override the colour locally (like the hero's `#fffaf5`).
- **Readable measure**: headings in `.section-heading` max `38rem`; paragraphs about `28–42rem`; article body `42rem`. Long headings may be capped in `ch` (`13ch`, `14ch`).
- **Justified text** (client request): only long running text is justified, through the global `.text-justified` class (`text-align: justify` on `p` descendants except `.eyebrow`), on mobile and desktop but not on tablet (640–1023px): two-column text is too narrow there and the gaps get too wide. Put it on the wrapper of that text, never on the global `p` (it would break inherited centring). There is no automatic hyphenation: `hyphens: auto` looks poor in Polish, so the word gaps stretch instead, which reads well only in long text, so keep justified blocks long and wide. The class only affects `p`; list items (`li`), `dd` and headings are never justified. To opt a paragraph out inside a justified wrapper, give it its own `text-align` in the module (a class + `p` selector wins, as on the `/o-mnie` values).
  - **Justified**: only on treatment pages: the intro (`forWho` paragraphs), the description, the recovery paragraphs (the `.text-justified` sections, not the lists in them).
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
| `.section-heading-row` | Heading and an action (e.g. a `.text-link`) side by side, action bottom-aligned with the description, from 640px; on mobile the action moves below the section content. Rendered by `PageSection` when `action` is passed. |

- Prefer `PageSection` (`components/page-section.tsx`) for a standard section: it renders `.section-shell`, the `.section-heading` header, the eyebrow, the heading (`h2` or `h1`) and `aria-labelledby`.
- **Section rhythm**: sections sit directly on top of each other with their own `2.5rem` padding. Alternate plain and tinted bands to separate topics; between two plain sections use a hairline if they need separation, not extra padding.
- Typical page: hero → content sections (plain / tinted alternating) → `FaqSection` (tinted) and/or `BookingCta` (tinted) → footer. The home page is the exception: its `BookingCta` sits mid-page, between "Twoja wizyta krok po kroku" and "Moje prace".
- Full-bleed content (hero imagery) breaks out of the column with `width: 100vw; margin-left: 50%; transform: translateX(-50%)`, as in `PageHero`.

### Breakpoints and columns
Only `min-width: 640px` (tablet) and `min-width: 1024px` (desktop). Two documented exceptions:
- The site header: the desktop nav appears at `min-width: 800px`, because all links fit in one row only from that width.
- The Google reviews section on the home page: the reviews turn from a carousel into three columns at `min-width: 768px`. Below that a review column would be too narrow for the quote. Mockup frames are 390 / 768 / 1440 px wide; they are not breakpoints.

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
- **Radius**: `0` for photos, cards and sections. Controls (buttons) use `--radius-control` (3px). `50%` only for circles.
- **Circles**: 1px border, content centred. Numbered steps with a `--beige` (or `--brown`) border and the number in the same colour; icon badges `3.5rem` (`4rem` desktop) with a `--line` border and a `--beige` icon.
- **Shadows**: essentially none. Allowed only on floating layers (open mobile menu `0 0.75rem 1.5rem rgba(32,32,32,.08)`, cookie banner) and a very soft one on featured photos (`0 18px 38px rgba(32,32,32,.05–.08)`).
- **Embossed monogram**: the WW mark (`Monogram`, `components/monogram.tsx`) filled with the colour of the surface it sits on, so only two `drop-shadow`s show it: a light edge top-left (`-1px -1px 0 rgb(255 250 245 / 65%)`) and a dark edge bottom-right (`1.2px 1.4px 1px rgb(29 29 27 / 20%)`). Decorative (`aria-hidden`), absolutely positioned and cropped by the section's `overflow: hidden`, behind the content. Used only in `BookingCta`; it is the only shadow outside floating layers and photos. Don't add it to other sections without a design.

## 6. Components and patterns

Reuse before building. If a pattern below fits, use it as is.

### Buttons and links
`.button` is only the shared base and always takes one level modifier. All levels have the same type (uppercase 0.75rem/700, `letter-spacing: 0.08em`) and height (`padding: 0.8rem 1rem`; `.button-link` `padding-inline: 0.25rem`), a 1px border and `--radius-control` corners. Labels are short Polish verbs ("Zarezerwuj wizytę", "Zapytaj o zabieg"). A button with a direct `.icon` child becomes an inline-flex row with a `1rem` icon. The cookie banner uses the same buttons.

| Level | Class | Look | When |
| --- | --- | --- | --- |
| 1. Primary | `.button .button-primary` | `--beige` fill, `--footer-heading` text; hover `--button-primary-hover` (`--brown`) | **Booking** (Booksy), the main choice in the cookie banner. At most one per screen. |
| 2. Secondary | `.button .button-secondary` | `--beige` border and text; hover fills `--beige`, `--surface` text | **Alternative**: a question (Instagram) next to a primary button; other standalone secondary actions. |
| 3. Link | `.button .button-link` | `--beige` text, no border, underline on hover/focus | A text action next to a secondary button (map facade, review links, error pages). |

Other link styles: `.text-link` (uppercase, centred block: "Zobacz więcej" under a grid, a link below a button pair), a plain `<a>` (navigation in content, lists of contact channels), `.interactive-underline` (text buttons: filters, tabs).

- Booking: always `BookingButton`, questions: always `MessageButton` (`components/cta-buttons.tsx`). They point to `siteConfig.bookingUrl` (Booksy) and `siteConfig.messageUrl` (Instagram DM) and keep analytics working. "Umów konsultację" is not used.
- Only a secondary button stands next to a primary one; never two primary buttons. A link never shares a row with buttons: it goes on its own line below the pair.
- Every button group (a pair, or a button with a `.button-link`) is wrapped in `.button-group` (`globals.css`), primary first: a full-width column with centred labels on mobile, a row from 640px. Add `.button-group-center` to centre the row (`BookingCta`, map facade). The module only adds context (`margin-top`, `grid-area`). The same gap on every page; don't add a wider column gap.
- External links (`target="_blank"`) always use `rel="noopener noreferrer"`.
- The full list of channels (Instagram, WhatsApp, Messenger, phone, e-mail) appears only as links with icons: `ChannelLinks` on `/kontakt` and in the footer. The FAQ contact block (below the questions on mobile and tablet, left column on desktop) pairs a vertical `ChannelLinks` ("Zapytaj") with a `BookingLink` to Booksy ("Zarezerwuj").
- Touch targets: at least `2.75rem` (44px) high.
- Plain links: inherit colour, no underline at rest; hover/focus/current → `--beige` + underline (`--link-underline-thickness`, `--link-underline-offset`). Links inside a sentence are underlined at rest: `.inline-link`, or a module rule in long text (articles, cookie banner).

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
- When the whole card is a link, use a stretched `::after` link instead of nesting links (see `components/blog/blog-card`).
- Blog cards outside the blog (the home page "Blog" section) use `PostGrid` with `compact`: no description, the subgrid spans 4 rows instead of 5. On the home page `PostGrid` gets `carousel` and shows its 3 posts in a carousel below 1024px.
- In a multi-column grid, make the card a subgrid (`grid-row: span <number of children>; grid-template-rows: subgrid`) so titles, text and meta of neighbouring cards line up even when a title wraps to more lines. The parent grid then has `row-gap: 0` and the space between card rows comes from the cards' `margin-top` (see `blog-card` and `post-grid`). Wrappers between the card and its content (`treatment-card`: card → row → copy) must be subgrids too, and each subgrid sets `row-gap: 0` because it inherits the parent's row gap.

### Carousel
`Carousel` (`components/carousel/`) turns a row of cards into a horizontal scroller on small screens. Use it for card rows on the home page (treatments, reviews, blog); full lists on their own pages stay grids.
- Native horizontal scroll with `scroll-snap` to the left content edge; no arrows, dots, autoplay or looping ("light and premium", client decision).
- Item width: `90%` of the content column on mobile (a peek of the next card), `47%` from 640px (two cards and an edge of the third). Gap `1.25rem`. The track bleeds to the right screen edge by the `.section-shell` gutter, so the peek is not cut off.
- Items stretch to equal heights; the meta row stays at the bottom of the card.
- Under the track a segmented 1px line, one segment per item: `--line`, the active one `--foreground` (`180ms` colour transition, none with reduced motion). Decorative (`aria-hidden`).
- `until="desktop"` (default): a carousel below 1024px. `until="tablet"`: below 768px, only for the reviews (the documented exception, §4). From the breakpoint the section's own grid, passed as `className`, takes over.
- The track is a focusable named region (`tabindex="0"`, `aria-label`), so arrow keys scroll it; a `ul` track keeps its list semantics.
- Its styles live in the `components` cascade layer, so a section class on the track always overrides them. Set the section's grid only from the breakpoint up.

### Imagery
- Always `next/image`. Photos are warm and natural; never add saturated colour filters.
- Common aspect ratios: `4 / 5` gallery thumbnails, `5 / 3` treatment and blog cards, `4 / 3` certificate tiles and featured posts, `8 / 5` and `5 / 4` treatment detail, `3 / 2` article images. Reuse one of these before inventing a new ratio.
- Placeholder background while loading: `--line` or `--section-tint`. Hero photos (home, `/zabiegi`, `/o-mnie`) show a blurred version of themselves instead: import the image statically so Next generates its `blurDataURL` (`placeholder="blur"` on `<Image>`; `PageHero` handles it itself).
- **Third-party embeds** (the Google map on `/kontakt`) load only on click. Until then the frame shows a facade: `--section-tint` background, a `--beige` icon badge (§5), one short `p` saying where the content comes from, a `.button-secondary` button that loads it and a `.button-link` link to the external page (`MapEmbed`).
- Hero photos may fade into the page with `mask-image` gradients instead of a hard edge (`/o-mnie` hero).
- Hover zoom: `transform: scale(var(--image-hover-scale))` over 250ms on gallery and treatment images; a subtle `1.03–1.04` over 500–600ms on blog images.

### Icons
lucide-react only, always `className="icon"`, size through `--icon-size` on a parent (default `1.15rem`; `1rem` in dense rows, `1.25–1.5rem` in badges and quotes). Icons are line icons in `currentColor`; accent icons are `--beige`. Brand glyphs come from `components/icons/`.

### Existing building blocks
`PageHero`, `PageSection`, `BookingCta`, `Carousel`, `Monogram`, `FaqSection`/`FaqItem`, `BookingButton`/`MessageButton`, `ChannelLinks`, `Breadcrumbs`, `CategoryFilter`, `PostGrid`/`BlogCard`/`PostMeta` (`components/blog/`), `TreatmentCard`, `GalleryGrid`/`GalleryPreview`, `Visit`, `GoogleReviews`, `LegalDocument`, `StatusPage`, `BackgroundVideo`, `SiteHeader`, `SiteFooter`. Route-specific ones live in `app/<route>/components/`.

## 7. Hero

Two hero styles exist; a new page should use one of them.
- **`PageHero`** (home, `/zabiegi`): full-bleed photo or video. Mobile: light warm gradient over the photo, dark text. From 640px: dark-brown overlay (`rgba(42,29,22,…)`) with warm-white `#fffaf5` text; the button colours invert there (primary = `#fffaf5` with `--brown` text, secondary = warm-white outline). Buttons come in through the `actions` prop. Display-size `h1`, uppercase eyebrow, short description.
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
- Frames: **390** (mobile), **820** (iPad Air, tablet, covers 640–1023) and **1440** (desktop). Show the layout change at each frame.
- Use real Polish copy from `data/` or the client; mark placeholders clearly.
- Use real images from `public/images/`; don't invent stock photos.
- Draw icons from Lucide and name them in the handoff (`GraduationCap`, `Quote`…).
- Show the page with the real header and footer for context, but mark them out of scope unless they are the subject.
- Every handoff (`docs/design/<topic>/HANDOFF.md`) lists: scope, what changes, final copy, which existing components/classes/tokens to reuse, the layout per breakpoint, an acceptance checklist and open questions. Where the mockup needs something this guide does not have, say so explicitly as an open question instead of silently introducing it.
- Delete the handoff folder once the design is implemented; move any unresolved open question to [todo.md](todo.md).

## 11. Known inconsistencies

Existing deviations. Don't copy them into new work; fix them only when asked.

- Hero colours `#9b7964`, `#fffaf5` and the overlay brown `rgba(42, 29, 22, α)` have no tokens; `#fffaf5` overlaps with `--text` `#f7f4ef`.