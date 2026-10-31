import type { BlogPostMeta } from "@/data/blog";

import { BlogCard } from "./blog-card";
import styles from "./post-grid.module.css";

type PostGridProps = {
  posts: BlogPostMeta[];
};

export const PostGrid = ({ posts }: PostGridProps) => (
  <div className={styles.grid}>
    {posts.map((post) => (
      <BlogCard key={post.slug} post={post} />
    ))}
  </div>
);
