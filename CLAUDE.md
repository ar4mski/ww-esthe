@AGENTS.md

# WW-ESTHE

Polish beauty and aesthetic services landing page: visual, responsive, mobile-first, clear CTAs. Keep implementations simple, maintainable and consistent with the existing design.

Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, lucide-react. Add no new libraries unless the existing stack clearly cannot solve the problem. Verify Next.js APIs against `node_modules/next/dist/docs/` before using them (see AGENTS.md).

## Structure

- `app/` — routes, layouts, global styles, route-local components
- `components/` — components shared across routes
- `data/` — static content and structured data
- `public/` — static assets

- Components used by one route live in `app/<route>/components/`. If one becomes shared, move it to top-level `components/` and update imports.
- Don't add top-level directories for functionality that already has a home.
- Keep page composition separate from reusable components. Pages compose sections and pass data; no large markup or content blobs in `app/page.tsx`.

## Architecture

- Server Components by default. Add `"use client"` only for state, event handlers, browser APIs, effects or client-only libraries. Extract the interactive part into a small Client Component instead of converting a whole tree.
- Prefer small, focused components, named arrow functions, and implicit returns when JSX can be returned directly.
- Reuse or extend existing components before creating new ones. Don't abstract for its own sake; follow the existing level of componentization.
- Don't fetch static content on the client; no client state/effects unless needed.

## Data and content

- Services, FAQs, testimonials, process steps, navigation, gallery items etc. belong in `data/`, not duplicated in components.
- Components render data. When adding items to an existing collection, follow its existing structure.

## TypeScript

- Explicit, useful types for props and structured data; no `any` without strong reason.
- List required props before optional props, both in the type and in the destructuring list.
- Prefer inference, union types for finite variants, and avoid type assertions.

## Styling

- Tailwind CSS 4 and the existing design system only: no CSS-in-JS, styled-components, other utility frameworks or second design system.
- Reuse existing colors, spacing, font sizes, radii, shadows and CSS variables before adding new values.
- In stylesheets and CSS Modules use native CSS nesting (descendant, pseudo, state and breakpoint rules under the owning selector).
- Don't redesign unrelated sections.

## Responsive design

- Mobile-first: base styles for mobile, then `min-width` queries. No `max-width` queries.
- Only these breakpoints: base (<640px), tablet `min-width: 640px`, desktop `min-width: 1024px`. No other values (768px, 900px, ...).
- Every UI change must work on mobile, tablet, desktop and large desktop. Consider narrow widths, long text, image aspect ratios, button wrapping, navigation, section spacing, touch targets.
- Avoid hard-coded dimensions that cause horizontal scroll or clipping.

## Images and icons

- Prefer Next.js image handling. Preserve aspect ratio, use proper object-fit/position, meaningful alt text (empty alt for decorative).
- Don't replace existing assets with placeholders. Don't add remote image hosts without checking the Next.js config.
- Icons: lucide-react only, preferred over hand-drawn SVG. Decorative when adjacent text conveys the same info.
- Every icon gets `className="icon"` (defined in `app/globals.css`); no `size`/`strokeWidth` props and no per-component icon sizing. For a different size set `--icon-size` on a parent. Brand logos (lucide has none) live in `components/icons/` as filled glyphs with the `-2 -2 28 28` viewBox so they match lucide's padding.

## Accessibility and navigation

- Semantic HTML, proper heading hierarchy, `button` for actions, `a`/Next.js `Link` for navigation. No clickable `div`s.
- Keyboard accessible; keep visible focus states (or equivalent).
- Internal navigation via `Link`, external via normal links. No JS click handlers where a link works. Keep navigation structure and styling consistent.

## Animations and performance

- Prefer CSS/Tailwind transitions; no animation libraries for simple transitions. Avoid excess motion on mobile and respect `prefers-reduced-motion`.
- Prefer Server Components, optimized images, minimal client JS.

## SEO

- Page metadata via `createPageMetadata` from `data/page-metadata.ts`. Every indexable page needs its own title, description and canonical path. Don't set `alternates.canonical` in the root layout.
- `robots` and `openGraph` are overwritten, not merged, by the last segment defining them. Omit the key rather than setting it to `undefined`.
- JSON-LD: helpers in `data/structured-data.ts`, rendered with `JsonLd` from `components/json-ld.tsx`.
- Indexing is controlled by `siteConfig.allowIndexing` (`ALLOW_INDEXING=true`). Don't bypass it with per-page `robots`.
- Exactly one `<h1>` per page. Write content for real users first.

## Code style and making changes

- Follow existing repo style; readable over clever. Avoid deep JSX nesting, huge components, duplicated markup, magic numbers, needless helpers.
- Comments only to explain non-obvious "why".
- Inspect existing implementation first; make the smallest coherent change. Don't refactor unrelated code, rename/move files unnecessarily, or rewrite working code out of preference.
- Don't add dependencies when Next.js, React, Tailwind, lucide-react or a small local utility suffices.

## Validation

- After meaningful changes run `npm run lint`; for changes affecting production build also run `npm run build`.
- Fix lint/build/TypeScript errors rather than leaving them, unless the user asks for an incomplete implementation.
