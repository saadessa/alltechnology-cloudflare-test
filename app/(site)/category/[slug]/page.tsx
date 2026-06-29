import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article/article-card";
import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { Pagination } from "@/components/article/pagination";
import { getCategory, getPostsByCategory, POSTS_PER_PAGE } from "@/lib/content";
import { defaultMetadata } from "@/lib/seo";
import { absoluteUrl, categories } from "@/lib/site";

export const revalidate = 3600;

// ✅ FIX: اقرأ slugs مباشرة من site.ts بدلاً من إعادة حسابها من post.category
export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return defaultMetadata({
    title: `${category.name} Articles`,
    description: category.description,
    alternates: { canonical: absoluteUrl(`/category/${category.slug}`) },
    openGraph: { title: `${category.name} Articles`, description: category.description, url: absoluteUrl(`/category/${category.slug}`) }
  });
}

export default async function CategoryPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ page?: string }> }) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const category = getCategory(slug);
  if (!category) notFound();

  const page = Math.max(Number(query.page || 1), 1);
  const posts = getPostsByCategory(slug);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const pagePosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: category.name, href: `/category/${category.slug}` }]} />
      <h1 className="font-display text-4xl font-semibold">{category.name}</h1>
      <p className="mt-3 max-w-2xl text-muted dark:text-slate-300">{category.description}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pagePosts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} basePath={`/category/${category.slug}`} />
    </section>
  );
}
