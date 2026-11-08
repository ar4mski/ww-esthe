"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

import { cookieConsentContent } from "@/data/cookie-consent";
import { siteConfig } from "@/data/site-config";

import {
  COOKIE_SETTINGS_OPEN_EVENT,
  type CookieConsentState,
  getStoredCookieConsent,
  storeCookieConsent,
  subscribeToCookieConsent,
} from "./cookie-consent-storage";
import styles from "./cookie-consent.module.css";

export function CookieConsent() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isReopened, setIsReopened] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  // The server snapshot reports consent as given so the banner is never in the
  // server HTML; only the client knows whether a choice was already stored.
  const hasStoredConsent = useSyncExternalStore(
    subscribeToCookieConsent,
    () => getStoredCookieConsent() !== null,
    () => true,
  );

  // Reopened from the "Ustawienia cookies" link: show the settings view with
  // the visitor's current choice preselected.
  useEffect(() => {
    const onOpen = () => {
      setAnalyticsChecked(getStoredCookieConsent()?.analytics ?? false);
      setIsSettingsOpen(true);
      setIsReopened(true);
    };

    window.addEventListener(COOKIE_SETTINGS_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(COOKIE_SETTINGS_OPEN_EVENT, onOpen);
  }, []);

  const saveConsent = (consent: CookieConsentState) => {
    storeCookieConsent(consent);
    setIsReopened(false);
  };

  if (hasStoredConsent && !isReopened) return null;

  return (
    <div
      className={styles.banner}
      role="dialog"
      aria-live="polite"
      aria-label={cookieConsentContent.title}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{cookieConsentContent.title}</h2>
        <p className={styles.description}>
          {cookieConsentContent.description}{" "}
          <Link href={siteConfig.legal.privacyPolicyPath}>
            {cookieConsentContent.privacyPolicyLabel}
          </Link>
        </p>

        {isSettingsOpen && (
          <ul className={styles.categories}>
            {cookieConsentContent.categories.map((category) => (
              <li className={styles.category} key={category.id}>
                <label className={styles.categoryLabel}>
                  <input
                    type="checkbox"
                    checked={
                      category.id === "analytics" ? analyticsChecked : true
                    }
                    disabled={category.required}
                    onChange={(event) =>
                      category.id === "analytics" &&
                      setAnalyticsChecked(event.target.checked)
                    }
                  />
                  {category.label}
                </label>
                <p className={styles.categoryDescription}>
                  {category.description}
                </p>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.actions}>
          {isSettingsOpen ? (
            <button
              className="button"
              type="button"
              onClick={() => saveConsent({ analytics: analyticsChecked })}
            >
              {cookieConsentContent.saveSettingsLabel}
            </button>
          ) : (
            <>
              <button
                className="button"
                type="button"
                onClick={() => saveConsent({ analytics: true })}
              >
                {cookieConsentContent.acceptAllLabel}
              </button>
              <button
                className="button button-secondary"
                type="button"
                onClick={() => saveConsent({ analytics: false })}
              >
                {cookieConsentContent.rejectAllLabel}
              </button>
              <button
                className={`button button-secondary ${styles.settingsButton}`}
                type="button"
                onClick={() => setIsSettingsOpen(true)}
              >
                {cookieConsentContent.settingsLabel}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
