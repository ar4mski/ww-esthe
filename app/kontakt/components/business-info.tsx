import { siteConfig } from "@/data/site-config";

import styles from "./business-info.module.css";
import { CopyButton } from "./copy-button";

const companyClipboardText = [
  siteConfig.company.legalName,
  ...siteConfig.company.registeredAddress,
  `NIP ${siteConfig.company.nip}`,
  `REGON ${siteConfig.company.regon}`,
].join("\n");

const { bank } = siteConfig.company;

const bankClipboardText = [
  bank.name,
  bank.accountNumber,
  ...(bank.isExample ? ["Przykładowy numer rachunku — do podmiany"] : []),
].join("\n");

export function BusinessInfo() {
  return (
    <section
      className={`${styles.businessInfoSection} section-shell`}
      aria-label="Dane firmy i rachunek firmowy"
    >
      <div className={styles.businessInfoCard}>
        <section className={styles.infoSection} aria-labelledby="company-info-title">
          <div className={styles.cardHeader}>
            <h2 className={styles.columnTitle} id="company-info-title">
              Dane firmowe
            </h2>
            <CopyButton label="dane firmowe" text={companyClipboardText} />
          </div>
          <div className={styles.infoLines}>
            <p className={styles.companyName}>{siteConfig.company.legalName}</p>
            <address className={styles.companyAddress}>
              {siteConfig.company.registeredAddress.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <div className={styles.registrationNumbers}>
              <p>NIP {siteConfig.company.nip}</p>
              <p>REGON {siteConfig.company.regon}</p>
            </div>
          </div>
        </section>

        <section className={styles.infoSection} aria-labelledby="bank-info-title">
          <div className={styles.cardHeader}>
            <h2 className={styles.columnTitle} id="bank-info-title">
              Rachunek firmowy
            </h2>
            <CopyButton label="rachunek firmowy" text={bankClipboardText} />
          </div>
          <div className={styles.infoLines}>
            <p className={styles.bankName}>{bank.name}</p>
            <p className={styles.accountNumber}>{bank.accountNumber}</p>
            {bank.isExample ? (
              <p className={styles.exampleNotice}>
                Przykładowy numer rachunku — do podmiany
              </p>
            ) : null}
          </div>
        </section>
      </div>
    </section>
  );
}