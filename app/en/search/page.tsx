import type { Metadata } from "next";

import { ArticleCardEn } from "@/components/en/article-card";
import { BreadcrumbsEn } from "@/components/en/breadcrumbs";
import { SearchFormEn } from "@/components/en/search-form";
import { getAllPostsEn } from "@/lib/content-en";
import { pageMetadataEn } from "@/lib/seo-en";

export const metadata: Metadata = pageMetadataEn({
  title: "Search Technology Articles",
  description:
    "Search English articles on AI tools, programming, cybersecurity, developer tools, and emerging technology from AllTechnology.",
  path: "/en/search"
});

export default async function EnglishSearchPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = (params.q || "").trim().toLowerCase();
  const posts = getAllPostsEn();
  const results = query
    ? posts.filter((post) =>
        [post.title, post.description, post.category, post.author, ...post.tags]
          .join(" ")
          .toLowerCase()
          .includes(query)
      )
    : posts.slice(0, 12);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <BreadcrumbsEn items={[{ label: "Search", href: "/en/search" }]} />
      <h1 className="font-display text-4xl font-semibold">Search articles</h1>
      <p className="mt-3 max-w-2xl text-muted dark:text-slate-300">
        Find practical English coverage across AI tools, programming, security, software, and
        productivity.
      </p>
      <div className="mt-8">
        <SearchFormEn defaultValue={params.q} />
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((post) => (
          <ArticleCardEn key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
