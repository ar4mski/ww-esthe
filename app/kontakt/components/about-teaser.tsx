import Image from "next/image";
import Link from "next/link";

import styles from "./about-teaser.module.css";

export const AboutTeaser = () => (
  <section
    className={`section-shell section-tinted ${styles.aboutTeaser}`}
    id="o-mnie"
    aria-labelledby="o-mnie-title"
  >
    <div className={styles.imageFrame}>
      <Image
        className={styles.image}
        src="/images/heroes/about/hero.jpg"
        alt="Portret kobiety w naturalnym świetle"
        fill
        sizes="(min-width: 1024px) 560px, (min-width: 640px) 704px, 100vw"
      />
    </div>
    <div className={styles.copy}>
      <p className="eyebrow">O mnie</p>
      <h2 id="o-mnie-title">Poznajmy się bliżej.</h2>
      <p>
        Wierzę, że najlepsze efekty zaczynają się od uważnej rozmowy, zaufania i
        dobrze dobranego planu.
      </p>
      <Link
        className="button button-outline button-outline-beige"
        href="/o-mnie"
      >
        Poznaj mnie
      </Link>
    </div>
  </section>
);
