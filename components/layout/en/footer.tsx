import Link from "next/link";

import { getCategoriesEn } from "@/lib/content-en";
import { siteConfigEn } from "@/lib/site-en";

import { NewsletterForm } from "@/components/newsletter-form";

const legalLinks = [
  ["Privacy Policy", "/en/privacy-policy"],
  ["Terms and Conditions", "/en/terms-and-conditions"],
  ["Cookie Policy", "/en/cookie-policy"]
] as const;

const companyLinks = [
  ["About", "/en/about"],
  ["Contact", "/en/contact"]
] as const;

export function FooterEn() {
  const categories = getCategoriesEn();

  return (
    <footer className="border-t border-line bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/en" className="font-display text-xl font-semibold">
            {siteConfigEn.name}
          </Link>

          <p className="mt-4 max-w-md text-sm leading-7 text-muted dark:text-slate-300">
            {siteConfigEn.description}
          </p>

          <p className="mt-4 text-sm text-muted dark:text-slate-300">
            Editorial: {siteConfigEn.email}
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {Object.entries(siteConfigEn.social).map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="font-medium text-muted hover:text-brand dark:text-slate-300"
                rel="noopener noreferrer"
              >
                {label.toUpperCase()}
              </a>
            ))}
          </div>

          <div className="mt-6">
            <NewsletterForm compact />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-slate-900 dark:text-white">
            Topics
          </h2>

          <ul className="mt-4 grid gap-3 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/en/category/${category.slug}`}
                  className="text-muted hover:text-brand dark:text-slate-300"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-slate-900 dark:text-white">
            Company
          </h2>

          <ul className="mt-4 grid gap-3 text-sm">
            {companyLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-muted hover:text-brand dark:text-slate-300">
                  {label}
                </Link>
              </li>
            ))}

            {legalLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-muted hover:text-brand dark:text-slate-300">
                  {label}
                </Link>
              </li>
            ))}

            <li>
              <Link href="/" className="text-brand hover:text-ink dark:hover:text-white" hrefLang="ar">
                العربية
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center text-xs text-muted dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} {siteConfigEn.name}. All rights reserved.
      </div>
    </footer>
  );
}
