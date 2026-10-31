# Raport SEO – WW-ESTHE

Data: 2026-11-01

**Stan: podstawy techniczne są gotowe, strona jest świadomie zablokowana przed indeksowaniem.** Do startu zostają treści i konfiguracja.

## Zrobione (po audycie)

| # | Temat | Efekt |
|---|---|---|
| 1 | Canonical | Usunięty błędny globalny `canonical: "/"`. Każda strona ma własny, a `/galeria?category=…` wskazuje na `/galeria` |
| 2 | Title, description, OG | Dodane dla `/`, `/zabiegi`, `/cennik`, `/galeria`. Helper `createPageMetadata` (`data/page-metadata.ts`) ustawia też OG i Twitter per strona, w tym obraz OG per zabieg |
| 4 | Blokada indeksowania | `app/robots.ts` z `Disallow: /` oraz `noindex, nofollow` w layoucie. Sterowane zmienną `ALLOW_INDEXING` (`siteConfig.allowIndexing`) |
| 5 | `<h1>` na `/kontakt` | Dodany (`PageSection` ma opcjonalny `headingLevel`) |
| 6 | Dane strukturalne (JSON-LD) | `HealthAndBeautyBusiness` na `/` i `/kontakt`, `Service` i `BreadcrumbList` na stronach zabiegów (`data/structured-data.ts`, `components/json-ld.tsx`) |
| 9 | Obraz OG | Nowy `public/images/heroes/home/og.jpg` 1200×630, 42 KB (wcześniej 3,2 MB) |

Przy okazji naprawiony błąd: jawne `robots: undefined` na stronach kategorii bloga nadpisywało `noindex` z layoutu.

## Było dobrze od początku
`lang="pl"`, jeden `<h1>` na stronę, sensowna hierarchia nagłówków, pełne metadane i `BlogPosting` dla wpisów, dynamiczna sitemapa, treść renderowana po stronie serwera.

## Zostaje do startu (po stronie właściciela)
1. **Placeholdery:** hero strony głównej, FAQ (`data/faq.ts`), opisy na `/o-mnie`, numer konta.
2. **Domena:** `NEXT_PUBLIC_SITE_URL` na docelową (prawdopodobnie `warylakesthe.pl`).
3. **Włączenie indeksowania:** `ALLOW_INDEXING=true`.
4. **Po starcie:** zgłosić sitemapę w Google Search Console i sprawdzić JSON-LD w Rich Results Test (https://search.google.com/test/rich-results).

## Opcjonalne, niskie priorytety
- Alt-y w galerii są ogólnikowe („Efekt zabiegu estetycznego”); wymagają wiedzy o zdjęciach.
- Description zabiegów bez frazy lokalnej („Szczecin”).
- `geo` w JSON-LD (potrzebne współrzędne), `priceRange` i ceny w `Service`.
- Obrazy OG bloga (`fallback.jpg`, 492 KB) i zabiegów (okładki) nie są w proporcji 1200×630.
- Sitemap: brak `lastModified` dla stron statycznych.
- `/galeria` jest dynamiczna przez `searchParams`.
- Źródłowe zdjęcia ważą 2–3,5 MB; `next/image` je optymalizuje, ale pliki są ciężkie.
- `title.template` świadomie pominięty: „Wiktoria Warylak Esthe” (nazwa firmy, `og:siteName`) i „WW - ESTHE” (krótki sufiks w titlach) są rozdzielone celowo.

## Ocena
Technicznie strona jest gotowa na start. Największy wpływ na wynik po starcie będą treści: prawdziwe teksty, unikalne opisy zabiegów i dalszy rozwój bloga.
