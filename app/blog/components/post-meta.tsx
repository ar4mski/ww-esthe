import { formatBlogDate, formatReadingTime } from "@/data/blog";

import styles from "./post-meta.module.css";

type PostMetaProps = {
  date: string;
  readingTimeMinutes: number;
  author?: string;
};

export const PostMeta = ({
  date,
  readingTimeMinutes,
  author,
}: PostMetaProps) => (
  <p className={styles.meta}>
    <time dateTime={date}>{formatBlogDate(date)}</time>
    <span>{formatReadingTime(readingTimeMinutes)}</span>
    {author && <span>{author}</span>}
  </p>
);
