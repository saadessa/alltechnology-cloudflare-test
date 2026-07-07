export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "All Technology",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://alltechnology.org",
  description:
    "موقع تقني عربي يقدم شروحات احترافية وتحليلات تقنية حول الذكاء الاصطناعي، البرمجة، الأمن السيبراني، البرمجيات، وأحدث تقنيات المستقبل.",
  email: process.env.CONTACT_EMAIL || "saadhivcenter@gmail.com",
  locale: "ar",
  twitter: "@googleboos",
  social: {
    x: "https://x.com/googleboos",
    linkedin: "https://www.linkedin.com/in/saad-elfallah-97bb6940/",
    github: "https://github.com/saadessa",
    youtube: "https://www.youtube.com/@saadelfallah"
  },
  defaultImage: "/og"
};

export const categories = [
  {
    slug: "artificial-intelligence",
    name: "الذكاء الاصطناعي",
    description:
      "تحليلات الذكاء الاصطناعي، نماذج اللغة، الأتمتة، الوكلاء الذكيون، وأحدث تطبيقات AI العملية."
  },
  {
    slug: "programming",
    name: "البرمجة",
    description:
      "شروحات البرمجة الحديثة، تطوير الويب، هندسة البرمجيات، وأفضل ممارسات كتابة الكود."
  },
  
  {
    slug: "cybersecurity",
    name: "الأمن السيبراني",
    description:
      "الأمن الرقمي، حماية الأنظمة، الخصوصية، اكتشاف الثغرات، وتقنيات الدفاع السيبراني."
  },
  {
    slug: "software",
    name: "البرمجيات",
    description:
      "برامج الحاسوب، أدوات المطورين، أنظمة SaaS، الخدمات السحابية، والبنية التحتية الرقمية."
  },
  {
    slug: "technology-tutorials",
    name: "شروحات تقنية",
    description:
      "أدلة تقنية عملية خطوة بخطوة للمطورين وصناع المحتوى والمهتمين بالتكنولوجيا."
  },
  {
    slug: "future-tech",
    name: "تقنيات المستقبل",
    description:
      "الروبوتات، الحوسبة المكانية، الأجهزة الذكية، التقنيات الناشئة، ومستقبل التكنولوجيا."
  },
  {
    slug: "productivity-tools",
    name: "الإنتاجية والأدوات",
    description:
      "أدوات العمل، تطبيقات الذكاء الاصطناعي، أنظمة الأتمتة، وتحسين الإنتاجية الرقمية."
  },
  {
    slug: "universities-and-colleges",
    name: "الجامعات والكليات",
    description:
      "أخبار الجامعات، نتائج الامتحانات، القبول والتسجيل، الكليات، الأدلة الدراسية، والخدمات التعليمية."
  },
  {
  slug: "exam-results",
  name: "نتائج الامتحانات",
  description:
    "متابعة نتائج الامتحانات في ليبيا، الشهادة الإعدادية، الشهادة الثانوية، الجامعات، الكليات، القبول والتسجيل، وروابط الاستعلام الرسمية."
},
  {
    slug: "platforms-and-services",
    name: "منصات وخدمات",
    description:
      "شروحات المنصات الرقمية، الخدمات الإلكترونية، مواقع الذكاء الاصطناعي، الأدوات السحابية، والخدمات التقنية الحديثة."
  }
] as const;

export const authors = [
  {
    slug: "saad-elfallah",
    name: "Saad Elfallah",
    role: "Founder & Tech Author",
    bio: "كاتب ومحرر تقني متخصص في الذكاء الاصطناعي، البرمجة، الأمن السيبراني، والتقنيات الحديثة.",
    avatar: "/images/authors/saad-elfallah.webp",
    sameAs: [
      "https://www.linkedin.com/in/saad-elfallah-97bb6940/",
      "https://x.com/googleboos",
      "https://github.com/saadessa",
      "https://www.youtube.com/@saadelfallah"
    ]
  },
   {
    slug: "technical-expert",
    name: "technical-expert",
    role: "Founder & Tech Author",
    bio: "كاتب ومحرر تقني متخصص في الذكاء الاصطناعي، البرمجة، الأمن السيبراني، والتقنيات الحديثة.",
    avatar: "/images/authors/saad-elfallah.webp",
    sameAs: [
      "https://www.linkedin.com/in/saad-elfallah-97bb6940/",
      "https://x.com/googleboos",
      "https://github.com/saadessa",
      "https://www.youtube.com/@saadelfallah"
    ]
  },
  {
    slug: "content-expert",
    name: "content-expert",
    role: "Founder & Tech Author",
    bio: "كاتب ومحرر تقني متخصص في الذكاء الاصطناعي، البرمجة، الأمن السيبراني، والتقنيات الحديثة.",
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
    sameAs: [
      "https://www.linkedin.com/in/example",
      "https://x.com/example"
    ]
  },
  {
    slug: "jordan-reed",
    name: "Jordan Reed",
    role: "Security and Platform Analyst",
    bio: "Jordan writes about cybersecurity, infrastructure, and practical engineering risk management.",
    avatar: "/images/authors/jordan-reed.svg",
    sameAs: [
      "https://www.linkedin.com/in/example",
      "https://x.com/example"
    ]
  },
  {
    slug: "elena-patel",
    name: "Elena Patel",
    role: "Developer Experience Writer",
    bio: "Elena focuses on programming tutorials, software architecture, and productivity systems.",
    avatar: "/images/authors/elena-patel.svg",
    sameAs: [
      "https://www.linkedin.com/in/example",
      "https://x.com/example"
    ]
  }
] as const;

export function absoluteUrl(path = "") {
  return new URL(path, siteConfig.url).toString();
}
