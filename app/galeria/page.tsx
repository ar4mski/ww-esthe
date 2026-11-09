import type { Metadata } from "next";
import { Suspense } from "react";

import { BookingCta } from "@/components/booking-cta";
import { GalleryGrid } from "@/components/gallery-grid/gallery-grid";
import { createPageMetadata } from "@/data/page-metadata";
import { siteConfig } from "@/data/site-config";

import { BeforeAfterSection } from "./components/before-after-section";
import styles from "./gallery.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Galeria efektów – makijaż permanentny, Szczecin",
  description: `Zobacz efekty makijażu permanentnego, modelowania ust i innych zabiegów wykonanych w gabinecie ${siteConfig.businessName} w Szczecinie.`,
  path: "/galeria",
});

export default function GalleryPage() {
  return (
    <>
      <div className="section-shell">
        <header className="section-heading">
          <h1>Galeria prac</h1>
          <p>
            Zobacz, jak wyglądają zabiegi w praktyce.
            <br />
            Naturalne efekty, dopasowane do rysów twarzy.
          </p>
        </header>
        <BeforeAfterSection />
        <section
          className={styles.allImages}
          aria-labelledby="all-images-title"
        >
          <h2 id="all-images-title">Wszystkie prace</h2>
          <Suspense>
            <GalleryGrid />
          </Suspense>
        </section>
      </div>
      <BookingCta />
    </>
  );
}
