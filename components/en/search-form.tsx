import { Search } from "lucide-react";

export function SearchFormEn({ defaultValue = "" }: { defaultValue?: string }) {
  return (
    <form action="/en/search" className="relative">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
      <input
        name="q"
        defaultValue={defaultValue}
        placeholder="Search AI tools, programming, security, software..."
        className="h-14 w-full rounded-lg border border-line bg-white pl-12 pr-4 text-base outline-none transition focus:border-brand dark:border-slate-800 dark:bg-slate-900"
      />
    </form>
  );
}
