import Image from "next/image";
import Link from "next/link";

import { homeAbout } from "@/data/home-about";

import { AboutStats } from "./about-stats";
import styles from "./home-about.module.css";

export const HomeAbout = () => (
  <section id="o-mnie" className={styles.about} aria-labelledby="o-mnie-title">
    <div className={styles.visual}>
      <Image
        className={styles.image}
        src={homeAbout.image.src}
        alt={homeAbout.image.alt}
        fill
        sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
      />
    </div>

    <div className={styles.intro}>
      <p className="eyebrow">{homeAbout.eyebrow}</p>
      <h2 id="o-mnie-title">{homeAbout.title}</h2>
    </div>

    <div className={styles.body}>
      {/* <p className={styles.lead}>{homeAbout.lead}</p> */}
      <p className={styles.lead}>{homeAbout.training}</p>

      <div className={styles.summary}>
        <AboutStats className={styles.stats} />

        <Link
          className={`button button-outline button-outline-beige ${styles.action}`}
          href={homeAbout.cta.href}
        >
          {homeAbout.cta.label}
        </Link>
      </div>
    </div>
  </section>
);
