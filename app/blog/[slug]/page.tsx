import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getAllPosts,
  getBlogCategoryPath,
  getBlogPostPath,
  getPostBySlug,
  getRelatedPosts,
} from "@/data/blog";
import { siteConfig } from "@/data/site-config";

import { ArticleContent } from "../components/article-content";
import { BlogBreadcrumbs } from "../components/blog-breadcrumbs";
import { BlogCta } from "../components/blog-cta";
import { JsonLd } from "../components/json-ld";
import { PostGrid } from "../components/post-grid";
import { PostMeta } from "../components/post-meta";
import styles from "./article-page.module.css";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getAllPosts()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const title = post.seoTitle ?? `${post.title} | WW - ESTHE`;
  const description = post.seoDescription ?? post.description;
  const path = getBlogPostPath(post.slug);
  const images = [{ url: post.coverImage, alt: post.coverImageAlt }];

  return {
    title,
    description,
    alternates: { canonical: path },
    authors: post.author ? [{ name: post.author }] : undefined,
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.businessName,
      locale: siteConfig.locale,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      section: post.category.label,
      tags: post.tags,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.coverImage],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post);
  const absoluteUrl = (path: string) =>
    new URL(path, siteConfig.siteUrl).toString();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.seoDescription ?? post.description,
          image: absoluteUrl(post.coverImage),
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: siteConfig.locale,
          articleSection: post.category.label,
          keywords: post.tags.length > 0 ? post.tags.join(", ") : undefined,
          mainEntityOfPage: absoluteUrl(getBlogPostPath(post.slug)),
          author: post.author
            ? { "@type": "Person", name: post.author }
            : { "@type": "Organization", name: siteConfig.businessName },
          publisher: {
            "@type": "Organization",
            name: siteConfig.businessName,
            url: siteConfig.siteUrl,
          },
        }}
      />

      <article>
        <header className={`section-shell ${styles.header}`}>
          <div className={styles.column}>
            <BlogBreadcrumbs
              trail={[
                { label: "Strona główna", href: "/" },
                { label: "Blog", href: "/blog" },
              ]}
              currentPage={post.title}
            />
            <p className={styles.category}>
              <Link href={getBlogCategoryPath(post.category)}>
                {post.category.label}
              </Link>
            </p>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.lead}>{post.description}</p>
            <PostMeta
              date={post.date}
              readingTimeMinutes={post.readingTimeMinutes}
              author={post.author}
            />
          </div>
        </header>

        <div className={`section-shell ${styles.cover}`}>
          <div className={styles.column}>
            <Image
              className={styles.coverImage}
              src={post.coverImage}
              alt={post.coverImageAlt}
              width={1344}
              height={896}
              sizes="(min-width: 768px) 672px, 100vw"
              preload
            />
          </div>
        </div>

        <div className={`section-shell ${styles.body}`}>
          <ArticleContent source={post.content} />
          <footer className={styles.footer}>
            <p className={styles.disclaimer}>
              Artykuł ma charakter informacyjny i nie zastępuje konsultacji ze
              specjalistą. Zalecenia po zabiegu zawsze dopasowujemy
              indywidualnie podczas wizyty.
            </p>
            {post.tags.length > 0 && (
              <ul className={styles.tags} aria-label="Tagi">
                {post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
          </footer>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section
          className="section-shell"
          aria-labelledby="related-posts-title"
        >
          <header className="section-heading">
            <p className="eyebrow">Czytaj dalej</p>
            <h2 id="related-posts-title">Powiązane artykuły</h2>
          </header>
          <PostGrid posts={relatedPosts} />
        </section>
      )}

      <BlogCta />
    </>
  );
}
