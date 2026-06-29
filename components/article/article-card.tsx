import Image from "next/image";
import Link from "next/link";

import type { Post } from "@/types/content";
import { categories } from "@/lib/site";
import { formatDate, slugify } from "@/lib/utils";

// ✅ FIX: ابحث عن اسم التصنيف من site.ts بدلاً من قاموس يدوي قد يُنسى تحديثه
function getCategoryName(slug: string): string {
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}

export function ArticleCard({
  post,
  priority = false
}: {
  post: Post;
  priority?: boolean;
}) {
  // ✅ post.category الآن هو slug مثل "platforms-and-services" — لا حاجة لـ slugify
  const categorySlug = post.category;
  const categoryName = getCategoryName(categorySlug);

  return (
    <article className="group overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900">
      {/* صورة المقال */}
      <Link href={`/posts/${post.slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* محتوى البطاقة */}
      <div className="p-5 text-right">
        {/* التصنيف */}
        <Link
          href={`/category/${categorySlug}`}
          className="text-xs font-semibold tracking-wide text-brand"
        >
          {categoryName}
        </Link>

        {/* العنوان */}
        <h2 className="mt-3 line-clamp-2 font-display text-xl font-semibold leading-8">
          <Link href={`/posts/${post.slug}`} className="hover:text-brand">
            {post.title}
          </Link>
        </h2>

        {/* الوصف */}
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted dark:text-slate-300">
          {post.description}
        </p>

        {/* بيانات المقال */}
        <div className="mt-5 flex items-center justify-between text-xs text-muted dark:text-slate-400">
          <span>
            {post.readingTime} • {formatDate(post.publishedAt)}
          </span>
          <Link
            href={`/author/${slugify(post.author)}`}
            className="font-medium hover:text-brand"
          >
            {post.author}
          </Link>
        </div>
      </div>
    </article>
  );
}
