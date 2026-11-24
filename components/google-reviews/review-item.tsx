"use client";

import { Flag } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import type { GoogleReview } from "@/data/google-reviews";

import styles from "./google-reviews.module.css";
import { RatingStars } from "./rating-stars";

type ReviewItemProps = {
  review: GoogleReview;
  showPhoto: boolean;
};

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

const getInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => Array.from(word)[0])
    .join("")
    .toUpperCase();

const Avatar = ({ name, photoUrl }: { name: string; photoUrl?: string }) => {
  const [hasFailed, setHasFailed] = useState(false);

  if (!photoUrl || hasFailed) {
    return (
      <span className={styles.avatar} aria-hidden="true">
        {getInitials(name)}
      </span>
    );
  }

  return (
    // Not next/image: its optimizer would cache Google's photos, which the
    // Places policies forbid.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={styles.avatar}
      src={photoUrl}
      alt=""
      width={40}
      height={40}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setHasFailed(true)}
    />
  );
};

export const ReviewItem = ({ review, showPhoto }: ReviewItemProps) => {
  const textId = useId();
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isClamped, setIsClamped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const text = textRef.current;
    if (!text || isExpanded) return;

    const observer = new ResizeObserver(() => {
      // total height (hidden overflow) > visible height
      setIsClamped(text.scrollHeight > text.clientHeight + 1);
    });
    observer.observe(text);
    return () => observer.disconnect();
  }, [isExpanded]);

  return (
    <li className={styles.item}>
      <article className={styles.review}>
        <p className={styles.meta}>
          <RatingStars
            label={`Ocena ${review.rating} na 5`}
            rating={review.rating}
          />
          <span className={styles.dot} aria-hidden="true">
            ·
          </span>
          <span>{review.relativeTime}</span>
        </p>

        <div className={styles.body}>
          <blockquote className={styles.quote}>
            <p
              className={styles.text}
              data-expanded={isExpanded}
              id={textId}
              ref={textRef}
            >
              „{review.text}”
            </p>
          </blockquote>
          {isClamped && (
            <button
              className={`interactive-underline ${styles.toggle}`}
              type="button"
              aria-controls={textId}
              aria-expanded={isExpanded}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Zwiń" : "Rozwiń"}
            </button>
          )}
        </div>

        <footer className={styles.author}>
          <Avatar
            name={review.authorName}
            photoUrl={showPhoto ? review.authorPhotoUrl : undefined}
          />
          <div className={styles.authorDetails}>
            {review.authorUrl ? (
              <a
                className={styles.authorName}
                href={review.authorUrl}
                {...externalLinkProps}
              >
                {review.authorName}
              </a>
            ) : (
              <span className={styles.authorName}>{review.authorName}</span>
            )}
            <span className={styles.links}>
              <a href={review.reviewUrl} {...externalLinkProps}>
                Zobacz w Google Maps
              </a>
              <span className={styles.dot} aria-hidden="true">
                ·
              </span>
              <a
                href={review.flagUrl}
                aria-label="Zgłoś opinię w Google Maps"
                {...externalLinkProps}
              >
                <Flag className="icon" aria-hidden="true" />
                Zgłoś
              </a>
            </span>
          </div>
        </footer>
      </article>
    </li>
  );
};
