import { Star, StarHalf } from "lucide-react";

import styles from "./google-reviews.module.css";

type RatingStarsProps = {
  label: string;
  rating: number;
  className?: string;
};

const getStarFill = (rating: number, position: number) => {
  if (rating >= position - 0.25) return "full";
  if (rating >= position - 0.75) return "half";
  return "empty";
};

export const RatingStars = ({
  label,
  rating,
  className = "",
}: RatingStarsProps) => (
  <span
    className={`${styles.stars} ${className}`}
    role="img"
    aria-label={label}
  >
    {[1, 2, 3, 4, 5].map((position) => {
      const fill = getStarFill(rating, position);

      return (
        <span className={styles.star} key={position}>
          <Star
            className="icon"
            aria-hidden="true"
            fill={fill === "full" ? "currentColor" : "none"}
          />
          {fill === "half" && (
            <StarHalf
              className={`icon ${styles.starHalf}`}
              aria-hidden="true"
              fill="currentColor"
            />
          )}
        </span>
      );
    })}
  </span>
);
