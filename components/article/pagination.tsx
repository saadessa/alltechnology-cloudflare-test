import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({ page, totalPages, basePath }: { page: number; totalPages: number; basePath: string }) {
  if (totalPages <= 1) return null;

  const previous = page > 1 ? `${basePath}?page=${page - 1}` : null;
  const next = page < totalPages ? `${basePath}?page=${page + 1}` : null;

  return (
    <nav aria-label="Pagination" className="mt-10 flex items-center justify-between border-t border-line pt-6 dark:border-slate-800">
      {previous ? (
        <Link href={previous} rel="prev" className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium hover:border-brand dark:border-slate-700">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Link>
      ) : (
        <span />
      )}
      <span className="text-sm text-muted dark:text-slate-400">
        Page {page} of {totalPages}
      </span>
      {next ? (
        <Link href={next} rel="next" className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium hover:border-brand dark:border-slate-700">
          Next
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
