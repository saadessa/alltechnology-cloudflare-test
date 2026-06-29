import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { CheckCircle2 } from "lucide-react";

import { AdSlot } from "@/components/ads/ad-slot";
import { ArticleCardEn } from "@/components/en/article-card";
import { AuthorBoxEn } from "@/components/en/author-box";
import { BreadcrumbsEn } from "@/components/en/breadcrumbs";
import { mdxComponentsEn } from "@/components/en/mdx-components";
import { SocialShareEn } from "@/components/en/social-share";
import { ReadingProgress } from "@/components/article/reading-progress";
import { TableOfContents } from "@/components/article/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { ArticleLanguageSwitch } from "@/components/i18n/article-language-switch";
import {
  getAllPostsEn,
  getCategoryEn,
  getPostBySlugEn,
  getRelatedPostsEn
} from "@/lib/content-en";
import { getLanguageSwitch } from "@/lib/cross-language";
import { articleSchemaEn, breadcrumbSchemaEn, faqSchemaEn } from "@/lib/schema-en";
import { postMetadataEn } from "@/lib/seo-en";
import { authorUrlEn, categoryUrlEn, postUrlEn } from "@/lib/site-en";
import { formatDate, slugify } from "@/lib/utils";

export const revalidate = 3600;

export function generateStaticParams() {
  return getAllPostsEn().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlugEn(slug);
  if (!post) return {};
  return postMetadataEn(post);
}

export default async function EnglishArticlePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlugEn(slug);
  if (!post) notFound();

  const category = getCategoryEn(post.category);
  const categoryName = category?.name ?? post.category;
  const categoryPath = categoryUrlEn(post.category);

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponentsEn,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: "github-dark"
            }
          ]
        ]
      }
    }
  });

  const related = getRelatedPostsEn(post);
  const languageSwitch = getLanguageSwitch(post, "en");

  return (
    <>
      <ReadingProgress />
      <JsonLd data={articleSchemaEn(post)} />
      <JsonLd
        data={breadcrumbSchemaEn([
          { name: "Home", url: "/en" },
          { name: categoryName, url: categoryPath },
          { name: post.title, url: postUrlEn(post.slug) }
        ])}
      />
      <JsonLd data={faqSchemaEn(post.faqs)} />
      <article className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <BreadcrumbsEn
          items={[
            { label: categoryName, href: categoryPath },
            { label: post.title, href: postUrlEn(post.slug) }
          ]}
        />
        <header className="max-w-4xl">
          <Link href={categoryPath} className="text-sm font-semibold uppercase tracking-wide text-brand">
            {categoryName}
          </Link>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-xl leading-8 text-muted dark:text-slate-300">{post.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted dark:text-slate-400">
            <Link
              href={authorUrlEn(slugify(post.author))}
              className="font-semibold text-ink hover:text-brand dark:text-white"
            >
              {post.author}
            </Link>
            <span>Published {formatDate(post.publishedAt)}</span>
            <span>Updated {formatDate(post.updatedAt)}</span>
            <span>{post.readingTime}</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="h-4 w-4" /> Editorially reviewed
            </span>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {languageSwitch ? (
              <ArticleLanguageSwitch
                href={languageSwitch.href}
                label={languageSwitch.label}
                hrefLang={languageSwitch.hrefLang}
              />
            ) : null}
            <SocialShareEn title={post.title} path={postUrlEn(post.slug)} />
          </div>
        </header>

        <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-lg bg-slate-100">
          <Image src={post.image} alt="" fill priority sizes="100vw" className="object-cover" />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            <div className="mb-8">
              <AdSlot />
            </div>

            <div className="min-w-0 max-w-full overflow-x-clip">
              <div className="prose-tech max-w-none min-w-0">{content}</div>
            </div>

            <div className="my-10">
              <AdSlot />
            </div>

            {post.faqs.length ? (
              <section className="mt-12 rounded-lg border border-line p-6 dark:border-slate-800">
                <h2 className="font-display text-2xl font-semibold">Frequently asked questions</h2>
                <div className="mt-4 grid gap-4">
                  {post.faqs.map((faq) => (
                    <details key={faq.question} className="rounded-md border border-line p-4 dark:border-slate-800">
                      <summary className="cursor-pointer font-semibold">{faq.question}</summary>
                      <p className="mt-3 text-sm leading-6 text-muted dark:text-slate-300">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}

            <div className="my-10">
              <AdSlot />
            </div>

            <AuthorBoxEn name={post.author} />
          </div>

          <aside className="grid content-start gap-6">
            <TableOfContents toc={post.toc} />
            <AdSlot />
            <AdSlot sticky />
          </aside>
        </div>
      </article>

      {related.length ? (
        <section className="border-t border-line bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-semibold">Related articles</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <ArticleCardEn key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
