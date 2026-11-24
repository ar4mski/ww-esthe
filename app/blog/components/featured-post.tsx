import Image from "next/image";
import Link from "next/link";

import { PostMeta } from "@/components/blog/post-meta";
import { getBlogPostPath, type BlogPostMeta } from "@/data/blog";

import styles from "./featured-post.module.css";

type FeaturedPostProps = {
  post: BlogPostMeta;
};

export const FeaturedPost = ({ post }: FeaturedPostProps) => {
  const href = getBlogPostPath(post.slug);

  return (
    <article className={styles.featured} aria-labelledby="featured-post-title">
      <Link
        className={styles.media}
        href={href}
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          className={styles.image}
          src={post.coverImage}
          alt=""
          width={1200}
          height={900}
          preload
          fetchPriority="high"
          sizes="(min-width: 1280px) 480px, (min-width: 1024px) 40vw, 100vw"
        />
      </Link>
      <div className={styles.copy}>
        <p className={styles.label}>
          Wyróżniony artykuł <span aria-hidden="true">·</span>{" "}
          {post.category.label}
        </p>
        <h2
          className={`${styles.title} heading-text`}
          id="featured-post-title"
        >
          <Link href={href}>{post.title}</Link>
        </h2>
        <p className={styles.description}>{post.description}</p>
        <PostMeta
          date={post.date}
          readingTimeMinutes={post.readingTimeMinutes}
        />
      </div>
    </article>
  );
};
