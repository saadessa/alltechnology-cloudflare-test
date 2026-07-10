import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { z } from "zod";
import type { Post, TocItem } from "@/types/content";
import { authorsEn, categoryLabelsEn } from "@/lib/site-en";
import { slugify, unique } from "@/lib/utils";

const postsDirectory = path.join(process.cwd(), "content", "posts-en");

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
  arabicSlug: z.string().min(1).optional(),
  faqs: z.array(faqSchema).default([])
});

export type EnglishCategory = {
  slug: string;
  name: string;
  description: string;
};

export type EnglishAuthor = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  sameAs: string[];
};

function humanizeSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

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

export function getAllPostsEn(includeDrafts = false): Post[] {
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
      const slug = file.replace(/\.mdx$/, "");

      return {
        slug,
        ...parsed,
        content,
        readingTime: readingTime(content).text,
        toc: extractToc(content)
      };
    })
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export function getPostBySlugEn(slug: string) {
  return getAllPostsEn(true).find((post) => post.slug === slug && !post.draft);
}

export function getFeaturedPostsEn(limit = 6) {
  return getAllPostsEn().filter((post) => post.featured).slice(0, limit);
}

export function getTrendingPostsEn(limit = 6) {
  return getAllPostsEn().filter((post) => post.trending).slice(0, limit);
}

export function getRelatedPostsEn(post: Post, limit = 4) {
  return getAllPostsEn()
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

export function getPostsByCategoryEn(slug: string) {
  return getAllPostsEn().filter((post) => slugify(post.category) === slug || post.category === slug);
}

export function getPostsByTagEn(slug: string) {
  return getAllPostsEn().filter((post) => post.tags.some((tag) => slugify(tag) === slug));
}

export function getPostsByAuthorEn(slug: string) {
  return getAllPostsEn().filter((post) => slugify(post.author) === slug);
}

export function getAllTagsEn() {
  return unique(getAllPostsEn().flatMap((post) => post.tags)).sort((a, b) => a.localeCompare(b));
}

export function getAllAuthorSlugsEn() {
  return unique(getAllPostsEn().map((post) => slugify(post.author))).sort((a, b) => a.localeCompare(b));
}

export function resolveCategoryEn(slug: string): EnglishCategory {
  const label = categoryLabelsEn[slug as keyof typeof categoryLabelsEn];

  if (label) {
    return { slug, ...label };
  }

  const name = humanizeSlug(slug);

  return {
    slug,
    name,
    description: `Articles, guides, and analysis about ${name}.`
  };
}

export function getCategoryEn(slug: string) {
  const hasPosts = getPostsByCategoryEn(slug).length > 0;
  const hasLabel = slug in categoryLabelsEn;

  if (!hasPosts && !hasLabel) {
    return null;
  }

  return resolveCategoryEn(slug);
}

export function getAllCategorySlugsEn() {
  const postSlugs = unique(getAllPostsEn().map((post) => post.category));
  const labelSlugs = Object.keys(categoryLabelsEn);
  return unique([...labelSlugs, ...postSlugs]);
}

export function getCategoriesEn() {
  return getAllCategorySlugsEn().map((slug) => resolveCategoryEn(slug));
}

export function getNavCategoriesEn(limit = 5) {
  const posts = getAllPostsEn();

  if (!posts.length) {
    return getCategoriesEn().slice(0, limit);
  }

  const counts = new Map<string, number>();

  for (const post of posts) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([slug]) => resolveCategoryEn(slug));
}

export function getAuthorEn(slug: string): EnglishAuthor | null {
  const posts = getPostsByAuthorEn(slug);

  if (!posts.length) {
    return null;
  }

  const name = posts[0].author;
  const enriched = authorsEn.find((author) => author.slug === slug || author.name === name);

  return {
    slug,
    name,
    role: enriched?.role ?? "Contributor",
    bio: enriched?.bio ?? `${name} writes for AllTechnology.`,
    avatar: enriched?.avatar ?? "/icon.svg",
    sameAs: enriched?.sameAs ? [...enriched.sameAs] : []
  };
}

export const POSTS_PER_PAGE_EN = 9;
