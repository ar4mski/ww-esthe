import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.businessName,
    short_name: "WW-Esthe",
    description: siteConfig.description,
    lang: "pl",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f3f1",
    theme_color: "#f3f3f1",
    icons: [
      {
        src: "/images/branding/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/branding/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
