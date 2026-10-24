import { CTAButton } from "@/components/cta-button";
import Link from "next/link";

import styles from "./pricing.module.css";

type PriceItem = {
  name: string;
  price: string;
};

type PriceCategory = {
  name: string;
  href?: string;
  items: PriceItem[];
};

const priceCategories: PriceCategory[] = [
  {
    name: "Makijaż permanentny brwi",
    href: "/zabiegi/makijaz-permanentny-brwi",
    items: [
      { name: "Brwi met. Soft Ombre, Foxy", price: "800 zł" },
      { name: "Dopigmentowanie 4–6 tyg.", price: "100 zł" },
      { name: "Dopigmentowanie do roku", price: "600 zł" },
    ],
  },
  {
    name: "Makijaż permanentny ust",
    href: "/zabiegi/makijaz-permanentny-ust",
    items: [
      { name: "Usta", price: "800 zł" },
      { name: "Dopigmentowanie 4–6 tyg.", price: "100 zł" },
      { name: "Dopigmentowanie do roku", price: "600 zł" },
    ],
  },
  {
    name: "Modelowanie ust",
    href: "/zabiegi/modelowanie-ust",
    items: [
      { name: "1 ml", price: "700 zł" },
      { name: "Hialuronidaza miejscowa", price: "300 zł" },
      { name: "Hialuronidaza całe usta", price: "600 zł" },
    ],
  },
  {
    name: "Mezoterapia igłowa i mikroigłowa",
    href: "/zabiegi/mezoterapia-mikroiglowa",
    items: [
      { name: "Twarz", price: "350 zł" },
      { name: "Twarz / szyja / dekolt", price: "500 zł" },
    ],
  },
  {
    name: "Stymulatory / mezoterapia igłowa",
    href: "/zabiegi/stymulatory-tkankowe",
    items: [
      { name: "Twarz", price: "450–800 zł" },
      { name: "Okolica oka", price: "350–600 zł" },
      { name: "Twarz / dekolt", price: "500–900 zł" },
    ],
  },
  {
    name: "Radiofrekwencja mikroigłowa",
    href: "/zabiegi/rf-radiofrekwencja",
    items: [
      { name: "Twarz + ampułka", price: "450 zł" },
      { name: "Twarz / dekolt + ampułka", price: "600 zł" },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="section-shell">
        <header className={`section-heading ${styles.pageIntro}`}>
          <h1>Cennik zabiegów</h1>
        </header>
        <div className={styles.priceList}>
          {priceCategories.map((category) => (
            <section className={styles.priceCategory} key={category.name}>
              <h2>
                {category.href ? (
                  <Link className={styles.categoryLink} href={category.href}>
                    {category.name}
                  </Link>
                ) : (
                  category.name
                )}
              </h2>
              <dl>
                {category.items.map((item) => (
                  <div className={styles.priceRow} key={item.name}>
                    <dt>{item.name}</dt>
                    <dd>{item.price}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </section>
      <section className={styles.bookingSection}>
        <div className="section-shell">
          <div className={styles.bookingContent}>
            <p className="eyebrow">Konsultacja</p>
            <h2>Nie wiesz, który zabieg wybrać?</h2>
            <p>
              Napisz, a wspólnie dobierzemy rozwiązanie dopasowane do Twoich
              potrzeb.
            </p>
            <CTAButton />
          </div>
        </div>
      </section>
    </>
  );
}
