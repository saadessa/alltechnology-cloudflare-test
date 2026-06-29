import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import type { LegalPageKey } from "@/lib/legal";
import { legalPages } from "@/lib/legal";
import { siteConfig } from "@/lib/site";

export function LegalPage({ pageKey, contactForm = false }: { pageKey: LegalPageKey; contactForm?: boolean }) {
  const page = legalPages[pageKey];

  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: page.title, url: page.path }
        ])}
      />
      <Breadcrumbs items={[{ label: page.title, href: page.path }]} />
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">{siteConfig.name}</p>
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
            <input className="h-12 rounded-md border border-line bg-white px-3 outline-none focus:border-brand dark:border-slate-700 dark:bg-slate-950" placeholder="Name" name="name" required />
            <input className="h-12 rounded-md border border-line bg-white px-3 outline-none focus:border-brand dark:border-slate-700 dark:bg-slate-950" placeholder="Email" name="email" type="email" required />
          </div>
          <textarea className="mt-4 min-h-36 w-full rounded-md border border-line bg-white p-3 outline-none focus:border-brand dark:border-slate-700 dark:bg-slate-950" placeholder="How can we help?" name="message" required />
          <button type="submit" className="mt-4 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-brand dark:bg-white dark:text-ink">
            Submit inquiry
          </button>
        </form>
      ) : null}
    </section>
  );
}
