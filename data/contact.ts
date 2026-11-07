import { siteConfig } from "@/data/site-config";

export const contactSteps = [
  {
    title: "Wysyłasz wiadomość",
    text: "Na Instagramie, WhatsAppie lub Messengerze.",
  },
  {
    title: "Ustalamy termin",
    text: "Odpowiadam zwykle w ciągu dnia roboczego.",
  },
  {
    title: "Spotykamy się w gabinecie",
    text: `${siteConfig.address.lines.join(", ")}.`,
  },
] as const;

export const parkingNote =
  "Bezpłatne miejsca parkingowe na ulicy w pobliżu gabinetu.";

export const officeGalleryContent = {
  title: "Zajrzyj do gabinetu",
  description:
    "Spokojne, jasne wnętrze przy ul. Racławickiej – tak wygląda miejsce, do którego przyjdziesz.",
};

export const officeGallery = [
  {
    src: "/images/gabinet/gabinet-01.jpg",
    alt: "Gabinet kosmetyczny – lustro w kształcie łuku i szafki",
  },
  {
    src: "/images/gabinet/gabinet-02.jpg",
    alt: "Gabinet kosmetyczny – okno z widokiem na zieleń",
  },
  {
    src: "/images/gabinet/gabinet-03.jpg",
    alt: "Gabinet kosmetyczny – szafki, taboret i fotel zabiegowy",
  },
  {
    src: "/images/gabinet/gabinet-04.jpg",
    alt: "Gabinet kosmetyczny – leżanka i lustro w kształcie łuku",
  },
];
