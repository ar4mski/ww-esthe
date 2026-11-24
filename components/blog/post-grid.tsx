import type { BlogPostMeta } from "@/data/blog";

import { BlogCard } from "./blog-card";
import styles from "./post-grid.module.css";

type PostGridProps = {
  posts: BlogPostMeta[];
  className?: string;
  compact?: boolean;
};

export const PostGrid = ({
  posts,
  className,
  compact = false,
}: PostGridProps) => (
  <div className={className ? `${styles.grid} ${className}` : styles.grid}>
    {posts.map((post) => (
      <BlogCard key={post.slug} post={post} compact={compact} />
    ))}
  </div>
);
