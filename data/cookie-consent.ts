export const cookieConsentContent = {
  title: "Twoja prywatność",
  description:
    "Używamy plików cookie, aby strona działała poprawnie oraz — za Twoją zgodą — do analizy ruchu na stronie (np. Google Analytics). Możesz zaakceptować wszystkie pliki cookie, odrzucić opcjonalne albo dostosować swój wybór.",
  privacyPolicyLabel: "Polityka prywatności",
  acceptAllLabel: "Akceptuj wszystkie",
  rejectAllLabel: "Odrzuć opcjonalne",
  settingsLabel: "Ustawienia",
  saveSettingsLabel: "Zapisz wybór",
  reopenLabel: "Ustawienia cookies",
  categories: [
    {
      id: "necessary",
      label: "Niezbędne",
      description:
        "Konieczne do prawidłowego działania strony. Nie można ich wyłączyć.",
      required: true,
    },
    {
      id: "analytics",
      label: "Analityczne",
      description:
        "Pomagają nam zrozumieć, jak odwiedzający korzystają ze strony (np. Google Analytics).",
      required: false,
    },
  ],
} as const;
