import type { Metadata } from "next";

import { CookieConsent } from "@/components/cookie-consent/cookie-consent";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site-config";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.businessName,
  description: siteConfig.description,
  icons: {
    icon: "/images/branding/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.businessName,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.businessName,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: "/images/heroes/home/mobile.jpg",
        alt: "Portret klientki WW-Esthe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.businessName,
    description: siteConfig.description,
    images: ["/images/heroes/home/mobile.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
      </body>
    </html>
  );
}
