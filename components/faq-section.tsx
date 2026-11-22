import { BookingLink, ChannelLinks } from "@/components/channel-links";
import { FaqItem } from "@/components/faq-item";

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
  description,
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
        {description && <p>{description}</p>}
      </header>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <FaqItem key={faq.question} defaultOpen={index === 0} {...faq} />
        ))}
      </div>
      <div className={styles.contact} data-analytics-location="faq">
        <h3>Nie ma tu odpowiedzi na Twoje pytanie?</h3>
        <p>Napisz, chętnie pomogę.</p>
        <div className={styles.paths}>
          <div>
            <h4 className="eyebrow">Zapytaj</h4>
            <ChannelLinks layout="column" />
          </div>
          <div>
            <h4 className="eyebrow">Zarezerwuj</h4>
            <p>Wiesz już, czego chcesz? Wybierz termin online.</p>
            <BookingLink />
          </div>
        </div>
      </div>
    </section>
  );
};
