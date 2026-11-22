import type { Metadata } from "next";
import Link from "next/link";

import { BookingButton, MessageButton } from "@/components/cta-buttons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { TreatmentListItem } from "@/components/treatment-list-item";
import { createPageMetadata } from "@/data/page-metadata";
import { siteConfig } from "@/data/site-config";
import {
  getLocalBusinessJsonLd,
  getWebSiteJsonLd,
} from "@/data/structured-data";
import { treatments } from "@/data/treatments";
import homeVideoPoster from "@/public/images/heroes/home/video-poster.jpg";

import { AboutMe } from "@/components/about-me";
import { FaqSection } from "@/components/faq-section";
import { GoogleReviews } from "@/components/google-reviews";
import { Visit } from "@/components/visit";
import { homeFaqs } from "@/data/faq";
import { HomeShowcase } from "./components/home-showcase";
import styles from "./homepage.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Makijaż permanentny i powiększanie ust w Szczecinie",
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={getWebSiteJsonLd()} />
      <JsonLd data={getLocalBusinessJsonLd()} />
      <PageHero
        eyebrow="Estetyka, która zaczyna się od Ciebie"
        title="Naturalne piękno w dobrych rękach."
        description="Makijaż permanentny, modelowanie ust i medycyna estetyczna w Szczecinie."
        desktopImage="/images/heroes/home/desktop.jpg"
        video="/video/hero-home.mp4"
        videoPoster={homeVideoPoster}
        imageAlt={`Portret klientki ${siteConfig.businessName}`}
        actions={
          <>
            <BookingButton />
          </>
        }
      />

      <PageSection
        id="popularne-zabiegi"
        eyebrow="Oferta"
        title="Zabiegi"
        description="Wybrane zabiegi dopasowane do Twoich potrzeb."
        action={
          <Link className="text-link" href="/zabiegi">
            Poznaj całą ofertę
          </Link>
        }
      >
        <div className={`${styles.list} ${styles.grid}`}>
          {treatments.slice(0, 3).map((treatment) => (
            <TreatmentListItem
              key={treatment.slug}
              treatment={treatment}
              variant="grid"
            />
          ))}
        </div>
      </PageSection>

      <AboutMe
        title="Estetyka poparta wiedzą medyczną."
        text="Certyfikowane szkolenia z makijażu permanentnego, modelowania ust, mezoterapii i laserowego usuwania PMU."
      />

      <PageSection
        id="wizyta-krok-po-kroku"
        className={styles.visitSection}
        headingClassName={styles.visitHeading}
        eyebrow="Moje podejście"
        title="Twoja wizyta krok po kroku"
        description="Bez pośpiechu i niespodzianek.Zanim zaczniemy, wiesz dokładnie, co Cię czeka."
      >
        <Visit />
        <div className={`button-group ${styles.visitActions}`}>
          <BookingButton />
          <MessageButton>Napisz do mnie</MessageButton>
        </div>
      </PageSection>

      <PageSection
        id="homepage-gallery"
        eyebrow="Efekty"
        title="Moje prace"
        description={`Zobacz efekty zabiegów i poznaj estetykę ${siteConfig.businessName}.`}
      >
        <HomeShowcase />
      </PageSection>

      {siteConfig.googleReviews.enabled && <GoogleReviews />}

      <FaqSection
        className="section-tinted"
        faqs={homeFaqs}
        id="homepage-faq"
        eyebrow="Najczęściej zadawane pytania"
        title="Wszystko o co chciałabyś zapytać"
      />
    </>
  );
}
