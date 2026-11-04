import { FaqItem } from "@/components/faq-item";
import { contactFaqs } from "@/data/faq";

import styles from "./faq-section.module.css";

export const FaqSection = () => (
  <section
    className={`section-shell ${styles.faqSection}`}
    id="contact-faq"
    aria-labelledby="contact-faq-title"
  >
    <header className={styles.faqIntro}>
      <h2 id="contact-faq-title">Najczęstsze pytania</h2>
      <p>Nie ma tu odpowiedzi na Twoje pytanie? Napisz, chętnie pomogę.</p>
    </header>
    <div className={styles.faqList}>
      {contactFaqs.map((faq) => (
        <FaqItem key={faq.question} {...faq} />
      ))}
    </div>
  </section>
);
