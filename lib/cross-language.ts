import type { Metadata } from "next";
import type { Post } from "@/types/content";
import { getPostBySlug } from "@/lib/content";
import { getPostBySlugEn } from "@/lib/content-en";
import { absoluteUrl } from "@/lib/site";
import { absoluteUrlEn, postUrlEn } from "@/lib/site-en";

export type ArticleTranslationPair = {
  arabic: Post;
  english: Post;
};

export function resolveArticleTranslationPair(
  post: Post,
  locale: "ar" | "en"
): ArticleTranslationPair | null {
  if (locale === "ar") {
    if (!post.englishSlug) return null;

    const english = getPostBySlugEn(post.englishSlug);
    if (!english) return null;
    if (english.arabicSlug !== post.slug) return null;

    const arabic = getPostBySlug(post.slug);
    if (!arabic) return null;

    return { arabic, english };
  }

  if (!post.arabicSlug) return null;

  const arabic = getPostBySlug(post.arabicSlug);
  if (!arabic) return null;
  if (arabic.englishSlug !== post.slug) return null;

  const english = getPostBySlugEn(post.slug);
  if (!english) return null;

  return { arabic, english };
}

export function getArticleAlternates(post: Post, locale: "ar" | "en"): Metadata["alternates"] {
  const pair = resolveArticleTranslationPair(post, locale);
  const canonicalPath = locale === "ar" ? `/posts/${post.slug}` : postUrlEn(post.slug);
  const canonical = locale === "ar" ? absoluteUrl(canonicalPath) : absoluteUrlEn(canonicalPath);

  if (!pair) {
    if (locale === "en") {
      return {
        canonical,
        languages: {
          en: canonical,
          "x-default": canonical
        }
      };
    }

    return { canonical };
  }

  const arUrl = absoluteUrl(`/posts/${pair.arabic.slug}`);
  const enUrl = absoluteUrlEn(postUrlEn(pair.english.slug));

  return {
    canonical,
    languages: {
      ar: arUrl,
      en: enUrl,
      "x-default": arUrl
    }
  };
}

export function getLanguageSwitch(
  post: Post,
  locale: "ar" | "en"
): { href: string; label: string; hrefLang: "ar" | "en" } | null {
  const pair = resolveArticleTranslationPair(post, locale);
  if (!pair) return null;

  if (locale === "ar") {
    return {
      href: postUrlEn(pair.english.slug),
      label: "English",
      hrefLang: "en"
    };
  }

  return {
    href: `/posts/${pair.arabic.slug}`,
    label: "العربية",
    hrefLang: "ar"
  };
}
