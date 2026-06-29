export const legalPages = {
  about: {
    title: "About Us",
    path: "/about",
    description:
      "Learn about AllTechnology Insight, our editorial mission, technology coverage, and commitment to practical, trustworthy digital publishing.",
    sections: [
      [
        "Our mission",
        "AllTechnology Insight delivers practical, modern, and trustworthy technology content designed to help readers understand artificial intelligence, cybersecurity, digital productivity, software platforms, and emerging technologies."
      ],
      [
        "What we cover",
        "We publish high-quality articles focused on AI tools, automation, creator workflows, software tutorials, cybersecurity practices, productivity systems, and future technology trends relevant to modern digital professionals."
      ],
      [
        "Editorial standards",
        "Our editorial process prioritizes usefulness, clarity, factual accuracy, independent analysis, and reader-first publishing principles. We aim to create content that is practical, reliable, and easy to understand."
      ]
    ]
  },

  contact: {
    title: "Contact Us",
    path: "/contact",
    description:
      "Contact the AllTechnology Insight editorial team for corrections, business inquiries, partnerships, feedback, or general questions.",
    sections: [
      [
        "Editorial contact",
        "For corrections, article feedback, editorial questions, or general communication, contact us at contact@alltechnology.org."
      ],
      [
        "Business inquiries",
        "For sponsorships, partnerships, collaborations, or advertising discussions, please include your organization details and project requirements in your message."
      ],
      [
        "Response time",
        "We aim to respond to important editorial and business inquiries within a reasonable timeframe."
      ]
    ]
  },

  "privacy-policy": {
    title: "Privacy Policy",
    path: "/privacy-policy",
    description:
      "Learn how AllTechnology Insight collects, uses, protects, and manages visitor information, analytics data, cookies, and advertising technologies.",
    sections: [
      [
        "Information we collect",
        "We may collect limited information voluntarily provided by visitors, such as email addresses submitted through contact forms or newsletter subscriptions, along with technical information such as browser type, device information, pages visited, and anonymous analytics data."
      ],
      [
        "How we use information",
        "Collected information may be used to improve website functionality, enhance user experience, respond to inquiries, measure content performance, maintain website security, and deliver newsletters or updates where applicable."
      ],
      [
        "Advertising and analytics",
        "AllTechnology Insight may use analytics services and advertising partners, including Google AdSense, which may use cookies or similar technologies to personalize and measure advertisements."
      ],
      [
        "Cookies",
        "Cookies may be used to improve browsing experience, remember preferences, analyze website traffic, and support advertising functionality."
      ],
      [
        "Your rights",
        "Visitors may disable cookies through browser settings and may request removal of voluntarily submitted personal information by contacting us directly."
      ]
    ]
  },

  "terms-and-conditions": {
    title: "Terms and Conditions",
    path: "/terms-and-conditions",
    description:
      "Read the terms governing use of AllTechnology Insight, including acceptable use, intellectual property, disclaimers, and liability limitations.",
    sections: [
      [
        "Use of the website",
        "By accessing this website, you agree to use it lawfully and avoid activities that may damage, disrupt, abuse, or interfere with the platform or its services."
      ],
      [
        "Intellectual property",
        "Unless otherwise stated, articles, branding, website design, and original content published on AllTechnology Insight are protected by applicable intellectual property laws."
      ],
      [
        "No professional advice",
        "Content published on this website is provided for informational and educational purposes only and should not be considered professional legal, financial, cybersecurity, or technical advice."
      ],
      [
        "Changes to terms",
        "We may update these terms periodically as the website evolves. Continued use of the website after updates indicates acceptance of the revised terms."
      ]
    ]
  },

  disclaimer: {
    title: "Disclaimer",
    path: "/disclaimer",
    description:
      "Understand the editorial, informational, affiliate, advertising, and technical limitations of content published on AllTechnology Insight.",
    sections: [
      [
        "Content accuracy",
        "We work to keep content accurate, practical, and updated; however, technology changes rapidly and readers should independently verify important information before making decisions."
      ],
      [
        "Editorial independence",
        "Opinions and analysis published on AllTechnology Insight reflect editorial judgment based on available information at the time of publication."
      ],
      [
        "External links",
        "This website may include links to third-party websites for reference or convenience. We are not responsible for the content, availability, or privacy practices of external websites."
      ],
      [
        "Advertising disclosure",
        "Advertising placements or sponsored content do not influence independent editorial opinions unless clearly identified as sponsored material."
      ]
    ]
  },

  "editorial-policy": {
    title: "Editorial Policy",
    path: "/editorial-policy",
    description:
      "Review the editorial standards, sourcing principles, corrections process, and publishing guidelines followed by AllTechnology Insight.",
    sections: [
      [
        "Editorial principles",
        "We prioritize practical value, clarity, independent analysis, factual accuracy, and reader trust in all published content."
      ],
      [
        "Sources and research",
        "Whenever possible, content is based on official documentation, reputable research, hands-on testing, credible technical resources, and clearly attributed sources."
      ],
      [
        "Corrections policy",
        "If a material error is identified, we aim to correct the issue promptly and update the article where appropriate."
      ],
      [
        "Sponsored content",
        "Sponsored or promotional content is clearly disclosed and separated from independent editorial coverage."
      ]
    ]
  },

  "cookie-policy": {
    title: "Cookie Policy",
    path: "/cookie-policy",
    description:
      "Learn how AllTechnology Insight uses cookies and similar technologies for analytics, functionality, personalization, and advertising.",
    sections: [
      [
        "What cookies are",
        "Cookies are small data files stored on your device that help websites improve functionality, remember preferences, analyze usage, and support advertising systems."
      ],
      [
        "Types of cookies",
        "We may use essential cookies, analytics cookies, advertising cookies, and preference-related cookies to improve website performance and user experience."
      ],
      [
        "Managing cookies",
        "Most web browsers allow visitors to block, limit, or delete cookies through browser settings."
      ],
      [
        "Third-party cookies",
        "Advertising and analytics providers may place cookies according to their own technologies and privacy practices."
      ]
    ]
  },

  "dmca-policy": {
    title: "DMCA Policy",
    path: "/dmca-policy",
    description:
      "Submit copyright notices, counter-notices, and intellectual property concerns regarding content published on AllTechnology Insight.",
    sections: [
      [
        "Copyright complaints",
        "If you believe copyrighted material appears on this website without authorization, please provide a detailed copyright notice including identification of the copyrighted work and the allegedly infringing material."
      ],
      [
        "Submitting notices",
        "DMCA notices and intellectual property concerns may be submitted to contact@alltechnology.org."
      ],
      [
        "Counter-notices",
        "If you believe content was removed in error, you may submit a valid counter-notice containing the required legal statements and contact information."
      ],
      [
        "Repeat infringement",
        "We reserve the right to restrict access or remove content associated with repeated intellectual property violations."
      ]
    ]
  }
} as const;

export type LegalPageKey = keyof typeof legalPages;