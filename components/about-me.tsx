import Image from "next/image";
import Link from "next/link";

import { AboutStats } from "./about-stats";
import styles from "./about-me.module.css";

type AboutMeProps = {
  title: string;
  text: string;
};

export const AboutMe = ({ title, text }: AboutMeProps) => (
  <section id="o-mnie" className={styles.about} aria-labelledby="o-mnie-title">
    <div className={styles.visual}>
      <Image
        className={styles.image}
        src="/images/heroes/about/hero.jpg"
        alt="Wiktoria Warylak siedząca na jasnej sofie w gabinecie"
        fill
        sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
      />
    </div>

    <div className={styles.intro}>
      <p className="eyebrow">O mnie</p>
      <h2 id="o-mnie-title">{title}</h2>
    </div>

    <div className={styles.body}>
      <p className={styles.lead}>{text}</p>

      <div className={styles.summary}>
        <AboutStats className={styles.stats} />

        <Link
          className={`button button-outline button-outline-beige ${styles.action}`}
          href="/o-mnie"
        >
          Poznaj mnie
        </Link>
      </div>
    </div>
  </section>
);
