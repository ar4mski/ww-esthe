"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import styles from "./site-header.module.css";

// Scroll distance (px) needed to go from fully expanded to fully collapsed.
const COLLAPSE_SCROLL_DISTANCE = 160;
const EXPAND_NEAR_TOP_THRESHOLD = 16;

type SiteHeaderShellProps = {
  children: ReactNode;
  leading: ReactNode;
};

export const SiteHeaderShell = ({
  children,
  leading,
}: SiteHeaderShellProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const collapseRef = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const applyCollapse = (value: number) => {
      header.style.setProperty("--collapse", String(value));
      header.classList.toggle(styles.collapsed, value >= 0.99);
    };

    lastScrollY.current = window.scrollY;
    let ticking = false;

    const updateCollapse = () => {
      const currentScrollY = window.scrollY;
      if (isMenuOpen) {
        lastScrollY.current = currentScrollY;
        ticking = false;
        return;
      }

      const delta = currentScrollY - lastScrollY.current;

      // Tie the collapse progress directly to how far/fast the user scrolls.
      const nextValue =
        currentScrollY <= EXPAND_NEAR_TOP_THRESHOLD
          ? 0
          : Math.min(
              1,
              Math.max(
                0,
                collapseRef.current + delta / COLLAPSE_SCROLL_DISTANCE,
              ),
            );

      collapseRef.current = nextValue;
      applyCollapse(nextValue);
      lastScrollY.current = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateCollapse);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Keep the header expanded while the mobile menu is open.
  useEffect(() => {
    const header = headerRef.current;
    if (!header || !isMenuOpen) return;

    collapseRef.current = 0;
    header.style.setProperty("--collapse", "0");
    header.classList.remove(styles.collapsed);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleOutsidePointerDown = (event: PointerEvent) => {
      const header = headerRef.current;
      if (header && event.target instanceof Node && !header.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsidePointerDown);
    return () =>
      document.removeEventListener("pointerdown", handleOutsidePointerDown);
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`${styles.siteHeader} relative flex-wrap`}
      data-menu-open={isMenuOpen}
      // Links are server-rendered children, so close the menu on any link click here.
      onClick={(event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
          setIsMenuOpen(false);
        }
      }}
    >
      {leading}
      <button
        className={styles.menuButton}
        type="button"
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span className="block h-px w-5 bg-current" />
        <span className="block h-px w-5 bg-current" />
        <span className="block h-px w-5 bg-current" />
      </button>
      {children}
    </header>
  );
};
