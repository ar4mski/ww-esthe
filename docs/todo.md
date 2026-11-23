# Before launch – to do

Everything still open before and right after the production launch. Remove an item once it is done; record lasting choices in [decisions.md](decisions.md).

## Content from the owner (blockers)

- [ ] **Certificates:** photos, organizers and years (`data/certificates.ts`, marked `PLACEHOLDER`).
- [ ] **Before/after photos:** `data/before-after.ts` has test lip photos labelled as brow PMU and lip PMU results. Replace them or remove the categories without real photos.
- [ ] **Copy review:** the home hero text and the `/o-mnie` descriptions.

## Decisions needed

- [ ] **Legal texts after Booksy** (owner/lawyer): `data/legal-content.ts` says visits are booked by phone, e-mail or social media and confirmed by the salon, and the privacy policy lists data recipients (Meta). Check whether online booking through Booksy needs to be added.
- [ ] **Map on `/kontakt`:** today a plain click-to-load facade. Proposal: a static OpenStreetMap image as the facade background (with "© OpenStreetMap contributors"), plus a "Wyznacz trasę" button (`https://www.google.com/maps/dir/?api=1&destination=…`, from the approved contact page design) instead of "Otwórz w Google Maps".

## Launch day (Vercel)

- [ ] Environment variables for **Production only**, never Preview (template: `.env.example`): `NEXT_PUBLIC_SITE_URL=https://warylakesthe.pl`, `ALLOW_INDEXING=true`, `NEXT_PUBLIC_GA_ID`.
- [ ] Redirect the `vercel.app` domain and `www`/non-`www` to the canonical domain.
- [ ] Google Search Console: verify the domain and submit `/sitemap.xml`.
- [ ] [Rich Results Test](https://search.google.com/test/rich-results) on `/`, one treatment and one blog post.
- [ ] Facebook Sharing Debugger on a few links (Open Graph images).
- [ ] Google Analytics: accept cookies and check **Realtime**.

## After launch

- [ ] **Google Business Profile:** finish the address verification. The name must be exactly "Wiktoria Warylak Esthe" (`siteConfig.businessName`), address and phone identical to the site and the JSON-LD; no keywords in the name.
- [ ] **Google reviews** (code is done, the section is hidden until `GOOGLE_PLACE_ID` is set):
  - Owner collects reviews with the "Poproś o opinie" link/QR from all clients, with no reward; turn the section on at 3+ reviews with text.
  - Google Cloud: project with billing, enable Places API (New), API key restricted to it, quota "Place Details requests per day" = 30, budget alert at 10 PLN, find the place ID (see `docs/design/google-reviews/HANDOFF.md` §2).
  - Vercel **Production only**: `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`; redeploy.
  - On launch day: bump `legalLastUpdated` in `data/legal-content.ts`, have a lawyer check the privacy policy and terms wording, add `https://warylakesthe.pl` to the Business Profile.
- [ ] **Home page end:** after the FAQ/blog swap (stage 3) the home page ends with the blog and the footer, with the booking band mid-page. Compare `booking_click` from `booking-cta` and `footer` in GA; move or repeat the band only if few bookings come from the end of the page.
- [ ] **Search Console:** watch CTR and queries per page and adjust titles and descriptions.
- [ ] **Blog:** add `updatedDate` on significant edits; consider an author box with qualifications (E-E-A-T for aesthetic medicine).

## Optional

- Tests and CI (none today).
- Video: an AV1/WebM `<source>` before the MP4; a landscape desktop video (720 px stretched to full width is soft).
- Blurred placeholders for the treatment and blog heroes (needs a build-time `blurDataURL` generator with `sharp` for path-based images).
- When the gallery grows: pass gallery data from the server instead of bundling all `galleryItems` into `GalleryGrid` (same for the `Visit` carousel).
- `@next/mdx` instead of `next-mdx-remote` (one dependency less).
