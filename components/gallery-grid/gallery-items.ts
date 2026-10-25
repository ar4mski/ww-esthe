export const galleryCategories = [
  { id: "all", label: "Wszystkie" },
  { id: "modelowanie-ust", label: "Modelowanie ust" },
  { id: "makijaz-permanentny-brwi", label: "Brwi PMU" },
  { id: "makijaz-permanentny-ust", label: "Usta PMU" },
  { id: "mezoterapia-mikroiglowa", label: "Mezoterapia" },
  { id: "stymulatory-tkankowe", label: "Stymulatory" },
  { id: "rf-radiofrekwencja", label: "RF mikroigłowa" },
  { id: "inne", label: "Inne" },
] as const;

export type GalleryFilter = (typeof galleryCategories)[number]["id"];
export type GalleryCategory = Exclude<GalleryFilter, "all">;

export const isGalleryFilter = (value: string): value is GalleryFilter =>
  galleryCategories.some((category) => category.id === value);

export const galleryItems = [
  {
    src: "/images/gallery/inne/social-01.jpg",
    category: "inne",
    alt: "Efekt stylizacji brwi",
    description:
      "Naturalnie podkreślone brwi dopasowane do rysów twarzy i codziennego stylu. Kształt został dobrany podczas konsultacji, a delikatne wykończenie podkreśla spojrzenie bez przerysowanego efektu.",
  },
  {
    src: "/images/gallery/inne/social-02.jpg",
    category: "inne",
    alt: "Efekt zabiegu estetycznego",
    description:
      "Delikatny efekt, który podkreśla urodę bez zmieniania naturalnych proporcji. Przed zabiegiem omówiliśmy oczekiwania i wybraliśmy rozwiązanie dopasowane do typu urody oraz codziennych potrzeb klientki.",
  },
  {
    src: "/images/gallery/inne/social-03.jpg",
    category: "inne",
    alt: "Detal wykonania zabiegu",
    description:
      "Precyzyjna praca i dbałość o każdy detal są podstawą każdego zabiegu.",
  },
  {
    src: "/images/gallery/inne/social-04.jpg",
    category: "inne",
    alt: "Rezultat stylizacji",
    description:
      "Subtelne podkreślenie, które pozostaje spójne z typem urody klientki.",
  },
  {
    src: "/images/gallery/inne/social-05.jpg",
    category: "inne",
    alt: "Zdjęcie efektu zabiegu",
    description:
      "Każdy efekt planujemy indywidualnie podczas konsultacji przed zabiegiem.",
  },
  {
    src: "/images/treatments/stymulatory-tkankowe/cover.jpg",
    category: "stymulatory-tkankowe",
    alt: "Praca z zakresu kosmetologii",
    description:
      "Pielęgnacja dobrana do potrzeb skóry pomaga utrzymać świeży i zdrowy wygląd. Zabieg poprzedza analiza kondycji skóry, dzięki której można dobrać odpowiednie składniki aktywne i zalecenia do domowej pielęgnacji.",
  },
  {
    src: "/images/treatments/rf-radiofrekwencja/cover.jpg",
    category: "rf-radiofrekwencja",
    alt: "Efekt pielęgnacji skóry",
    description:
      "Regularna pielęgnacja i odpowiednio dobrane zabiegi wspierają kondycję skóry.",
  },
  {
    src: "/images/gallery/mezoterapia-mikroiglowa/01.png",
    category: "mezoterapia-mikroiglowa",
    alt: "Rezultat zabiegu kosmetologicznego",
    description:
      "Komfort i bezpieczeństwo klientki są ważną częścią całego doświadczenia.",
  },
  {
    src: "/images/gallery/makijaz-permanentny-brwi/01.jpg",
    category: "makijaz-permanentny-brwi",
    alt: "Stylizacja brwi",
    description:
      "Stylizacja brwi nadaje spojrzeniu wyrazistość i zachowuje naturalny charakter. Włoski zostały ułożone w kierunku, który optycznie otwiera oko, a efekt pozostaje lekki i łatwy do utrzymania na co dzień.",
  },
  {
    src: "/images/gallery/makijaz-permanentny-brwi/02.jpg",
    category: "makijaz-permanentny-brwi",
    alt: "Brwi po zabiegu",
    description:
      "Kształt brwi został dopasowany do twarzy, aby efekt był lekki i harmonijny.",
  },
  {
    src: "/images/gallery/makijaz-permanentny-brwi/03.jpg",
    category: "makijaz-permanentny-brwi",
    alt: "Efekt laminacji brwi",
    description:
      "Laminacja pomaga ujarzmić włoski i nadać im uporządkowany, pełniejszy wygląd.",
  },
  {
    src: "/images/gallery/makijaz-permanentny-brwi/04.jpg",
    category: "makijaz-permanentny-brwi",
    alt: "Naturalny efekt brwi",
    description:
      "Rezultat dopasowany do oczekiwań klientki i jej naturalnej oprawy oka.",
  },
  {
    src: "/images/gallery/makijaz-permanentny-brwi/05.jpg",
    category: "makijaz-permanentny-brwi",
    alt: "Detal stylizacji brwi",
    description:
      "Precyzyjny kształt i delikatne wykończenie tworzą elegancki efekt.",
  },
  {
    src: "/images/treatments/modelowanie-ust/showcase-01.jpg",
    category: "modelowanie-ust",
    alt: "Stylizacja ust",
    description:
      "Delikatne podkreślenie ust, które zachowuje ich miękki i naturalny wygląd.",
  },
  {
    src: "/images/treatments/modelowanie-ust/showcase-02.jpg",
    category: "modelowanie-ust",
    alt: "Efekt zabiegu ust",
    description:
      "Kształt i intensywność efektu zawsze omawiamy przed rozpoczęciem zabiegu.",
  },
  {
    src: "/images/treatments/modelowanie-ust/showcase-03.jpg",
    category: "modelowanie-ust",
    alt: "Naturalny efekt ust",
    description: "Efekt końcowy jest świeży i proporcjonalny do całej twarzy.",
  },
  {
    src: "/images/gallery/modelowanie-ust/01.png",
    category: "modelowanie-ust",
    alt: "Rezultat zabiegu estetycznego ust",
    description:
      "Odpowiednio dobrana technika pozwala uzyskać subtelne, estetyczne podkreślenie.",
  },
  {
    src: "/images/treatments/modelowanie-ust/showcase-04.jpg",
    category: "modelowanie-ust",
    alt: "Efekt pigmentacji ust",
    description:
      "Pigmentacja wyrównuje kolor ust i dodaje im delikatnego, zdrowego wyglądu.",
  },
  {
    src: "/images/treatments/makijaz-permanentny-ust/showcase-01.jpg",
    category: "makijaz-permanentny-ust",
    alt: "Usta po makijażu permanentnym",
    description:
      "Naturalny efekt pigmentacji ust dopasowany do urody i oczekiwań klientki.",
  },
  {
    src: "/images/treatments/makijaz-permanentny-ust/showcase-02.jpg",
    category: "makijaz-permanentny-ust",
    alt: "Detal koloru ust po pigmentacji",
    description:
      "Subtelne podkreślenie koloru i kształtu ust po makijażu permanentnym.",
  },
  {
    src: "/images/treatments/makijaz-permanentny-ust/showcase-03.jpg",
    category: "makijaz-permanentny-ust",
    alt: "Naturalny efekt pigmentacji ust",
    description:
      "Pigment dobrany tak, aby podkreślić naturalny odcień ust.",
  },
  {
    src: "/images/treatments/makijaz-permanentny-ust/showcase-04.jpg",
    category: "makijaz-permanentny-ust",
    alt: "Usta w odcieniu dopasowanym do karnacji",
    description:
      "Makijaż permanentny ust pozwala uzyskać harmonijny efekt dopasowany do karnacji.",
  },
];

export type GalleryItem = (typeof galleryItems)[number];
