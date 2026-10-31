import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";

import matter from "gray-matter";

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 200;
const RELATED_POSTS_LIMIT = 3;

export const blogCategories = [
  { slug: "pielegnacja", label: "Pielęgnacja" },
  { slug: "makijaz-permanentny", label: "Makijaż permanentny" },
  { slug: "medycyna-estetyczna", label: "Medycyna estetyczna" },
  { slug: "aktualnosci", label: "Aktualności" },
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  category: BlogCategory;
  coverImage: string;
  coverImageAlt: string;
  featured: boolean;
  tags: string[];
  readingTimeMinutes: number;
  author?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type BlogPost = BlogPostMeta & { content: string };

export const getBlogPostPath = (slug: string) => `/blog/${slug}`;

export const getBlogCategoryPath = (category: BlogCategory) =>
  `/blog/kategoria/${category.slug}`;

export const getBlogCategory = (slug: string) =>
  blogCategories.find((category) => category.slug === slug);

export const formatBlogDate = (isoDate: string) =>
  new Intl.DateTimeFormat("pl-PL", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(isoDate));

export const formatReadingTime = (minutes: number) => `${minutes} min czytania`;

const calculateReadingTime = (content: string) => {
  const words = content.split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
};

const requireString = (value: unknown, field: string, file: string) => {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Blog: missing or invalid "${field}" in ${file}`);
  }

  return value.trim();
};

const optionalString = (value: unknown, field: string, file: string) =>
  value === undefined ? undefined : requireString(value, field, file);

// YAML parses unquoted dates (2026-05-12) into Date objects.
const parseDate = (value: unknown, file: string) => {
  const date = value instanceof Date ? value : new Date(String(value));

  if (Number.isNaN(date.getTime())) {
    throw new Error(`Blog: missing or invalid "date" in ${file}`);
  }

  return date.toISOString().slice(0, 10);
};

const parsePost = (source: string, file: string): BlogPost => {
  const { data, content } = matter(source);
  const categoryLabel = requireString(data.category, "category", file);
  const category = blogCategories.find(({ label }) => label === categoryLabel);

  if (!category) {
    throw new Error(
      `Blog: unknown category "${categoryLabel}" in ${file}. Add it to blogCategories in data/blog.ts.`,
    );
  }

  const title = requireString(data.title, "title", file);
  const tags: unknown = data.tags ?? [];

  if (!Array.isArray(tags) || tags.some((tag) => typeof tag !== "string")) {
    throw new Error(`Blog: "tags" must be a list of strings in ${file}`);
  }

  return {
    slug: file.replace(/\.mdx$/, ""),
    title,
    description: requireString(data.description, "description", file),
    date: parseDate(data.date, file),
    category,
    coverImage: requireString(data.coverImage, "coverImage", file),
    coverImageAlt:
      optionalString(data.coverImageAlt, "coverImageAlt", file) ?? title,
    featured: data.featured === true,
    tags,
    readingTimeMinutes: calculateReadingTime(content),
    author: optionalString(data.author, "author", file),
    seoTitle: optionalString(data.seoTitle, "seoTitle", file),
    seoDescription: optionalString(data.seoDescription, "seoDescription", file),
    content,
  };
};

/** All articles, newest first. */
export const getAllPosts = cache(async (): Promise<BlogPost[]> => {
  const files = (await readdir(BLOG_DIRECTORY)).filter((file) =>
    file.endsWith(".mdx"),
  );
  const posts = await Promise.all(
    files.map(async (file) =>
      parsePost(await readFile(path.join(BLOG_DIRECTORY, file), "utf8"), file),
    ),
  );

  return posts.sort((a, b) => b.date.localeCompare(a.date));
});

export const getPostBySlug = async (slug: string) =>
  (await getAllPosts()).find((post) => post.slug === slug);

export const getPostsByCategory = async (category: BlogCategory) =>
  (await getAllPosts()).filter((post) => post.category.slug === category.slug);

/** The newest article marked as featured, falling back to the newest article. */
export const getFeaturedPost = async () => {
  const posts = await getAllPosts();

  return posts.find((post) => post.featured) ?? posts[0];
};

/** Categories that currently have at least one article. */
export const getActiveCategories = async () => {
  const posts = await getAllPosts();

  return blogCategories.filter((category) =>
    posts.some((post) => post.category.slug === category.slug),
  );
};

export const getRelatedPosts = async (
  post: BlogPostMeta,
  limit = RELATED_POSTS_LIMIT,
) => {
  const score = (candidate: BlogPostMeta) =>
    (candidate.category.slug === post.category.slug ? 10 : 0) +
    candidate.tags.filter((tag) => post.tags.includes(tag)).length;

  // The sort is stable, so equally scored articles stay newest first.
  return (await getAllPosts())
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => score(b) - score(a))
    .slice(0, limit);
};
