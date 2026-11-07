export const certificateCategories = [
  { id: "all", label: "Wszystkie" },
  { id: "modelowanie-ust", label: "Modelowanie ust" },
  { id: "makijaz-permanentny-brwi", label: "Brwi PMU" },
  { id: "makijaz-permanentny-ust", label: "Usta PMU" },
  { id: "mezoterapia-mikroiglowa", label: "Mezoterapia" },
  { id: "laser", label: "Laser" },
  { id: "inne", label: "Inne" },
] as const;

export type CertificateFilter = (typeof certificateCategories)[number]["id"];
export type CertificateCategory = Exclude<CertificateFilter, "all">;

export type Certificate = {
  id: string;
  category: CertificateCategory;
  title: string;
  alt: string;
  organizer?: string;
  year?: number;
  image?: string;
};

// PLACEHOLDER: the client will provide the certificate photos (`image`),
// organizers and years. Cards without `image` render a neutral placeholder tile.
export const certificates: Certificate[] = [
  {
    id: "makijaz-permanentny-brwi",
    category: "makijaz-permanentny-brwi",
    title: "Makijaż permanentny brwi",
    alt: "Certyfikat ukończenia szkolenia z makijażu permanentnego brwi",
  },
  {
    id: "makijaz-permanentny-ust",
    category: "makijaz-permanentny-ust",
    title: "Makijaż permanentny ust",
    alt: "Certyfikat ukończenia szkolenia z makijażu permanentnego ust",
  },
  {
    id: "modelowanie-ust",
    category: "modelowanie-ust",
    title: "Powiększanie i modelowanie ust",
    alt: "Certyfikat ukończenia szkolenia z powiększania i modelowania ust",
  },
  {
    id: "laserowe-usuwanie-makijazu-brwi",
    category: "laser",
    title: "Laserowe usuwanie makijażu permanentnego brwi",
    alt: "Certyfikat ukończenia szkolenia z laserowego usuwania makijażu permanentnego brwi",
  },
  {
    id: "mezoterapia",
    category: "mezoterapia-mikroiglowa",
    title: "Mezoterapia",
    alt: "Certyfikat ukończenia szkolenia z mezoterapii",
  },
];
