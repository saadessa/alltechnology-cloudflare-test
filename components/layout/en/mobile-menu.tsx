"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import type { EnglishCategory } from "@/lib/content-en";

const utilityLinks = [
  { label: "About", href: "/en/about" },
  { label: "Contact", href: "/en/contact" }
] as const;

export function MobileMenuEn({ categories }: { categories: EnglishCategory[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white dark:border-slate-700 dark:bg-slate-950"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>
      {open ? (
        <div className="absolute left-4 right-4 top-16 z-50 max-h-[70vh] overflow-y-auto rounded-lg border border-line bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <nav aria-label="Mobile navigation" className="grid gap-2">
            <Link href="/en" onClick={() => setOpen(false)} className="px-2 py-2 font-medium">
              Home
            </Link>

            <p className="px-2 pt-2 text-xs font-semibold uppercase tracking-wide text-brand">Topics</p>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/en/category/${category.slug}`}
                onClick={() => setOpen(false)}
                className="px-2 py-2 text-sm text-muted dark:text-slate-300"
              >
                {category.name}
              </Link>
            ))}

            <p className="px-2 pt-2 text-xs font-semibold uppercase tracking-wide text-brand">Company</p>
            {utilityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2 text-sm"
              >
                {link.label}
              </Link>
            ))}

            <Link href="/" onClick={() => setOpen(false)} className="px-2 py-2 text-sm text-brand">
              العربية
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
