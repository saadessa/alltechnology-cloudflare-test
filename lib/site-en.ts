export const siteConfigEn = {
  name: "AllTechnology",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://alltechnology.org",
  description:
    "AllTechnology is an independent technology publication for developers, AI professionals, and advanced users — covering AI tools, agents, programming, cybersecurity, cloud, DevOps, and emerging software.",
  email: process.env.CONTACT_EMAIL || "saadhivcenter@gmail.com",
  locale: "en",
  twitter: "@googleboos",
  social: {
    x: "https://x.com/googleboos",
    linkedin: "https://www.linkedin.com/in/saad-elfallah-97bb6940/",
    github: "https://github.com/saadessa",
    youtube: "https://www.youtube.com/@saadelfallah"
  },
  defaultImage: "/og"
};

/** Optional display labels for known category slugs. Content categories are driven by MDX frontmatter. */
export const categoryLabelsEn = {
  "ai-tools": {
    name: "AI Tools",
    description:
      "Hands-on reviews, comparisons, and workflows for the AI tools shaping how teams build, automate, and ship faster."
  },
  "ai-agents": {
    name: "AI Agents",
    description:
      "Autonomous agents, orchestration patterns, tool use, and production-ready systems for AI-native applications."
  },
  programming: {
    name: "Programming",
    description:
      "Modern languages, frameworks, architecture, and engineering practices for professional software development."
  },
  cybersecurity: {
    name: "Cybersecurity",
    description:
      "Threat analysis, secure engineering, privacy, incident response, and defensive strategies for technical teams."
  },
  "developer-tools": {
    name: "Developer Tools",
    description:
      "IDEs, CLIs, testing stacks, observability, and the toolchain decisions that improve developer velocity."
  },
  "cloud-devops": {
    name: "Cloud & DevOps",
    description:
      "Cloud infrastructure, CI/CD, containers, platform engineering, and reliable deployment at scale."
  },
  "open-source": {
    name: "Open Source",
    description:
      "Open-source projects, community governance, licensing, and the libraries powering modern software."
  },
  software: {
    name: "Software",
    description:
      "In-depth software analysis, platform comparisons, SaaS evaluations, and product decisions for technical buyers."
  },
  productivity: {
    name: "Productivity",
    description:
      "Workflow design, automation, knowledge systems, and tools that help technical teams work smarter."
  },
  "emerging-technology": {
    name: "Emerging Technology",
    description:
      "Early signals in robotics, spatial computing, edge AI, and the next wave of computing platforms."
  }
} as const;

/** Optional author profile enrichment when an author appears in English MDX content. */
export const authorsEn = [
  {
    slug: "saad-elfallah",
    name: "Saad Elfallah",
    role: "Founder & Tech Author",
    bio: "Saad writes about AI systems, software engineering, cybersecurity, and the tools shaping modern product teams.",
    avatar: "/images/authors/saad-elfallah.webp",
    sameAs: [
      "https://www.linkedin.com/in/saad-elfallah-97bb6940/",
      "https://x.com/googleboos",
      "https://github.com/saadessa",
      "https://www.youtube.com/@saadelfallah"
    ]
  },
  {
    slug: "maya-chen",
    name: "Maya Chen",
    role: "AI Systems Editor",
    bio: "Maya covers applied AI, automation, and responsible product strategy for technical teams.",
    avatar: "/images/authors/maya-chen.svg",
    sameAs: ["https://www.linkedin.com/in/example", "https://x.com/example"]
  },
  {
    slug: "jordan-reed",
    name: "Jordan Reed",
    role: "Security and Platform Analyst",
    bio: "Jordan writes about cybersecurity, infrastructure, and practical engineering risk management.",
    avatar: "/images/authors/jordan-reed.svg",
    sameAs: ["https://www.linkedin.com/in/example", "https://x.com/example"]
  },
  {
    slug: "elena-patel",
    name: "Elena Patel",
    role: "Developer Experience Writer",
    bio: "Elena focuses on programming tutorials, software architecture, and productivity systems.",
    avatar: "/images/authors/elena-patel.svg",
    sameAs: ["https://www.linkedin.com/in/example", "https://x.com/example"]
  }
] as const;

export function absoluteUrlEn(path = "") {
  return new URL(path, siteConfigEn.url).toString();
}

export function postUrlEn(slug: string) {
  return `/en/posts/${slug}`;
}

export function categoryUrlEn(slug: string) {
  return `/en/category/${slug}`;
}

export function tagUrlEn(slug: string) {
  return `/en/tag/${slug}`;
}

export function authorUrlEn(slug: string) {
  return `/en/author/${slug}`;
}
