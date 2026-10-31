import { siteConfig } from "@/data/site-config";
import Image from "next/image";
import Link from "next/link";
import {
  AddressIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
} from "./icons";

import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter} id="contact">
      <div className={styles.footerContent}>
        <div className={styles.footerGroup}>
          <h2 className={styles.footerHeading}>Kontakt</h2>
          <a className={styles.footerItem} href={siteConfig.phone.href}>
            <PhoneIcon className={styles.footerIcon} />
            <span>{siteConfig.phone.display}</span>
          </a>
          <a className={styles.footerItem} href={siteConfig.email.href}>
            <MailIcon className={styles.footerIcon} />
            <span>{siteConfig.email.display}</span>
          </a>
          <address className={`${styles.address} ${styles.footerItem}`}>
            <AddressIcon className={styles.footerIcon} />
            <a
              href={siteConfig.address.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              {siteConfig.address.lines[0]}
              <br />
              {siteConfig.address.lines[1]}
            </a>
          </address>
        </div>

        <nav className={styles.footerGroup} aria-label="Nawigacja">
          <h2 className={styles.footerHeading}>Nawigacja</h2>
          <Link href="/">Strona główna</Link>
          <Link href="/zabiegi">Zabiegi</Link>
          <Link href="/o-mnie">O mnie</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/cennik">Cennik</Link>
          <Link href="/kontakt">Kontakt</Link>
        </nav>

        <nav className={styles.footerGroup} aria-label="Media społecznościowe">
          <h2 className={styles.footerHeading}>Media społecznościowe</h2>
          <a
            className={styles.footerItem}
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className={styles.footerIcon} />
            Instagram
          </a>
          <a
            className={styles.footerItem}
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className={styles.footerIcon} />
            Facebook
          </a>
        </nav>

        <nav className={styles.footerGroup} aria-label="Informacje prawne">
          <h2 className={styles.footerHeading}>Informacje prawne</h2>
          <Link href={siteConfig.legal.termsPath}>Regulamin</Link>
          <Link href={siteConfig.legal.privacyPolicyPath}>
            Polityka prywatności
          </Link>
          <span className={styles.footerDivider} aria-hidden="true" />
          <div className={styles.copyrightBrand}>
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
        </nav>
      </div>
    </footer>
  );
}
