import Image from "next/image";
import Link from "next/link";

import { CTAButton } from "./cta-button";

import styles from "./hero-page.module.css";

interface HeroLink {
  label: string;
  href: string;
}

interface HeroPageProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  desktopImage?: string;
  imageAlt: string;
  cta?: HeroLink;
  secondaryCta?: HeroLink;
  desktopPosition?: string;
}

export const PageHero = ({
  id = "hero",
  eyebrow,
  title,
  description,
  image,
  desktopImage,
  imageAlt,
  cta,
  secondaryCta,
  desktopPosition = "calc(100% - max(2rem, calc((100vw - 1180px) / 2 + 2rem))) center",
}: HeroPageProps) => {
  const titleId = `${id}-title`;
  const desktopHeroImage = desktopImage ?? image;

  return (
    <section
      id={id}
      className={styles.heroSection}
      aria-labelledby={titleId}
      style={
        {
          "--hero-desktop-image": `url("${desktopHeroImage}")`,
          "--hero-desktop-position": desktopPosition,
        } as React.CSSProperties
      }
    >
      <div className={styles.heroBackground} aria-hidden="true" />
      <div className={styles.heroVisual}>
        <Image
          className={`${styles.heroImage} ${styles.mobileHeroImage}`}
          src={image}
          alt={desktopImage ? "" : imageAlt}
          fill
          preload={!desktopImage}
          loading={desktopImage ? "eager" : undefined}
          sizes="100vw"
        />
        {desktopImage ? (
          <Image
            className={`${styles.heroImage} ${styles.desktopHeroImage}`}
            src={desktopImage}
            alt={imageAlt}
            fill
            preload
            sizes="(min-width: 1024px) 100vw, 40vw"
          />
        ) : null}
      </div>
      <div className={styles.heroOverlay} aria-hidden="true" />

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          <h1 id={titleId}>{title}</h1>
          {description ? (
            <p className={styles.description}>{description}</p>
          ) : null}

          {cta || secondaryCta ? (
            <div className={styles.heroActions}>
              {cta ? (
                <CTAButton className="button-outline" href={cta.href}>
                  {cta.label}
                </CTAButton>
              ) : null}
              {secondaryCta ? (
                <Link
                  className="button button-outline-secondary"
                  href={secondaryCta.href}
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
