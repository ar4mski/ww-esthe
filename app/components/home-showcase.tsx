"use client";

import Link from "next/link";
import { useState } from "react";

import { GalleryFilter } from "@/components/gallery-grid/gallery-filter";
import {
  galleryItems,
  type GalleryFilter as GalleryFilterValue,
} from "@/components/gallery-grid/gallery-items";
import { GalleryPreview } from "@/components/gallery-grid/gallery-preview";

const SHOWCASE_PHOTO_COUNT = 4;

export const HomeShowcase = () => {
  const [activeCategory, setActiveCategory] =
    useState<GalleryFilterValue>("all");
  const photos = (
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter(({ category }) => category === activeCategory)
  ).slice(0, SHOWCASE_PHOTO_COUNT);

  return (
    <>
      <GalleryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
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
