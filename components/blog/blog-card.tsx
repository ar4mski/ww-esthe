import Image from "next/image";
import Link from "next/link";

import { getBlogPostPath, type BlogPostMeta } from "@/data/blog";

import styles from "./blog-card.module.css";
import { PostMeta } from "./post-meta";

type BlogCardProps = {
  post: BlogPostMeta;
  /** Without the description, for teasers outside the blog (home page). */
  compact?: boolean;
};

export const BlogCard = ({ post, compact = false }: BlogCardProps) => (
  <article
    className={compact ? `${styles.card} ${styles.compact}` : styles.card}
  >
    <div className={styles.media}>
      <Image
        className={styles.image}
        src={post.coverImage}
        alt={post.coverImageAlt}
        width={800}
        height={600}
        sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
      />
    </div>
    <p className={styles.category}>{post.category.label}</p>
    <h3 className={`${styles.title} heading-text`}>
      <Link className={styles.link} href={getBlogPostPath(post.slug)}>
        {post.title}
      </Link>
    </h3>
    {!compact && <p className={styles.description}>{post.description}</p>}
    <PostMeta date={post.date} readingTimeMinutes={post.readingTimeMinutes} />
  </article>
);
