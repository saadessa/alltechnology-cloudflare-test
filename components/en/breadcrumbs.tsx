import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function BreadcrumbsEn({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted dark:text-slate-400">
      <Link href="/en" className="hover:text-brand">
        Home
      </Link>
      {items.map((item) => (
        <span key={item.href} className="flex items-center gap-2">
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href={item.href} className="hover:text-brand">
            {item.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}
