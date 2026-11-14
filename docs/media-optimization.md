# Optymalizacja multimediów przed wdrożeniem

Data przeglądu: 2026-11-14. Zakres: obrazy, wideo, czcionki i ich wpływ na Core Web Vitals (LCP, CLS, INP) oraz SEO. `npm run build` przechodzi bez błędów (36 stron statycznych).

Stan mediów w repozytorium w dniu przeglądu:

| Zasób | Rozmiar |
|---|---|
| `public/images` (63 pliki) | 23 MB (19 MB po p. 4) |
| `public/video` (3 pliki MP4) | 6,6 MB |
| Czcionki preładowane na każdej stronie | 4 pliki, ok. 96 KB |

Statusy: **do zrobienia**, **zrobione**, **częściowo** (w opisie, co zostało). Punkty 2–7 zrobione 2026-11-14; `npm run lint` i `npm run build` przechodzą, a zbudowany HTML potwierdza jeden preload hero na viewport. Do sprawdzenia wizualnie po tych zmianach: hero na `/` i `/zabiegi` na mobile, tablecie i desktopie (zmieniły się selektory CSS obrazu hero).

## Krytyczne dla LCP i transferu

### 1. Wideo w hero jest za ciężkie i źle zakodowane — częściowo
- Trzy pliki miały bitrate ok. 3 Mb/s przy 720×1280 px, ścieżkę audio AAC (mimo `muted`) i nazwy w stylu `IMG_4277.MP4`.
- Atrybut `poster` na `<video>` pobierał surowy JPG postera trzeci raz (obraz pod spodem już pełni rolę postera).
- Na desktopie strony głównej wideo gra dla każdego (brak `mobileOnly`); to decyzja projektowa, nie zmieniana.
- Zrobione: usunięty `poster` z `<video>`, pliki przemianowane na `hero-home.mp4`, `hero-treatments.mp4`, `brows-pmu.mp4`.
- Do zrobienia (wymaga `ffmpeg`, którego nie ma na tej maszynie): przekodować każdy plik bez audio, cel 0,8–1,2 Mb/s, czyli ok. 0,5–0,8 MB na plik:

  ```sh
  ffmpeg -i hero-home.mp4 -an -c:v libx264 -preset slow -crf 28 -movflags +faststart -pix_fmt yuv420p hero-home.out.mp4
  ```

  Opcjonalnie dodać drugi `<source>` AV1/WebM (`-c:v libsvtav1 -crf 38`) przed MP4.
- Opcjonalnie: osobny poziomy kadr (poster i wideo) dla desktopu, bo 720 px rozciągane na 100vw jest nieostre.

### 2. Poster wideo w hero ładował się trzykrotnie — zrobione
- React 19 sam dodaje `<link rel="preload">` dla każdego `<img>` bez `loading="lazy"`, więc dwa obrazy hero (mobilny `eager` i desktopowy `preload`) dawały dwa preloady z różnymi `sizes`; telefon pobierał dwa warianty, z których jeden był ukryty przez CSS. Trzecie pobranie to surowy `poster` na `<video>` (p. 1).
- Naprawa w `components/page-hero.tsx`: jeden `<picture>` z `<source media>` zbudowany przez `getImageProps` (wzorzec „Art direction” z dokumentacji Next), `fetchPriority="high"`, ręczne `<link rel="preload">` z atrybutem `media` osobno dla mobile i desktop. CSS w `hero-page.module.css` steruje stylami per breakpoint zamiast dwoma klasami.

### 3. Rozmyte tło hero na tablecie i desktopie to surowy JPG — zrobione
- `--hero-desktop-image` wskazywało nieoptymalizowany `desktop.jpg` (158–186 KB, 1333×2000 px) tylko po to, by nałożyć `blur(1.25rem)`.
- Naprawa: `getImageProps` z szerokością 64 px i `image-set()` (wzorzec „Background CSS” z dokumentacji Next), czyli kilka KB zamiast ok. 170 KB.

### 4. Dwa źródła dużo za duże — zrobione
- `gallery/makijaz-permanentny-ust/01.jpg`: 4284×5712 px, 3,2 MB; `gallery/makijaz-permanentny-brwi/07.jpg`: 2268×4032 px, 2,6 MB. Oba w showcase na stronie głównej.
- Naprawa: zmniejszone do maks. 2400 px na dłuższym boku, jakość 82 (jak reszta źródeł): 1800×2400 px, 617 KB oraz 1350×2400 px, 669 KB.

### 5. Obrazy LCP na podstronach ładowały się leniwie — zrobione
- Hero zabiegu (`app/zabiegi/[slug]/page.tsx`) i wyróżniony wpis bloga (`app/blog/components/featured-post.tsx`) miały `loading="lazy"`.
- Naprawa: `preload` i `fetchPriority="high"`. Logo w nagłówku: `priority` (deprecated w Next 16) zamienione na `preload`.

### 6. Lista zabiegów bez `sizes` — zrobione
- `components/treatment-list-item.tsx` miało `width={720}` bez `sizes`, więc ekran Retina pobierał wariant 1920 px dla obrazu wyświetlanego w ok. 500 px.
- Naprawa: `sizes` zależne od wariantu (`stacked` na `/zabiegi`, `grid` na stronie głównej).

### 7. Lightbox i miniatury pobierały pełne źródła — zrobione
- `gallery-viewer.tsx` miał `sizes="100vw"` przy `max-height: 68vh`, więc desktop wybierał wariant 3840 px (całe źródło 2400 px).
- Naprawa: `sizes` dopasowane do wysokości lightboxa; miniatury (`gallery-thumbnail.tsx`) z `sizes` w zapisie `min-width` i stałą szerokością na desktopie.

## Czcionki

### 8. Polskie znaki w Geist nie są preładowane — do zrobienia
- W `app/layout.tsx` Geist ma `subsets: ["latin"]`; plik latin-ext (ą, ę, ł, ś, ż) dociąga się dopiero po sparsowaniu CSS i powoduje podmianę fontu po renderze.
- Naprawa: dodać `"latin-ext"` do `subsets`.

### 9. Geist Mono jest preładowany, ale nieużywany — do zrobienia
- Zmienna `--font-geist-mono` nie występuje w żadnym CSS; preload to 23 KB na ścieżce krytycznej każdej strony.
- Naprawa: usunąć `Geist_Mono` z `app/layout.tsx`.

### 10. Cormorant Garamond używany tylko w jednym miejscu — do zrobienia
- Jedyne użycie `--font-serif` to `components/about-stats.module.css`, a font (43 KB, latin + latin-ext) jest preładowany na każdej stronie.
- Naprawa: przenieść deklarację `Cormorant_Garamond` do pliku komponentu `about-stats`; Next preładuje go tylko na stronach, które go renderują.

## SEO i porządek przed wdrożeniem

### 11. Obrazy Open Graph mają złe proporcje — do zrobienia
- Podstrony zabiegów i wpisy bloga podają jako `og:image` pionowe okładki 1800×2400 px (do 770 KB), pobierane przez crawlery bez optymalizacji. To samo w `image` w JSON-LD (`data/structured-data.ts`).
- Naprawa: warianty 1200×630 (np. `opengraph-image.tsx` per segment albo pliki w `public/images/og/`).

### 12. Testowe zdjęcia „przed/po” udają prawdziwe — do zrobienia (bloker treściowy)
- `data/before-after.ts` ma zdjęcia ust podpisane jako efekty PMU brwi i PMU ust (oznaczone `TODO`).
- Naprawa: usunąć kategorie bez prawdziwych zdjęć albo podmienić pliki.

### 13. Nieużywane pliki — do zrobienia
- `heroes/home/mobile.jpg` (620 KB) i `heroes/treatments/mobile.jpg` (437 KB) nigdy się nie renderują, bo przy ustawionym `videoPoster` zastępuje je poster.
- Naprawa: usunąć albo zostawić tylko jako fallback dla hero bez wideo.

### 14. Mapa Google na `/kontakt` — opcjonalnie
- `<iframe loading="lazy">` i tak ładuje ponad 1 MB skryptów zaraz po wejściu, bo jest blisko góry strony.
- Opcja: fasada „kliknij, by załadować mapę” lub statyczny obraz mapy z linkiem.

### 15. Drobiazgi — opcjonalnie
- `placeholder="blur"` dla obrazów hero (lepsza odczuwalna szybkość).
- Nagłówki cache i `images.minimumCacheTTL` są ustawione poprawnie; nic do zmiany.
