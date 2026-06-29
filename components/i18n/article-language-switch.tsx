import Link from "next/link";
import { Languages } from "lucide-react";

export function ArticleLanguageSwitch({
  href,
  label,
  hrefLang
}: {
  href: string;
  label: string;
  hrefLang: "ar" | "en";
}) {
  return (
    <Link
      href={href}
      hrefLang={hrefLang}
      className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-semibold transition hover:border-brand hover:text-brand dark:border-slate-700"
    >
      <Languages className="h-4 w-4" />
      {label}
    </Link>
  );
}
