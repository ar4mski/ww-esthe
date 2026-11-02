"use client";

import { useState, type ReactNode } from "react";

import styles from "./category-nav.module.css";

type CategoryNavListProps = {
  children: ReactNode;
  hasMobileOverflow: boolean;
  hasTabletOverflow: boolean;
};

export const CategoryNavList = ({
  children,
  hasMobileOverflow,
  hasTabletOverflow,
}: CategoryNavListProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ul className={styles.list} data-expanded={isExpanded}>
      {children}
      {hasMobileOverflow && (
        <li
          className={`${styles.expandItem} ${hasTabletOverflow ? "" : styles.expandItemMobileOnly}`}
        >
          <button
            className={`${styles.expand} interactive-underline`}
            type="button"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Mniej..." : "Więcej..."}
          </button>
        </li>
      )}
    </ul>
  );
};
