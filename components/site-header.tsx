import Image from "next/image";
import Link from "next/link";

import { headerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

import { SiteHeaderNavLink } from "./site-header-nav-link";
import { SiteHeaderShell } from "./site-header-shell";
import styles from "./site-header.module.css";

export const SiteHeader = () => (
  <SiteHeaderShell
    leading={
      <>
        <a className={styles.skipLink} href="#main-content">
          Pomiń nawigację
        </a>
        <Link
          className={styles.brand}
          href="/"
          aria-label={`Strona główna ${siteConfig.businessName}`}
        >
          <Image
            className={styles.brandLogo}
            src="/images/branding/horizontal.svg"
            alt={siteConfig.businessName}
            width={130}
            height={68}
            priority
          />
        </Link>
      </>
    }
  >
    <nav
      className={styles.nav}
      id="primary-navigation"
      aria-label="Nawigacja główna"
    >
      <ul className={styles.navList}>
        {headerNavigation.map(({ href, label }) => (
          <li key={href}>
            <SiteHeaderNavLink href={href} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  </SiteHeaderShell>
);
