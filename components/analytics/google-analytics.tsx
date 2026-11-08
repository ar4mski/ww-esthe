"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";

import {
  getStoredCookieConsent,
  subscribeToCookieConsent,
} from "@/components/cookie-consent/cookie-consent-storage";

import { getLinkClickEvent } from "./link-click-event";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

type GoogleAnalyticsProps = {
  measurementId: string;
};

// GA sets its cookies on the widest domain it can (e.g. ".warylakesthe.pl"),
// so try every parent domain of the current host when removing them.
const removeAnalyticsCookies = () => {
  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));

  const hostParts = window.location.hostname.split(".");
  const domains = hostParts
    .map((_, index) => hostParts.slice(index).join("."))
    .filter((domain) => domain.includes("."));

  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domain}`;
    }
  }
};

const trackLinkClicks = (event: MouseEvent) => {
  const anchor =
    event.target instanceof Element ? event.target.closest("a") : null;
  if (!anchor) return;

  const clickEvent = getLinkClickEvent(anchor);
  if (clickEvent) window.gtag?.("event", clickEvent.name, clickEvent.params);
};

/**
 * Loads Google Analytics 4 only after the visitor accepts analytics cookies in
 * the consent banner, and stops it again if that consent is withdrawn.
 * Page views on client-side navigation are recorded by GA's enhanced
 * measurement ("page changes based on browser history events").
 */
export const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
  const hasConsent = useSyncExternalStore(
    subscribeToCookieConsent,
    () => getStoredCookieConsent()?.analytics === true,
    () => false,
  );

  useEffect(() => {
    window[`ga-disable-${measurementId}`] = !hasConsent;
    if (!hasConsent) {
      removeAnalyticsCookies();
      return;
    }

    document.addEventListener("click", trackLinkClicks, { capture: true });
    return () =>
      document.removeEventListener("click", trackLinkClicks, { capture: true });
  }, [hasConsent, measurementId]);

  if (!hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
};
