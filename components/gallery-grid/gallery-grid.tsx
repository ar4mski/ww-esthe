"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { GalleryFilter } from "./gallery-filter";
import styles from "./gallery-grid.module.css";
import {
  galleryItems,
  isGalleryFilter,
  type GalleryFilter as GalleryFilterValue,
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
  const activeCategory: GalleryFilterValue =
    categoryParam && isGalleryFilter(categoryParam) ? categoryParam : "all";
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (category: GalleryFilterValue) => {
    setActiveIndex(null);
    router.replace(
      category === "all" ? pathname : `${pathname}?category=${category}`,
      { scroll: false },
    );
  };

  return (
    <>
      <GalleryFilter
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
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
