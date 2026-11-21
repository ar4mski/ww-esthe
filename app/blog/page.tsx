import type { Metadata } from "next";

import { BookingCta } from "@/components/booking-cta";
import { getActiveCategories, getAllPosts, getFeaturedPost } from "@/data/blog";
import { createPageMetadata } from "@/data/page-metadata";

import { BlogEmptyState } from "./components/blog-empty-state";
import { CategoryNav } from "./components/category-nav";
import { FeaturedPost } from "./components/featured-post";
import { PostGrid } from "./components/post-grid";

const title = "Blog – porady o makijażu permanentnym i estetyce";
const description =
  "Porady, inspiracje i rzetelna wiedza o makijażu permanentnym, pielęgnacji i zabiegach medycyny estetycznej.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/blog",
});

export default async function BlogPage() {
  const [posts, featuredPost, categories] = await Promise.all([
    getAllPosts(),
    getFeaturedPost(),
    getActiveCategories(),
  ]);
  const otherPosts = posts.filter((post) => post.slug !== featuredPost?.slug);

  return (
    <>
      <section className="section-shell" aria-labelledby="blog-title">
        <header className="section-heading">
          <h1 id="blog-title">Wiedza o pięknie.</h1>
          <p>{description}</p>
        </header>
        <CategoryNav categories={categories} />
        {featuredPost ? (
          <FeaturedPost post={featuredPost} />
        ) : (
          <BlogEmptyState />
        )}
      </section>

      {otherPosts.length > 0 && (
        <section className="section-shell" aria-labelledby="latest-posts-title">
          <header className="section-heading">
            <p className="eyebrow">Czytaj dalej</p>
            <h2 id="latest-posts-title">Najnowsze artykuły</h2>
          </header>
          <PostGrid posts={otherPosts} />
        </section>
      )}

      <BookingCta variant="blog" />
    </>
  );
}
