"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { flushSync } from "react-dom";

import type { BeforeAfterCategory } from "@/data/before-after";

import styles from "./before-after.module.css";

type BeforeAfterTabsProps = {
  activeSlug: string;
  categories: BeforeAfterCategory[];
  panelId: string;
  onChange: (slug: string) => void;
};

export const getBeforeAfterTabId = (slug: string) => `before-after-tab-${slug}`;

export const BeforeAfterTabs = ({
  activeSlug,
  categories,
  panelId,
  onChange,
}: BeforeAfterTabsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(categories.length);
  const barRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLButtonElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const hasOverflow = visibleCount < categories.length;

  // Collapsed tabs stay in the DOM (visually hidden, absolutely positioned),
  // so their widths can be measured to decide how many fit on one line.
  useEffect(() => {
    const bar = barRef.current;
    const list = listRef.current;
    if (!bar || !list) {
      return;
    }

    const measure = () => {
      const { columnGap, flexDirection } = getComputedStyle(list);
      if (flexDirection === "column") {
        setVisibleCount(categories.length);
        return;
      }

      const gap = parseFloat(columnGap) || 0;
      const widths = tabRefs.current.map((tab) => tab?.offsetWidth ?? 0);
      const available = bar.clientWidth;
      const totalWidth =
        widths.reduce((sum, width) => sum + width, 0) +
        gap * (widths.length - 1);

      if (totalWidth <= available) {
        setVisibleCount(widths.length);
        return;
      }

      let usedWidth = moreRef.current?.offsetWidth ?? 0;
      let count = 0;
      for (const width of widths) {
        if (usedWidth + gap + width > available) {
          break;
        }
        usedWidth += gap + width;
        count += 1;
      }
      setVisibleCount(Math.max(1, count));
    };

    const observer = new ResizeObserver(measure);
    observer.observe(bar);
    return () => observer.disconnect();
  }, [categories.length]);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const lastIndex = categories.length - 1;
    const nextIndexByKey: Partial<Record<string, number>> = {
      ArrowRight: index === lastIndex ? 0 : index + 1,
      ArrowDown: index === lastIndex ? 0 : index + 1,
      ArrowLeft: index === 0 ? lastIndex : index - 1,
      ArrowUp: index === 0 ? lastIndex : index - 1,
      Home: 0,
      End: lastIndex,
    };
    const nextIndex = nextIndexByKey[event.key];
    if (nextIndex === undefined) {
      return;
    }

    event.preventDefault();
    if (nextIndex >= visibleCount) {
      // The tab must be visible before it can receive focus.
      flushSync(() => setIsExpanded(true));
    }
    tabRefs.current[nextIndex]?.focus();
    onChange(categories[nextIndex].slug);
  };

  return (
    <div className={styles.tabsBar} ref={barRef}>
      <div
        className={styles.tabs}
        ref={listRef}
        role="tablist"
        aria-label="Kategorie efektów przed i po"
      >
        {categories.map(({ label, slug }, index) => {
          const isActive = slug === activeSlug;
          const isCollapsed = !isExpanded && index >= visibleCount;

          return (
            <button
              className={[
                styles.tab,
                "interactive-underline",
                isCollapsed && styles.measuredHidden,
              ]
                .filter(Boolean)
                .join(" ")}
              id={getBeforeAfterTabId(slug)}
              key={slug}
              ref={(tab) => {
                tabRefs.current[index] = tab;
              }}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onChange(slug)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {label}
              {isActive ? (
                <ArrowRight className={`icon ${styles.tabIcon}`} aria-hidden />
              ) : null}
            </button>
          );
        })}
      </div>
      <button
        className={[
          styles.tab,
          styles.more,
          "interactive-underline",
          !hasOverflow && styles.measuredHidden,
        ]
          .filter(Boolean)
          .join(" ")}
        ref={moreRef}
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Mniej…" : "Więcej…"}
      </button>
    </div>
  );
};
