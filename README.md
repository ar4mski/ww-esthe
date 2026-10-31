 # WW-ESTHE

Website of **Wiktoria Warylak Esthe** – a beauty and aesthetic medicine studio in Szczecin, Poland (permanent makeup, lip modelling, microneedling and more). The site is in Polish and is built as a visual, mobile-first marketing site with a blog.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4 plus CSS Modules
- [Lucide](https://lucide.dev) icons
- Blog articles written in MDX (`gray-matter` + `next-mdx-remote`)

> Next.js 16 differs from older versions. Before using or changing a Next.js API, read the matching guide in `node_modules/next/dist/docs/` (see [AGENTS.md](AGENTS.md)).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script               | Description                                                             |
| -------------------- | ----------------------------------------------------------------------- |
| `npm run dev`        | Development server                                                      |
| `npm run build`      | Production build                                                        |
| `npm run start`      | Serve the production build                                              |
| `npm run local-demo` | Serve the production build on all interfaces (e.g. to test on a phone)  |
| `npm run lint`       | ESLint (run it after meaningful changes, together with `npm run build`) |

## Project structure

| Path          | Contents                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------- |
| `app/`        | Routes, root layout, global styles and route-local components (`app/<route>/components/`) |
| `components/` | Components shared across routes (header, footer, hero, gallery, FAQ, cookie consent, …)   |
| `data/`       | Static content and structured data (see below)                                            |
| `content/`    | Blog articles as `.mdx` files                                                             |
| `public/`     | Images (`images/`) and videos (`video/`)                                                  |
| `docs/`       | Project documentation, e.g. the [SEO report](docs/seo-report.md)                          |

Routes: `/`, `/zabiegi` and `/zabiegi/[slug]`, `/o-mnie`, `/galeria`, `/cennik`, `/kontakt`, `/blog`, `/blog/[slug]`, `/blog/kategoria/[category]`, `/regulamin`, `/polityka-prywatnosci`.

## Editing content

- **Business details** (name, phone, address, opening hours, social links, booking URL): `data/site-config.ts`
- **Treatments** (descriptions, facts, FAQ, cover images): `data/treatments.ts`, with extra photos in `data/treatment-showcase.ts`
- **FAQ, testimonials, legal texts**: `data/faq.ts`, `data/testimonials.ts`, `data/legal-content.ts`
- **Gallery**: add images to `public/images/gallery/<category>/` and register them in `components/gallery-grid/gallery-items.ts`
- **Blog**: add a `content/blog/<slug>.mdx` file. The file name becomes the URL slug. Front matter:

  ```yaml
  ---
  title: "Article title"
  description: "Short summary used on cards and in search results."
  date: 2026-10-18
  category: "Aktualności" # must match a label in blogCategories (data/blog.ts)
  coverImage: "/images/heroes/home/desktop.jpg"
  coverImageAlt: "Describe the image"
  featured: false
  author: "Wiktoria Warylak"
  tags:
    - konsultacja
  # optional: seoTitle, seoDescription
  ---
  ```

  New categories are added to `blogCategories` in `data/blog.ts`. The build fails with a clear message if the front matter is invalid.

## Conventions

The full guidelines live in [.github/copilot-instructions.md](.github/copilot-instructions.md). In short:

- Server Components by default; `"use client"` only for small interactive parts.
- Static content in `data/`, shared components in `components/`, route-only components next to the route.
- Mobile-first CSS with only two breakpoints: `640px` (tablet) and `1024px` (desktop). No `max-width` media queries.
- Page metadata is created with `createPageMetadata` (`data/page-metadata.ts`); JSON-LD with the helpers in `data/structured-data.ts`.

## Environment variables

| Variable               | Default                       | Purpose                                                                          |
| ---------------------- | ----------------------------- | -------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://ww-esthe.vercel.app` | Base URL for canonical links, Open Graph, the sitemap and structured data        |
| `ALLOW_INDEXING`       | unset (indexing blocked)      | Set to `true` to let search engines crawl and index the site (see the checklist) |

Until `ALLOW_INDEXING=true`, every deployment serves `Disallow: /` in `robots.txt` and `noindex, nofollow` on all pages.

## Deployment

The site is deployed on [Vercel](https://vercel.com); every build of the `master` branch is published at https://ww-esthe.vercel.app.

### Launch checklist

1. Replace placeholder content (home hero text, FAQ answers, "O mnie" descriptions, bank account number).
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
3. Set `ALLOW_INDEXING=true` for the **Production** environment only (not Preview).
4. Redirect the `vercel.app` domain and `www`/non-`www` to the canonical domain.
5. Submit `/sitemap.xml` in Google Search Console and validate the structured data with the [Rich Results Test](https://search.google.com/test/rich-results).

See [docs/seo-report.md](docs/seo-report.md) for the current SEO status.
