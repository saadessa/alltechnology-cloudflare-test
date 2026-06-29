import Link from "next/link";

import { categories, siteConfig } from "@/lib/site";

import { NewsletterForm } from "@/components/newsletter-form";

const legalLinks = [
  ["سياسة الخصوصية", "/privacy-policy"],
  ["الشروط والأحكام", "/terms-and-conditions"],
  ["إخلاء المسؤولية", "/disclaimer"],
  ["السياسة التحريرية", "/editorial-policy"],
  ["سياسة ملفات الارتباط", "/cookie-policy"],
  ["حقوق النشر DMCA", "/dmca-policy"]
] as const;



export function Footer() {
  return (
    <footer className="border-t border-line bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        {/* معلومات الموقع */}
        <div>
          <Link href="/" className="font-display text-xl font-semibold">
            التقنية الشاملة
          </Link>

          <p className="mt-4 max-w-md text-sm leading-7 text-muted dark:text-slate-300">
            منصة عربية متخصصة في التقنية والذكاء الاصطناعي والبرمجة
            والشروحات الحديثة والأدوات الرقمية.
          </p>

          <p className="mt-4 text-sm text-muted dark:text-slate-300">
            للتواصل التحريري: {siteConfig.email}
          </p>

          {/* روابط التواصل */}
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {Object.entries(siteConfig.social).map(([label, href]) => (
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

          {/* النشرة البريدية */}
          <div className="mt-6">
            <NewsletterForm compact />
          </div>
        </div>

        {/* الأقسام */}
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-slate-900 dark:text-white">
            الأقسام
          </h2>

          <ul className="mt-4 grid gap-3 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/category/${category.slug}`}
                  className="text-muted hover:text-brand dark:text-slate-300"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* الروابط القانونية */}
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-slate-900 dark:text-white">
            معلومات مهمة
          </h2>

          <ul className="mt-4 grid gap-3 text-sm">
            {legalLinks.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-muted hover:text-brand dark:text-slate-300"
                >
                  {label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/contact"
                className="text-muted hover:text-brand dark:text-slate-300"
              >
                اتصل بنا
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* الحقوق */}
      <div className="border-t border-line py-5 text-center text-xs text-muted dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} التقنية الشاملة. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
