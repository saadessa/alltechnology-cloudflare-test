import Link from "next/link";

export function CategoryCard({ name, description, slug, count }: { name: string; description: string; slug: string; count: number }) {
  return (
    <Link
      href={`/category/${slug}`}
      className="rounded-lg border border-line bg-white p-5 shadow-sm transition hover:border-brand hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
    >
      <h2 className="font-display text-lg font-semibold">{name}</h2>
      <p className="mt-2 text-sm leading-6 text-muted dark:text-slate-300">{description}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand">{count} articles</p>
    </Link>
  );
}
