import type { Post } from "@/types/content";
import { absoluteUrlEn, siteConfigEn } from "@/lib/site-en";

export function websiteSchemaEn() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfigEn.name,
    url: absoluteUrlEn("/en"),
    inLanguage: "en",
    description: siteConfigEn.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrlEn("/en")}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function organizationSchemaEn() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfigEn.name,
    url: absoluteUrlEn("/en"),
    logo: absoluteUrlEn("/icon.svg"),
    sameAs: Object.values(siteConfigEn.social),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial",
      email: siteConfigEn.email,
      availableLanguage: ["English"]
    }
  };
}

export function articleSchemaEn(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.description,
    image: [absoluteUrlEn(post.image)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: "en",
    mainEntityOfPage: absoluteUrlEn(`/en/posts/${post.slug}`),
    isAccessibleForFree: true,
    author: {
      "@type": "Person",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: siteConfigEn.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrlEn("/icon.svg")
      }
    }
  };
}

export function breadcrumbSchemaEn(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrlEn(item.url)
    }))
  };
}

export function faqSchemaEn(faqs: Post["faqs"]) {
  if (!faqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
