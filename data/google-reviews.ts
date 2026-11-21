import { siteConfig } from "./site-config";

const reviewCountWords: Record<Intl.LDMLPluralRule, string> = {
  zero: "opinii",
  one: "opinia",
  two: "opinie",
  few: "opinie",
  many: "opinii",
  other: "opinii",
};

const pluralRules = new Intl.PluralRules(siteConfig.locale);

// "1 opinia", "3 opinie", "5 opinii", "22 opinie"
export const formatReviewCount = (count: number) =>
  `${count} ${reviewCountWords[pluralRules.select(count)]}`;

export const googleReviewsContent = {
  eyebrow: "Opinie",
  title: "Co mówią klientki",
  description: `Opinie z profilu ${siteConfig.businessName} w Mapach Google.`,
  allReviewsLabel: "Zobacz wszystkie opinie",
  writeReviewLabel: "Wystaw opinię",
  reviewLinkLabel: "Zobacz w Google Maps",
  flagLabel: "Zgłoś",
  flagAriaLabel: "Zgłoś opinię w Google Maps",
  expandLabel: "Rozwiń",
  collapseLabel: "Zwiń",
  notice: (shown: number) =>
    `Pokazujemy ${formatReviewCount(shown)} z profilu gabinetu w Mapach Google, wybrane i uporządkowane przez Google według trafności. Google nie weryfikuje opinii, ale sprawdza je i usuwa fałszywe treści, gdy je wykryje.`,
};

// The field mask sets the price of the call; `reviews` already puts it in the top SKU.
export const GOOGLE_REVIEWS_FIELD_MASK =
  "rating,userRatingCount,reviews,googleMapsLinks";

export type GoogleReview = {
  id: string;
  rating: number;
  relativeTime: string;
  text: string;
  authorName: string;
  reviewUrl: string;
  flagUrl: string;
  authorUrl?: string;
  authorPhotoUrl?: string;
};

export type GoogleReviewsData = {
  rating: number;
  ratingCount: number;
  reviewsUrl: string;
  writeReviewUrl: string;
  reviews: GoogleReview[];
};

type PlaceReview = {
  name?: string;
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  googleMapsUri?: string;
  flagContentUri?: string;
};

export type PlaceResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlaceReview[];
  googleMapsLinks?: { reviewsUri?: string; writeAReviewUri?: string };
};

const ALLOWED_HOSTS = [
  "google.com",
  "maps.app.goo.gl",
  "googleusercontent.com",
];

// Only pass on https links that point to Google.
const safeUrl = (value?: string) => {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    const isAllowed =
      url.protocol === "https:" &&
      ALLOWED_HOSTS.some(
        (host) => url.hostname === host || url.hostname.endsWith(`.${host}`),
      );
    return isAllowed ? url.toString() : undefined;
  } catch {
    return undefined;
  }
};

/**
 * Maps the Places API response to the slim shape the client sees. Returns null
 * when there is nothing worth showing (too few reviews, missing required data).
 */
export const mapPlaceToReviews = (
  place: PlaceResponse,
): GoogleReviewsData | null => {
  const { minReviews, shownReviews } = siteConfig.googleReviews;
  const reviewsUrl = safeUrl(place.googleMapsLinks?.reviewsUri);
  const writeReviewUrl = safeUrl(place.googleMapsLinks?.writeAReviewUri);

  if (
    !place.rating ||
    !place.userRatingCount ||
    place.userRatingCount < minReviews ||
    !reviewsUrl ||
    !writeReviewUrl
  ) {
    return null;
  }

  // Reviews with text only, in Google's order; not filtered by stars.
  const reviews = (place.reviews ?? [])
    .flatMap((review): GoogleReview[] => {
      // The original text, so no "translated by Google" label is needed.
      const text = (
        review.originalText?.text ??
        review.text?.text ??
        ""
      ).trim();
      const reviewUrl = safeUrl(review.googleMapsUri);
      const flagUrl = safeUrl(review.flagContentUri);
      const author = review.authorAttribution;

      if (
        !review.name ||
        !review.rating ||
        !text ||
        !author?.displayName ||
        !reviewUrl ||
        !flagUrl
      ) {
        return [];
      }

      return [
        {
          id: review.name,
          rating: review.rating,
          relativeTime: review.relativePublishTimeDescription ?? "",
          text,
          authorName: author.displayName,
          reviewUrl,
          flagUrl,
          authorUrl: safeUrl(author.uri),
          authorPhotoUrl: safeUrl(author.photoUri),
        },
      ];
    })
    .slice(0, shownReviews);

  if (reviews.length < minReviews) return null;

  return {
    rating: place.rating,
    ratingCount: place.userRatingCount,
    reviewsUrl,
    writeReviewUrl,
    reviews,
  };
};
