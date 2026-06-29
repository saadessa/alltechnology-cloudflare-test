import type { Metadata } from "next";
import { ArticleCard } from "@/components/article/article-card";
import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { SearchForm } from "@/components/search-form";
import { getAllPosts } from "@/lib/content";
import { defaultMetadata } from "@/lib/seo";

export const metadata: Metadata = defaultMetadata({
  title: "Search Technology Articles",
  description: "Search AI, programming, cybersecurity, software, future tech, and productivity articles.",
  alternates: { canonical: "/search" }
});

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const query = (params.q || "").trim().toLowerCase();
  const posts = getAllPosts();
  const results = query
    ? posts.filter((post) =>
        [post.title, post.description, post.category, post.author, ...post.tags].join(" ").toLowerCase().includes(query)
      )
    : posts.slice(0, 12);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Search", href: "/search" }]} />
      <h1 className="font-display text-4xl font-semibold">Search articles</h1>
      <p className="mt-3 max-w-2xl text-muted dark:text-slate-300">Find practical coverage across AI, programming, security, software, and productivity.</p>
      <div className="mt-8">
        <SearchForm defaultValue={params.q} />
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
