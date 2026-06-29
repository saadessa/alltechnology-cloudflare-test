"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { categories } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
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
        <div className="absolute left-4 right-4 top-16 z-50 rounded-lg border border-line bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <nav aria-label="Mobile navigation" className="grid gap-2">
            <Link href="/" onClick={() => setOpen(false)} className="px-2 py-2 font-medium">
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                onClick={() => setOpen(false)}
                className="px-2 py-2 text-sm text-muted dark:text-slate-300"
              >
                {category.name}
              </Link>
            ))}
            <Link href="/about" onClick={() => setOpen(false)} className="px-2 py-2 text-sm">
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="px-2 py-2 text-sm">
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
