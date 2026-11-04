"use client";

import { useState } from "react";

import { BeforeAfterSlider } from "@/components/before-after-slider";
import { GalleryFilter } from "@/components/gallery-grid/gallery-filter";
import {
  galleryCategories,
  type GalleryFilter as GalleryFilterValue,
} from "@/components/gallery-grid/gallery-items";
import { beforeAfterByCategory } from "@/data/before-after";

const beforeAfterCategories = galleryCategories.filter(
  ({ id }) => id !== "all",
);

export const HomeBeforeAfter = () => {
  const [activeCategory, setActiveCategory] =
    useState<GalleryFilterValue>("modelowanie-ust");
  const beforeAfter =
    activeCategory === "all" ? undefined : beforeAfterByCategory[activeCategory];

  return (
    <>
      <GalleryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        categories={beforeAfterCategories}
        ariaLabel="Kategorie porównania przed i po"
      />
      {beforeAfter ? <BeforeAfterSlider {...beforeAfter} /> : null}
    </>
  );
};
