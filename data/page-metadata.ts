import { existsSync } from "node:fs";
import path from "node:path";

import type { Metadata } from "next";

import { siteConfig } from "./site-config";

export type OgImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

// Link previews crop images to 1.91:1, so each cover used as og:image has a
// hand-cropped 1200×630 copy at the same path under /images/og/ (procedure:
// docs/content-guide.md). Without one the page falls back to the default image.
export const getOgImage = (src: string, alt: string): OgImage => {
  const url = src.replace(/^\/images\//, "/images/og/");

  if (existsSync(path.join(process.cwd(), "public", url))) {
    return { url, width: 1200, height: 630, alt };
  }

  console.warn(`Missing Open Graph image ${url}; using the default one.`);

  return siteConfig.defaultOgImage;
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: OgImage;
};

export const createPageMetadata = ({
  title,
  description,
  path,
  image = siteConfig.defaultOgImage,
}: PageMetadataOptions): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: path,
    siteName: siteConfig.businessName,
    locale: siteConfig.locale,
    type: "website",
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image.url],
  },
});
