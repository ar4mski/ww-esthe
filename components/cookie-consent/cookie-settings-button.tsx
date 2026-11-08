"use client";

import { cookieConsentContent } from "@/data/cookie-consent";

import { openCookieSettings } from "./cookie-consent-storage";

type CookieSettingsButtonProps = {
  className?: string;
};

export const CookieSettingsButton = ({
  className,
}: CookieSettingsButtonProps) => (
  <button className={className} type="button" onClick={openCookieSettings}>
    {cookieConsentContent.reopenLabel}
  </button>
);
