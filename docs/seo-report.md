# Raport SEO – Wiktoria Warylak Esthe

Data: 2026-11-09 (poprzednia wersja: 2026-11-01; ogólny stan: [project-status.md](project-status.md))

**Stan: podstawy techniczne i lokalne SEO w kodzie są gotowe, strona jest świadomie zablokowana przed indeksowaniem.** Do startu zostają treści, konfiguracja i Google Business Profile.

Priorytetowe usługi do pozycjonowania: makijaż permanentny brwi i ust, powiększanie ust, laserowe usuwanie makijażu permanentnego.

## Zrobione (2026-11-09: lokalne SEO i dane strukturalne)

| Temat | Efekt |
|---|---|
| Tytuły stron | Maks. 60 znaków, z frazą lokalną, bez przyrostka z nazwą firmy (nazwę podaje `WebSite` JSON-LD). Strona główna celuje we frazy główne („Makijaż permanentny i powiększanie ust w Szczecinie”), a `/zabiegi` w ofertę jako całość, żeby dwie strony nie konkurowały o te same frazy. Zabiegi: `{nazwa} w Szczecinie`, a dla modelowania ust i lasera własny `seoTitle` (`data/treatments.ts`), np. „Powiększanie i modelowanie ust w Szczecinie” |
| Opisy (meta description) | Nowy opis strony głównej (`siteConfig.description`), nowe opisy `/kontakt` (adres i telefon z `siteConfig`) i `/o-mnie` (fraza „Szczecin”). Opisy `/cennik`, `/galeria` i `/zabiegi` miały już frazę lokalną; zmieniona tylko nazwa firmy |
| Jedna nazwa firmy | „Wiktoria Warylak Esthe” z `siteConfig.businessName` wszędzie (tytuły, opisy, alty, aria-label, JSON-LD); zgodnie z nazwą dla Google Business Profile |
| `WebSite` JSON-LD | Na `/`, wskazuje Google nazwę strony pokazywaną nad wynikiem |
| `HealthAndBeautyBusiness` | Dodane `geo` (współrzędne z Map Google), `priceRange` (liczony z cennika zabiegów), `logo` i `hasMap` |
| `Service` | Dodane `offers` z ceną lub zakresem cen parsowanym z `treatment.price` |
| `BlogPosting` | Przeniesiony do helpera `getBlogPostingJsonLd`; `dateModified` bierze opcjonalne `updatedDate` z frontmattera; wydawca ma `logo` |
| Sitemapa | Wpisy bloga używają `updatedDate ?? date` jako `lastModified` |

## Zrobione (po audycie 2026-11-01)

| # | Temat | Efekt |
|---|---|---|
| 1 | Canonical | Usunięty błędny globalny `canonical: "/"`. Każda strona ma własny, a `/galeria?category=…` wskazuje na `/galeria` |
| 2 | Title, description, OG | Dodane dla `/`, `/zabiegi`, `/cennik`, `/galeria`. Helper `createPageMetadata` (`data/page-metadata.ts`) ustawia też OG i Twitter per strona, w tym obraz OG per zabieg |
| 4 | Blokada indeksowania | `app/robots.ts` z `Disallow: /` oraz `noindex, nofollow` w layoucie. Sterowane zmienną `ALLOW_INDEXING` (`siteConfig.allowIndexing`) |
| 5 | `<h1>` na `/kontakt` | Dodany (`PageSection` ma opcjonalny `headingLevel`) |
| 6 | Dane strukturalne (JSON-LD) | `HealthAndBeautyBusiness` na `/` i `/kontakt`, `Service` i `BreadcrumbList` na stronach zabiegów oraz `BreadcrumbList` w blogu (`data/structured-data.ts`, `components/json-ld.tsx`) |
| 9 | Obraz OG | Nowy `public/images/heroes/home/og.jpg` 1200×630, 42 KB (wcześniej 3,2 MB) |
| 10 | `/galeria` statyczna | Filtr kategorii w URL przez `useSearchParams` w `<Suspense>`, bez `searchParams` na stronie |
| 11 | Wydajność obrazów | Źródła zmniejszone do maks. 2400 px, `images.formats` AVIF/WebP, `minimumCacheTTL` 31 dni, nagłówki cache dla `/images` i `/video` |

| # | Temat | Efekt |
|---|---|---|
| 1 | Canonical | Usunięty błędny globalny `canonical: "/"`. Każda strona ma własny, a `/galeria?category=…` wskazuje na `/galeria` |
| 2 | Title, description, OG | Dodane dla `/`, `/zabiegi`, `/cennik`, `/galeria`. Helper `createPageMetadata` (`data/page-metadata.ts`) ustawia też OG i Twitter per strona, w tym obraz OG per zabieg |
| 4 | Blokada indeksowania | `app/robots.ts` z `Disallow: /` oraz `noindex, nofollow` w layoucie. Sterowane zmienną `ALLOW_INDEXING` (`siteConfig.allowIndexing`) |
| 5 | `<h1>` na `/kontakt` | Dodany (`PageSection` ma opcjonalny `headingLevel`) |
| 6 | Dane strukturalne (JSON-LD) | `HealthAndBeautyBusiness` na `/` i `/kontakt`, `Service` i `BreadcrumbList` na stronach zabiegów (`data/structured-data.ts`, `components/json-ld.tsx`) |
| 9 | Obraz OG | Nowy `public/images/heroes/home/og.jpg` 1200×630, 42 KB (wcześniej 3,2 MB) |
| 10 | `/galeria` statyczna | Filtr kategorii w URL przez `useSearchParams` w `<Suspense>`, bez `searchParams` na stronie |
| 11 | Wydajność obrazów | Źródła zmniejszone do maks. 2400 px (`public/images`: 51 MB → 17 MB), `images.formats` AVIF/WebP, `minimumCacheTTL` 31 dni, nagłówki cache dla `/images` i `/video` |

Przy okazji naprawiony błąd: jawne `robots: undefined` na stronach kategorii bloga nadpisywało `noindex` z layoutu.

## Było dobrze od początku
`lang="pl"`, jeden `<h1>` na stronę, sensowna hierarchia nagłówków, pełne metadane i `BlogPosting` dla wpisów, dynamiczna sitemapa, treść renderowana po stronie serwera.

## Zostaje do startu (po stronie właściciela)
1. **Placeholdery:** odpowiedzi w `homeFaqs` (`data/faq.ts`), zdjęcia certyfikatów, numer konta; hero strony głównej i opisy na `/o-mnie` do sprawdzenia.
2. **Domena:** `NEXT_PUBLIC_SITE_URL` na docelową (prawdopodobnie `warylakesthe.pl`).
3. **Włączenie indeksowania:** `ALLOW_INDEXING=true` (tylko Production).
4. **Google Business Profile:** weryfikacja adresu w toku. Nazwa, adres i telefon (NAP) identyczne jak na stronie i w JSON-LD; nie dopisywać fraz kluczowych do nazwy wizytówki. To najważniejszy czynnik lokalnego SEO.
5. **Po starcie:** założyć Google Search Console, zgłosić sitemapę, sprawdzić JSON-LD w Rich Results Test (https://search.google.com/test/rich-results), ustawić przekierowania `vercel.app` i `www`, obserwować CTR i zapytania per strona.
6. **Opinie:** sekcja jest tymczasowo ukryta. Po weryfikacji wizytówki i zebraniu prawdziwych opinii pobierać je z Google (Places API) i dopiero wtedy dodać `aggregateRating` (tylko jeśli opinie są widoczne na stronie). Szczegóły w [project-status.md](project-status.md).

## Treści do poprawy pod priorytetowe usługi
- Strona modelowania ust: tytuł SEO mówi „Powiększanie i modelowanie ust”, ale H1, nawigacja i treść tylko „Modelowanie ust”. Rozważyć frazę „powiększanie ust” w H1 i opisie.
- `shortDescription` laseru i modelowania ust (używane jako meta description) bez frazy „Szczecin”.
- Blog: jawny autor z krótkim opisem kwalifikacji (E-E-A-T przy medycynie estetycznej); `updatedDate` przy edycji wpisów.

## Opcjonalne, niskie priorytety
- Alt-y w galerii są ogólnikowe („Efekt zabiegu estetycznego”); wymagają wiedzy o zdjęciach.
- Obrazy OG bloga (`fallback.jpg`, 410 KB) i zabiegów (okładki) nie są w proporcji 1200×630.
- Sitemap: brak `lastModified` dla stron statycznych (brak wiarygodnych dat zmian; nieprawdziwe są ignorowane przez Google).
- `FAQPage` w JSON-LD: od 2023 r. Google pokazuje rozwijane FAQ tylko serwisom rządowym i zdrowotnym, więc to najwyżej lepsze zrozumienie treści.
- `manifest.ts`: `short_name` to „WW-Esthe” (podpis ikony aplikacji ucinany po ok. 12 znakach); zostawione celowo.
- `title.template` pominięty: tytuły nie mają przyrostka z nazwą firmy (oszczędność znaków), a nazwę podają `WebSite` JSON-LD i `og:siteName`.

## Ocena
Technicznie strona jest gotowa na start, a lokalne SEO w kodzie (tytuły z frazą lokalną, `HealthAndBeautyBusiness` z NAP, `geo`, cenami i `Service` z `offers`) jest kompletne. Największy wpływ na wynik po starcie będą: wizytówka Google z opiniami, prawdziwe teksty, unikalne opisy zabiegów i dalszy rozwój bloga.
