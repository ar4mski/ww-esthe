import { Leaf, Target, UserRound, type LucideIcon } from "lucide-react";

type AboutStat = {
  value: string;
  label: string;
  shortLabel: string;
};

type AboutValue = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const aboutStats: AboutStat[] = [
  {
    value: "5+ lat",
    label: "pasji i pracy w branży beauty",
    shortLabel: "w beauty",
  },
  {
    value: "III rok",
    label: "studiów na kierunku pielęgniarstwo",
    shortLabel: "pielęgniarstwa",
  },
];

export const aboutValues: AboutValue[] = [
  {
    icon: Target,
    title: "Dokładność",
    description:
      "Ważne są dla mnie bezpieczeństwo, precyzja oraz świadomy dobór odpowiednich metod.",
  },
  {
    icon: UserRound,
    title: "Indywidualne podejście",
    description:
      "Do każdego zabiegu podchodzę indywidualnie, zwracając uwagę nie tylko na oczekiwania, ale również na potrzeby i możliwości skóry.",
  },
  {
    icon: Leaf,
    title: "Naturalność",
    description:
      "Estetyka nie powinna zmieniać tego, kim jesteś – ma podkreślać to, co już w Tobie piękne.",
  },
];
