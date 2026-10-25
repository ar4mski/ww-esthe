import { useState } from "react";
import styles from "./gallery-grid.module.css";
import {
  galleryCategories,
  type GalleryFilter as GalleryFilterValue,
} from "./gallery-items";

type GalleryFilterProps = {
  activeCategory: GalleryFilterValue;
  onCategoryChange: (category: GalleryFilterValue) => void;
};

export function GalleryFilter({
  activeCategory,
  onCategoryChange,
}: GalleryFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.filters} role="group" aria-label="Kategorie galerii">
      {galleryCategories.map((category, index) => {
        const isCollapsed = index >= 3 && !isExpanded;

        return (
          <button
            className={[
              styles.filter,
              category.id === activeCategory && styles.filterActive,
              isCollapsed && styles.filterCollapsed,
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
        className={`${styles.filter} ${styles.filterExpand}`}
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Mniej..." : "Więcej..."}
      </button>
    </div>
  );
}
