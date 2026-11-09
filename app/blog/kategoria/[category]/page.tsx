import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BookingCta } from "@/components/booking-cta";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  blogCategories,
  getActiveCategories,
  getBlogCategory,
  getBlogCategoryPath,
  getPostsByCategory,
} from "@/data/blog";
import { siteConfig } from "@/data/site-config";

import { BlogEmptyState } from "../../components/blog-empty-state";
import { CategoryNav } from "../../components/category-nav";
import { PostGrid } from "../../components/post-grid";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogCategories.map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getBlogCategory(categorySlug);

  if (!category) {
    return {};
  }

  const posts = await getPostsByCategory(category);
  const title = `${category.label} – Blog`;
  const description = `Artykuły z kategorii ${category.label}: porady i rzetelna wiedza od ${siteConfig.businessName}.`;
  const path = getBlogCategoryPath(category);

  return {
    title,
    description,
    alternates: { canonical: path },
    // Categories without articles are still reachable but should not be indexed.
    // The key is omitted otherwise: an explicit `undefined` would override the root layout's robots.
    ...(posts.length === 0 && { robots: { index: false } }),
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.businessName,
      locale: siteConfig.locale,
      type: "website",
    },
  };
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getBlogCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const [posts, categories] = await Promise.all([
    getPostsByCategory(category),
    getActiveCategories(),
  ]);

  return (
    <>
      <section className="section-shell" aria-labelledby="category-title">
        <Breadcrumbs
          trail={[
            { label: "Strona główna", href: "/" },
            { label: "Blog", href: "/blog" },
          ]}
          currentPage={category.label}
        />
        <header className="section-heading">
          <p className="eyebrow">Blog</p>
          <h1 id="category-title">{category.label}</h1>
        </header>
        <CategoryNav categories={categories} activeCategory={category} />
        {posts.length > 0 ? (
          <PostGrid posts={posts} />
        ) : (
          <BlogEmptyState categoryLabel={category.label} />
        )}
      </section>

      <BookingCta />
    </>
  );
}
