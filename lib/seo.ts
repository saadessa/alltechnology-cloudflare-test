import type { Metadata } from "next";
import type { Post } from "@/types/content";
import { getArticleAlternates } from "@/lib/cross-language";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function defaultMetadata(
  overrides: Metadata = {}
): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),

    title: {
      default:
        "التقنية الشاملة | الذكاء الاصطناعي والبرمجة والأمن السيبراني والتقنية الحديثة",
      template: `%s | التقنية الشاملة`
    },

    description:
      "التقنية الشاملة منصة عربية متخصصة في الذكاء الاصطناعي والبرمجة والأمن السيبراني والتقنية الحديثة، تقدم شروحات تقنية وأدلة عملية ومتابعة لأحدث الخدمات والمنصات الرقمية.",

    keywords: [
      "التقنية الشاملة",
      "الذكاء الاصطناعي",
      "البرمجة",
      "الأمن السيبراني",
      "التقنية",
      "الشروحات التقنية",
      "تطوير الويب",
      "الخدمات الإلكترونية",
      "المنصات الرقمية",
      "أدوات الذكاء الاصطناعي",
      "الأخبار التقنية",
      "تقنيات المستقبل",
      "أنظمة الحجز الإلكترونية",
      "الخدمات الحكومية الرقمية"
    ],

    applicationName: "التقنية الشاملة",

    authors: [
      {
        name: "سعد الفلاح",
        url: "https://alltechnology.org"
      }
    ],

    creator: "سعد الفلاح",

    publisher: "التقنية الشاملة",

    category: "تقنية",

    alternates: {
      canonical: "https://alltechnology.org"
    },

    robots: {
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
    },

    openGraph: {
      type: "website",
      locale: "ar_LY",
      url: siteConfig.url,
      siteName: "التقنية الشاملة",

      title:
        "التقنية الشاملة | الذكاء الاصطناعي والبرمجة والأمن السيبراني والتقنية الحديثة",

      description:
        "منصة عربية متخصصة في التقنية والذكاء الاصطناعي والبرمجة والأمن السيبراني والخدمات الرقمية.",

      images: [
        {
          url: absoluteUrl("/og"),
          width: 1200,
          height: 630,
          alt: "التقنية الشاملة"
        }
      ]
    },

    twitter: {
      card: "summary_large_image",

      site: siteConfig.twitter,

      creator: siteConfig.twitter,

      title:
        "التقنية الشاملة | الذكاء الاصطناعي والبرمجة والأمن السيبراني",

      description:
        "شروحات تقنية وأدلة عملية ومنصات وخدمات رقمية للمستخدم العربي.",

      images: [absoluteUrl("/og")]
    },

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png"
    },

    ...overrides
  };
}

export function postMetadata(post: Post): Metadata {
  const url = absoluteUrl(`/posts/${post.slug}`);
  const image = absoluteUrl(post.image);

  return {
    title: post.title,

    description: post.description,

    alternates: getArticleAlternates(post, "ar"),

    keywords: [
      ...post.tags,
      post.category,
      "التقنية",
      "الذكاء الاصطناعي",
      "الأمن السيبراني",
      "البرمجة"
    ],

    openGraph: {
      type: "article",

      url,

      title: post.title,

      description: post.description,

      siteName: "التقنية الشاملة",

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

    robots: {
      index: true,
      follow: true
    }
  };
}
