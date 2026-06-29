import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { ArticleCardEn } from "@/components/en/article-card";
import { CategoryCardEn } from "@/components/en/category-card";
import { EmptyStateEn } from "@/components/en/empty-state";
import { AdSlot } from "@/components/ads/ad-slot";
import { NewsletterForm } from "@/components/newsletter-form";
import {
  getAllPostsEn,
  getCategoriesEn,
  getFeaturedPostsEn,
  getTrendingPostsEn
} from "@/lib/content-en";
import { categoryUrlEn, postUrlEn } from "@/lib/site-en";
import { defaultMetadataEn, hreflangAlternates } from "@/lib/seo-en";

export const revalidate = 3600;

export const metadata: Metadata = defaultMetadataEn({
  alternates: hreflangAlternates("/en")
});

export default function EnglishHomePage() {
  const posts = getAllPostsEn();
  const featured = getFeaturedPostsEn(3);
  const trending = getTrendingPostsEn(5);
  const categories = getCategoriesEn();
  const primaryCategory = categories[0];

  return (
    <div>
      <section className="en-hero border-b border-line bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              AI Tools • Agents • Security • Cloud • DevTools
            </p>

            <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
              The technology magazine for developers, AI builders, and security engineers
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted dark:text-slate-300">
              AllTechnology publishes independent guides, comparisons, and deep dives for
              technical professionals worldwide — from AI tooling and autonomous agents to secure
              engineering and cloud-native delivery.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCategory ? (
                <Link
                  href={categoryUrlEn(primaryCategory.slug)}
                  className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand dark:bg-white dark:text-ink"
                >
                  Explore {primaryCategory.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}

              <Link
                href="/en/about"
                className="inline-flex items-center rounded-md border border-line px-5 py-3 text-sm font-semibold transition hover:border-brand dark:border-slate-700"
              >
                About the publication
              </Link>
            </div>

            {categories.length ? (
              <div className="mt-10 flex flex-wrap gap-2">
                {categories.slice(0, 6).map((category) => (
                  <Link
                    key={category.slug}
                    href={categoryUrlEn(category.slug)}
                    className="en-chip rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-brand hover:text-brand dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <div className="grid gap-4">
            <h2 className="font-display text-xl font-semibold">
              {trending.length ? "Trending now" : "Featured coverage"}
            </h2>

            {trending.length ? (
              <div className="grid gap-3">
                {trending.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={postUrlEn(post.slug)}
                    className="rounded-lg border border-line bg-white p-4 transition hover:border-brand dark:border-slate-800 dark:bg-slate-900"
                  >
                    <span className="text-xs font-semibold text-brand">0{index + 1}</span>
                    <h3 className="mt-2 font-medium leading-snug">{post.title}</h3>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="grid gap-3">
                {categories.slice(0, 5).map((category, index) => (
                  <Link
                    key={category.slug}
                    href={categoryUrlEn(category.slug)}
                    className="rounded-lg border border-line bg-white p-4 transition hover:border-brand dark:border-slate-800 dark:bg-slate-900"
                  >
                    <span className="text-xs font-semibold text-brand">0{index + 1}</span>
                    <h3 className="mt-2 font-medium leading-snug">{category.name}</h3>
                    <p className="mt-1 text-sm text-muted dark:text-slate-400">{category.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {featured.length ? (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">Featured</p>
              <h2 className="mt-2 font-display text-3xl font-semibold">Editor&apos;s picks</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((post, index) => (
              <ArticleCardEn key={post.slug} post={post} priority={index === 0} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <div>
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">Latest</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">Recent articles</h2>
          </div>

          {posts.length ? (
            <div className="grid gap-6 md:grid-cols-2">
              {posts.slice(0, 10).map((post) => (
                <ArticleCardEn key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <EmptyStateEn
              title="No articles published yet"
              description="English articles will appear here automatically once MDX files are added to content/posts-en."
            />
          )}
        </div>

        <aside className="grid content-start gap-6">
          <AdSlot sticky />
          <NewsletterForm />
        </aside>
      </section>

      <section className="border-t border-line bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">Browse topics</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">Coverage areas</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCardEn key={category.slug} {...category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
