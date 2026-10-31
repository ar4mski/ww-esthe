import Link from "next/link";

import { Carousel } from "@/components/carousel";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { Testimonial } from "@/components/testimonial";
import { TreatmentListItem } from "@/components/treatment-list-item";
import { siteConfig } from "@/data/site-config";
import { testimonials } from "@/data/testimonials";
import { treatments } from "@/data/treatments";

import { FaqItem } from "@/components/faq-item";
import { GalleryPreview } from "@/components/gallery-grid/gallery-preview";
import { Visit } from "@/components/visit";
import { homeFaqs } from "@/data/faq";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="Estetyka, która zaczyna się od Ciebie"
        title="Naturalne piękno w dobrych rękach."
        description="To miejsce na krótkie, wprowadzające zdanie o podejściu salonu i doświadczeniu klientek."
        image="/images/heroes/home/mobile.jpg"
        desktopImage="/images/heroes/home/desktop.jpg"
        video="/video/IMG_4277.MP4"
        videoPoster="/images/heroes/home/video-poster.jpg"
        imageAlt="Portret klientki WW-Esthe"
        cta={{ label: "Umów konsultację", href: siteConfig.bookingUrl }}
        secondaryCta={{ label: "Zobacz usługi", href: "/zabiegi" }}
      />

      <PageSection
        id="popularne-zabiegi"
        eyebrow="Oferta"
        title="Zabiegi"
        description="Wybrane zabiegi dopasowane do Twoich potrzeb."
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
        <Link
          className={`text-link ${styles.allTreatmentsLink}`}
          href="/zabiegi"
        >
          Poznaj całą ofertę
        </Link>
      </PageSection>

      <PageSection
        id="wizyta-krok-po-kroku"
        headingClassName={styles.visitIntro}
        eyebrow="Nasze podejście"
        title="Twoja wizyta krok po kroku"
      >
        <Visit />
      </PageSection>

      <PageSection
        id="homepage-gallery"
        eyebrow="Atmosfera"
        title="Moje prace"
        description="Zobacz efekty zabiegów i poznaj estetykę WW-Esthe."
      >
        <GalleryPreview className={styles.fullWidthGallery} previewCount={3} />
        <Link className="text-link" href="/galeria">
          Zobacz całą galerię
        </Link>
      </PageSection>

      <PageSection
        className="section-tinted"
        id="homepage-faq"
        eyebrow="Najczęściej zadawane pytania"
        title="Wszystko o co chciałabyś zapytać"
      >
        {homeFaqs.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </PageSection>

      <PageSection eyebrow="Opinie" title="Co mówią klientki" id="opinie">
        <Carousel ariaLabel="Nawigacja opinii" autoPlayInterval={5000}>
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.quote}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </Carousel>
      </PageSection>
    </>
  );
}
