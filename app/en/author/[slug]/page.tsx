import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ArticleCardEn } from "@/components/en/article-card";
import { BreadcrumbsEn } from "@/components/en/breadcrumbs";
import { EmptyStateEn } from "@/components/en/empty-state";
import { getAllAuthorSlugsEn, getAuthorEn, getPostsByAuthorEn } from "@/lib/content-en";
import { authorMetadataEn } from "@/lib/seo-en";
import { authorUrlEn } from "@/lib/site-en";

export const revalidate = 3600;

export function generateStaticParams() {
  return getAllAuthorSlugsEn().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorEn(slug);
  if (!author) return {};

  return authorMetadataEn(author);
}

export default async function EnglishAuthorPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthorEn(slug);
  if (!author) notFound();

  const posts = getPostsByAuthorEn(slug);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <BreadcrumbsEn items={[{ label: author.name, href: authorUrlEn(author.slug) }]} />
      <div className="flex flex-col gap-6 rounded-lg border border-line bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center">
        <Image src={author.avatar} alt="" width={96} height={96} className="h-24 w-24 rounded-full" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">{author.role}</p>
          <h1 className="mt-2 font-display text-4xl font-semibold">{author.name}</h1>
          <p className="mt-3 max-w-2xl text-muted dark:text-slate-300">{author.bio}</p>
        </div>
      </div>

      {posts.length ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCardEn key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <EmptyStateEn
          title="No articles yet"
          description={`${author.name} has not published any English articles on AllTechnology yet.`}
        />
      )}
    </section>
  );
}
