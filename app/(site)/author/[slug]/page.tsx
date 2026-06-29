import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article/article-card";
import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { getAllPosts, getAuthor, getPostsByAuthor } from "@/lib/content";
import { defaultMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { slugify } from "@/lib/utils";

export const revalidate = 3600;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: slugify(post.author) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};

  return defaultMetadata({
    title: `${author.name} - ${author.role}`,
    description: author.bio,
    alternates: { canonical: absoluteUrl(`/author/${author.slug}`) }
  });
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();

  const posts = getPostsByAuthor(slug);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: author.name, href: `/author/${author.slug}` }]} />
      <div className="flex flex-col gap-6 rounded-lg border border-line bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center">
        <Image src={author.avatar} alt="" width={96} height={96} className="h-24 w-24 rounded-full" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">{author.role}</p>
          <h1 className="mt-2 font-display text-4xl font-semibold">{author.name}</h1>
          <p className="mt-3 max-w-2xl text-muted dark:text-slate-300">{author.bio}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
