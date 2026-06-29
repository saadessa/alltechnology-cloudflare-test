import type { MetadataRoute } from "next";
import {
  getAllAuthorSlugsEn,
  getAllCategorySlugsEn,
  getAllPostsEn,
  getAllTagsEn
} from "@/lib/content-en";
import { getAllPosts, getAllTags } from "@/lib/content";
import { siteConfigEn } from "@/lib/site-en";
import { categories, siteConfig } from "@/lib/site";
import { slugify } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact", "/privacy-policy", "/terms-and-conditions", "/disclaimer", "/editorial-policy", "/cookie-policy", "/dmca-policy", "/search"];
  const englishStaticRoutes = [
    "/en",
    "/en/about",
    "/en/contact",
    "/en/privacy-policy",
    "/en/terms-and-conditions",
    "/en/cookie-policy"
  ];
  const posts = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/posts/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));
  const categoryRoutes = categories.map((category) => ({
    url: `${siteConfig.url}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8
  }));
  const tagRoutes = getAllTags().map((tag) => ({
    url: `${siteConfig.url}/tag/${slugify(tag)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6
  }));

  const englishPosts = getAllPostsEn().map((post) => ({
    url: `${siteConfigEn.url}/en/posts/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  const englishCategoryRoutes = getAllCategorySlugsEn().map((slug) => ({
    url: `${siteConfigEn.url}/en/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));

  const englishTagRoutes = getAllTagsEn().map((tag) => ({
    url: `${siteConfigEn.url}/en/tag/${slugify(tag)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6
  }));

  const englishAuthorRoutes = getAllAuthorSlugsEn().map((slug) => ({
    url: `${siteConfigEn.url}/en/author/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7
    })),
    ...englishStaticRoutes.map((route) => ({
      url: `${siteConfigEn.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "/en" ? 0.9 : 0.7
    })),
    ...englishCategoryRoutes,
    ...englishPosts,
    ...englishTagRoutes,
    ...englishAuthorRoutes,
    ...posts,
    ...categoryRoutes,
    ...tagRoutes
  ];
}
