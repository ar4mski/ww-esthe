import type { NextConfig } from "next";

// Files in public/ are replaced under the same name, so they are revalidated daily instead of cached as immutable.
const publicAssetCacheControl =
  "public, max-age=86400, stale-while-revalidate=604800";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },
  headers: async () => [
    {
      source: "/images/:path*",
      headers: [{ key: "Cache-Control", value: publicAssetCacheControl }],
    },
    {
      source: "/video/:path*",
      headers: [{ key: "Cache-Control", value: publicAssetCacheControl }],
    },
  ],
};

export default nextConfig;
