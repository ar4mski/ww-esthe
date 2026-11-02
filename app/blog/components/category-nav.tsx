import Link from "next/link";

import { getBlogCategoryPath, type BlogCategory } from "@/data/blog";

import { CategoryNavList } from "./category-nav-list";
import styles from "./category-nav.module.css";

type CategoryNavProps = {
  categories: readonly BlogCategory[];
  activeCategory?: BlogCategory;
};

// Counts include the "Wszystkie" link; desktop always shows every item.
const VISIBLE_ITEMS_ON_MOBILE = 2;
const VISIBLE_ITEMS_ON_TABLET = 3;

export const CategoryNav = ({
  categories,
  activeCategory,
}: CategoryNavProps) => {
  const items = categories.map((category, index) => {
    const position = index + 1;
    const isActive = category.slug === activeCategory?.slug;

    // The active category must stay visible even when the list is collapsed.
    return {
      category,
      isActive,
      isCollapsedOnMobile: !isActive && position >= VISIBLE_ITEMS_ON_MOBILE,
      isCollapsedOnTablet: !isActive && position >= VISIBLE_ITEMS_ON_TABLET,
    };
  });

  return (
    <nav className={styles.nav} aria-label="Kategorie bloga">
      <CategoryNavList
        hasMobileOverflow={items.some((item) => item.isCollapsedOnMobile)}
        hasTabletOverflow={items.some((item) => item.isCollapsedOnTablet)}
      >
        <li>
          <Link
            className={styles.link}
            href="/blog"
            aria-current={activeCategory ? undefined : "page"}
          >
            Wszystkie
          </Link>
        </li>
        {items.map(
          ({
            category,
            isActive,
            isCollapsedOnMobile,
            isCollapsedOnTablet,
          }) => (
            <li
              className={
                isCollapsedOnMobile
                  ? `${styles.collapsible} ${isCollapsedOnTablet ? "" : styles.tabletVisible}`
                  : undefined
              }
              key={category.slug}
            >
              <Link
                className={styles.link}
                href={getBlogCategoryPath(category)}
                aria-current={isActive ? "page" : undefined}
              >
                {category.label}
              </Link>
            </li>
          ),
        )}
      </CategoryNavList>
    </nav>
  );
};
