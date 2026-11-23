import type { LegalSection } from "@/data/legal-content";

import styles from "./legal-document.module.css";

type LegalDocumentProps = {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export const LegalDocument = ({
  title,
  lastUpdated,
  sections,
}: LegalDocumentProps) => (
  <section className="section-shell">
    <div className={styles.page}>
      <div>
        <h1>{title}</h1>
        <p className={styles.updated}>Ostatnia aktualizacja: {lastUpdated}</p>
      </div>

      {sections.map((section) => (
        <article className={styles.section} key={section.heading}>
          <h2 className="heading-text">{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.list && (
            <ul>
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  </section>
);
