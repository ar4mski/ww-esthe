import type { GalleryCategory } from "@/components/gallery-grid/gallery-items";

export type BeforeAfterImages = {
  afterAlt: string;
  afterSrc: string;
  beforeAlt: string;
  beforeSrc: string;
};

export const beforeAfterByCategory: Record<
  GalleryCategory,
  BeforeAfterImages
> = {
  "modelowanie-ust": {
    beforeSrc: "/images/treatments/modelowanie-ust/before.jpg",
    beforeAlt: "Usta przed zabiegiem modelowania",
    afterSrc: "/images/treatments/modelowanie-ust/after.jpg",
    afterAlt: "Usta po zabiegu modelowania",
  },
  "makijaz-permanentny-brwi": {
    beforeSrc: "/images/gallery/makijaz-permanentny-brwi/01.jpg",
    beforeAlt: "Przykładowe zdjęcie brwi przed zabiegiem",
    afterSrc: "/images/gallery/makijaz-permanentny-brwi/02.jpg",
    afterAlt: "Przykładowe zdjęcie brwi po zabiegu",
  },
  "makijaz-permanentny-ust": {
    beforeSrc: "/images/treatments/makijaz-permanentny-ust/showcase-01.jpg",
    beforeAlt: "Przykładowe zdjęcie ust przed zabiegiem",
    afterSrc: "/images/treatments/makijaz-permanentny-ust/showcase-02.jpg",
    afterAlt: "Przykładowe zdjęcie ust po zabiegu",
  },
  "mezoterapia-mikroiglowa": {
    beforeSrc: "/images/treatments/mezoterapia-mikroiglowa/showcase-01.jpg",
    beforeAlt: "Przykładowe zdjęcie skóry przed zabiegiem",
    afterSrc: "/images/treatments/mezoterapia-mikroiglowa/showcase-02.jpg",
    afterAlt: "Przykładowe zdjęcie skóry po zabiegu",
  },
  "stymulatory-tkankowe": {
    beforeSrc: "/images/treatments/stymulatory-tkankowe/cover.jpg",
    beforeAlt: "Przykładowe zdjęcie przed zabiegiem",
    afterSrc: "/images/gallery/inne/social-02.jpg",
    afterAlt: "Przykładowe zdjęcie po zabiegu",
  },
  "rf-radiofrekwencja": {
    beforeSrc: "/images/treatments/rf-radiofrekwencja/cover.jpg",
    beforeAlt: "Przykładowe zdjęcie przed zabiegiem",
    afterSrc: "/images/gallery/mezoterapia-mikroiglowa/01.jpg",
    afterAlt: "Przykładowe zdjęcie po zabiegu",
  },
  inne: {
    beforeSrc: "/images/gallery/inne/social-01.jpg",
    beforeAlt: "Przykładowe zdjęcie przed zabiegiem",
    afterSrc: "/images/gallery/inne/social-03.jpg",
    afterAlt: "Przykładowe zdjęcie po zabiegu",
  },
};
