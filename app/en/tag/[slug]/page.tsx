import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleCardEn } from "@/components/en/article-card";
import { BreadcrumbsEn } from "@/components/en/breadcrumbs";
import { EmptyStateEn } from "@/components/en/empty-state";
import { Pagination } from "@/components/article/pagination";
import {
  getAllTagsEn,
  getPostsByTagEn,
  POSTS_PER_PAGE_EN
} from "@/lib/content-en";
import { tagMetadataEn } from "@/lib/seo-en";
import { tagUrlEn } from "@/lib/site-en";
import { slugify } from "@/lib/utils";

export const revalidate = 3600;

export function generateStaticParams() {
  return getAllTagsEn().map((tag) => ({ slug: slugify(tag) }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tag = getAllTagsEn().find((item) => slugify(item) === slug);
  if (!tag) return {};

  return tagMetadataEn(tag, slug);
}

export default async function EnglishTagPage({
  params,
  searchParams
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const tag = getAllTagsEn().find((item) => slugify(item) === slug);
  if (!tag) notFound();

  const page = Math.max(Number(query.page || 1), 1);
  const posts = getPostsByTagEn(slug);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE_EN);
  const pagePosts = posts.slice((page - 1) * POSTS_PER_PAGE_EN, page * POSTS_PER_PAGE_EN);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <BreadcrumbsEn items={[{ label: tag, href: tagUrlEn(slug) }]} />
      <h1 className="font-display text-4xl font-semibold">#{tag}</h1>
      <p className="mt-3 max-w-2xl text-muted dark:text-slate-300">
        All articles tagged with {tag}, ordered by newest first.
      </p>

      {pagePosts.length ? (
        <>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pagePosts.map((post) => (
              <ArticleCardEn key={post.slug} post={post} />
            ))}
          </div>
          <Pagination page={page} totalPages={totalPages} basePath={tagUrlEn(slug)} />
        </>
      ) : (
        <EmptyStateEn
          title="No articles yet"
          description={`We have not published any English articles tagged with ${tag} yet.`}
        />
      )}
    </section>
  );
}
