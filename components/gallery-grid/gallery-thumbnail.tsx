import Image from "next/image";

import styles from "./gallery-grid.module.css";
import type { GalleryItem } from "./gallery-items";

type GalleryThumbnailProps = {
  item: GalleryItem;
  onOpen: () => void;
  tabIndex?: number;
};

export function GalleryThumbnail({
  item,
  onOpen,
  tabIndex,
}: GalleryThumbnailProps) {
  return (
    <button
      className={styles.thumbnail}
      type="button"
      onClick={onOpen}
      aria-label={`Otwórz zdjęcie: ${item.alt}`}
      tabIndex={tabIndex}
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={400}
        height={400}
        sizes="(min-width: 1024px) 275px, (min-width: 640px) 25vw, 33vw"
      />
    </button>
  );
}
