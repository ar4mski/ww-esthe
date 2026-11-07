"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { CategoryFilter } from "@/components/category-filter";

import styles from "./gallery-grid.module.css";
import {
  galleryCategories,
  galleryItems,
  isGalleryFilter,
  type GalleryFilter,
} from "./gallery-items";
import { GalleryThumbnail } from "./gallery-thumbnail";
import { GalleryViewer } from "./gallery-viewer";

type GalleryGridProps = {
  className?: string;
};

export function GalleryGrid({ className }: GalleryGridProps) {
  const router = useRouter();
  const pathname = usePathname();
  const categoryParam = useSearchParams().get("category");
  const activeCategory: GalleryFilter =
    categoryParam && isGalleryFilter(categoryParam) ? categoryParam : "all";
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (category: GalleryFilter) => {
    setActiveIndex(null);
    router.replace(
      category === "all" ? pathname : `${pathname}?category=${category}`,
      { scroll: false },
    );
  };

  return (
    <>
      <CategoryFilter
        activeCategory={activeCategory}
        categories={galleryCategories}
        label="Kategorie galerii"
        onChange={handleCategoryChange}
      />
      <div className={`${styles.grid} ${className ?? ""}`}>
        {visibleItems.map((item, index) => (
          <GalleryThumbnail
            item={item}
            key={item.src}
            onOpen={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {activeIndex !== null && (
        <GalleryViewer
          activeIndex={activeIndex}
          items={visibleItems}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}
