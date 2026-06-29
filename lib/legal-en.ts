export const legalPagesEn = {
  about: {
    title: "About Us",
    path: "/en/about",
    description:
      "AllTechnology is an independent global technology publication built for developers, AI professionals, and advanced users who need practical, trustworthy coverage.",
    sections: [
      [
        "Our mission",
        "AllTechnology helps technical professionals make better decisions about AI tools, software platforms, security practices, and emerging technology — with clear analysis written for builders, not buzzwords."
      ],
      [
        "What we cover",
        "Our editorial focus spans AI tools, AI agents, programming, cybersecurity, developer tools, cloud and DevOps, open source, software, productivity systems, and emerging technology. We publish for a global audience of engineers, founders, and technical leaders."
      ],
      [
        "Editorial standards",
        "We prioritize hands-on usefulness, technical accuracy, independent judgment, and transparency. Every guide is written to help you evaluate, adopt, and ship technology with confidence."
      ]
    ]
  },

  contact: {
    title: "Contact Us",
    path: "/en/contact",
    description:
      "Contact the AllTechnology editorial team for corrections, business inquiries, partnerships, feedback, or general questions.",
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
    path: "/en/privacy-policy",
    description:
      "Learn how AllTechnology collects, uses, protects, and manages visitor information, analytics data, cookies, and advertising technologies.",
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
        "AllTechnology may use analytics services and advertising partners, including Google AdSense, which may use cookies or similar technologies to personalize and measure advertisements."
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
    path: "/en/terms-and-conditions",
    description:
      "Read the terms governing use of AllTechnology, including acceptable use, intellectual property, disclaimers, and liability limitations.",
    sections: [
      [
        "Use of the website",
        "By accessing this website, you agree to use it lawfully and avoid activities that may damage, disrupt, abuse, or interfere with the platform or its services."
      ],
      [
        "Intellectual property",
        "Unless otherwise stated, articles, branding, website design, and original content published on AllTechnology are protected by applicable intellectual property laws."
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

  "cookie-policy": {
    title: "Cookie Policy",
    path: "/en/cookie-policy",
    description:
      "Learn how AllTechnology uses cookies and similar technologies for analytics, functionality, personalization, and advertising.",
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
  }
} as const;

export type LegalPageKeyEn = keyof typeof legalPagesEn;
