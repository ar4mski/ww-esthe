export interface VisitStepData {
  number: string;
  shortText: string;
  subtitle: string;
  text: string;
  title: string;
}

export const visitSteps: VisitStepData[] = [
  {
    number: "1",
    title: "Konsultacja",
    text: "Rozmawiamy o Twoich oczekiwaniach i potrzebach. To spokojny początek naszej wizyty.",
    shortText:
      "Rozmawiamy o Twoich oczekiwaniach i potrzebach. To spokojny początek naszej wizyty.",
    subtitle: "Zaczynamy od rozmowy",
  },
  {
    number: "2",
    title: "Indywidualny plan",
    text: "Dobieramy zabieg i technikę odpowiednią do Twojej urody oraz kondycji skóry. Omawiamy kolejne etapy wizyty i wspólnie ustalamy plan działania, aby efekt był naturalny, harmonijny i dopasowany właśnie do Ciebie.",
    shortText:
      "Dobieramy zabieg i technikę do Twojej urody oraz kondycji skóry, aby efekt był naturalny.",
    subtitle: "Twój plan, Twoje potrzeby",
  },
  {
    number: "3",
    title: "Spokojny zabieg",
    text: "Dbam o Twój komfort i dokładnie wyjaśniam każdy etap wizyty. Pracuję spokojnie i precyzyjnie, a Ty możesz na bieżąco zadawać pytania i mieć pewność, że wszystko przebiega w dobrych warunkach.",
    shortText:
      "Dbam o Twój komfort i wyjaśniam każdy etap. Możesz na bieżąco zadawać pytania.",
    subtitle: "W dobrych rękach",
  },
  {
    number: "4",
    title: "Pielęgnacja po wizycie",
    text: "Po zabiegu otrzymujesz jasne zalecenia oraz mały krem do pielęgnacji w domu. Podpowiadam, jak zadbać o skórę w kolejnych dniach, czego unikać i na co zwrócić uwagę, aby wspierać gojenie oraz utrzymać piękny efekt na dłużej.",
    shortText:
      "Otrzymujesz jasne zalecenia i krem do pielęgnacji w domu, aby wspierać gojenie.",
    subtitle: "Dbamy o efekt także później",
  },
];
