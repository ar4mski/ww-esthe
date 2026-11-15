# Before launch – to do

Everything still open before and right after the production launch. Remove an item once it is done; record lasting choices in [decisions.md](decisions.md).

## Content from the owner (blockers)

- [ ] **Bank account number** in `data/site-config.ts` is an example (`isExample: true`, shown on `/kontakt` with a "do podmiany" note). Enter the real number or remove the section.
- [ ] **Certificates:** photos, organizers and years (`data/certificates.ts`, marked `PLACEHOLDER`).
- [ ] **Before/after photos:** `data/before-after.ts` has test lip photos labelled as brow PMU and lip PMU results. Replace them or remove the categories without real photos.
- [ ] **Copy review:** the home hero text and the `/o-mnie` descriptions.
- [ ] **Legal texts** (`data/legal-content.ts`):
  - the studio is on ul. Racławicka in Szczecin and the registered office is in Dziwnów; check that the terms and the privacy policy say the same;
  - the privacy policy mentions only Google Analytics; add a paragraph about Google Maps on `/kontakt` (after the click Google receives the visitor's IP address and may set cookies).

## Decisions needed

- [ ] **Map on `/kontakt`:** today a plain click-to-load facade. Proposal: a static OpenStreetMap image as the facade background (with "© OpenStreetMap contributors"), plus a "Wyznacz trasę" button (`https://www.google.com/maps/dir/?api=1&destination=…`, from the approved contact page design) instead of "Otwórz w Google Maps".
- [ ] **Lip modeling page:** the SEO title says "Powiększanie i modelowanie ust", but the H1, navigation and copy say only "Modelowanie ust". Use "powiększanie ust" in the H1 and description?
- [ ] **Footer** has no "Galeria" link. Intentional? Adding it: `navigationItems.gallery` in `footerNavigation` (`data/navigation.ts`).
- [ ] **`manifest.ts`:** `short_name` is "WW-Esthe" (the app icon label is cut after about 12 characters). Keep?

## Code

- [ ] Add "Szczecin" to the `shortDescription` of laser brow removal and lip modeling (`data/treatments.ts`); it is their meta description.
- [ ] Delete `public/images/heroes/home/mobile.jpg` and `heroes/treatments/mobile.jpg` (about 1 MB, never rendered because `videoPoster` replaces them). `PageHero` requires `image`, so make it optional when `videoPoster` is set.
- [ ] Gallery alt texts are generic ("Efekt zabiegu estetycznego"); describe each photo (`components/gallery-grid/gallery-items.ts`).
- [ ] `components/category-filter.tsx`: two `TODO`s (`isExpanded` set only on mount; show "Więcej..." only when the categories do not fit in one row).
- [ ] Visual check before committing the latest media changes: the hero on `/`, `/zabiegi` and `/o-mnie` on mobile with network throttling (blurred placeholder), and the map facade on `/kontakt`.

## Launch day (Vercel)

- [ ] Environment variables for **Production only**, never Preview (template: `.env.example`): `NEXT_PUBLIC_SITE_URL=https://warylakesthe.pl`, `ALLOW_INDEXING=true`, `NEXT_PUBLIC_GA_ID`.
- [ ] Redirect the `vercel.app` domain and `www`/non-`www` to the canonical domain.
- [ ] Google Search Console: verify the domain and submit `/sitemap.xml`.
- [ ] [Rich Results Test](https://search.google.com/test/rich-results) on `/`, one treatment and one blog post.
- [ ] Facebook Sharing Debugger on a few links (Open Graph images).
- [ ] Google Analytics: accept cookies and check **Realtime**.

## After launch

- [ ] **Google Business Profile:** finish the address verification. The name must be exactly "Wiktoria Warylak Esthe" (`siteConfig.businessName`), address and phone identical to the site and the JSON-LD; no keywords in the name.
- [ ] **Google reviews** (once real reviews exist): fetch them on the server from the Places API (New), `reviews` field (max 5, plus `rating` and `userRatingCount`), with `fetch` and `next: { revalidate }`. Needs a `place_id`, an API key restricted to the Places API, `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` in `.env.example`, Google attribution, and no section when there are no reviews or the API fails. The `Testimonial` component is kept for this. Only then add `aggregateRating` to `getLocalBusinessJsonLd`.
- [ ] **Search Console:** watch CTR and queries per page and adjust titles and descriptions.
- [ ] **Blog:** add `updatedDate` on significant edits; consider an author box with qualifications (E-E-A-T for aesthetic medicine).

## Optional

- Tests and CI (none today).
- Video: an AV1/WebM `<source>` before the MP4; a landscape desktop video (720 px stretched to full width is soft).
- Blurred placeholders for the treatment and blog heroes (needs a build-time `blurDataURL` generator with `sharp` for path-based images).
- When the gallery grows: pass gallery data from the server instead of bundling all `galleryItems` into `GalleryGrid` (same for the `Visit` carousel).
- `@next/mdx` instead of `next-mdx-remote` (one dependency less).
