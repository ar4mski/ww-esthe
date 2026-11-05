import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import Image from "next/image";
import Link from "next/link";
import {
  InstagramIcon,
  MailIcon,
  MessengerIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./icons";

import styles from "./site-footer.module.css";

export function SiteFooter() {
  const { company } = siteConfig;

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          <div className={styles.footerGroup}>
            <h2 className={styles.footerHeading}>Kontakt</h2>
            <a
              className={styles.footerItem}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon
                className={`${styles.footerIcon} ${styles.brandIcon}`}
              />
              Instagram
            </a>
            <a
              className={styles.footerItem}
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon
                className={`${styles.footerIcon} ${styles.brandIcon}`}
              />
              WhatsApp
            </a>
            <a
              className={styles.footerItem}
              href={siteConfig.social.messenger}
              target="_blank"
              rel="noreferrer"
            >
              <MessengerIcon
                className={`${styles.footerIcon} ${styles.brandIcon}`}
              />
              Messenger
            </a>
            <a className={styles.footerItem} href={siteConfig.phone.href}>
              <PhoneIcon className={styles.footerIcon} />
              <span>{siteConfig.phone.display}</span>
            </a>
            <a className={styles.footerItem} href={siteConfig.email.href}>
              <MailIcon className={styles.footerIcon} />
              <span>{siteConfig.email.display}</span>
            </a>
          </div>

          <nav className={styles.footerGroup} aria-label="Nawigacja">
            <h2 className={styles.footerHeading}>Nawigacja</h2>
            {footerNavigation.map(({ href, label }) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>

          <nav className={styles.footerGroup} aria-label="Informacje prawne">
            <h2 className={styles.footerHeading}>Informacje prawne</h2>
            <Link href={siteConfig.legal.termsPath}>Regulamin</Link>
            <Link href={siteConfig.legal.privacyPolicyPath}>
              Polityka prywatności
            </Link>
          </nav>

          <section className={styles.companyGroup}>
            <h2 className={styles.footerHeading}>Dane firmowe</h2>
            <address className={styles.companyAddress}>
              <strong className={styles.companyName}>
                {company.legalName}
              </strong>
              {siteConfig.address.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <dl className={styles.companyIds}>
              <div>
                <dt>NIP</dt>
                <dd>{company.nip}</dd>
              </div>
              <div>
                <dt>REGON</dt>
                <dd>{company.regon}</dd>
              </div>
            </dl>
          </section>
        </div>

        <div className={styles.copyrightRow}>
          <Image
            className={styles.footerLogo}
            src="/images/branding/logo-w-light.svg"
            alt=""
            width={716}
            height={834}
          />
          <p className={styles.copyright}>
            © {siteConfig.legal.copyrightYear} {siteConfig.businessName}.
            Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
