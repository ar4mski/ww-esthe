const allowIndexing = process.env.ALLOW_INDEXING === "true";

// Invented reviews must never reach an indexed (launched) site, so the mock
// switches itself off once ALLOW_INDEXING=true, whatever GOOGLE_REVIEWS_MOCK says.
const isGoogleReviewsMock =
  !allowIndexing && process.env.GOOGLE_REVIEWS_MOCK === "true";

export const siteConfig = {
  businessName: "Wiktoria Warylak Esthe",
  description:
    "Makijaż permanentny, modelowanie ust i medycyna estetyczna w Szczecinie. Naturalne efekty i indywidualne podejście – umów wizytę w gabinecie.",
  locale: "pl-PL",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ww-esthe.vercel.app",
  // Every deployment is blocked from crawlers until ALLOW_INDEXING=true is set at launch.
  allowIndexing,
  // Google Analytics 4 measurement ID (G-...). Set it only for the Production
  // environment so previews and local builds never send data.
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_ID,
  // Google reviews section on the home page (Places API (New), server-only key).
  // Set GOOGLE_PLACE_ID for the Production environment only to turn it on.
  googleReviews: {
    enabled: Boolean(process.env.GOOGLE_PLACE_ID) || isGoogleReviewsMock,
    // Fake reviews instead of the API, for previewing before launch only.
    mock: isGoogleReviewsMock,
    minReviews: 3,
    shownReviews: 5,
  },
  defaultOgImage: {
    url: "/images/heroes/home/og.jpg",
    width: 1200,
    height: 630,
    alt: "Portret klientki Wiktoria Warylak Esthe",
  },
  phone: {
    display: "+48 780 182 458",
    href: "tel:+48780182458",
  },
  email: {
    display: "wiktoria@warylakesthe.pl",
    href: "mailto:wiktoria@warylakesthe.pl",
  },
  address: {
    lines: ["ul. Racławicka 1/4", "70-811 Szczecin"],
    mapsUrl: "https://maps.app.goo.gl/8EGQF2ho8o2eJ4Ji7",
    geo: { latitude: 53.3926715, longitude: 14.669513 },
  },
  social: {
    instagram: "https://instagram.com/wiktoria.warylak.esthe",
    facebook: "https://www.facebook.com/p/Wiktoria-Warylak-PMU-61571133683099/",
    whatsapp: "https://wa.me/48780182458",
    messenger: "https://m.me/61571133683099",
  },
  // Booksy profile with all services; links to single services are not used.
  bookingUrl:
    "https://booksy.com/pl-pl/366052_wiktoria-warylak-esthe_salon-kosmetyczny_18078_szczecin",
  messageUrl: "https://ig.me/m/wiktoria.warylak.esthe",
  openingHours: [
    {
      days: "Poniedziałek - Piątek",
      hours: "09:00 - 18:00",
      schemaDays: "Mo-Fr",
    },
    { days: "Sobota", hours: "10:00 - 14:00", schemaDays: "Sa" },
  ],
  legal: {
    copyrightYear: 2026,
    privacyPolicyPath: "/polityka-prywatnosci",
    termsPath: "/regulamin",
  },
  company: {
    legalName: "Wiktoria Warylak Esthe",
    registeredAddress: ["ul. Adama Mickiewicza 4A", "72-420 Dziwnów"],
    nip: "9860269048",
    regon: "545249482",
  },
} as const;
