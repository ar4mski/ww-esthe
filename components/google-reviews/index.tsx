"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import {
  getStoredCookieConsent,
  subscribeToCookieConsent,
} from "@/components/cookie-consent/cookie-consent-storage";
import { Carousel } from "@/components/carousel/carousel";
import { PageSection } from "@/components/page-section";
import {
  formatReviewCount,
  type GoogleReviewsData,
} from "@/data/google-reviews";
import { siteConfig } from "@/data/site-config";
import googleMapsLogo from "@/public/images/google-maps-logo.svg";

import styles from "./google-reviews.module.css";
import { RatingStars } from "./rating-stars";
import { ReviewItem } from "./review-item";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

const ratingFormat = new Intl.NumberFormat(siteConfig.locale, {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const fetchReviews = async (signal: AbortSignal) => {
  const response = await fetch("/api/google-reviews", { signal });
  if (response.status !== 200) return null;
  const data: GoogleReviewsData = await response.json();
  return data;
};

/**
 * Google reviews are fetched only when the visitor scrolls near the section,
 * never at build time: the Google Maps Platform terms forbid storing them, and
 * this keeps the home page static. Until the data arrives (or when there is
 * none) nothing is rendered.
 */
export const GoogleReviews = () => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<GoogleReviewsData | null>(null);

  // Author photos load from Google's servers, so only with consent.
  const showPhotos = useSyncExternalStore(
    subscribeToCookieConsent,
    () => getStoredCookieConsent()?.googleContent === true,
    () => false,
  );

  useEffect(() => {
    const anchor = anchorRef.current;
    if (!anchor) return;

    const controller = new AbortController();
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // Exactly one request per page view.
        observer.disconnect();
        fetchReviews(controller.signal)
          .then(setData)
          .catch(() => {});
      },
      // Start one viewport before the section becomes visible.
      { rootMargin: "100% 0px" },
    );
    observer.observe(anchor);

    return () => {
      observer.disconnect();
      controller.abort();
    };
  }, []);

  if (!data) return <div ref={anchorRef} aria-hidden="true" />;

  const rating = ratingFormat.format(data.rating);

  return (
    <div data-analytics-location="reviews">
      <PageSection
        id="homepage-reviews"
        className={styles.section}
        headingClassName={styles.heading}
        eyebrow="Opinie"
        title="Co mówią klientki"
        description={
          <>
            Opinie z profilu{" "}
            <a
              className={styles.businessLink}
              href={data.reviewsUrl}
              {...externalLinkProps}
            >
              {siteConfig.businessName}
            </a>{" "}
            <span className={styles.descriptionSource}>
              w{" "}
              <Image
                className={styles.attribution}
                src={googleMapsLogo}
                alt="Google Maps"
              />
            </span>
          </>
        }
      >
        <div className={styles.summary}>
          <p className={styles.rating}>
            <span className={styles.ratingValue}>{rating}</span>
            <span className={styles.ratingDetails}>
              <RatingStars
                className={styles.summaryStars}
                label={`Średnia ocena ${rating} na 5`}
                rating={data.rating}
              />
              <span>{formatReviewCount(data.ratingCount)}</span>
            </span>
          </p>
        </div>

        <div className={styles.reviews}>
          <Carousel
            as="ul"
            label="Opinie"
            until="tablet"
            className={styles.list}
          >
            {data.reviews.map((review) => (
              <ReviewItem
                key={review.id}
                review={review}
                showPhoto={showPhotos}
              />
            ))}
          </Carousel>
        </div>

        <div className={styles.footer}>
          <div className={`button-group ${styles.actions}`}>
            <a
              className="button button-secondary"
              href={data.reviewsUrl}
              data-reviews-action="all_reviews"
              {...externalLinkProps}
            >
              Zobacz wszystkie opinie
            </a>
            <a
              className="button button-link"
              href={data.writeReviewUrl}
              data-reviews-action="write_review"
              {...externalLinkProps}
            >
              Wystaw opinię
            </a>
          </div>
          <p className={styles.notice}>
            Pokazujemy {formatReviewCount(data.reviews.length)} z profilu
            gabinetu w Mapach Google, wybrane i uporządkowane przez Google
            według trafności. Google nie weryfikuje opinii, ale sprawdza je
            i usuwa fałszywe treści, gdy je wykryje.
          </p>
        </div>
      </PageSection>
    </div>
  );
};
