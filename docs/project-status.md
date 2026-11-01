# Stan projektu – WW-ESTHE

Data: 2026-11-01

`npm run lint` i `npm run build` przechodzą bez błędów (35 stron statycznych). W repo nie ma `TODO`, `FIXME`, lorem ipsum ani `console.log`.

## Zrobione

### Architektura i Next.js 16
- `SiteHeader` jest Server Componentem; kliencki jest tylko `SiteHeaderShell` (menu mobilne, zwijanie nagłówka przy scrollu). Linki w `data/navigation.ts`.
- `BusinessInfo` jest serwerowy; kliencki jest tylko `CopyButton`.
- `/galeria` jest statyczna (filtr w URL przez `useSearchParams` w `<Suspense>`).
- `CookieConsent` używa `useSyncExternalStore`.
- Szczegóły i otwarte uwagi: [nextjs-review.md](nextjs-review.md).

### SEO
- Canonical per strona, metadane i OG przez `createPageMetadata`, JSON-LD, sitemapa, `robots.ts`, `manifest.ts`, ikony.
- Indeksowanie jest zablokowane do czasu ustawienia `ALLOW_INDEXING=true`.
- Szczegóły: [seo-report.md](seo-report.md).

### Zasoby w `public/` i konfiguracja
- **Obrazy:** źródła większe niż 2400 px zmniejszone do 2400 px na dłuższym boku (JPEG, jakość 82). `public/images` zmalało z 51 MB do 17 MB, np. `heroes/home/mobile.jpg` z 3,2 MB do 620 KB.
- **PNG → JPG:** `treatments/modelowanie-ust/before` i `after` oraz `gallery/mezoterapia-mikroiglowa/01` i `gallery/modelowanie-ust/01`. Ścieżki poprawione w `components/gallery-grid/gallery-items.ts` i `data/treatment-showcase.ts`.
- **Usunięte nieużywane pliki:** filmy `IMG_4286.MP4` i `IMG_4306.MP4`, domyślne SVG-i Next (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`), `public/images/.gitkeep`.
- **`next.config.ts`:**
  - `images.formats`: AVIF z fallbackiem do WebP.
  - `images.minimumCacheTTL`: 31 dni.
  - Nagłówek `Cache-Control: public, max-age=86400, stale-while-revalidate=604800` dla `/images/*` i `/video/*`. Cache jest krótki, bo pliki w `public/` bywają podmieniane pod tą samą nazwą.

## Do zrobienia

### Przed publikacją (po stronie właściciela)
1. **Numer konta** w `data/site-config.ts` jest przykładowy (`isExample: true`); strona `/kontakt` pokazuje go z dopiskiem „do podmiany”. Wpisać prawdziwy numer albo usunąć sekcję.
2. **Pozostałe placeholdery:** hero strony głównej, FAQ (`data/faq.ts`), opisy na `/o-mnie`.
3. **Spójność adresów:** studio jest na ul. Racławickiej w Szczecinie, siedziba firmy w Dziwnowie. Sprawdzić, czy regulamin i polityka prywatności mówią to samo.
4. **Zmienne środowiskowe:** `NEXT_PUBLIC_SITE_URL` (domena docelowa) i `ALLOW_INDEXING=true` tylko dla środowiska Production. W repo nie ma pliku `.env*`.
5. **Po starcie:** zgłosić `/sitemap.xml` w Google Search Console, sprawdzić JSON-LD w Rich Results Test, ustawić przekierowania `vercel.app` i `www`.

### Wydajność
- Przekodować filmy w `public/video` (łącznie 6,6 MB: `IMG_4277.MP4`, `IMG_4309.MP4`, `brows_pmu.MP4`) do H.264 z mniejszym bitrate; wymaga `ffmpeg`, którego nie ma na tej maszynie.
- `PageHero`: na desktopie mogą ładować się oba obrazy (mobilny `eager` + desktopowy `preload`). Sprawdzić w zakładce Network.
- `BeforeAfterSlider`: usunąć zduplikowaną obsługę touch (wystarczą pointer events).
- Obrazy OG bloga (`heroes/fallback.jpg`) i zabiegów nie mają proporcji 1200×630.

### Kod i treści
- Stopka nie zawiera linku „Galeria” (zachowano poprzednie zachowanie). Potwierdzić, czy to celowe; dodanie to `navigationItems.gallery` w `data/navigation.ts`.
- Granice `"use client"` w `Visit` i `GalleryGrid` (szczegóły w [nextjs-review.md](nextjs-review.md)); przy rozbudowie galerii przekazywać dane z serwera.
- Alt-y w galerii są ogólnikowe, description zabiegów nie ma frazy lokalnej („Szczecin”).
- Sitemapa: brak `lastModified` dla stron statycznych.
- Brak testów, CI (`.github/workflows`) i formularza kontaktowego (kontakt przez telefon, mail i social media).

### Stan repozytorium
- Refaktor z sekcji „Architektura” jest zacommitowany (`dc22441`). Niezacommitowane są: optymalizacja i czyszczenie `public/`, `next.config.ts`, poprawione ścieżki obrazów i dokumentacja.
