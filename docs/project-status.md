# Stan projektu – WW-ESTHE

Data: 2026-11-09 (poprzednia wersja: 2026-11-01)

`npm run lint` i `npm run build` przechodzą bez błędów (36 stron statycznych). W repo nie ma `console.log`. Są dwa komentarze `TODO` w `components/category-filter.tsx` oraz oznaczone `PLACEHOLDER` zdjęcia certyfikatów (`data/certificates.ts`, `certificate-card.tsx`).

## Zrobione

### Architektura i Next.js 16
- `SiteHeader` jest Server Componentem; kliencki jest tylko `SiteHeaderShell` (menu mobilne, zwijanie nagłówka przy scrollu). Linki w `data/navigation.ts`.
- `BusinessInfo` jest serwerowy; kliencki jest tylko `CopyButton`.
- `/galeria` jest statyczna (filtr w URL przez `useSearchParams` w `<Suspense>`).
- `CookieConsent` używa `useSyncExternalStore`.
- Szczegóły i otwarte uwagi: [nextjs-review.md](nextjs-review.md).

### Treści i strony
- Strony: `/`, `/zabiegi` (7 zabiegów, w tym laserowe usuwanie brwi), `/o-mnie` (z certyfikatami), `/galeria`, `/cennik`, `/kontakt`, `/blog` (9 wpisów MDX w `content/blog`, kategorie), `/regulamin`, `/polityka-prywatnosci`.

### SEO
- Canonical per strona, metadane i OG przez `createPageMetadata`, JSON-LD, sitemapa, `robots.ts`, `manifest.ts`, ikony.
- Jedna nazwa firmy w całym projekcie: „Wiktoria Warylak Esthe” (`siteConfig.businessName`), używana w kodzie zamiast tekstu wpisanego na sztywno.
- Tytuły stron mają maks. 60 znaków, zawierają frazę lokalną i nie mają przyrostka z nazwą firmy (nazwę podaje `WebSite` JSON-LD). Zabiegi mogą nadpisać tytuł polem `seoTitle` w `data/treatments.ts`.
- Dane strukturalne w `data/structured-data.ts`: `WebSite`, `HealthAndBeautyBusiness` (z `geo`, `priceRange`, `logo`, `hasMap`), `Service` z `offers` (ceny z cennika), `BlogPosting` (z `updatedDate`), `BreadcrumbList`.
- Indeksowanie jest zablokowane do czasu ustawienia `ALLOW_INDEXING=true`.
- Szczegóły: [seo-report.md](seo-report.md).

### Analityka i zgody
- Google Analytics 4 ładuje się dopiero po zgodzie na cookies analityczne (`components/analytics/google-analytics.tsx`, `components/cookie-consent/`), a po wycofaniu zgody jest wyłączany i czyści swoje ciasteczka.
- Śledzone są kliknięcia w linki kontaktowe (`components/analytics/link-click-event.ts`).
- Włączane zmienną `NEXT_PUBLIC_GA_ID` (bez niej analityka nie działa); opis zmiennych w `.env.example`.

### Zasoby w `public/` i konfiguracja
- **Obrazy:** źródła większe niż 2400 px zmniejszone do 2400 px na dłuższym boku (JPEG, jakość 82). `public/images` zmalało z 51 MB do 17 MB (obecnie 23 MB po dodaniu nowych zdjęć), np. `heroes/home/mobile.jpg` z 3,2 MB do 620 KB.
- **PNG → JPG:** `treatments/modelowanie-ust/before` i `after` oraz `gallery/mezoterapia-mikroiglowa/01` i `gallery/modelowanie-ust/01`. Ścieżki poprawione w `components/gallery-grid/gallery-items.ts` i `data/treatment-showcase.ts`.
- **Usunięte nieużywane pliki:** filmy `IMG_4286.MP4` i `IMG_4306.MP4`, domyślne SVG-i Next (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`), `public/images/.gitkeep`.
- **`next.config.ts`:**
  - `images.formats`: AVIF z fallbackiem do WebP.
  - `images.minimumCacheTTL`: 31 dni.
  - Nagłówek `Cache-Control: public, max-age=86400, stale-while-revalidate=604800` dla `/images/*` i `/video/*`. Cache jest krótki, bo pliki w `public/` bywają podmieniane pod tą samą nazwą.

## Do zrobienia

### Przed publikacją (po stronie właściciela)
1. **Numer konta** w `data/site-config.ts` jest przykładowy (`isExample: true`); strona `/kontakt` pokazuje go z dopiskiem „do podmiany”. Wpisać prawdziwy numer albo usunąć sekcję.
2. **Pozostałe placeholdery:** odpowiedzi w `homeFaqs` (`data/faq.ts`) to nadal „Przykładowa odpowiedź…” (`contactFaqs` ma już prawdziwe treści), zdjęcia i dane certyfikatów (`data/certificates.ts`). Hero strony głównej i opisy na `/o-mnie` do ponownego sprawdzenia przez właściciela.
3. **Spójność adresów:** studio jest na ul. Racławickiej w Szczecinie, siedziba firmy w Dziwnowie. Sprawdzić, czy regulamin i polityka prywatności mówią to samo.
4. **Zmienne środowiskowe** (wzór w `.env.example`; `.env.local` jest w `.gitignore`): `NEXT_PUBLIC_SITE_URL` (domena docelowa), `ALLOW_INDEXING=true` i `NEXT_PUBLIC_GA_ID` (identyfikator GA4) tylko dla środowiska Production, nigdy dla Preview.
5. **Po starcie:** zgłosić `/sitemap.xml` w Google Search Console, sprawdzić JSON-LD w Rich Results Test, ustawić przekierowania `vercel.app` i `www`.

### SEO (priorytet: makijaż permanentny brwi i ust, powiększanie ust, laser)
- **Google Business Profile:** weryfikacja adresu w toku. Nazwa w wizytówce ma być dokładnie taka jak `siteConfig.businessName` („Wiktoria Warylak Esthe”), a adres i telefon identyczne jak na stronie i w JSON-LD (spójność NAP). Nie dopisywać fraz kluczowych do nazwy wizytówki.
- **Oceny:** po weryfikacji wizytówki i zebraniu prawdziwych opinii dodać `aggregateRating` do `getLocalBusinessJsonLd` (tylko jeśli opinie są widoczne na stronie).
- **Search Console:** założyć konto (sitemapa: p. 5 wyżej), sprawdzać CTR i zapytania per strona, na tej podstawie poprawiać tytuły i opisy.
- **Strona modelowania ust:** w tytule SEO jest „Powiększanie i modelowanie ust”, ale H1, nawigacja i treść mówią tylko „Modelowanie ust”. Rozważyć użycie frazy „powiększanie ust” w H1 i opisie zabiegu (zmiana tekstu widocznego dla klientów).
- **Opisy (`shortDescription`) laseru i modelowania ust** nie zawierają „Szczecin”; dopisać, bo są używane jako meta description.
- **Blog:** przy istotnej edycji wpisu dodać `updatedDate` we frontmatterze (trafia do `dateModified` w JSON-LD i do sitemapy). Rozważyć jawnego autora z krótkim opisem kwalifikacji (E-E-A-T, medycyna estetyczna).
- **`manifest.ts`:** `short_name` to nadal „WW-Esthe” (podpis ikony aplikacji jest ucinany po ok. 12 znakach). Zdecydować, czy zostawić.
- **Tytuły:** mają maks. 60 znaków i nie zawierają nazwy firmy (nazwa jest w `WebSite` JSON-LD). Nowe strony i wpisy trzymać w tym limicie.
- Niski priorytet: `FAQPage` w JSON-LD. Google pokazuje rozwijane FAQ w wynikach tylko serwisom rządowym i zdrowotnym, więc zysk to najwyżej lepsze zrozumienie treści.

### Wydajność
- Przekodować filmy w `public/video` (łącznie 6,6 MB: `IMG_4277.MP4`, `IMG_4309.MP4`, `brows_pmu.MP4`) do H.264 z mniejszym bitrate; wymaga `ffmpeg`, którego nie ma na tej maszynie.
- `PageHero`: na desktopie mogą ładować się oba obrazy (mobilny `eager` + desktopowy `preload`). Sprawdzić w zakładce Network.
- `BeforeAfterSlider`: usunąć zduplikowaną obsługę touch (wystarczą pointer events).
- Obrazy OG bloga (`heroes/fallback.jpg`) i zabiegów nie mają proporcji 1200×630.

### Kod i treści
- Stopka nie zawiera linku „Galeria” (zachowano poprzednie zachowanie). Potwierdzić, czy to celowe; dodanie to `navigationItems.gallery` w `data/navigation.ts`.
- Granice `"use client"` w `Visit` i `GalleryGrid` (szczegóły w [nextjs-review.md](nextjs-review.md)); przy rozbudowie galerii przekazywać dane z serwera.
- Alt-y w galerii są ogólnikowe.
- `components/category-filter.tsx` ma dwa komentarze `TODO` (inicjalizacja `isExpanded` tylko przy montowaniu; przycisk „Więcej...” tylko gdy kategorii jest więcej niż mieści się w rzędzie).
- Sitemapa: brak `lastModified` dla stron statycznych (wpisy bloga mają).
- Brak testów, CI (`.github/workflows`) i formularza kontaktowego (kontakt przez telefon, mail i social media).

### Stan repozytorium
- Refaktor z sekcji „Architektura”, optymalizacja `public/` i Google Analytics są zacommitowane. Część danych strukturalnych bloga jest w `8390def`.
- Niezacommitowane (stan na 2026-11-09): reszta prac SEO, czyli nowe tytuły i opisy, ujednolicenie nazwy firmy, `seoTitle` zabiegów, `WebSite`/`geo`/`priceRange`/`offers`/`logo` w JSON-LD, `lastModified` wpisów w sitemapie oraz niniejsza dokumentacja.
