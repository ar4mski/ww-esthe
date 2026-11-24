import { CalendarDays, Clock } from "lucide-react";

import { formatBlogDate, formatReadingTime } from "@/data/blog";

import styles from "./post-meta.module.css";

type PostMetaProps = {
  date: string;
  readingTimeMinutes: number;
  className?: string;
};

export const PostMeta = ({
  date,
  readingTimeMinutes,
  className,
}: PostMetaProps) => (
  <p className={className ? `${styles.meta} ${className}` : styles.meta}>
    <span>
      <Clock className="icon" aria-hidden="true" />
      {formatReadingTime(readingTimeMinutes)}
    </span>
    <span>
      <CalendarDays className="icon" aria-hidden="true" />
      <time dateTime={date}>{formatBlogDate(date)}</time>
    </span>
  </p>
);
