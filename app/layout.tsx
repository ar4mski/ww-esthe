import type { Metadata } from "next";

import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { CookieConsent } from "@/components/cookie-consent/cookie-consent";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site-config";
import { Geist, Montserrat } from "next/font/google";
import "./globals.css";

// latin-ext holds the Polish letters (ą, ę, ł, ś, ż), used in almost every text.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

// One light weight for headings; latin-ext holds the Polish letters in uppercase.
const montserrat = Montserrat({
  variable: "--font-display",
  weight: "300",
  style: "normal",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.businessName,
  description: siteConfig.description,
  icons: {
    icon: "/images/branding/favicon.svg",
    apple: "/apple-icon.png",
  },
  robots: siteConfig.allowIndexing
    ? undefined
    : { index: false, follow: false },
  openGraph: {
    title: siteConfig.businessName,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.businessName,
    locale: siteConfig.locale,
    type: "website",
    images: [siteConfig.defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.businessName,
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage.url],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div id="top">
          <SiteHeader />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
        </div>
        <CookieConsent />
        {siteConfig.gaMeasurementId && (
          <GoogleAnalytics measurementId={siteConfig.gaMeasurementId} />
        )}
      </body>
    </html>
  );
}
