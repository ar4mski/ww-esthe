import type { Metadata } from "next";

import { siteConfig } from "./site-config";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: { url: string; alt: string };
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
