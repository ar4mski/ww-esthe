# Przegląd Next.js best practices — pozostałe uwagi

Wynik przeglądu repo pod kątem Next.js 16 i użycia Client Components. Poprawki już wprowadzone:

- `/galeria` jest statyczna (filtr w URL przez `useSearchParams` w `<Suspense>`, bez `searchParams` na stronie).
- `SiteHeader` jest Server Componentem (`components/site-header.tsx`); kliencki jest tylko `SiteHeaderShell` (menu mobilne i zwijanie przy scrollu). Linki nawigacji pochodzą z `data/navigation.ts`.
- `BusinessInfo` jest serwerowy; kliencki jest tylko `CopyButton`.
- `GalleryFilter` i `GalleryViewer` mają jawne `"use client"`.
- `CookieConsent` używa `useSyncExternalStore` zamiast `useEffect` + `setState`.

## Do rozważenia (niezrobione)

### Zbyt duże granice klienckie
- **`Visit` (`components/visit/`)** — `VisitStep` i `VisitTrack` nie mają `"use client"`, ale trafiają do bundla klienta przez kliencki `index.tsx`, razem z `visit-steps.ts` (ikony lucide). To spójny widget karuzelowy, więc obecny podział jest akceptowalny. Opcja: zostawić kliencki tylko stan i przyciski, a treść kroków renderować na serwerze i przekazywać jako `children`.
- **`GalleryGrid` / `GalleryPreview`** — wszystkie `galleryItems` (z długimi opisami) są w bundlu klienta. Przy obecnej liczbie zdjęć to w porządku; przy rozbudowie galerii warto przekazywać dane z serwera propsami (np. tylko widoczne elementy).
- **`GalleryThumbnail`** — nie używa hooków, więc zostaje bez `"use client"` (dziedziczy od rodzica), ale przyjmuje funkcję `onOpen`; nie można go użyć bezpośrednio z Server Componentu.

### Wideo w hero
- `BackgroundVideo` zwraca `null` na serwerze i montuje `<video>` dopiero po hydracji (`matchMedia` + `prefers-reduced-motion`). To uzasadnione. Dla trybu `mobileOnly` można część logiki przenieść do CSS (np. ukrywanie przez media query), ale `prefers-reduced-motion` nadal wymaga JS lub `<source media>`.

### Obrazy w `PageHero`
- Gdy podany jest `desktopImage`, mobilny obraz ma `loading="eager"`, a desktopowy `preload`, więc na desktopie mogą ładować się oba obrazy (jeden jest ukryty CSS-em). Warto sprawdzić w zakładce Network i ewentualnie ograniczyć `eager`/`preload` do właściwego wariantu.

### `BeforeAfterSlider`
- Obsługuje równolegle zdarzenia pointer i touch (`handleTouchStart`/`handleTouchMove`). Same pointer events (z `touch-action: pan-y` w CSS) wystarczą i usuwają zduplikowaną logikę.

### `next.config.ts`
- Plik jest pusty. Do rozważenia: `images.formats` (AVIF/WebP), nagłówki cache dla zasobów statycznych z `public/`.

### MDX
- Blog używa `next-mdx-remote/rsc` (kompilacja podczas buildu przy SSG — poprawne). Alternatywa na przyszłość: wbudowane `@next/mdx`, co usunęłoby zależność zewnętrzną.

### Nawigacja w stopce
- `footerNavigation` nie zawiera „Galeria” (zachowano poprzednie zachowanie). Jeśli to przeoczenie, wystarczy dodać `navigationItems.gallery` w `data/navigation.ts`.
