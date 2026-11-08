import type { Metadata } from "next";
import { Suspense } from "react";

import { GalleryGrid } from "@/components/gallery-grid/gallery-grid";
import { createPageMetadata } from "@/data/page-metadata";
import { siteConfig } from "@/data/site-config";

import styles from "./gallery.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Galeria efektów – makijaż permanentny, Szczecin",
  description: `Zobacz efekty makijażu permanentnego, modelowania ust i innych zabiegów wykonanych w gabinecie ${siteConfig.businessName} w Szczecinie.`,
  path: "/galeria",
});

export default function GalleryPage() {
  return (
    <section className="section-shell">
      <header className={`section-heading ${styles.pageIntro}`}>
        <h1>Galeria prac</h1>
      </header>
      <Suspense>
        <GalleryGrid />
      </Suspense>
    </section>
  );
}
