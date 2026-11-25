import type { PlaceResponse } from "@/data/google-reviews";

// Fake Places API response for previewing the section before launch with
// GOOGLE_REVIEWS_MOCK=true (ignored once ALLOW_INDEXING=true). Obviously fake
// on purpose: invented reviews must never appear on the launched site.
const review = (
  id: number,
  rating: number,
  relativeTime: string,
  text: string,
  author: string,
) => ({
  name: `places/mock/reviews/${id}`,
  rating,
  relativePublishTimeDescription: relativeTime,
  originalText: { text, languageCode: "pl" },
  authorAttribution: {
    displayName: author,
    uri: "https://www.google.com/maps/contrib/mock",
  },
  googleMapsUri: "https://www.google.com/maps",
  flagContentUri: "https://www.google.com/maps",
});

export const mockPlace: PlaceResponse = {
  rating: 4.6,
  userRatingCount: 22,
  googleMapsLinks: {
    reviewsUri: "https://www.google.com/maps",
    writeAReviewUri: "https://www.google.com/maps",
  },
  reviews: [
    review(
      1,
      5,
      "2 tygodnie temu",
      "Przykładowa opinia do podglądu sekcji. Krótki tekst w jednym akapicie.",
      "Przykładowa Autorka",
    ),
    review(
      2,
      5,
      "miesiąc temu",
      "Przykładowa długa opinia do podglądu przycisku „Rozwiń”. "
        .repeat(12)
        .trim(),
      "Autorka Z Bardzo Długim Imieniem i Nazwiskiem",
    ),
    review(
      3,
      4,
      "2 miesiące temu",
      "Przykładowa opinia z oceną 4 na 5.",
      "Testowa Klientka",
    ),
    review(
      4,
      5,
      "3 miesiące temu",
      "Przykładowa opinia numer cztery, do podglądu karuzeli.",
      "Czwarta Osoba",
    ),
    review(
      5,
      5,
      "4 miesiące temu",
      "Przykładowa opinia numer pięć, do podglądu karuzeli.",
      "Piąta Osoba",
    ),
  ],
};
