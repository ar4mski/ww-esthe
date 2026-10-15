import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTAButton } from "@/components/cta-button";
import { FaqItem } from "@/components/faq-item";
import { getTreatment, getTreatmentImage, treatments } from "@/data/treatments";
import { BeforeAfterSlider } from "./components/before-after-slider";
import { Breadcrumbs } from "./components/breadcrumbs";
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

type TreatmentFactsProps = {
  className: string;
  duration: string;
  id?: string;
  price: string;
  recoveryTime?: string;
  sessionCount?: string;
};

const TreatmentFacts = ({
  className,
  duration,
  id,
  price,
  recoveryTime,
  sessionCount,
}: TreatmentFactsProps) => (
  <dl
    id={id}
    className={className}
    aria-label="Podstawowe informacje o zabiegu"
  >
    <div>
      <dt>Cena</dt>
      <dd>{price}</dd>
    </div>
    <div>
      <dt>Czas trwania</dt>
      <dd>{duration}</dd>
    </div>
    {recoveryTime ? (
      <div>
        <dt>Rekonwalescencja</dt>
        <dd>{recoveryTime}</dd>
      </div>
    ) : null}
    {sessionCount ? (
      <div>
        <dt>Liczba zabiegów</dt>
        <dd>{sessionCount}</dd>
      </div>
    ) : null}
  </dl>
);

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
    <article className={styles.layout}>
      <aside className={`${styles.sidebar} section-shell`}>
        <div className={styles.heroImage}>
          <Image
            className={styles.heroImageFile}
            src={getTreatmentImage(treatment.slug)}
            alt={treatment.imageAlt}
            fill
            sizes="(min-width: 640px) 40vw, 100vw"
          />
        </div>
        <TreatmentFacts
          id="informacje"
          className={`${styles.heroFacts} ${styles.desktopHeroFacts} ${styles.anchorSection}`}
          price={treatment.price}
          duration={treatment.duration}
          recoveryTime={treatment.recoveryTime}
          sessionCount={treatment.sessionCount}
        />
      </aside>

      <div className={styles.mainContent}>
        <section
          id="wprowadzenie"
          className={`${styles.hero} ${styles.anchorSection} section-shell`}
        >
          <div className={styles.heroCopy}>
            <Breadcrumbs currentPage={treatment.title} />
            <h1 className={styles.heroTitle}>{treatment.title}</h1>
            <TreatmentFacts
              id="informacje-mobilne"
              className={`${styles.heroFacts} ${styles.mobileHeroFacts} ${styles.anchorSection}`}
              price={treatment.price}
              duration={treatment.duration}
              recoveryTime={treatment.recoveryTime}
              sessionCount={treatment.sessionCount}
            />
            {treatment.forWho?.length ? (
              <>
                <h2 className={styles.heroSubtitle}>
                  Dla kogo jest ten zabieg?
                </h2>
                {treatment.forWho.map((paragraph) => (
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
        </section>

        <section
          id="opis-zabiegu"
          className={`${styles.content} ${styles.copyContent} ${styles.copyContentNoDivider} ${styles.anchorSection} section-shell`}
        >
          <h2>Na czym polega zabieg?</h2>
          <div className={styles.copyColumn}>
            {treatment.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          id="przygotowanie-do-zabiegu"
          className={`${styles.content} ${styles.listContent} ${styles.anchorSection} section-shell`}
        >
          <div>
            <h2>Przygotowanie do zabiegu</h2>
            <ol className={`${styles.list} ${styles.orderedList}`}>
              {treatment.preparation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </section>

        {treatment.beforeAfter && (
          <section
            id="przed-i-po"
            className={`${styles.content} ${styles.beforeAfter} ${styles.anchorSection} section-shell`}
            aria-labelledby="before-after-title"
          >
            <h2 id="before-after-title">Przed i po</h2>
            {"composite" in treatment.beforeAfter ? (
              <BeforeAfterSlider
                beforeSrc={treatment.beforeAfter.composite.src}
                beforeAlt={treatment.beforeAfter.composite.beforeAlt}
                afterSrc={treatment.beforeAfter.composite.src}
                afterAlt={treatment.beforeAfter.composite.afterAlt}
                composite
              />
            ) : (
              <BeforeAfterSlider
                beforeSrc={treatment.beforeAfter.before.src}
                beforeAlt={treatment.beforeAfter.before.alt}
                afterSrc={treatment.beforeAfter.after.src}
                afterAlt={treatment.beforeAfter.after.alt}
              />
            )}
          </section>
        )}

        <section
          id="przeciwwskazania"
          className={`${styles.content} ${styles.listContent} ${styles.anchorSection} section-shell`}
        >
          <div>
            <h2>Przeciwwskazania</h2>
            <ul className={`${styles.list} ${styles.unorderedList}`}>
              {treatment.contraindications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="reakcje-pozabiegowe"
          className={`${styles.content} ${styles.copyContent} ${styles.anchorSection} section-shell`}
        >
          <h2>Możliwe reakcje pozabiegowe</h2>
          <div className={styles.copyColumn}>
            {treatment.possibleReactions.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {treatment.possibleReactionSymptoms?.length ? (
              <ul className={`${styles.list} ${styles.unorderedList}`}>
                {treatment.possibleReactionSymptoms.map((symptom) => (
                  <li key={symptom}>{symptom}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>

        <section
          id="zalecenia-pozabiegowe"
          className={`${styles.content} ${styles.listContent} ${styles.anchorSection} section-shell`}
        >
          <div>
            <h2>Zalecenia pozabiegowe</h2>
            <ul className={`${styles.list} ${styles.unorderedList}`}>
              {treatment.aftercare.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {treatment.faqs?.length ? (
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
        ) : null}
      </div>
    </article>
  );
}
