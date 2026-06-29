import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function EmptyStateEn({
  title,
  description,
  backHref = "/en",
  backLabel = "Back to homepage"
}: {
  title: string;
  description: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <div className="mt-10 rounded-lg border border-line bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">Coming soon</p>
      <h2 className="mt-2 font-display text-2xl font-semibold">{title}</h2>
      <p className="mt-3 max-w-2xl leading-7 text-muted dark:text-slate-300">{description}</p>
      <Link
        href={backHref}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-ink dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        {backLabel}
      </Link>
    </div>
  );
}
