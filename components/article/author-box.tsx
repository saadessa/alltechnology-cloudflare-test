import Image from "next/image";
import Link from "next/link";

import { getAuthor } from "@/lib/content";
import { slugify } from "@/lib/utils";

export function AuthorBox({ name }: { name: string }) {
  const author = getAuthor(slugify(name));

  if (!author) return null;

  return (
    <section className="mt-10 rounded-lg border border-line bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-row-reverse gap-4 text-right">
        {/* صورة الكاتب */}
        <Image
          src={author.avatar}
          alt={author.name}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full"
        />

        {/* معلومات الكاتب */}
        <div>
          <p className="text-xs font-semibold tracking-wide text-brand">
            الكاتب
          </p>

          <h2 className="mt-1 font-display text-xl font-semibold">
            <Link href={`/author/${author.slug}`}>
              {author.name}
            </Link>
          </h2>

          <p className="mt-2 text-sm leading-7 text-muted dark:text-slate-300">
            {author.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
