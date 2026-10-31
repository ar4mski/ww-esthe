import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbJsonLd } from "@/data/structured-data";

import styles from "./blog-breadcrumbs.module.css";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BlogBreadcrumbsProps = {
  currentPage: string;
  trail: BreadcrumbItem[];
};

export const BlogBreadcrumbs = ({
  currentPage,
  trail,
}: BlogBreadcrumbsProps) => (
  <nav className={styles.breadcrumbs} aria-label="Okruszki nawigacyjne">
    <JsonLd data={getBreadcrumbJsonLd(trail, currentPage)} />
    <ol className={styles.list}>
      {trail.map(({ label, href }, index) => (
        <li key={href}>
          {index > 0 && (
            <span className={styles.separator} aria-hidden="true">
              /
            </span>
          )}
          <Link href={href}>{label}</Link>
        </li>
      ))}
      <li aria-current="page">
        <span className={styles.separator} aria-hidden="true">
          /
        </span>
        {currentPage}
      </li>
    </ol>
  </nav>
);
