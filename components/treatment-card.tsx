import Image from "next/image";
import Link from "next/link";

import { getTreatmentImage, type Treatment } from "@/data/treatments";

import styles from "./treatment-card.module.css";

type TreatmentCardProps = {
  treatment: Treatment;
  variant?: "stacked" | "grid";
};

// Rendered widths of the image column per variant (see the module CSS grids).
const imageSizes = {
  stacked: "(min-width: 1024px) 500px, (min-width: 640px) 46vw, 100vw",
  grid: "(min-width: 1024px) 350px, (min-width: 640px) 47vw, 90vw",
};

export const TreatmentCard = ({
  treatment,
  variant = "stacked",
}: TreatmentCardProps) => (
  <article
    className={
      variant === "grid" ? `${styles.item} ${styles.grid}` : styles.item
    }
  >
    <div className={styles.row}>
      <Link
        className={styles.imageLink}
        href={`/zabiegi/${treatment.slug}`}
        aria-label={`Zobacz zabieg: ${treatment.title}`}
      >
        <div className={styles.imageWrap}>
          <Image
            className={styles.image}
            src={getTreatmentImage(treatment.slug)}
            alt={treatment.imageAlt}
            width={720}
            height={900}
            sizes={imageSizes[variant]}
          />
        </div>
      </Link>
      <div className={styles.copy}>
        <h2>{treatment.title}</h2>
        <p>{treatment.shortDescription}</p>
        <div className={styles.meta}>
          <span>{treatment.price}</span>
          <Link className={styles.link} href={`/zabiegi/${treatment.slug}`}>
            Zobacz zabieg
          </Link>
        </div>
      </div>
    </div>
  </article>
);
