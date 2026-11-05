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
