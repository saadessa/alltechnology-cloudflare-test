export type TocItem = {
  id: string;
  text: string;
  depth: number;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  image: string;
  featured: boolean;
  trending: boolean;
  draft: boolean;
  englishSlug?: string;
  arabicSlug?: string;
  faqs: { question: string; answer: string }[];
  readingTime: string;
  toc: TocItem[];
  content: string;
};
