import { InstagramIcon, MessengerIcon, WhatsAppIcon } from "@/components/icons";
import { contactSteps } from "@/data/contact";
import { siteConfig } from "@/data/site-config";

import styles from "./contact-section.module.css";

const channels = [
  {
    name: "Instagram",
    href: siteConfig.bookingUrl,
    icon: InstagramIcon,
  },
  {
    name: "WhatsApp",
    href: siteConfig.social.whatsapp,
    icon: WhatsAppIcon,
  },
  {
    name: "Messenger",
    href: siteConfig.social.messenger,
    icon: MessengerIcon,
  },
];

export const ContactSection = () => (
  <section
    className={`section-shell section-tinted ${styles.contactSection}`}
    id="napisz-do-mnie"
    aria-labelledby="napisz-do-mnie-title"
  >
    <div className={styles.contactCopy}>
      <h2 id="napisz-do-mnie-title">Napisz do mnie</h2>
      <p>
        Odpowiadam na wiadomości najczęściej w ciągu dnia roboczego. Napisz
        kilka słów o tym, co Cię interesuje, a wspólnie ustalimy termin.
      </p>
      <ul className={styles.channelList}>
        {channels.map(({ name, href, icon: Icon }) => (
          <li key={name}>
            <a
              className={`button button-outline button-outline-beige ${styles.channelButton}`}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon className={styles.channelIcon} />
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <ol className={styles.steps}>
      {contactSteps.map(({ title, text }, index) => (
        <li key={title}>
          <span className={styles.stepNumber} aria-hidden="true">
            {index + 1}
          </span>
          <span className={styles.stepText}>
            <strong>{title}</strong>
            {text}
          </span>
        </li>
      ))}
    </ol>
  </section>
);
