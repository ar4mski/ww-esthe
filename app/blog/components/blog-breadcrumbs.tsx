import Link from "next/link";

import { siteConfig } from "@/data/site-config";

import { JsonLd } from "./json-ld";
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
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          ...trail.map(({ label, href }, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: label,
            item: new URL(href, siteConfig.siteUrl).toString(),
          })),
          {
            "@type": "ListItem",
            position: trail.length + 1,
            name: currentPage,
          },
        ],
      }}
    />
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
