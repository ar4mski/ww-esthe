"use client";

import { useState } from "react";

import styles from "./category-filter.module.css";

const VISIBLE_FILTERS_ON_MOBILE = 2;
const VISIBLE_FILTERS_ON_TABLET = 3;

type FilterCategory<T extends string> = {
  id: T;
  label: string;
};

type CategoryFilterProps<T extends string> = {
  activeCategory: T;
  categories: readonly FilterCategory<T>[];
  label: string;
  onChange: (category: T) => void;
};

export function CategoryFilter<T extends string>({
  activeCategory,
  categories,
  label,
  onChange,
}: CategoryFilterProps<T>) {
  const activeCategoryIndex = categories.findIndex(
    ({ id }) => id === activeCategory,
  );
  // TODO: `isExpanded` is initialised only on mount. If `activeCategory` changes
  // from outside (e.g. `?category=` after browser back/forward) and lands on a
  // collapsed filter, it stays hidden behind "Więcej..." on mobile.
  const [isExpanded, setIsExpanded] = useState(
    activeCategoryIndex >= VISIBLE_FILTERS_ON_MOBILE,
  );

  return (
    <div className={styles.filters} role="group" aria-label={label}>
      {categories.map((category, index) => {
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
            onClick={() => onChange(category.id)}
          >
            {category.label}
          </button>
        );
      })}
      {/* TODO: render "Więcej..." only when `categories` is longer than the
          visible-filter thresholds; with 3 or fewer it toggles nothing. */}
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
