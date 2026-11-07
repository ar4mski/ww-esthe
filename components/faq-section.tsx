import { FaqItem } from "@/components/faq-item";
import { InstagramIcon, MessengerIcon } from "@/components/icons";
import { siteConfig } from "@/data/site-config";

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

const channels = [
  {
    name: "Instagram",
    href: siteConfig.bookingUrl,
    icon: InstagramIcon,
  },
  {
    name: "Messenger",
    href: siteConfig.social.messenger,
    icon: MessengerIcon,
  },
];

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
        <ul className={styles.channelList}>
          {channels.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <a
                className={`button button-outline button-outline-beige ${styles.channelButton}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="icon" />
                {name}
              </a>
            </li>
          ))}
        </ul>
      </header>
      <div className={styles.faqList}>
        {faqs.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>
    </section>
  );
};
