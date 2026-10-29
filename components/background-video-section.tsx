import { useId } from "react";

import { BackgroundVideo } from "./background-video";
import styles from "./background-video.module.css";

type BackgroundVideoSectionProps = {
  className?: string;
  description?: string;
  eyebrow?: string;
  id?: string;
  mobileOnly?: boolean;
  src: string;
  title?: string;
};

export const BackgroundVideoSection = ({
  className = "",
  description,
  eyebrow,
  id,
  mobileOnly = false,
  src,
  title,
}: BackgroundVideoSectionProps) => {
  const titleId = useId();
  const hasCopy = Boolean(eyebrow || title || description);

  return (
    <section
      aria-label={title ? undefined : eyebrow ?? description ?? "Wideo"}
      aria-labelledby={title ? titleId : undefined}
      className={`section-shell ${styles.section} ${
        mobileOnly ? styles.mobileOnly : ""
      } ${className}`}
      id={id}
    >
      <div
        className={`${styles.feature} ${
          hasCopy ? styles.withCopy : styles.withoutCopy
        }`}
      >
        {hasCopy && (
          <div className={styles.copy}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {title && <h2 id={titleId}>{title}</h2>}
            {description && <p className={styles.description}>{description}</p>}
          </div>
        )}
        <div className={styles.visual} aria-hidden="true">
          <BackgroundVideo
            className={styles.video}
            mobileOnly={mobileOnly}
            src={src}
          />
          <div className={styles.overlay} />
        </div>
      </div>
    </section>
  );
};
