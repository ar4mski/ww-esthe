"use client";

import {
  Children,
  useRef,
  useState,
  type ReactNode,
  type UIEvent,
} from "react";

import styles from "./carousel.module.css";

type CarouselProps = {
  children: ReactNode;
  label: string;
  as?: "div" | "ul";
  className?: string;
  until?: "desktop" | "never";
};

// Several items are visible at once on tablet and desktop, so the last ones
// never reach the left edge. The segments follow scroll progress instead.
const getActiveIndex = (track: HTMLElement, count: number) => {
  const maxScroll = track.scrollWidth - track.clientWidth;
  if (maxScroll <= 0) return 0;
  const progress = Math.min(Math.max(track.scrollLeft / maxScroll, 0), 1);
  return Math.round(progress * (count - 1));
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
