import type { Metadata } from "next";

import { CTAButton } from "@/components/cta-button";
import { PageHero } from "@/components/page-hero";

import styles from "./about.module.css";

const credentials = [
  {
    title: "Certyfikaty i szkolenia",
    description:
      "Dodaj tutaj nazwy ukończonych szkoleń, organizatorów oraz daty, aby pokazać kierunki swojego rozwoju.",
  },
  {
    title: "Specjalizacje",
    description:
      "To miejsce na opis obszarów, w których stale poszerzasz wiedzę i doskonalisz swoje umiejętności.",
  },
  {
    title: "Osiągnięcia zawodowe",
    description:
      "Możesz uzupełnić tę sekcję o wyróżnienia, udział w wydarzeniach, publikacje lub inne ważne doświadczenia.",
  },
];

export const metadata: Metadata = {
  title: "O mnie | WW - ESTHE",
  description:
    "Poznaj podejście Wiktorii do estetyki, pielęgnacji i świadomego podkreślania naturalnego piękna.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O mnie"
        title="Poznajmy się bliżej."
        description="Wierzę, że najlepsze efekty zaczynają się od uważnej rozmowy, zaufania i dobrze dobranego planu."
        image="/images/heroes/about/hero.jpg"
        desktopImage="/images/heroes/about/hero.jpg"
        imageAlt="Portret kobiety w naturalnym świetle"
      />

      <section className={`${styles.aboutSection} section-shell`}>
        <div className={styles.aboutCopy}>
          <p className="eyebrow">Moje podejście</p>
          <h2>Naturalność zaczyna się od słuchania.</h2>
          <p>
            W pracy zależy mi na tym, żeby każda wizyta była spokojna, konkretna
            i dopasowana do Ciebie. Zanim zaproponuję rozwiązanie, poznaję Twoje
            potrzeby, oczekiwania i codzienne przyzwyczajenia.
          </p>
          <p>
            Estetyka nie powinna zmieniać tego, kim jesteś. Powinna pomagać Ci
            poczuć się dobrze ze swoim wyglądem i podkreślać to, co już w Tobie
            piękne.
          </p>
          <CTAButton>Umów konsultację</CTAButton>
        </div>

        <aside className={styles.aboutNote} aria-labelledby="visit-title">
          <h3 id="visit-title">Podczas wizyty możesz liczyć na</h3>
          <ul>
            <li>szczerą rozmowę o oczekiwaniach i możliwościach,</li>
            <li>indywidualny dobór zabiegu oraz planu działania,</li>
            <li>spokojną atmosferę i jasne zalecenia po wizycie.</li>
          </ul>
        </aside>
      </section>

      <section
        className={`${styles.credentialsSection} section-shell`}
        aria-labelledby="credentials-title"
      >
        <div className={styles.credentialsIntro}>
          <p className="eyebrow">Rozwój zawodowy</p>
          <h2 id="credentials-title">Certyfikaty i osiągnięcia</h2>
          <p>
            Wiedza i praktyka rozwijają się razem. W tym miejscu znajdziesz
            najważniejsze szkolenia, specjalizacje i doświadczenia, które
            kształtują mój sposób pracy.
          </p>
        </div>

        <div className={styles.credentialsList}>
          {credentials.map((credential) => (
            <article className={styles.credentialItem} key={credential.title}>
              <h3>{credential.title}</h3>
              <p>{credential.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
