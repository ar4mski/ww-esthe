export type CookieCategoryId = "necessary" | "analytics";

export type CookieConsentState = {
  analytics: boolean;
};

const STORAGE_KEY = "ww-esthe-cookie-consent";

// Lets other parts of the app (e.g. an analytics loader) react to consent changes without a reload.
export const COOKIE_CONSENT_CHANGE_EVENT = "cookie-consent-change";

// Lets e.g. a footer link reopen the banner so visitors can change their choice.
export const COOKIE_SETTINGS_OPEN_EVENT = "cookie-settings-open";

export const openCookieSettings = () => {
  window.dispatchEvent(new Event(COOKIE_SETTINGS_OPEN_EVENT));
};

export const getStoredCookieConsent = (): CookieConsentState | null => {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    return typeof parsed?.analytics === "boolean"
      ? { analytics: parsed.analytics }
      : null;
  } catch {
    return null;
  }
};

export const storeCookieConsent = (consent: CookieConsentState) => {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(
    new CustomEvent<CookieConsentState>(COOKIE_CONSENT_CHANGE_EVENT, {
      detail: consent,
    }),
  );
};

export const subscribeToCookieConsent = (onChange: () => void) => {
  window.addEventListener(COOKIE_CONSENT_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);

  return () => {
    window.removeEventListener(COOKIE_CONSENT_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
};
