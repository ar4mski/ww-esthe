"use client";

import { useState } from "react";
import styles from "./gallery-grid.module.css";
import {
  galleryCategories,
  type GalleryFilter as GalleryFilterValue,
} from "./gallery-items";

const VISIBLE_FILTERS_ON_MOBILE = 2;
const VISIBLE_FILTERS_ON_TABLET = 3;

type GalleryFilterProps = {
  activeCategory: GalleryFilterValue;
  onCategoryChange: (category: GalleryFilterValue) => void;
};

export function GalleryFilter({
  activeCategory,
  onCategoryChange,
}: GalleryFilterProps) {
  const activeCategoryIndex = galleryCategories.findIndex(
    ({ id }) => id === activeCategory,
  );
  const [isExpanded, setIsExpanded] = useState(
    activeCategoryIndex >= VISIBLE_FILTERS_ON_MOBILE,
  );

  return (
    <div className={styles.filters} role="group" aria-label="Kategorie galerii">
      {galleryCategories.map((category, index) => {
        const isCollapsed = index >= VISIBLE_FILTERS_ON_MOBILE && !isExpanded;
        const isTabletVisible = index < VISIBLE_FILTERS_ON_TABLET;

        return (
          <button
            className={[
              styles.filter,
              "interactive-underline",
              isCollapsed && styles.filterCollapsed,
              isCollapsed && isTabletVisible && styles.filterTabletVisible,
            ]
              .filter(Boolean)
              .join(" ")}
            type="button"
            aria-pressed={category.id === activeCategory}
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.label}
          </button>
        );
      })}
      <button
        className={`${styles.filter} ${styles.filterExpand} interactive-underline`}
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Mniej..." : "Więcej..."}
      </button>
    </div>
  );
}
