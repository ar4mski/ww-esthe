import { Clock } from "lucide-react";

import { AddressIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { PageSection } from "@/components/page-section";
import { siteConfig } from "@/data/site-config";

import styles from "./address-section.module.css";

export function AddressSection() {
  const mapQuery = encodeURIComponent(siteConfig.address.lines.join(", "));

  return (
    <PageSection
      className={styles.addressSection}
      headingClassName={styles.addressHeading}
      eyebrow="Gabinet w Szczecinie"
      title="Kontakt"
      headingLevel="h1"
      id="adres"
    >
      <div className={styles.details}>
        <address className={styles.detailsList}>
          <a className={styles.detailItem} href={siteConfig.phone.href}>
            <PhoneIcon className={styles.detailIcon} />
            {siteConfig.phone.display}
          </a>
          <a className={styles.detailItem} href={siteConfig.email.href}>
            <MailIcon className={styles.detailIcon} />
            {siteConfig.email.display}
          </a>
          <a
            className={`${styles.detailItem} ${styles.addressDetail}`}
            href={siteConfig.address.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            <AddressIcon className={styles.detailIcon} />
            <span className={styles.addressLines}>
              {siteConfig.address.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </span>
          </a>
        </address>
        <div className={styles.hours}>
          <h3>
            <Clock aria-hidden="true" size={15} />
            Godziny otwarcia
          </h3>
          <ul>
            {siteConfig.openingHours.map((entry) => (
              <li key={entry.days}>
                <span>{entry.days}</span>
                <span>{entry.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.mapFrame}>
        <iframe
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          title="Mapa dojazdu do gabinetu WW-Esthe"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </PageSection>
  );
}
