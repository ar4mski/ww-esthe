import Link from "next/link";

import { getBlogCategoryPath, type BlogCategory } from "@/data/blog";

import styles from "./category-nav.module.css";

type CategoryNavProps = {
  categories: readonly BlogCategory[];
  activeCategory?: BlogCategory;
};

export const CategoryNav = ({
  categories,
  activeCategory,
}: CategoryNavProps) => (
  <nav className={styles.nav} aria-label="Kategorie bloga">
    <ul className={styles.list}>
      <li>
        <Link
          className={`${styles.link} ${activeCategory ? "" : styles.active}`}
          href="/blog"
          aria-current={activeCategory ? undefined : "page"}
        >
          Wszystkie
        </Link>
      </li>
      {categories.map((category) => {
        const isActive = category.slug === activeCategory?.slug;

        return (
          <li key={category.slug}>
            <Link
              className={`${styles.link} ${isActive ? styles.active : ""}`}
              href={getBlogCategoryPath(category)}
              aria-current={isActive ? "page" : undefined}
            >
              {category.label}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);
