"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "./site-header.module.css";

// Scroll distance (px) needed to go from fully expanded to fully collapsed.
const COLLAPSE_SCROLL_DISTANCE = 160;
const EXPAND_NEAR_TOP_THRESHOLD = 16;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const collapseRef = useRef(0);
  const lastScrollY = useRef(0);

  const closeMenu = () => setIsMenuOpen(false);

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
  }, []);

  // Keep the header expanded while the mobile menu is open.
  useEffect(() => {
    const header = headerRef.current;
    if (!header || !isMenuOpen) return;

    collapseRef.current = 0;
    header.style.setProperty("--collapse", "0");
    header.classList.remove(styles.collapsed);
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`${styles.siteHeader} ${isMenuOpen ? styles.menuOpen : ""} relative flex-wrap`}
    >
      <a className={styles.skipLink} href="#main-content">
        Pomiń nawigację
      </a>
      <Link
        className={styles.brand}
        href="/"
        aria-label="Strona główna WW-Esthe"
        onClick={closeMenu}
      >
        <Image
          className={styles.brandLogo}
          src="/images/branding/horizontal.svg"
          alt="WW-Esthe"
          width={130}
          height={68}
          priority
        />
      </Link>
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
      <nav
        className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
        id="primary-navigation"
        aria-label="Nawigacja główna"
      >
        <ul className={styles.navList}>
          <li>
            <Link href="/zabiegi" onClick={closeMenu}>
              Zabiegi
            </Link>
          </li>
          <li>
            <Link href="/o-mnie" onClick={closeMenu}>
              O mnie
            </Link>
          </li>
          <li>
            <Link href="/galeria" onClick={closeMenu}>
              Galeria
            </Link>
          </li>
          <li>
            <Link href="/cennik" onClick={closeMenu}>
              Cennik
            </Link>
          </li>
          <li>
            <Link href="/kontakt" onClick={closeMenu}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
