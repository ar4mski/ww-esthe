import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbJsonLd } from "@/data/structured-data";

import styles from "./breadcrumbs.module.css";

const trail = [
  { label: "Strona główna", href: "/" },
  { label: "Zabiegi", href: "/zabiegi" },
];

type BreadcrumbsProps = {
  currentPage: string;
};

export const Breadcrumbs = ({ currentPage }: BreadcrumbsProps) => (
  <nav className={styles.breadcrumbs} aria-label="Okruszki nawigacyjne">
    <JsonLd data={getBreadcrumbJsonLd(trail, currentPage)} />
    <ol className={styles.list}>
      <li>
        <Link href="/">Strona główna</Link>
      </li>
      <li>
        <span className={styles.separator} aria-hidden="true">
          /
        </span>
        <Link href="/zabiegi">Zabiegi</Link>
      </li>
      <li aria-current="page">
        <span className={styles.separator} aria-hidden="true">
          /
        </span>
        {currentPage}
      </li>
    </ol>
  </nav>
);
