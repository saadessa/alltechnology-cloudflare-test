import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { z } from "zod";
import type { Post, TocItem } from "@/types/content";
import { authors, categories } from "@/lib/site";
import { slugify, unique } from "@/lib/utils";

const postsDirectory = path.join(process.cwd(), "content", "posts");

/**
 * Cache
 */
let postsCache: Post[] | undefined;

const faqSchema = z.object({
  question: z.string().min(8),
  answer: z.string().min(12)
});

const postSchema = z.object({
  title: z.string().min(12),
  description: z.string().min(40),
  category: z.string(),
  tags: z.array(z.string()).min(2),
  author: z.string(),
  publishedAt: z.string(),
  updatedAt: z.string(),
  image: z.string(),
  featured: z.boolean().default(false),
  trending: z.boolean().default(false),
  draft: z.boolean().default(false),
  englishSlug: z.string().min(1).optional(),
  faqs: z.array(faqSchema).default([])
});

function extractToc(content: string): TocItem[] {
  const headingRegex = /^(##|###)\s+(.+)$/gm;
  const toc: TocItem[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].replace(/[#`*]/g, "").trim();

    toc.push({
      id: slugify(text),
      text,
      depth: match[1].length
    });
  }

  return toc;
}

function loadPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(postsDirectory, file), "utf8");

      const { data, content } = matter(source);

      const parsed = postSchema.parse(data);

      return {
        slug: file.replace(/\.mdx$/, ""),
        ...parsed,
        content,
        readingTime: readingTime(content).text,
        toc: extractToc(content)
      };
    })
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export function getAllPosts(includeDrafts = false): Post[] {
  if (!postsCache) {
    postsCache = loadPosts();
  }

  return includeDrafts
    ? postsCache
    : postsCache.filter((post) => !post.draft);
}

export function getPostBySlug(slug: string) {
  return getAllPosts(true).find((post) => post.slug === slug);
}

export function getFeaturedPosts(limit = 6) {
  return getAllPosts().filter((post) => post.featured).slice(0, limit);
}

export function getTrendingPosts(limit = 6) {
  return getAllPosts().filter((post) => post.trending).slice(0, limit);
}

export function getRelatedPosts(post: Post, limit = 4) {
  return getAllPosts()
    .filter((item) => item.slug !== post.slug)
    .map((item) => ({
      post: item,
      score:
        (item.category === post.category ? 3 : 0) +
        item.tags.filter((tag) => post.tags.includes(tag)).length
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

export function getPostsByCategory(slug: string) {
  return getAllPosts().filter(
    (post) => slugify(post.category) === slug || post.category === slug
  );
}

export function getPostsByTag(slug: string) {
  return getAllPosts().filter((post) =>
    post.tags.some((tag) => slugify(tag) === slug)
  );
}

export function getPostsByAuthor(slug: string) {
  return getAllPosts().filter((post) => slugify(post.author) === slug);
}

export function getAllTags() {
  return unique(getAllPosts().flatMap((post) => post.tags)).sort((a, b) =>
    a.localeCompare(b)
  );
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getAuthor(slug: string) {
  return authors.find((author) => author.slug === slug);
}

export const POSTS_PER_PAGE = 9;
