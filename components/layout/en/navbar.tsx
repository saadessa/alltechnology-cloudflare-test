import Link from "next/link";

import { getCategoriesEn, getNavCategoriesEn } from "@/lib/content-en";
import { siteConfigEn } from "@/lib/site-en";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileMenuEn } from "@/components/layout/en/mobile-menu";

const utilityLinks = [
  { label: "About", href: "/en/about" },
  { label: "Contact", href: "/en/contact" }
] as const;

export function NavbarEn() {
  const navCategories = getNavCategoriesEn();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/en"
          className="flex items-center gap-3"
          aria-label={`Home - ${siteConfigEn.name}`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink font-display text-sm font-bold text-white dark:bg-white dark:text-ink">
            AT
          </span>
          <span className="font-display text-lg font-semibold tracking-normal">
            {siteConfigEn.name}
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
          {navCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/en/category/${category.slug}`}
              className="text-sm font-medium text-slate-600 transition hover:text-brand dark:text-slate-300"
            >
              {category.name}
            </Link>
          ))}
          {utilityLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand dark:text-slate-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/"
            className="text-sm font-medium text-brand transition hover:text-ink dark:hover:text-white"
            hrefLang="ar"
          >
            العربية
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileMenuEn categories={getCategoriesEn()} />
        </div>
      </div>
    </header>
  );
}
