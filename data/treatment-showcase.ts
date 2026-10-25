export type ShowcasePhoto = {
  src: string;
  alt: string;
};

export type TreatmentShowcase = {
  photos: ShowcasePhoto[];
  beforeAfter?: {
    afterAlt: string;
    afterSrc: string;
    beforeAlt: string;
    beforeSrc: string;
  };
};

export const treatmentShowcases: Record<string, TreatmentShowcase> = {
  "makijaz-permanentny-brwi": {
    photos: [
      {
        src: "/images/treatments/makijaz-permanentny-brwi/cover.jpg",
        alt: "Brwi po makijażu permanentnym",
      },
      {
        src: "/images/treatments/makijaz-permanentny-brwi/showcase-01.jpg",
        alt: "Naturalny efekt pigmentacji brwi",
      },
      {
        src: "/images/treatments/makijaz-permanentny-brwi/showcase-02.jpg",
        alt: "Detal brwi po zabiegu",
      },
      {
        src: "/images/treatments/makijaz-permanentny-brwi/showcase-03.jpg",
        alt: "Brwi dopasowane do rysów twarzy",
      },
    ],
  },
  "modelowanie-ust": {
    beforeAfter: {
      beforeSrc: "/images/treatments/modelowanie-ust/before.png",
      beforeAlt: "Usta przed zabiegiem modelowania",
      afterSrc: "/images/treatments/modelowanie-ust/after.png",
      afterAlt: "Usta po zabiegu modelowania",
    },
    photos: [
      {
        src: "/images/treatments/modelowanie-ust/showcase-01.jpg",
        alt: "Usta po modelowaniu kwasem hialuronowym",
      },
      {
        src: "/images/treatments/modelowanie-ust/showcase-02.jpg",
        alt: "Naturalnie wymodelowane usta",
      },
      {
        src: "/images/treatments/modelowanie-ust/showcase-03.jpg",
        alt: "Efekt zabiegu modelowania ust",
      },
      {
        src: "/images/treatments/modelowanie-ust/showcase-04.jpg",
        alt: "Pełniejsze usta po zabiegu",
      },
    ],
  },
  "makijaz-permanentny-ust": {
    photos: [
      {
        src: "/images/treatments/makijaz-permanentny-ust/showcase-01.jpg",
        alt: "Usta po makijażu permanentnym",
      },
      {
        src: "/images/treatments/makijaz-permanentny-ust/showcase-02.jpg",
        alt: "Detal koloru ust po pigmentacji",
      },
      {
        src: "/images/treatments/makijaz-permanentny-ust/showcase-03.jpg",
        alt: "Naturalny efekt pigmentacji ust",
      },
      {
        src: "/images/treatments/makijaz-permanentny-ust/showcase-04.jpg",
        alt: "Usta w odcieniu dopasowanym do karnacji",
      },
    ],
  },
  "mezoterapia-mikroiglowa": {
    photos: [
      {
        src: "/images/treatments/mezoterapia-mikroiglowa/cover.jpg",
        alt: "Skóra po mezoterapii mikroigłowej",
      },
      {
        src: "/images/treatments/mezoterapia-mikroiglowa/showcase-01.jpg",
        alt: "Wykonywanie mezoterapii mikroigłowej",
      },
      {
        src: "/images/treatments/mezoterapia-mikroiglowa/showcase-02.jpg",
        alt: "Aplikacja preparatu podczas zabiegu",
      },
      {
        src: "/images/treatments/mezoterapia-mikroiglowa/showcase-03.jpg",
        alt: "Zabieg mezoterapii mikroigłowej",
      },
    ],
  },
};

export const getTreatmentShowcase = (slug: string) => treatmentShowcases[slug];
