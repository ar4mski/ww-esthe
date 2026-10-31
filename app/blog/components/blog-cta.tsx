import Link from "next/link";

import { CTAButton } from "@/components/cta-button";

import styles from "./blog-cta.module.css";

export const BlogCta = () => (
  <section
    className="section-shell section-tinted"
    aria-labelledby="blog-cta-title"
  >
    <div className={styles.cta}>
      <p className="eyebrow">Umów wizytę</p>
      <h2 id="blog-cta-title">Masz pytania o zabieg?</h2>
      <p>
        Porozmawiajmy o Twoich potrzebach. Podczas konsultacji dobierzemy
        rozwiązanie, które będzie dla Ciebie odpowiednie.
      </p>
      <div className={styles.actions}>
        <CTAButton className="button-outline button-outline-beige" />
        <Link className="button button-outline-secondary" href="/zabiegi">
          Zobacz zabiegi
        </Link>
      </div>
    </div>
  </section>
);
