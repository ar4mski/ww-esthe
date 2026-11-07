import Image from "next/image";
import Link from "next/link";

import { CTAButton } from "@/components/cta-button";
import { aboutStats } from "@/data/about";

import styles from "./about-hero.module.css";

export const AboutHero = () => (
  <section className={styles.hero} aria-labelledby="about-hero-title">
    <div className={styles.visual}>
      <Image
        className={styles.image}
        src="/images/heroes/about/hero.jpg"
        alt="Wiktoria siedząca na jasnej sofie w gabinecie"
        fill
        preload
        sizes="(min-width: 1024px) 560px, 100vw"
      />
    </div>

    <div className={styles.intro}>
      <p className="eyebrow">O mnie</p>
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
        <dl className={styles.stats}>
          {aboutStats.map(({ value, label, shortLabel }) => (
            <div className={styles.stat} key={value}>
              <dt>{value}</dt>
              <dd>
                <span className={styles.fullLabel}>{label}</span>
                <span className={styles.shortLabel}>{shortLabel}</span>
              </dd>
            </div>
          ))}
        </dl>

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
