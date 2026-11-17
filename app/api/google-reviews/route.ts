import {
  GOOGLE_REVIEWS_FIELD_MASK,
  mapPlaceToReviews,
  type PlaceResponse,
} from "@/data/google-reviews";
import { siteConfig } from "@/data/site-config";

// Google Maps Platform terms forbid caching reviews: keep this route dynamic,
// never add `dynamic = "force-static"`, `revalidate` or `fetchCache` here.
const headers = { "Cache-Control": "no-store" };
const empty = () => new Response(null, { status: 204, headers });

export async function GET(request: Request) {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!siteConfig.googleReviews.enabled || !key || !placeId) return empty();

  // Cheap guard against other sites and bots that would burn the daily quota.
  const site = request.headers.get("sec-fetch-site");
  if (site && site !== "same-origin") return empty();

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=pl&regionCode=PL`,
      {
        cache: "no-store",
        signal: AbortSignal.timeout(4000),
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": GOOGLE_REVIEWS_FIELD_MASK,
        },
      },
    );

    if (!response.ok) {
      console.error("[google-reviews] Places API", response.status);
      return empty();
    }

    const place: PlaceResponse = await response.json();
    const data = mapPlaceToReviews(place);
    if (!data) return empty();

    return Response.json(data, { headers });
  } catch (error) {
    console.error(
      "[google-reviews] request failed",
      error instanceof Error ? error.message : error,
    );
    return empty();
  }
}
