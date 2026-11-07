"use client";

import { useState } from "react";

import { CategoryFilter } from "@/components/category-filter";
import { GalleryViewer } from "@/components/gallery-grid/gallery-viewer";
import {
  certificateCategories,
  certificates,
  type CertificateFilter,
} from "@/data/certificates";

import { CertificateCard } from "./certificate-card";
import styles from "./certificate-list.module.css";

// Categories without certificates are hidden instead of showing an empty grid.
const visibleCategories = certificateCategories.filter(
  ({ id }) =>
    id === "all" || certificates.some(({ category }) => category === id),
);

const categoryLabels = new Map(
  certificateCategories.map(({ id, label }) => [id, label]),
);

export const CertificateList = () => {
  const [activeCategory, setActiveCategory] =
    useState<CertificateFilter>("all");
  const [activeId, setActiveId] = useState<string | null>(null);
  const visibleCertificates =
    activeCategory === "all"
      ? certificates
      : certificates.filter(({ category }) => category === activeCategory);
  const viewerItems = visibleCertificates.flatMap(
    ({ id, image, alt, title }) =>
      image ? [{ id, src: image, alt, description: title }] : [],
  );
  const activeIndex = viewerItems.findIndex(({ id }) => id === activeId);

  return (
    <>
      <CategoryFilter
        activeCategory={activeCategory}
        categories={visibleCategories}
        label="Kategorie szkoleń"
        onChange={setActiveCategory}
      />
      <ul className={styles.list}>
        {visibleCertificates.map((certificate) => (
          <CertificateCard
            certificate={certificate}
            categoryLabel={categoryLabels.get(certificate.category) ?? ""}
            key={certificate.id}
            onOpen={setActiveId}
          />
        ))}
      </ul>

      {activeIndex !== -1 && (
        <GalleryViewer
          activeIndex={activeIndex}
          items={viewerItems}
          onClose={() => setActiveId(null)}
        />
      )}
    </>
  );
};
