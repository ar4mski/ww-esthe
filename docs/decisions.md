# Key decisions

Choices that shape the code and are not obvious from it. Coding rules live in [AGENTS.md](../AGENTS.md), visual rules in [style-guide.md](style-guide.md), content procedures in [content-guide.md](content-guide.md).

## Architecture

- **Server Components by default; small client islands:** `SiteHeaderShell` (mobile menu, collapsing header), `CopyButton`, `CookieConsent` (`useSyncExternalStore`), `GalleryFilter`/`GalleryViewer`, the `Visit` carousel, `MapEmbed`, `BackgroundVideo`.
- **`/galeria` is static:** the category filter lives in the URL and is read with `useSearchParams` inside `<Suspense>`, not through page `searchParams`.
- **Blog** is MDX in `content/blog`, compiled at build time (`gray-matter` + `next-mdx-remote/rsc`). Invalid frontmatter fails the build.
- **`BackgroundVideo`** mounts `<video>` only after hydration, because it depends on `matchMedia` and `prefers-reduced-motion`.

## SEO

- **Indexing is off by default.** Only `ALLOW_INDEXING=true` (Production) removes `Disallow: /` and `noindex`. Never use per-page `robots` to bypass it; empty blog categories are `noindex`.
- **One business name**, "Wiktoria Warylak Esthe" (`siteConfig.businessName`), everywhere, identical to the Google Business Profile (NAP consistency).
- **Titles:** at most 60 characters, with a local phrase, no business-name suffix and no `title.template`; the name comes from the `WebSite` JSON-LD and `og:siteName`. The home page targets the main phrases, `/zabiegi` the offer as a whole, treatments use `{title} w Szczecinie` or their `seoTitle`.
- **Metadata** goes through `createPageMetadata`, because Next overwrites (not merges) `openGraph` and `robots` from parent segments.
- **JSON-LD:** `WebSite`, `HealthAndBeautyBusiness` (`geo`, `priceRange` computed from the price list), `Service` with `offers`, `BlogPosting`, `BreadcrumbList`. No `aggregateRating` or `Review` markup for the Google reviews: Google's review-snippet guidelines forbid aggregating ratings taken from another site, and a business rating itself is ineligible for stars anyway; no `FAQPage` (Google shows it only for government and health sites).
- **Sitemap:** `lastModified` only for blog posts (`updatedDate ?? date`); static pages have no reliable dates and false ones are ignored.
- **Open Graph:** every cover used as `og:image` has a hand-cropped 1200×630 copy under `public/images/og/` at the same path, cropped on the lips, brows or face depending on the page. `getOgImage` falls back to the default image with a build warning. Not generated with `opengraph-image.tsx`, because vertical photos need a manually chosen crop.

## Media and performance

- **Image sources:** at most 2400 px on the longer side, JPEG quality 82; served as AVIF/WebP, `images.minimumCacheTTL` 31 days.
- **Cache:** `/images/*` and `/video/*` get 1 day + `stale-while-revalidate`, because files in `public/` are replaced under the same name. Statically imported images (hero photos) get hashed names and an immutable cache. Covers stay path-based because Open Graph and JSON-LD rely on their paths.
- **`PageHero`:** one `<picture>` built with `getImageProps` plus a manual `preload()` per viewport with `media` (React would otherwise preload every eager `<img>`, which meant two downloads on mobile). The tablet/desktop backdrop is a 64 px `image-set()` blurred in CSS. The mobile blur placeholder is drawn in CSS (`--hero-placeholder-image`), because `getImageProps` cannot take `placeholder`.
- **LCP images** (heroes, featured post, logo) use `preload` and `fetchPriority="high"`, never `loading="lazy"`.
- **Hero video:** H.264 without audio, CRF 28, `faststart`, about 450 KB per file; no `poster` attribute (the image underneath is the poster); it respects `prefers-reduced-motion`. On the desktop home page the video plays for everyone (design choice).
- **Fonts:** Geist with `latin` + `latin-ext` (Polish letters) in the root layout. Montserrat 300 (normal only) with `latin` + `latin-ext` for headings, also in the root layout; headings are uppercase through CSS only. Cormorant Garamond only in `AboutStats`, `latin` subset; `/kontakt` also preloads it because Turbopack shares the CSS chunk with the home page (23 KB, accepted).
- **Google reviews** are fetched by a client island (`components/google-reviews`) from the dynamic Route Handler `/api/google-reviews` (`Cache-Control: no-store`), once, when the visitor scrolls near the section. Google Maps Platform terms forbid storing or caching reviews, so: no fetch in a Server Component (it would be frozen into the static HTML at build), no `revalidate`/ISR, no `next/image` for author photos (its optimizer caches them), and the home page stays static. Author photos load from Google only after consent to the `googleContent` cookie category; without it avatars show initials. The section stays hidden until `GOOGLE_PLACE_ID` is set and the profile has at least 3 reviews with text.
- **Google Maps** loads only after a click (`MapEmbed`): it saves over 1 MB of scripts and keeps Google away until the visitor asks. Rejected: the Google Static Maps API (needs a key and billing, and the image must load from Google, so it still sends the IP) and Leaflet/MapLibre (a new library).
- **Analytics:** Google Analytics 4 only after consent to analytics cookies; withdrawing consent removes its cookies. Contact clicks are tracked by one listener based on the link `href` (see the README). `BookingCta` is tagged `data-analytics-location="booking-cta"`, so its clicks are reported apart from other `content` clicks on every page.

## Design

- **Home page booking band mid-page:** `BookingCta` sits between "Twoja wizyta krok po kroku" and "Moje prace" instead of at the bottom, and the visit section has no buttons of its own (client decision, 23 Nov 2026: the band "looks premium" and should not be wasted at the end, but the page must not add calls to action).
- **Embossed monogram on every `BookingCta`:** the band is the brand's signature block, used on several pages, so the mark goes into the component, not into one page. It is an inline SVG in `currentColor` (not the logo `<img>`), because the emboss needs the mark filled with the band colour. It is a deliberate exception to "no shadows" (see the style guide §5).
