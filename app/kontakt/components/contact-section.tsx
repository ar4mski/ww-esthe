import { ChannelLinks } from "@/components/channel-links";
import { contactSteps } from "@/data/contact";

import styles from "./contact-section.module.css";

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
      <ChannelLinks />
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
