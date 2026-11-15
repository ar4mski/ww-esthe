import { getImageProps, type StaticImageData } from "next/image";
import Link from "next/link";
import { preload } from "react-dom";

import { BackgroundVideo } from "./background-video";
import { CTAButton } from "./cta-button";

import styles from "./hero-page.module.css";

interface HeroLink {
  label: string;
  href: string;
}

// A static import also carries a tiny blurDataURL, shown while the photo loads.
type ImageSource = string | StaticImageData;

interface HeroPageProps {
  title: string;
  image: ImageSource;
  imageAlt: string;
  id?: string;
  eyebrow?: string;
  description?: string;
  desktopImage?: ImageSource;
  video?: string;
  videoPoster?: ImageSource;
  blendVideoOnDesktop?: boolean;
  cta?: HeroLink;
  secondaryCta?: HeroLink;
  desktopPosition?: string;
}

// The visual switches source and rendered width at the tablet breakpoint.
const DESKTOP_MEDIA = "(min-width: 640px)";
const MOBILE_MEDIA = "(max-width: 639px)";
const DESKTOP_SIZES = "(min-width: 1024px) 100vw, 40vw";
const MOBILE_SIZES = "100vw";

// The desktop backdrop is blurred by 1.25rem, so a 64 px variant is enough.
const getBackdropImageSet = (src: ImageSource) => {
  const {
    props: { srcSet = "" },
  } = getImageProps({ alt: "", src, width: 64, height: 64 });

  const imageSet = srcSet
    .split(", ")
    .map((entry) => {
      const [url, density] = entry.split(" ");
      return `url("${url}") ${density}`;
    })
    .join(", ");

  return `image-set(${imageSet})`;
};

export const PageHero = ({
  title,
  image,
  imageAlt,
  id = "hero",
  eyebrow,
  description,
  desktopImage,
  video,
  videoPoster,
  blendVideoOnDesktop,
  cta,
  secondaryCta,
  desktopPosition = "calc(100% - max(2rem, calc((100vw - var(--content-max-width)) / 2 + 2rem))) center",
}: HeroPageProps) => {
  const titleId = `${id}-title`;
  const alt = videoPoster ? "" : imageAlt;
  const mobileSrc = videoPoster ?? image;
  const desktopSrc = videoPoster ?? desktopImage ?? image;
  // getImageProps can't take `placeholder` (nothing would remove it), so the
  // blur is drawn by CSS behind the opaque photo, which covers it once loaded.
  const blurDataURL =
    typeof mobileSrc === "string" ? undefined : mobileSrc.blurDataURL;

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ alt, src: desktopSrc, fill: true, sizes: DESKTOP_SIZES });
  const { props: mobileImageProps } = getImageProps({
    alt,
    src: mobileSrc,
    fill: true,
    sizes: MOBILE_SIZES,
    loading: "eager",
    fetchPriority: "high",
    className: `${styles.heroImage} ${videoPoster ? styles.videoPosterImage : ""}`,
  });

  // One preload per viewport. React would otherwise preload every non-lazy <img>
  // on its own, which for two breakpoint images meant two downloads on mobile.
  preload(mobileImageProps.src, {
    as: "image",
    imageSrcSet: mobileImageProps.srcSet,
    imageSizes: MOBILE_SIZES,
    media: MOBILE_MEDIA,
    fetchPriority: "high",
  });
  preload(mobileImageProps.src, {
    as: "image",
    imageSrcSet: desktopSrcSet,
    imageSizes: DESKTOP_SIZES,
    media: DESKTOP_MEDIA,
    fetchPriority: "high",
  });

  return (
    <section
      id={id}
      className={`${styles.heroSection} ${
        video && blendVideoOnDesktop ? styles.blendedVideoHero : ""
      }`}
      aria-labelledby={titleId}
      style={
        {
          "--hero-desktop-image": getBackdropImageSet(desktopImage ?? image),
          "--hero-desktop-position": desktopPosition,
          ...(blurDataURL && {
            "--hero-placeholder-image": `url("${blurDataURL}")`,
          }),
        } as React.CSSProperties
      }
    >
      <div className={styles.heroBackground} aria-hidden="true" />
      <div className={styles.heroVisual}>
        <picture>
          <source
            media={DESKTOP_MEDIA}
            srcSet={desktopSrcSet}
            sizes={DESKTOP_SIZES}
          />
          <img {...mobileImageProps} alt={alt} />
        </picture>
        {video && <BackgroundVideo className={styles.heroVideo} src={video} />}
      </div>
      <div className={styles.heroOverlay} aria-hidden="true" />

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1 id={titleId}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}

          {(cta || secondaryCta) && (
            <div className={styles.heroActions}>
              {cta && (
                <CTAButton className="button-outline" href={cta.href}>
                  {cta.label}
                </CTAButton>
              )}
              {secondaryCta && (
                <Link
                  className="button button-outline-secondary"
                  href={secondaryCta.href}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
