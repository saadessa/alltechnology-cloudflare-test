import { Linkedin, Send, Twitter } from "lucide-react";

import { absoluteUrlEn } from "@/lib/site-en";

export function SocialShareEn({ title, path }: { title: string; path: string }) {
  const url = absoluteUrlEn(path);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-2" aria-label="Share article">
      <a
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line hover:border-brand hover:text-brand dark:border-slate-700"
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        aria-label="Share on X"
      >
        <Twitter className="h-4 w-4" />
      </a>
      <a
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line hover:border-brand hover:text-brand dark:border-slate-700"
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <a
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line hover:border-brand hover:text-brand dark:border-slate-700"
        href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
        aria-label="Share by email"
      >
        <Send className="h-4 w-4" />
      </a>
    </div>
  );
}
