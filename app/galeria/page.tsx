import type { Metadata } from "next";

import { GalleryGrid } from "@/components/gallery-grid/gallery-grid";
import {
  isGalleryFilter,
  type GalleryFilter,
} from "@/components/gallery-grid/gallery-items";

import { createPageMetadata } from "@/data/page-metadata";

import styles from "./gallery.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Galeria prac | WW - ESTHE",
  description:
    "Zobacz efekty makijażu permanentnego, modelowania ust i innych zabiegów wykonanych w gabinecie WW-Esthe w Szczecinie.",
  path: "/galeria",
});

type GalleryPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

const getInitialCategory = (
  category: string | string[] | undefined,
): GalleryFilter => {
  const value = Array.isArray(category) ? category[0] : category;

  return value && isGalleryFilter(value) ? value : "all";
};

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const { category } = await searchParams;
  const initialCategory = getInitialCategory(category);

  return (
    <section className="section-shell">
      <header className={`section-heading ${styles.pageIntro}`}>
        <h1>Galeria prac</h1>
      </header>
      <GalleryGrid initialCategory={initialCategory} />
    </section>
  );
}
