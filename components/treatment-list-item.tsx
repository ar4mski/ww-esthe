import Image from "next/image";
import Link from "next/link";

import { getTreatmentImage, type Treatment } from "@/data/treatments";

import styles from "./treatment-list-item.module.css";

type TreatmentListItemProps = {
  treatment: Treatment;
  variant?: "stacked" | "grid";
};

export const TreatmentListItem = ({
  treatment,
  variant = "stacked",
}: TreatmentListItemProps) => (
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
