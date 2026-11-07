"use client";

import Link from "next/link";
import { useState } from "react";

import { CategoryFilter } from "@/components/category-filter";
import {
  galleryCategories,
  galleryItems,
  type GalleryFilter,
} from "@/components/gallery-grid/gallery-items";
import { GalleryPreview } from "@/components/gallery-grid/gallery-preview";

const SHOWCASE_PHOTO_COUNT = 4;

export const HomeShowcase = () => {
  const [activeCategory, setActiveCategory] =
    useState<GalleryFilter>("all");
  const photos = (
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter(({ category }) => category === activeCategory)
  ).slice(0, SHOWCASE_PHOTO_COUNT);

  return (
    <>
      <CategoryFilter
        activeCategory={activeCategory}
        categories={galleryCategories}
        label="Kategorie galerii"
        onChange={setActiveCategory}
      />
      <GalleryPreview key={activeCategory} photos={photos} />
      <Link
        className="text-link"
        href={
          activeCategory === "all"
            ? "/galeria"
            : `/galeria?category=${activeCategory}`
        }
      >
        Zobacz więcej
      </Link>
    </>
  );
};
