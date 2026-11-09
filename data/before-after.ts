export type BeforeAfterCase = {
  afterAlt: string;
  afterSrc: string;
  beforeAlt: string;
  beforeSrc: string;
};

export type BeforeAfterCategory = {
  cases: BeforeAfterCase[];
  label: string;
  /** Treatment slug, also used as the category id. */
  slug: string;
};

export const beforeAfterCategories: BeforeAfterCategory[] = [
  {
    slug: "modelowanie-ust",
    label: "Modelowanie ust",
    cases: [
      {
        beforeSrc: "/images/before-after/modelowanie-ust/01-before.jpg",
        beforeAlt: "Usta przed zabiegiem modelowania",
        afterSrc: "/images/before-after/modelowanie-ust/01-after.jpg",
        afterAlt: "Usta po zabiegu modelowania kwasem hialuronowym",
      },
    ],
  },
  // TODO: test data — replace with real PMU before/after photos.
  {
    slug: "makijaz-permanentny-ust",
    label: "Makijaż permanentny ust",
    cases: [
      {
        beforeSrc: "/images/before-after/modelowanie-ust/01-before.jpg",
        beforeAlt: "Usta przed makijażem permanentnym",
        afterSrc: "/images/before-after/modelowanie-ust/01-after.jpg",
        afterAlt: "Usta po makijażu permanentnym",
      },
    ],
  },
  {
    slug: "makijaz-permanentny-brwi",
    label: "Makijaż permanentny brwi",
    cases: [
      {
        beforeSrc: "/images/before-after/modelowanie-ust/01-before.jpg",
        beforeAlt: "Brwi przed makijażem permanentnym",
        afterSrc: "/images/before-after/modelowanie-ust/01-after.jpg",
        afterAlt: "Brwi po makijażu permanentnym",
      },
    ],
  },
];
