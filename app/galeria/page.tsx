import type { Metadata } from "next";
import { Suspense } from "react";

import { GalleryGrid } from "@/components/gallery-grid/gallery-grid";
import { createPageMetadata } from "@/data/page-metadata";

import styles from "./gallery.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Galeria prac | WW - ESTHE",
  description:
    "Zobacz efekty makijażu permanentnego, modelowania ust i innych zabiegów wykonanych w gabinecie WW-Esthe w Szczecinie.",
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
