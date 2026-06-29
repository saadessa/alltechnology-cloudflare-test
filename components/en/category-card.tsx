import Link from "next/link";

import { categoryUrlEn } from "@/lib/site-en";

export function CategoryCardEn({
  name,
  description,
  slug
}: {
  name: string;
  description: string;
  slug: string;
}) {
  return (
    <Link
      href={categoryUrlEn(slug)}
      className="rounded-lg border border-line bg-white p-5 shadow-sm transition hover:border-brand hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
    >
      <h2 className="font-display text-lg font-semibold">{name}</h2>
      <p className="mt-2 text-sm leading-6 text-muted dark:text-slate-300">{description}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand">Explore →</p>
    </Link>
  );
}
