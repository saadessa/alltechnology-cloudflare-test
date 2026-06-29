import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleCardEn } from "@/components/en/article-card";
import { BreadcrumbsEn } from "@/components/en/breadcrumbs";
import { EmptyStateEn } from "@/components/en/empty-state";
import { Pagination } from "@/components/article/pagination";
import {
  getAllCategorySlugsEn,
  getCategoryEn,
  getPostsByCategoryEn,
  POSTS_PER_PAGE_EN
} from "@/lib/content-en";
import { categoryMetadataEn } from "@/lib/seo-en";
import { categoryUrlEn } from "@/lib/site-en";

export const revalidate = 3600;

export function generateStaticParams() {
  return getAllCategorySlugsEn().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryEn(slug);
  if (!category) return {};

  return categoryMetadataEn(category);
}

export default async function EnglishCategoryPage({
  params,
  searchParams
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const category = getCategoryEn(slug);
  if (!category) notFound();

  const page = Math.max(Number(query.page || 1), 1);
  const posts = getPostsByCategoryEn(slug);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE_EN);
  const pagePosts = posts.slice((page - 1) * POSTS_PER_PAGE_EN, page * POSTS_PER_PAGE_EN);
  const path = categoryUrlEn(category.slug);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <BreadcrumbsEn items={[{ label: category.name, href: path }]} />
      <h1 className="font-display text-4xl font-semibold">{category.name}</h1>
      <p className="mt-3 max-w-2xl text-muted dark:text-slate-300">{category.description}</p>

      {pagePosts.length ? (
        <>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pagePosts.map((post) => (
              <ArticleCardEn key={post.slug} post={post} />
            ))}
          </div>
          <Pagination page={page} totalPages={totalPages} basePath={path} />
        </>
      ) : (
        <EmptyStateEn
          title="No articles yet"
          description={`We are preparing English coverage for ${category.name}. Check back soon for guides, reviews, and analysis written for developers and technical professionals worldwide.`}
        />
      )}
    </section>
  );
}
