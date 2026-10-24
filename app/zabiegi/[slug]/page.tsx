import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTAButton } from "@/components/cta-button";
import { FaqItem } from "@/components/faq-item";
import {
  getTreatment,
  getTreatmentImage,
  treatments,
} from "@/data/treatments";
import { Breadcrumbs } from "./components/breadcrumbs";
import { TreatmentFacts } from "./components/treatment-facts";
import styles from "./treatment-detail.module.css";

type TreatmentPageProps = {
  params: Promise<{ slug: string }>;
};

const galleryLinks: Record<
  string,
  { category: "brwi" | "usta"; label: string }
> = {
  "makijaz-permanentny-brwi": {
    category: "brwi",
    label: "Zobacz prace brwi",
  },
  "makijaz-permanentny-ust": {
    category: "usta",
    label: "Zobacz prace ust",
  },
  "modelowanie-ust": {
    category: "usta",
    label: "Zobacz prace ust",
  },
};

type SectionItemsProps = {
  items: string[];
  ordered?: boolean;
};

const SectionItems = ({ items, ordered = false }: SectionItemsProps) => {
  const List = ordered ? "ol" : "ul";

  return (
    <List
      className={`${styles.list} ${
        ordered ? styles.orderedList : styles.unorderedList
      }`}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </List>
  );
};

export function generateStaticParams() {
  return treatments.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  return {
    title: treatment
      ? `${treatment.title} | WW - ESTHE`
      : "Zabieg | WW - ESTHE",
    description: treatment?.shortDescription,
  };
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    notFound();
  }

  const galleryLink = galleryLinks[treatment.slug];

  return (
    <article>
      <section
        id="wprowadzenie"
        className={`${styles.hero} ${styles.anchorSection} section-shell`}
      >
        <div className={styles.heroCopy}>
          <div className={styles.heroIntro}>
            <Breadcrumbs currentPage={treatment.title} />
            <h1 className={styles.heroTitle}>{treatment.title}</h1>
          </div>
          <TreatmentFacts
            id="informacje"
            className={`${styles.heroFacts} ${styles.mobileHeroFacts} ${styles.anchorSection}`}
            price={treatment.price}
            duration={treatment.duration}
            recoveryTime={treatment.recoveryTime}
            sessionCount={treatment.sessionCount}
          />
          <div className={styles.heroDetails}>
            {treatment.forWho ? (
              <>
                <h2 className={styles.heroSubtitle}>
                  {treatment.forWho.heading}
                </h2>
                {treatment.forWho.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </>
            ) : null}
            <div className={styles.heroActions}>
              <CTAButton />
              {galleryLink ? (
                <Link
                  className="button button-secondary"
                  href={`/galeria?category=${galleryLink.category}`}
                >
                  Zobacz moje prace
                </Link>
              ) : null}
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            className={styles.heroImageFile}
            src={getTreatmentImage(treatment.slug)}
            alt={treatment.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>

      <section
        id="opis-zabiegu"
        className={`${styles.content} ${styles.copyContent} ${styles.anchorSection} section-shell`}
      >
        <TreatmentFacts
          className={`${styles.heroFacts} ${styles.desktopHeroFacts} ${styles.anchorSection}`}
          price={treatment.price}
          duration={treatment.duration}
          recoveryTime={treatment.recoveryTime}
          sessionCount={treatment.sessionCount}
        />
        <h2>{treatment.description.heading}</h2>
        <div className={styles.copyColumn}>
          {treatment.description.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section
        id="przygotowanie-do-zabiegu"
        className={`${styles.content} ${styles.listContent} ${styles.anchorSection} section-shell`}
      >
        <div>
          <h2>{treatment.preparation.heading}</h2>
          <SectionItems
            items={treatment.preparation.items}
            ordered={treatment.preparation.ordered}
          />
        </div>
      </section>

      <section
        id="przeciwwskazania"
        className={`${styles.content} ${styles.listContent} ${styles.anchorSection} section-shell`}
      >
        <div>
          <h2>{treatment.contraindications.heading}</h2>
          <SectionItems items={treatment.contraindications.items} />
        </div>
      </section>

      <section
        id="reakcje-pozabiegowe"
        className={`${styles.content} ${styles.listContent} ${styles.anchorSection} section-shell`}
      >
        <div>
          <h2>{treatment.recovery.heading}</h2>
          <div className={styles.recoveryParagraphs}>
            {treatment.recovery.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <section
            className={styles.recoverySymptoms}
            aria-labelledby="objawy-pozabiegowe"
          >
            <h3
              className={styles.recoverySymptomsHeading}
              id="objawy-pozabiegowe"
            >
              {treatment.recovery.symptomsHeading}
            </h3>
            <SectionItems items={treatment.recovery.symptoms} />
          </section>
        </div>
      </section>

      <section
        id="zalecenia-pozabiegowe"
        className={`${styles.content} ${styles.listContent} ${styles.anchorSection} section-shell`}
      >
        <div>
          <h2>{treatment.aftercare.heading}</h2>
          <SectionItems items={treatment.aftercare.items} />
        </div>
      </section>

      <section
        id="faq"
        className={`${styles.content} ${styles.faqSection} ${styles.anchorSection} section-shell section-tinted`}
        aria-labelledby="faq-title"
      >
        <div>
          <h2 id="faq-title">Najczęściej zadawane pytania</h2>
        </div>
        <div>
          {treatment.faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </section>
    </article>
  );
}
