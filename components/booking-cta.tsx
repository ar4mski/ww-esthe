import { BookingButton, MessageButton } from "@/components/cta-buttons";
import { Monogram } from "@/components/monogram";
import { siteConfig } from "@/data/site-config";

import styles from "./booking-cta.module.css";

interface BookingCtaProps {
  // Blog readers are earlier on the path, so the question comes first there.
  variant?: "default" | "blog";
}

export const BookingCta = ({ variant = "default" }: BookingCtaProps) => (
  <section
    className={`section-shell section-tinted ${styles.band}`}
    aria-labelledby="booking-cta-title"
    data-analytics-location="booking-cta"
  >
    <Monogram className={styles.monogram} />
    <div className={styles.cta}>
      <p className="eyebrow">Umów wizytę</p>
      {variant === "blog" ? (
        <>
          <h2 id="booking-cta-title">Masz pytania o zabieg?</h2>
          <p>
            Porozmawiajmy o Twoich potrzebach. Podczas konsultacji dobierzemy
            rozwiązanie, które będzie dla Ciebie odpowiednie.
          </p>
          <div className={`button-group button-group-center ${styles.actions}`}>
            <MessageButton>Napisz do mnie</MessageButton>
          </div>
          <p className={styles.bookingNote}>
            Wiesz już, czego chcesz?{" "}
            <a
              className="inline-link"
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Zarezerwuj wizytę
            </a>
          </p>
        </>
      ) : (
        <>
          <h2 id="booking-cta-title">Umów się na wizytę</h2>
          <p>
            Zarezerwuj termin online albo napisz, jeśli masz pytania –
            dobierzemy zabieg do Twoich potrzeb.
          </p>
          <div className={`button-group button-group-center ${styles.actions}`}>
            <BookingButton />
            <MessageButton />
          </div>
        </>
      )}
    </div>
  </section>
);
