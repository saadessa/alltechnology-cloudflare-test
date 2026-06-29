import type { Metadata } from "next";
import type { Post } from "@/types/content";
import { getArticleAlternates } from "@/lib/cross-language";
import type { EnglishAuthor, EnglishCategory } from "@/lib/content-en";
import { absoluteUrlEn, authorUrlEn, categoryUrlEn, postUrlEn, siteConfigEn, tagUrlEn } from "@/lib/site-en";

const arabicPathMap: Record<string, string> = {
  "/en": "/",
  "/en/about": "/about",
  "/en/contact": "/contact",
  "/en/privacy-policy": "/privacy-policy",
  "/en/terms-and-conditions": "/terms-and-conditions",
  "/en/cookie-policy": "/cookie-policy"
};

function englishOnlyAlternates(path: string): Metadata["alternates"] {
  const enUrl = absoluteUrlEn(path);

  return {
    canonical: enUrl,
    languages: {
      en: enUrl,
      "x-default": enUrl
    }
  };
}

export function hreflangAlternates(enPath: string): Metadata["alternates"] {
  const arPath = arabicPathMap[enPath];

  if (!arPath) {
    return englishOnlyAlternates(enPath);
  }

  const enUrl = absoluteUrlEn(enPath);
  const arUrl = absoluteUrlEn(arPath);

  return {
    canonical: enUrl,
    languages: {
      en: enUrl,
      ar: arUrl,
      "x-default": arUrl
    }
  };
}

const baseRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1
  }
};

export function defaultMetadataEn(overrides: Metadata = {}): Metadata {
  return {
    metadataBase: new URL(siteConfigEn.url),

    title: {
      default:
        "AllTechnology | AI Tools, Programming, Cybersecurity & Developer Technology",
      template: `%s | AllTechnology`
    },

    description:
      "Independent technology coverage for developers, AI professionals, and advanced users. Deep guides on AI tools, agents, programming, cybersecurity, cloud, DevOps, and emerging software.",

    keywords: [
      "AllTechnology",
      "AI tools",
      "AI agents",
      "programming",
      "cybersecurity",
      "developer tools",
      "cloud computing",
      "DevOps",
      "open source",
      "software reviews",
      "productivity tools",
      "emerging technology",
      "machine learning",
      "software engineering",
      "tech news"
    ],

    applicationName: "AllTechnology",

    authors: [
      {
        name: "Saad Elfallah",
        url: "https://alltechnology.org/en"
      }
    ],

    creator: "Saad Elfallah",
    publisher: "AllTechnology",
    category: "technology",
    alternates: hreflangAlternates("/en"),
    robots: baseRobots,

    openGraph: {
      type: "website",
      locale: "en_US",
      url: absoluteUrlEn("/en"),
      siteName: "AllTechnology",
      title:
        "AllTechnology | AI Tools, Programming, Cybersecurity & Developer Technology",
      description:
        "Global technology coverage for developers and AI professionals — AI tools, agents, secure engineering, cloud infrastructure, and software you can trust.",
      images: [
        {
          url: absoluteUrlEn("/og"),
          width: 1200,
          height: 630,
          alt: "AllTechnology"
        }
      ]
    },

    twitter: {
      card: "summary_large_image",
      site: siteConfigEn.twitter,
      creator: siteConfigEn.twitter,
      title:
        "AllTechnology | AI Tools, Programming, Cybersecurity & Developer Technology",
      description:
        "Independent guides and analysis for developers, AI builders, and security engineers worldwide.",
      images: [absoluteUrlEn("/og")]
    },

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png"
    },

    ...overrides
  };
}

export function pageMetadataEn({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: hreflangAlternates(path),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: absoluteUrlEn(path),
      siteName: "AllTechnology",
      title,
      description,
      images: [
        {
          url: absoluteUrlEn("/og"),
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrlEn("/og")]
    },
    robots: baseRobots
  };
}

export function categoryMetadataEn(category: EnglishCategory): Metadata {
  const path = categoryUrlEn(category.slug);

  return pageMetadataEn({
    title: `${category.name} Articles`,
    description: category.description,
    path
  });
}

export function tagMetadataEn(tag: string, slug: string): Metadata {
  return pageMetadataEn({
    title: `${tag} Articles`,
    description: `Latest ${tag} articles, tutorials, and practical technology insights from AllTechnology.`,
    path: tagUrlEn(slug)
  });
}

export function authorMetadataEn(author: EnglishAuthor): Metadata {
  return pageMetadataEn({
    title: `${author.name} - ${author.role}`,
    description: author.bio,
    path: authorUrlEn(author.slug)
  });
}

export function postMetadataEn(post: Post): Metadata {
  const path = postUrlEn(post.slug);
  const url = absoluteUrlEn(path);
  const image = absoluteUrlEn(post.image);

  return {
    title: post.title,
    description: post.description,
    alternates: getArticleAlternates(post, "en"),
    keywords: [
      ...post.tags,
      post.category,
      "technology",
      "AI tools",
      "programming",
      "cybersecurity",
      "developer tools"
    ],
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: "AllTechnology",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image]
    },
    robots: baseRobots
  };
}
