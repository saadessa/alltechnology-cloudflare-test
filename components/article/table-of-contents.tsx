import type { TocItem } from "@/types/content";
import { cn } from "@/lib/utils";

export function TableOfContents({ toc }: { toc: TocItem[] }) {
  if (!toc.length) return null;

  return (
    <div className="rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-sm font-semibold uppercase tracking-wide">On this page</h2>
      <ol className="mt-4 grid gap-2 text-sm">
        {toc.map((item) => (
          <li key={item.id} className={cn(item.depth === 3 && "pl-4")}>
            <a href={`#${item.id}`} className="text-muted hover:text-brand dark:text-slate-300">
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
