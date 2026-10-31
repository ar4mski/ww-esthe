Copilot Instructions

Project

WW-ESTHE is a Polish beauty and aesthetic services website.

The project is a modern, visual landing page focused on:

- beauty and aesthetic services
- professional presentation
- strong visual hierarchy
- responsive design
- clear calls to action
- mobile-first usability

Keep the implementation simple, maintainable, and consistent with the existing design.

⸻

Tech Stack

- Next.js 16
- App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React

Do not introduce additional libraries unless there is a clear reason and the existing stack cannot reasonably solve the problem.

Before using or changing a Next.js API, verify the current Next.js 16 documentation available in the project. Do not rely on patterns from older Next.js versions.

The repository already contains AGENTS.md with additional Next.js-specific instructions. Follow it.

⸻

Project Structure

Use the existing structure:

- app/ — Next.js routes, layouts, global styles, and route-local components
- components/ — React components shared across routes
- data/ — static website content and structured data
- public/ — static images and other public assets

Place components used only by one route in that route's `app/<route>/components/` directory. Reserve the top-level `components/` directory for components shared across routes. If a route-local component becomes shared, move it to the top-level `components/` directory and update its imports.

Do not introduce a new top-level directory for functionality that already has an appropriate location.

Keep page composition separate from reusable components.

⸻

Architecture

Server Components

Prefer Server Components by default.

Do not add "use client" unless the component actually requires client-side functionality, such as:

- React state
- event handlers
- browser APIs
- effects
- client-only third-party libraries

Avoid turning an entire page or large component tree into a Client Component just because one small interaction needs client-side behavior.

Prefer extracting the interactive part into a small Client Component.

Page Composition

Pages should primarily compose sections and pass data to them.

Avoid putting large amounts of markup or business/content data directly into app/page.tsx when it can reasonably live in a component or data/.

Components

Prefer small, focused components.

Prefer named arrow functions for React components.

Prefer implicit returns for arrow components when the JSX can be returned directly.

If a component becomes difficult to understand because it contains several independent responsibilities, split it into smaller components.

Do not create abstractions purely for the sake of abstraction. Follow the existing level of componentization.

Before creating a new component, check whether an existing component can be reused or extended.

⸻

Data and Content

Keep static website content separate from presentation whenever practical.

Content such as:

- services
- FAQs
- testimonials
- process steps
- navigation items
- gallery items

should preferably live in data/ rather than being duplicated across components.

Components should primarily be responsible for rendering data, not defining large amounts of repeated content.

Do not duplicate the same content in multiple components.

When adding a new item to an existing content collection, follow the existing data structure instead of inventing a new one.

⸻

TypeScript

Use TypeScript throughout the project.

Prefer explicit, useful types for component props and structured data.

List required props before optional props in both the props type or interface and the component's parameter or destructuring list.

Do not use any unless there is a strong technical reason.

Prefer:

- inferred types where inference is clear
- union types for finite variants
- interfaces or type aliases consistent with the surrounding code

Do not add unnecessary type complexity.

Avoid type assertions when the code can be structured so that TypeScript can infer the correct type.

⸻

Styling

The project uses Tailwind CSS 4.

Prefer Tailwind utilities and the existing styling system.

Do not introduce:

- CSS-in-JS
- styled-components
- another utility CSS framework
- a second design system

unless there is a specific technical requirement.

Before introducing a new color, spacing value, font size, border radius, shadow, or similar design value, check whether an existing value or CSS variable can be reused.

Maintain visual consistency with the existing website.

Prefer native CSS nesting in stylesheets and CSS Modules: nest descendant, pseudo-element, state, and breakpoint-specific rules under their owning selector instead of repeating parent selectors.

Do not casually redesign existing sections while implementing an unrelated feature.

⸻

Responsive Design

Every UI change must work on:

- mobile
- tablet
- desktop
- large desktop screens

Use a mobile-first CSS approach: define the base styles for mobile, then add `min-width` media queries for larger viewports. Avoid `max-width` media queries.

Use only these breakpoints:

- mobile: base styles (below 640px)
- tablet: `min-width: 640px`
- desktop: `min-width: 1024px`

Do not introduce other breakpoint values (such as 768px or 900px).

Do not design desktop-first and “fix mobile later”.

When changing layout, consider:

- narrow mobile widths
- long text
- image aspect ratios
- button wrapping
- navigation behaviour
- section spacing
- touch targets

Avoid hard-coded dimensions that can cause horizontal scrolling or content clipping.

⸻

Images

This is a highly visual website, so image handling is important.

Prefer Next.js image handling for website images where appropriate.

When working with images:

- preserve the intended aspect ratio
- avoid unnecessary image distortion
- use appropriate object-fit / object-position
- provide meaningful alt text for informative images
- use empty alt text for purely decorative images

Do not replace existing image assets with placeholders unless explicitly requested.

Do not introduce arbitrary remote image providers or URLs without checking the existing Next.js configuration.

⸻

Icons

Use lucide-react for interface icons when an icon is needed.

Do not introduce another icon library.

Prefer existing Lucide icons over manually drawn SVG icons unless the design specifically requires custom artwork.

Icons should generally be decorative when adjacent text already communicates the same information.

⸻

Accessibility

Use semantic HTML whenever possible.

Prefer:

- button for actions
- a / Next.js Link for navigation
- proper heading hierarchy
- semantic sections
- accessible form controls

Interactive elements must be keyboard accessible.

Do not use a clickable div when a button or link is appropriate.

Do not remove visible focus states without providing an equivalent accessible state.

Images need appropriate alt text.

⸻

Navigation and Links

Use Next.js Link for internal navigation where appropriate.

Use normal external links for external destinations.

Do not create JavaScript click handlers for navigation when a regular link can accomplish the same thing.

When adding navigation items, keep the existing navigation structure and styling consistent.

⸻

Animations

Animations should support the visual design rather than distract from it.

Prefer CSS/Tailwind transitions and animations when they are sufficient.

Do not add an animation library for a simple transition.

Avoid excessive animations, especially on mobile.

Respect prefers-reduced-motion for non-essential motion.

⸻

Performance

The website is primarily a marketing/landing page, so visual quality and performance both matter.

Prefer:

- Server Components
- optimized images
- minimal client-side JavaScript
- CSS animations over JavaScript animations when appropriate
- existing Next.js optimizations

Do not add client-side state or effects unless they are actually needed.

Do not fetch static content on the client when it can be rendered on the server.

Avoid unnecessary re-renders and unnecessary abstraction layers.

⸻

SEO

When adding or changing pages, preserve proper:

- page titles
- metadata
- heading hierarchy
- semantic HTML
- image alt text
- canonical/internal linking where appropriate

Do not add SEO text that makes the page feel unnatural or harms the existing design.

Content is written for real users first.

⸻

Code Style

Follow the style already present in the repository.

Prefer readable code over clever code.

Avoid:

- unnecessarily nested JSX
- huge components
- duplicated markup
- premature abstractions
- magic numbers without context
- unnecessary comments
- unnecessary helper functions

Comments should explain why something is done when the reason is not obvious from the code.

Do not add comments that merely restate what the code does.

⸻

Making Changes

Before changing code:

1. Inspect the existing implementation.
2. Reuse existing components and patterns where possible.
3. Check whether the required content belongs in data/.
4. Check whether the functionality actually requires a Client Component.
5. Preserve the existing visual language.

When implementing a requested change, make the smallest coherent change that solves the problem.

Do not refactor unrelated code unless it is necessary for the requested change.

Do not rename or move files unnecessarily.

Do not rewrite working code simply because a different implementation is personally preferred.

⸻

Dependencies

Do not install a new dependency for functionality that can reasonably be implemented using the existing stack.

Before adding a dependency, consider whether:

- Next.js already provides the functionality
- React already provides the functionality
- Tailwind already provides the styling
- lucide-react already provides the required icon
- a small local utility would be sufficient

Keep the dependency footprint small.

⸻

Validation

After meaningful changes, run:

npm run lint

For changes affecting the production build, also run:

npm run build

Fix lint and build errors rather than ignoring them.

Do not leave known TypeScript, ESLint, or build errors behind unless the user explicitly asks for an incomplete implementation.

⸻

Important Rules

1. Follow the existing architecture before introducing a new one.
2. Prefer Server Components.
3. Use Client Components only where required.
4. Keep static content in data/ where appropriate.
5. Use Tailwind CSS 4 and the existing design system.
6. Use lucide-react for icons.
7. Keep components focused and reusable.
8. Do not introduce unnecessary dependencies.
9. Preserve responsive behaviour.
10. Preserve accessibility.
11. Optimize images appropriately.
12. Do not refactor unrelated code.
13. Verify Next.js 16 APIs against the project’s current documentation.
14. Run lint after meaningful changes.
15. Prioritize consistency with the existing website over generic coding preferences.
