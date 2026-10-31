import type { ComponentProps, ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import styles from "./article-content.module.css";

type ArticleContentProps = {
  source: string;
};

const ContentLink = ({
  href = "",
  children,
  ...props
}: ComponentProps<"a">) => {
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  const isWebLink = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      {...(isWebLink && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      {children}
    </a>
  );
};

// Markdown wraps standalone images in <p>, so the figure must stay phrasing content.
const ContentImage = ({ src, alt = "" }: ComponentProps<"img">) =>
  typeof src === "string" ? (
    <span className={styles.figure}>
      <Image
        className={styles.figureImage}
        src={src}
        alt={alt}
        width={1200}
        height={800}
        sizes="(min-width: 768px) 672px, 100vw"
      />
    </span>
  ) : null;

// The page title is the only h1, so "#" in an article becomes a top-level section heading.
const SectionHeading = ({ children }: { children?: ReactNode }) => (
  <h2>{children}</h2>
);

const components = {
  a: ContentLink,
  img: ContentImage,
  h1: SectionHeading,
};

export const ArticleContent = ({ source }: ArticleContentProps) => (
  <div className={styles.content}>
    <MDXRemote source={source} components={components} />
  </div>
);
