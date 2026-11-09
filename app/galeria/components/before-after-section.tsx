import { beforeAfterCategories } from "@/data/before-after";

import styles from "./before-after.module.css";
import { BeforeAfterShowcase } from "./before-after-showcase";

export const BeforeAfterSection = () =>
  beforeAfterCategories.length > 0 ? (
    <section className={styles.section} aria-labelledby="before-after-title">
      <BeforeAfterShowcase categories={beforeAfterCategories}>
        <p className={`eyebrow ${styles.eyebrow}`}>Efekty zabiegów</p>
        <h2 id="before-after-title">Przed i po</h2>
        <p className={styles.description}>
          Porównaj efekty w wybranej kategorii.
        </p>
      </BeforeAfterShowcase>
    </section>
  ) : null;
