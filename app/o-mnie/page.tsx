import { GraduationCap, Quote } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { PageSection } from "@/components/page-section";
import { aboutValues } from "@/data/about";
import { createPageMetadata } from "@/data/page-metadata";

import styles from "./about.module.css";
import { AboutHero } from "./components/about-hero";
import { CertificateList } from "./components/certificate-list";

export const metadata: Metadata = createPageMetadata({
  title: "O mnie | WW - ESTHE",
  description:
    "Poznaj podejście Wiktorii do estetyki, pielęgnacji i świadomego podkreślania naturalnego piękna.",
  path: "/o-mnie",
});

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <AboutHero />
      <section
        className={`section-shell section-tinted ${styles.knowledge}`}
        aria-labelledby="knowledge-title"
      >
        <div>
          <p className="eyebrow">Doświadczenie i wiedza</p>
          <h2 id="knowledge-title">Estetyka poparta wiedzą medyczną.</h2>
        </div>
        <div className={styles.knowledgeCopy}>
          <GraduationCap
            className={`icon ${styles.knowledgeIcon}`}
            aria-hidden="true"
          />
          <p>
            Obecnie jestem studentką III roku pielęgniarstwa. Połączenie
            doświadczenia zdobywanego w branży beauty z wiedzą medyczną pozwala
            mi jeszcze lepiej rozumieć potrzeby skóry, znaczenie bezpieczeństwa
            oraz świadomego podejścia do wykonywanych zabiegów.
          </p>
        </div>
      </section>
      <PageSection
        id="values"
        eyebrow="Moje podejście"
        title="W swojej pracy szczególnie cenię"
        description="Zależy mi, aby każda osoba, która przekracza próg mojego gabinetu, czuła się zaopiekowana, wysłuchana i pewna, że jest w dobrych rękach."
      >
        <ul className={styles.values}>
          {aboutValues.map(({ icon: Icon, title, description }) => (
            <li className={styles.value} key={title}>
              <span className={styles.iconCircle} aria-hidden="true">
                <Icon className="icon" />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </PageSection>
      <section
        className={`section-shell section-tinted ${styles.belief}`}
        aria-labelledby="belief-title"
      >
        <div className={styles.imageFrame}>
          <Image
            className={styles.image}
            src="/images/gallery/inne/social-02.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 40vw, 100vw"
          />
        </div>
        <blockquote className={styles.quote}>
          <Quote className={`icon ${styles.quoteIcon}`} aria-hidden="true" />
          <h2 id="belief-title">Wierzę, że piękno nie wymaga przesady.</h2>
          <p>
            Najbardziej cenię efekty, które podkreślają naturalne atuty,
            harmonizują z urodą i pozwalają poczuć się dobrze we własnej skórze.
          </p>
        </blockquote>
      </section>
      <PageSection
        id="certificates"
        eyebrow="Szkolenia i certyfikaty"
        title="Kwalifikacje, które stoją za każdym zabiegiem."
        description="Nieustannie poszerzam swoją wiedzę i rozwijam umiejętności, ponieważ uważam, że w tej branży nauka nigdy się nie kończy. Poniżej znajdziesz ukończone szkolenia wraz z certyfikatami."
      >
        <CertificateList />
      </PageSection>
    </div>
  );
}
