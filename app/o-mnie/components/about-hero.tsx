import Image from "next/image";
import Link from "next/link";

import { AboutStats } from "@/components/about-stats";
import { CTAButton } from "@/components/cta-button";
import aboutHeroImage from "@/public/images/heroes/about/hero.jpg";

import styles from "./about-hero.module.css";

export const AboutHero = () => (
  <section className={styles.hero} aria-labelledby="about-hero-title">
    <div className={styles.visual}>
      <Image
        className={styles.image}
        src={aboutHeroImage}
        alt="Wiktoria siedząca na jasnej sofie w gabinecie"
        fill
        preload
        placeholder="blur"
        sizes="(min-width: 1024px) 560px, 100vw"
      />
    </div>

    <div className={styles.intro}>
      <h1 id="about-hero-title">
        Cześć!
        <br />
        Miło mi, że tu jesteś.
      </h1>
    </div>

    <div className={styles.body}>
      <p className={styles.lead}>
        Nazywam się Wiktoria i od ponad 5 lat rozwijam swoją pasję do branży
        beauty. To, co początkowo było zainteresowaniem estetyką i pielęgnacją,
        z czasem stało się ważną częścią mojego życia zawodowego.
      </p>

      <div className={styles.summary}>
        <AboutStats className={styles.stats} />

        <div className={styles.actions}>
          <CTAButton className={`button-outline ${styles.primaryAction}`}>
            Umów wizytę
          </CTAButton>
          <Link className="button button-outline" href="/zabiegi">
            <span className={styles.fullLabel}>Zobacz zabiegi</span>
            <span className={styles.shortLabel}>Zabiegi</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);
