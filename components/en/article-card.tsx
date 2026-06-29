import Image from "next/image";
import Link from "next/link";

import type { Post } from "@/types/content";
import { getCategoryEn } from "@/lib/content-en";
import { authorUrlEn, categoryUrlEn, postUrlEn } from "@/lib/site-en";
import { formatDate, slugify } from "@/lib/utils";

export function ArticleCardEn({
  post,
  priority = false
}: {
  post: Post;
  priority?: boolean;
}) {
  const category = getCategoryEn(post.category);
  const categorySlug = post.category;
  const categoryName = category?.name ?? post.category;

  return (
    <article className="group overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <Link href={postUrlEn(post.slug)} className="block">
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

      <div className="p-5 text-left">
        <Link href={categoryUrlEn(categorySlug)} className="text-xs font-semibold tracking-wide text-brand">
          {categoryName}
        </Link>

        <h2 className="mt-3 line-clamp-2 font-display text-xl font-semibold leading-8">
          <Link href={postUrlEn(post.slug)} className="hover:text-brand">
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted dark:text-slate-300">
          {post.description}
        </p>

        <div className="mt-5 flex items-center justify-between text-xs text-muted dark:text-slate-400">
          <span>
            {post.readingTime} • {formatDate(post.publishedAt)}
          </span>
          <Link href={authorUrlEn(slugify(post.author))} className="font-medium hover:text-brand">
            {post.author}
          </Link>
        </div>
      </div>
    </article>
  );
}
