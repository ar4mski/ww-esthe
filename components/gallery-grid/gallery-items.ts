export const galleryCategories = [
  { id: "all", label: "Wszystkie" },
  { id: "modelowanie-ust", label: "Modelowanie ust" },
  { id: "makijaz-permanentny-brwi", label: "Brwi PMU" },
  { id: "makijaz-permanentny-ust", label: "Usta PMU" },
  { id: "mezoterapia-mikroiglowa", label: "Mezoterapia" },
  // { id: "stymulatory-tkankowe", label: "Stymulatory" },
  // { id: "rf-radiofrekwencja", label: "RF mikroigłowa" },
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
    alt: "Blondynka w różowym żakiecie w profilu, w świetle słonecznym",
    description:
      "Naturalnie podkreślone brwi dopasowane do rysów twarzy i codziennego stylu. Kształt został dobrany podczas konsultacji, a delikatne wykończenie podkreśla spojrzenie bez przerysowanego efektu.",
  },
  {
    src: "/images/gallery/inne/social-02.jpg",
    category: "inne",
    alt: "Blondynka w czarnym żakiecie z przymkniętymi oczami w ciepłym świetle",
    description:
      "Delikatny efekt, który podkreśla urodę bez zmieniania naturalnych proporcji. Przed zabiegiem omówiliśmy oczekiwania i wybraliśmy rozwiązanie dopasowane do typu urody oraz codziennych potrzeb klientki.",
  },
  {
    src: "/images/gallery/inne/social-03.jpg",
    category: "inne",
    alt: "Portret brunetki w ciemnej bluzce na szarym tle",
    description:
      "Precyzyjna praca i dbałość o każdy detal są podstawą każdego zabiegu.",
  },
  {
    src: "/images/gallery/inne/social-04.jpg",
    category: "inne",
    alt: "Papierowe torby z logo Wiktoria Warylak Esthe",
    description:
      "Subtelne podkreślenie, które pozostaje spójne z typem urody klientki.",
  },
  {
    src: "/images/gallery/inne/social-05.jpg",
    category: "inne",
    alt: "Portret brunetki w beżowym żakiecie z naturalnym makijażem",
    description:
      "Każdy efekt planujemy indywidualnie podczas konsultacji przed zabiegiem.",
  },
  {
    src: "/images/treatments/stymulatory-tkankowe/cover.jpg",
    category: "stymulatory-tkankowe",
    alt: "Kobieta podczas iniekcji preparatu w okolicy skroni",
    description:
      "Pielęgnacja dobrana do potrzeb skóry pomaga utrzymać świeży i zdrowy wygląd. Zabieg poprzedza analiza kondycji skóry, dzięki której można dobrać odpowiednie składniki aktywne i zalecenia do domowej pielęgnacji.",
  },
  {
    src: "/images/treatments/rf-radiofrekwencja/cover.jpg",
    category: "rf-radiofrekwencja",
    alt: "Zabieg radiofrekwencji mikroigłowej urządzeniem z fioletową końcówką",
    description:
      "Regularna pielęgnacja i odpowiednio dobrane zabiegi wspierają kondycję skóry.",
  },
  {
    src: "/images/treatments/mezoterapia-mikroiglowa/cover.jpg",
    category: "mezoterapia-mikroiglowa",
    alt: "Mezoterapia igłowa w okolicy oka, widoczne grudki po nakłuciach",
    description:
      "Mezoterapia mikroigłowa pomaga odświeżyć skórę i poprawić jej kondycję.",
  },
  {
    src: "/images/treatments/mezoterapia-mikroiglowa/showcase-01.jpg",
    category: "mezoterapia-mikroiglowa",
    alt: "Wstrzykiwanie preparatu w policzek w czarnych rękawiczkach",
    description:
      "Zabieg wykonywany jest precyzyjnie, z dbałością o komfort klientki.",
  },
  {
    src: "/images/treatments/mezoterapia-mikroiglowa/showcase-02.jpg",
    category: "mezoterapia-mikroiglowa",
    alt: "Iniekcja preparatu w okolicę oka, zbliżenie na twarz",
    description:
      "Preparat dobieramy do potrzeb skóry podczas konsultacji przed zabiegiem.",
  },
  {
    src: "/images/treatments/mezoterapia-mikroiglowa/showcase-03.jpg",
    category: "mezoterapia-mikroiglowa",
    alt: "Skóra wokół oka tuż po mezoterapii mikroigłowej",
    description:
      "Regularne zabiegi wspierają nawilżenie, jędrność i świeży wygląd skóry.",
  },
  {
    src: "/images/gallery/makijaz-permanentny-brwi/01.jpg",
    category: "makijaz-permanentny-brwi",
    alt: "Brwi z makijażem permanentnym w ciepłym brązie, portret z uśmiechem",
    description:
      "Stylizacja brwi nadaje spojrzeniu wyrazistość i zachowuje naturalny charakter. Włoski zostały ułożone w kierunku, który optycznie otwiera oko, a efekt pozostaje lekki i łatwy do utrzymania na co dzień.",
  },
  {
    src: "/images/gallery/makijaz-permanentny-brwi/02.jpg",
    category: "makijaz-permanentny-brwi",
    alt: "Ciemne brwi po makijażu permanentnym, widok z boku",
    description:
      "Kształt brwi został dopasowany do twarzy, aby efekt był lekki i harmonijny.",
  },
  {
    src: "/images/gallery/makijaz-permanentny-brwi/03.jpg",
    category: "makijaz-permanentny-brwi",
    alt: "Brwi po makijażu permanentnym w trakcie zabiegu",
    description:
      "Laminacja pomaga ujarzmić włoski i nadać im uporządkowany, pełniejszy wygląd.",
  },
  {
    src: "/images/gallery/makijaz-permanentny-brwi/04.jpg",
    category: "makijaz-permanentny-brwi",
    alt: "Jasne brwi z delikatnym makijażem permanentnym, zamknięte oczy",
    description:
      "Rezultat dopasowany do oczekiwań klientki i jej naturalnej oprawy oka.",
  },
  {
    src: "/images/gallery/makijaz-permanentny-brwi/05.jpg",
    category: "makijaz-permanentny-brwi",
    alt: "Gęste ciemne brwi po makijażu permanentnym, zamknięte oczy",
    description:
      "Precyzyjny kształt i delikatne wykończenie tworzą elegancki efekt.",
  },
  {
    src: "/images/treatments/modelowanie-ust/showcase-01.jpg",
    category: "modelowanie-ust",
    alt: "Pełne usta po modelowaniu kwasem hialuronowym, widok z góry",
    description:
      "Delikatne podkreślenie ust, które zachowuje ich miękki i naturalny wygląd.",
  },
  {
    src: "/images/treatments/modelowanie-ust/showcase-02.jpg",
    category: "modelowanie-ust",
    alt: "Usta po modelowaniu, zbliżenie na twarz blondynki",
    description:
      "Kształt i intensywność efektu zawsze omawiamy przed rozpoczęciem zabiegu.",
  },
  {
    src: "/images/treatments/modelowanie-ust/showcase-03.jpg",
    category: "modelowanie-ust",
    alt: "Soczyście różowe usta po modelowaniu, profil",
    description: "Efekt końcowy jest świeży i proporcjonalny do całej twarzy.",
  },
  {
    src: "/images/gallery/modelowanie-ust/01.jpg",
    category: "modelowanie-ust",
    alt: "Naturalnie wymodelowane usta, zbliżenie z profilu",
    description:
      "Odpowiednio dobrana technika pozwala uzyskać subtelne, estetyczne podkreślenie.",
  },
  {
    src: "/images/treatments/modelowanie-ust/showcase-04.jpg",
    category: "modelowanie-ust",
    alt: "Usta w kolorze czerwonej pigmentacji, zbliżenie",
    description:
      "Pigmentacja wyrównuje kolor ust i dodaje im delikatnego, zdrowego wyglądu.",
  },
  {
    src: "/images/treatments/makijaz-permanentny-ust/showcase-01.jpg",
    category: "makijaz-permanentny-ust",
    alt: "Usta w ciemnoczerwonym odcieniu po makijażu permanentnym",
    description:
      "Naturalny efekt pigmentacji ust dopasowany do urody i oczekiwań klientki.",
  },
  {
    src: "/images/treatments/makijaz-permanentny-ust/showcase-02.jpg",
    category: "makijaz-permanentny-ust",
    alt: "Zbliżenie na usta w malinowym odcieniu po pigmentacji",
    description:
      "Subtelne podkreślenie koloru i kształtu ust po makijażu permanentnym.",
  },
  {
    src: "/images/treatments/makijaz-permanentny-ust/showcase-03.jpg",
    category: "makijaz-permanentny-ust",
    alt: "Różowe usta po makijażu permanentnym, widok z dołu",
    description: "Pigment dobrany tak, aby podkreślić naturalny odcień ust.",
  },
  {
    src: "/images/treatments/makijaz-permanentny-ust/showcase-04.jpg",
    category: "makijaz-permanentny-ust",
    alt: "Usta w odcieniu dojrzałej wiśni, portret z boku",
    description:
      "Makijaż permanentny ust pozwala uzyskać harmonijny efekt dopasowany do karnacji.",
  },
];

export type GalleryItem = (typeof galleryItems)[number];

export const homeShowcaseItems = [
  {
    src: "/images/gallery/makijaz-permanentny-brwi/06.jpg",
    alt: "Brwi po makijażu permanentnym",
    description:
      "Gęste, wyraziste brwi o naturalnym kształcie dopasowanym do rysów twarzy.",
  },
  {
    src: "/images/gallery/makijaz-permanentny-brwi/07.jpg",
    alt: "Efekt pudrowych brwi",
    description:
      "Miękki, pudrowy efekt, który podkreśla spojrzenie i pozostaje subtelny na co dzień.",
  },
  {
    src: "/images/gallery/makijaz-permanentny-ust/01.jpg",
    alt: "Usta po makijażu permanentnym",
    description:
      "Świeży kolor ust dobrany do karnacji, z delikatnie zaznaczonym konturem.",
  },
  {
    src: "/images/treatments/modelowanie-ust/showcase-01.jpg",
    alt: "Modelowanie ust",
    description:
      "Naturalnie wymodelowane usta o miękkim kształcie i zachowanych proporcjach.",
  },
];
