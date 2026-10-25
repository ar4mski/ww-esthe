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
        src: "/images/brwi perm/brwi.jpg",
        alt: "Brwi po makijażu permanentnym",
      },
      {
        src: "/images/brwi perm/IMG_8573.JPG",
        alt: "Naturalny efekt pigmentacji brwi",
      },
      { src: "/images/brwi perm/IMG_8625.JPG", alt: "Detal brwi po zabiegu" },
      {
        src: "/images/brwi perm/IMG_7632.jpg",
        alt: "Brwi dopasowane do rysów twarzy",
      },
    ],
  },
  "modelowanie-ust": {
    beforeAfter: {
      beforeSrc: "/images/before_after/before2.png",
      beforeAlt: "Usta przed zabiegiem modelowania",
      afterSrc: "/images/before_after/after2.png",
      afterAlt: "Usta po zabiegu modelowania",
    },
    photos: [
      {
        src: "/images/lips/IMG_6553.JPG",
        alt: "Usta po modelowaniu kwasem hialuronowym",
      },
      { src: "/images/lips/IMG_7998.jpg", alt: "Naturalnie wymodelowane usta" },
      {
        src: "/images/lips/IMG_8490.JPG",
        alt: "Efekt zabiegu modelowania ust",
      },
      { src: "/images/lips/IMG_8743.JPG", alt: "Pełniejsze usta po zabiegu" },
    ],
  },
  "makijaz-permanentny-ust": {
    photos: [
      {
        src: "/images/lips_pmu/IMG_6541.JPG",
        alt: "Usta po makijażu permanentnym",
      },
      {
        src: "/images/lips_pmu/IMG_6544.JPG",
        alt: "Detal koloru ust po pigmentacji",
      },
      {
        src: "/images/lips_pmu/IMG_9028.JPG",
        alt: "Naturalny efekt pigmentacji ust",
      },
      {
        src: "/images/lips_pmu/IMG_9462.JPG",
        alt: "Usta w odcieniu dopasowanym do karnacji",
      },
    ],
  },
  "mezoterapia-mikroiglowa": {
    photos: [
      {
        src: "/images/mezo/mezoterapia.JPG",
        alt: "Skóra po mezoterapii mikroigłowej",
      },
      {
        src: "/images/mezo/IMG_3750.JPG",
        alt: "Wykonywanie mezoterapii mikroigłowej",
      },
      {
        src: "/images/mezo/Kosmetologia_30 szablonów_Beżowy – kopia - 21.JPG",
        alt: "Aplikacja preparatu podczas zabiegu",
      },
    ],
  },
};

export const getTreatmentShowcase = (slug: string) => treatmentShowcases[slug];
