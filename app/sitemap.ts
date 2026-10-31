import type { MetadataRoute } from "next";

import {
  getActiveCategories,
  getAllPosts,
  getBlogCategoryPath,
  getBlogPostPath,
} from "@/data/blog";
import { siteConfig } from "@/data/site-config";
import { treatments } from "@/data/treatments";

const staticPaths = [
  "/",
  "/zabiegi",
  "/o-mnie",
  "/galeria",
  "/cennik",
  "/kontakt",
  "/blog",
  siteConfig.legal.termsPath,
  siteConfig.legal.privacyPolicyPath,
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getActiveCategories(),
  ]);
  const toUrl = (path: string) => new URL(path, siteConfig.siteUrl).toString();

  return [
    ...staticPaths.map((path) => ({ url: toUrl(path) })),
    ...treatments.map(({ slug }) => ({ url: toUrl(`/zabiegi/${slug}`) })),
    ...categories.map((category) => ({
      url: toUrl(getBlogCategoryPath(category)),
    })),
    ...posts.map((post) => ({
      url: toUrl(getBlogPostPath(post.slug)),
      lastModified: post.date,
    })),
  ];
}
