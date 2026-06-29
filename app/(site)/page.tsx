import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { AdSlot } from "@/components/ads/ad-slot";
import { ArticleCard } from "@/components/article/article-card";
import { CategoryCard } from "@/components/article/category-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { categories } from "@/lib/site";
import { getAllPosts, getFeaturedPosts, getTrendingPosts } from "@/lib/content";
import { defaultMetadata } from "@/lib/seo";

export const revalidate = 3600;
export const metadata: Metadata = defaultMetadata({ alternates: { canonical: "/" } });

export default function HomePage() {
  const posts = getAllPosts();
  const featured = getFeaturedPosts(3);
  const trending = getTrendingPosts(5);

  return (
    <div>
      <section className="border-b border-line bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              الذكاء الاصطناعي • البرمجيات • الأمن السيبراني • تقنيات المستقبل
            </p>

            <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
              تحليلات تقنية احترافية للمطورين وصناع المستقبل
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted dark:text-slate-300">
              شروحات تقنية متقدمة وتحليلات عملية في الذكاء الاصطناعي، البرمجة، الأمن السيبراني،
              وأحدث أدوات التكنولوجيا الحديثة.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/category/artificial-intelligence"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand dark:bg-white dark:text-ink"
              >
                استكشف الذكاء الاصطناعي
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/search"
                className="inline-flex items-center rounded-md border border-line px-5 py-3 text-sm font-semibold transition hover:border-brand dark:border-slate-700"
              >
                البحث في المقالات
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <h2 className="font-display text-xl font-semibold">
              الأكثر تداولاً الآن
            </h2>

            <div className="grid gap-3">
              {trending.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="rounded-lg border border-line bg-white p-4 transition hover:border-brand dark:border-slate-800 dark:bg-slate-900"
                >
                  <span className="text-xs font-semibold text-brand">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 font-medium leading-snug">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              مقالات مميزة
            </p>

            <h2 className="mt-2 font-display text-3xl font-semibold">
              اختيارات المحرر
            </h2>
          </div>

          <Link href="/search" className="text-sm font-semibold text-brand">
            عرض الكل
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((post, index) => (
            <ArticleCard key={post.slug} post={post} priority={index === 0} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <div>
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              أحدث المقالات
            </p>

            <h2 className="mt-2 font-display text-3xl font-semibold">
              آخر الأخبار والشروحات التقنية
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {posts.slice(0, 10).map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

        <aside className="grid content-start gap-6">
          <AdSlot sticky />
          <NewsletterForm />
        </aside>
      </section>

      <section className="border-t border-line bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              استكشف الأقسام
            </p>

            <h2 className="mt-2 font-display text-3xl font-semibold">
              التصنيفات التقنية
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                {...category}
                count={posts.filter((post) => post.category === category.slug).length}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
