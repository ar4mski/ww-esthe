import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "./gallery-grid.module.css";
import { galleryItems, type GalleryItem } from "./gallery-items";

type GalleryViewerItem = Pick<GalleryItem, "src" | "alt"> &
  Partial<Pick<GalleryItem, "description">>;

type GalleryViewerProps = {
  activeIndex: number;
  items?: GalleryViewerItem[];
  onClose: () => void;
};

export function GalleryViewer({
  activeIndex,
  items = galleryItems,
  onClose,
}: GalleryViewerProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const viewerScrollRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const activeElement = document.activeElement;
    previouslyFocusedRef.current =
      activeElement instanceof HTMLElement ? activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, []);

  useEffect(() => {
    const activeItem = viewerScrollRef.current?.children[activeIndex];
    if (activeItem instanceof HTMLElement) {
      activeItem.scrollIntoView({ block: "start" });
    }
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const viewer = viewerRef.current;
      const focusableElements = viewer?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
        return;
      }

      if (!viewer?.contains(document.activeElement)) {
        event.preventDefault();
        firstElement.focus();
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className={styles.viewer}
      ref={viewerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Galeria zdjęć"
    >
      <button
        className={styles.closeButton}
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Zamknij galerię"
      >
        ×
      </button>
      <div className={styles.viewerScroll} ref={viewerScrollRef}>
        {items.map((item, index) => (
          <article className={styles.viewerItem} key={item.src}>
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={1200}
              sizes="100vw"
            />
            {item.description ? (
              <div className={styles.description}>
                <p className={expandedIndex === index ? styles.expanded : ""}>
                  {item.description}
                </p>
                <button
                  className={styles.readMore}
                  type="button"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  {expandedIndex === index ? "Pokaż mniej" : "Czytaj więcej"}
                </button>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
