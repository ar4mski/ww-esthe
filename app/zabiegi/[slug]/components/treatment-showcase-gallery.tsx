"use client";

import Image from "next/image";
import { useState } from "react";

import type { ShowcasePhoto } from "@/data/treatment-showcase";
import { GalleryViewer } from "@/components/gallery-grid/gallery-viewer";
import styles from "./treatment-showcase.module.css";

type TreatmentShowcaseGalleryProps = {
  photos: ShowcasePhoto[];
};

export const TreatmentShowcaseGallery = ({
  photos,
}: TreatmentShowcaseGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <ul className={styles.photos}>
        {photos.map(({ src, alt }, index) => (
          <li className={styles.photo} key={src}>
            <button
              className={styles.photoButton}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Powiększ zdjęcie: ${alt}`}
            >
              <Image
                className={styles.photoImage}
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
              />
            </button>
          </li>
        ))}
      </ul>
      {activeIndex !== null ? (
        <GalleryViewer
          activeIndex={activeIndex}
          items={photos}
          onClose={() => setActiveIndex(null)}
        />
      ) : null}
    </>
  );
};
