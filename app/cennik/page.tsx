import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

import { BookingCta } from "@/components/booking-cta";
import { createPageMetadata } from "@/data/page-metadata";
import { siteConfig } from "@/data/site-config";

import styles from "./pricing.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Cennik makijażu permanentnego i zabiegów w Szczecinie",
  description: `Cennik makijażu permanentnego, modelowania ust i zabiegów medycyny estetycznej w gabinecie ${siteConfig.businessName} w Szczecinie.`,
  path: "/cennik",
});

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
      { name: "Odświeżenie do 1,5 roku", price: "600 zł" },
      { name: "Dopigmentowanie / korekta do 3 mies.", price: "200 zł" },
    ],
  },
  {
    name: "Makijaż permanentny ust",
    href: "/zabiegi/makijaz-permanentny-ust",
    items: [
      { name: "Usta", price: "800 zł" },
      { name: "Odświeżenie do 1,5 roku", price: "600 zł" },
      { name: "Dopigmentowanie / korekta do 3 mies.", price: "200 zł" },
    ],
  },
  {
    name: "Modelowanie ust",
    href: "/zabiegi/modelowanie-ust",
    items: [
      { name: "1 ml", price: "700 zł" },
      { name: "Hialuronidaza miejscowa", price: "300 zł" },
      { name: "Hialuronidaza całe usta", price: "700 zł" },
    ],
  },
  {
    name: "BTX",
    items: [
      { name: "Jedna okolica", price: "450 zł" },
      { name: "2 okolice", price: "700 zł" },
      { name: "Bruksizm", price: "700 zł" },
      { name: "Lip Flip", price: "350 zł" },
    ],
  },
  {
    name: "Lipoliza podbródek",
    items: [
      {
        name: "Usunięcie nadmiaru tkanki tłuszczowej z podbródka",
        price: "od 350 zł",
      },
    ],
  },
  {
    name: "Mezoterapia igłowa i mikroigłowa",
    href: "/zabiegi/mezoterapia-mikroiglowa",
    items: [
      { name: "Twarz", price: "350 zł" },
      { name: "Mikroigłowa z ampułką", price: "od 300 zł" },
      { name: "Mikroigłowa + peeling chemiczny", price: "450 zł" },
    ],
  },
  {
    name: "Stymulatory / mezoterapia igłowa",
    href: "/zabiegi/stymulatory-tkankowe",
    items: [
      { name: "Twarz", price: "od 500 zł" },
      { name: "Okolica oka", price: "od 450 zł" },
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
  {
    name: "Laserowe usuwanie brwi",
    href: "/zabiegi/laserowe-usuwanie-brwi",
    items: [{ name: "1 sesja", price: "200 zł" }],
  },
  {
    name: "Peelingi",
    items: [
      { name: "Peeling chemiczny", price: "150 zł" },
      { name: "Peeling węglowy", price: "250 zł" },
      { name: "Retix C – maska (retinol + witamina C)", price: "200 zł" },
    ],
  },
];

const renderBreakingAtSlash = (text: string) =>
  text.split(" / ").map((part, index, parts) => (
    <Fragment key={part}>
      {index > 0 && " "}
      <span className={styles.nameSegment}>
        {index < parts.length - 1 ? `${part} /` : part}
      </span>
    </Fragment>
  ));

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
                  <Link href={category.href}>
                    {renderBreakingAtSlash(category.name)}
                  </Link>
                ) : (
                  renderBreakingAtSlash(category.name)
                )}
              </h2>
              <dl>
                {category.items.map((item) => (
                  <div className={styles.priceRow} key={item.name}>
                    <dt>{renderBreakingAtSlash(item.name)}</dt>
                    <dd>{item.price}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </section>
      <BookingCta />
    </>
  );
}
