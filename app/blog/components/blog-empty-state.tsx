import Link from "next/link";

import styles from "./blog-empty-state.module.css";

type BlogEmptyStateProps = {
  categoryLabel?: string;
};

export const BlogEmptyState = ({ categoryLabel }: BlogEmptyStateProps) => (
  <div className={styles.empty}>
    <h2>Wkrótce pojawią się tu nowe artykuły.</h2>
    <p>
      {categoryLabel
        ? `W kategorii „${categoryLabel}” nie ma jeszcze żadnych wpisów.`
        : "Nie ma jeszcze żadnych wpisów."}{" "}
      Zajrzyj do pozostałych tematów.
    </p>
    <Link className="button button-outline button-outline-beige" href="/blog">
      Zobacz wszystkie artykuły
    </Link>
  </div>
);
