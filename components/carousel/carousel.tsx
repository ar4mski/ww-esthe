"use client";

import { Children, useRef, useState, type ReactNode, type UIEvent } from "react";

import styles from "./carousel.module.css";

type CarouselProps = {
  children: ReactNode;
  label: string;
  as?: "div" | "ul";
  className?: string;
  until?: "tablet" | "desktop";
};

// Tolerance for sub-pixel scroll positions at the end of the track.
const END_TOLERANCE = 4;

const getActiveIndex = (track: HTMLElement, count: number) => {
  if (track.scrollLeft + track.clientWidth >= track.scrollWidth - END_TOLERANCE) {
    // Two items are visible on tablet, so the last one never reaches the left edge.
    return count - 1;
  }

  const firstItem = track.firstElementChild;
  if (!firstItem) return 0;

  const step =
    firstItem.getBoundingClientRect().width +
    parseFloat(getComputedStyle(track).columnGap);
  const index = Math.round(track.scrollLeft / step);
  return Math.min(Math.max(index, 0), count - 1);
};

export const Carousel = ({
  children,
  label,
  as: Track = "div",
  className,
  until = "desktop",
}: CarouselProps) => {
  const count = Children.count(children);
  const frameRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: UIEvent<HTMLElement>) => {
    const track = event.currentTarget;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() =>
      setActiveIndex(getActiveIndex(track, count)),
    );
  };

  return (
    <div className={styles.carousel} data-until={until}>
      <Track
        className={className ? `${styles.track} ${className}` : styles.track}
        // A <ul> keeps its list role; a <div> becomes a named region.
        role={Track === "div" ? "region" : undefined}
        aria-label={label}
        tabIndex={0}
        onScroll={handleScroll}
      >
        {children}
      </Track>
      {count > 1 && (
        <div className={styles.indicator} aria-hidden="true">
          {Array.from({ length: count }, (_, index) => (
            <span key={index} data-active={index === activeIndex} />
          ))}
        </div>
      )}
    </div>
  );
};
