import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className={cn("rounded-lg border border-line bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900", compact && "p-4 shadow-none")}>
      <div className="flex items-center gap-2 font-semibold">
        <Mail className="h-4 w-4 text-brand" />
        Weekly signal, no noise
      </div>
      <p className="mt-2 text-sm leading-6 text-muted dark:text-slate-300">
        Get concise AI, security, and software briefings curated by editors.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="min-h-11 flex-1 rounded-md border border-line bg-white px-3 text-sm outline-none transition focus:border-brand dark:border-slate-700 dark:bg-slate-950"
          aria-label="Email address"
        />
        <button type="submit" className="min-h-11 rounded-md bg-ink px-4 text-sm font-semibold text-white transition hover:bg-brand dark:bg-white dark:text-ink">
          Subscribe
        </button>
      </div>
    </form>
  );
}
