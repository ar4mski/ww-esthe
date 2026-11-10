import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookingCta } from "@/components/booking-cta";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import {
  getAllPosts,
  getBlogCategoryPath,
  getBlogPostPath,
  getPostBySlug,
  getRelatedPosts,
} from "@/data/blog";
import { siteConfig } from "@/data/site-config";
import { getBlogPostingJsonLd } from "@/data/structured-data";

import { ArticleContent } from "../components/article-content";
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

  const title = post.seoTitle ?? post.title;
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

  return (
    <>
      <JsonLd data={getBlogPostingJsonLd(post)} />

      <article>
        <header className={`section-shell ${styles.header}`}>
          <div className={styles.column}>
            <Breadcrumbs
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
              className={styles.meta}
              date={post.date}
              readingTimeMinutes={post.readingTimeMinutes}
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
              sizes="(min-width: 640px) 672px, 100vw"
              preload
            />
          </div>
        </div>

        <div className={`section-shell ${styles.body}`}>
          <ArticleContent source={post.content} />
          <footer className={styles.footer}>
            {post.author && (
              <p className={styles.author}>
                Tekst: <span>{post.author}</span>
              </p>
            )}
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

      <BookingCta />
    </>
  );
}
