import { FaqItem } from "@/components/faq-item";

import { ChannelLinks } from "./channel-links";
import styles from "./faq-section.module.css";

type Faq = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  faqs: readonly Faq[];
  id: string;
  title: string;
  className?: string;
  description?: string;
  eyebrow?: string;
};

export const FaqSection = ({
  faqs,
  id,
  title,
  className = "",
  description = "Nie ma tu odpowiedzi na Twoje pytanie? Napisz, chętnie pomogę.",
  eyebrow,
}: FaqSectionProps) => {
  const titleId = `${id}-title`;

  return (
    <section
      className={`section-shell ${styles.faqSection} ${className}`}
      id={id}
      aria-labelledby={titleId}
    >
      <header className={styles.intro}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={titleId}>{title}</h2>
        <p>{description}</p>
        <ChannelLinks />
        {/* <p className={styles.bookingNote}>
          Wiesz już, czego chcesz?{" "}
          <a
            className="inline-link"
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zarezerwuj wizytę
          </a>
        </p> */}
      </header>
      <div className={styles.faqList}>
        {faqs.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>
    </section>
  );
};
