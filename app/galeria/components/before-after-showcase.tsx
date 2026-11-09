"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

import type { BeforeAfterCategory } from "@/data/before-after";

import styles from "./before-after.module.css";
import { BeforeAfterPager } from "./before-after-pager";
import { BeforeAfterSlider } from "./before-after-slider";
import { BeforeAfterTabs, getBeforeAfterTabId } from "./before-after-tabs";

const PANEL_ID = "before-after-panel";

type BeforeAfterShowcaseProps = {
  categories: BeforeAfterCategory[];
  children: ReactNode;
};

export const BeforeAfterShowcase = ({
  categories,
  children,
}: BeforeAfterShowcaseProps) => {
  const [activeSlug, setActiveSlug] = useState(categories[0].slug);
  const [caseIndex, setCaseIndex] = useState(0);
  const activeCategory =
    categories.find(({ slug }) => slug === activeSlug) ?? categories[0];
  const { cases } = activeCategory;
  const activeCase = cases[caseIndex] ?? cases[0];

  const handleCategoryChange = (slug: string) => {
    setActiveSlug(slug);
    setCaseIndex(0);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.intro}>{children}</div>
      <BeforeAfterTabs
        activeSlug={activeCategory.slug}
        categories={categories}
        panelId={PANEL_ID}
        onChange={handleCategoryChange}
      />
      <div
        className={styles.panel}
        id={PANEL_ID}
        role="tabpanel"
        aria-labelledby={getBeforeAfterTabId(activeCategory.slug)}
      >
        <BeforeAfterSlider
          {...activeCase}
          className={styles.slider}
          key={`${activeCategory.slug}-${caseIndex}`}
          sizes="(min-width: 1024px) 35rem, 100vw"
          controls={
            cases.length > 1 ? (
              <BeforeAfterPager
                activeIndex={caseIndex}
                count={cases.length}
                onChange={setCaseIndex}
              />
            ) : null
          }
        />
      </div>
      <Link
        className={`text-link ${styles.link}`}
        href={`/zabiegi/${activeCategory.slug}`}
      >
        Zobacz opis zabiegu
      </Link>
    </div>
  );
};
