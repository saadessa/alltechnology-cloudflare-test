import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchemaEn } from "@/lib/schema-en";
import type { LegalPageKeyEn } from "@/lib/legal-en";
import { legalPagesEn } from "@/lib/legal-en";
import { siteConfigEn } from "@/lib/site-en";

export function LegalPageEn({
  pageKey,
  contactForm = false
}: {
  pageKey: LegalPageKeyEn;
  contactForm?: boolean;
}) {
  const page = legalPagesEn[pageKey];

  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbSchemaEn([
          { name: "Home", url: "/en" },
          { name: page.title, url: page.path }
        ])}
      />
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted dark:text-slate-400">
        <Link href="/en" className="hover:text-brand">
          Home
        </Link>
        <span className="flex items-center gap-2">
          <ChevronRight className="h-3.5 w-3.5" />
          <span>{page.title}</span>
        </span>
      </nav>
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">{siteConfigEn.name}</p>
      <h1 className="mt-3 font-display text-4xl font-semibold">{page.title}</h1>
      <p className="mt-4 text-lg leading-8 text-muted dark:text-slate-300">{page.description}</p>
      <div className="mt-10 grid gap-8">
        {page.sections.map(([title, body]) => (
          <section key={title}>
            <h2 className="font-display text-2xl font-semibold">{title}</h2>
            <p className="mt-3 leading-8 text-muted dark:text-slate-300">{body}</p>
          </section>
        ))}
      </div>
      {contactForm ? (
        <form className="mt-10 rounded-lg border border-line bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-display text-2xl font-semibold">Send a message</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <input
              className="h-12 rounded-md border border-line bg-white px-3 outline-none focus:border-brand dark:border-slate-700 dark:bg-slate-950"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="h-12 rounded-md border border-line bg-white px-3 outline-none focus:border-brand dark:border-slate-700 dark:bg-slate-950"
              placeholder="Email"
              name="email"
              type="email"
              required
            />
          </div>
          <textarea
            className="mt-4 min-h-36 w-full rounded-md border border-line bg-white p-3 outline-none focus:border-brand dark:border-slate-700 dark:bg-slate-950"
            placeholder="How can we help?"
            name="message"
            required
          />
          <button
            type="submit"
            className="mt-4 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-brand dark:bg-white dark:text-ink"
          >
            Submit inquiry
          </button>
        </form>
      ) : null}
    </section>
  );
}
