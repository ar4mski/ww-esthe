import { ArrowLeft, ArrowRight } from "lucide-react";

import styles from "./before-after.module.css";

type BeforeAfterPagerProps = {
  activeIndex: number;
  count: number;
  onChange: (index: number) => void;
};

export const BeforeAfterPager = ({
  activeIndex,
  count,
  onChange,
}: BeforeAfterPagerProps) => (
  <div className={styles.pager}>
    <button
      className={styles.pagerButton}
      type="button"
      aria-label="Poprzedni efekt"
      onClick={() => onChange((activeIndex - 1 + count) % count)}
    >
      <ArrowLeft className="icon" aria-hidden />
    </button>
    <span
      className={styles.dashes}
      role="img"
      aria-label={`Efekt ${activeIndex + 1} z ${count}`}
    >
      {Array.from({ length: count }, (_, index) => (
        <span
          className={`${styles.dash} ${index === activeIndex ? styles.dashActive : ""}`}
          key={index}
        />
      ))}
    </span>
    <button
      className={styles.pagerButton}
      type="button"
      aria-label="Następny efekt"
      onClick={() => onChange((activeIndex + 1) % count)}
    >
      <ArrowRight className="icon" aria-hidden />
    </button>
  </div>
);
