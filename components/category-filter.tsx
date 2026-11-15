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
  const [isExpanded, setIsExpanded] = useState(
    activeCategoryIndex >= VISIBLE_FILTERS_ON_MOBILE,
  );
  const [previousActiveCategory, setPreviousActiveCategory] =
    useState(activeCategory);

  // `activeCategory` can change from outside (e.g. `?category=` after browser
  // back/forward); reveal it if it sits behind "Więcej...".
  if (activeCategory !== previousActiveCategory) {
    setPreviousActiveCategory(activeCategory);
    if (activeCategoryIndex >= VISIBLE_FILTERS_ON_MOBILE) {
      setIsExpanded(true);
    }
  }

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
      {categories.length > VISIBLE_FILTERS_ON_MOBILE && (
        <button
          className={[
            styles.filter,
            styles.filterExpand,
            "interactive-underline",
            categories.length <= VISIBLE_FILTERS_ON_TABLET &&
              styles.filterExpandMobileOnly,
          ]
            .filter(Boolean)
            .join(" ")}
          type="button"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Mniej..." : "Więcej..."}
        </button>
      )}
    </div>
  );
}
