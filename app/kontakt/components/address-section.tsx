import { ArrowUpRight, Clock } from "lucide-react";
import type { ComponentType, ReactNode, SVGProps } from "react";

import {
  AddressIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";
import { PageSection } from "@/components/page-section";
import { parkingNote } from "@/data/contact";
import { siteConfig } from "@/data/site-config";

import styles from "./address-section.module.css";

type ContactLineProps = {
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  children: ReactNode;
  external?: boolean;
};

const ContactLine = ({
  href,
  icon: Icon,
  label,
  children,
  external = false,
}: ContactLineProps) => (
  <a
    className={styles.detailItem}
    href={href}
    {...(external && { target: "_blank", rel: "noreferrer" })}
  >
    <Icon className={styles.detailIcon} />
    <span className={styles.detailText}>
      <span className={styles.detailLabel}>{label}</span>
      <span className={styles.detailValue}>{children}</span>
    </span>
  </a>
);

export const AddressSection = () => {
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
      <address className={styles.detailsList}>
        <ContactLine
          href={siteConfig.bookingUrl}
          icon={InstagramIcon}
          label="Instagram · najszybciej"
          external
        >
          @wiktoria.warylak.esthe
        </ContactLine>
        <ContactLine
          href={siteConfig.phone.href}
          icon={PhoneIcon}
          label="Telefon"
        >
          {siteConfig.phone.display}
        </ContactLine>
        <ContactLine
          href={siteConfig.email.href}
          icon={MailIcon}
          label="E-mail"
        >
          {siteConfig.email.display}
        </ContactLine>
        <ContactLine
          href={siteConfig.address.mapsUrl}
          icon={AddressIcon}
          label="Adres"
          external
        >
          {siteConfig.address.lines.map((line) => (
            <span className={styles.addressLine} key={line}>
              {line}
            </span>
          ))}
        </ContactLine>
      </address>

      <div className={styles.mapColumn}>
        <div className={styles.mapFrame}>
          <iframe
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            title="Mapa dojazdu do gabinetu WW-Esthe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className={`button ${styles.routeButton}`}
            href={siteConfig.address.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Wyznacz trasę
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
        <div className={styles.infoBlocks}>
          <section className={styles.infoBlock}>
            <h2>
              <Clock aria-hidden="true" size={15} />
              Godziny otwarcia
            </h2>
            <ul>
              {siteConfig.openingHours.map((entry) => (
                <li key={entry.days}>
                  <span>{entry.days}</span>
                  <span>{entry.hours}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.infoBlock}>
            <h2>Parking</h2>
            <p>{parkingNote}</p>
          </section>
        </div>
      </div>
    </PageSection>
  );
};
