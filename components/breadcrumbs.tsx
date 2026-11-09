import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import {
  getBreadcrumbJsonLd,
  type BreadcrumbItem,
} from "@/data/structured-data";

import styles from "./breadcrumbs.module.css";

type BreadcrumbsProps = {
  currentPage: string;
  trail: BreadcrumbItem[];
};

export const Breadcrumbs = ({ currentPage, trail }: BreadcrumbsProps) => (
  <nav
    className={styles.breadcrumbs}
    aria-label="Ścieżka nawigacyjna"
    data-breadcrumbs
  >
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
