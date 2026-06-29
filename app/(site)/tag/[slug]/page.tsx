import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article/article-card";
import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { Pagination } from "@/components/article/pagination";
import { getAllTags, getPostsByTag, POSTS_PER_PAGE } from "@/lib/content";
import { defaultMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { slugify } from "@/lib/utils";

export const revalidate = 3600;

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ slug: slugify(tag) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tag = getAllTags().find((item) => slugify(item) === slug);
  if (!tag) return {};

  return defaultMetadata({
    title: `${tag} Articles`,
    description: `Latest ${tag} articles, analysis, tutorials, and practical technology insights.`,
    alternates: { canonical: absoluteUrl(`/tag/${slug}`) }
  });
}

export default async function TagPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ page?: string }> }) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const tag = getAllTags().find((item) => slugify(item) === slug);
  if (!tag) notFound();

  const page = Math.max(Number(query.page || 1), 1);
  const posts = getPostsByTag(slug);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const pagePosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: tag, href: `/tag/${slug}` }]} />
      <h1 className="font-display text-4xl font-semibold">#{tag}</h1>
      <p className="mt-3 max-w-2xl text-muted dark:text-slate-300">All articles tagged with {tag}, ordered by newest first.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pagePosts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} basePath={`/tag/${slug}`} />
    </section>
  );
}
