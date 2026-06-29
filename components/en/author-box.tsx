import Image from "next/image";
import Link from "next/link";

import { getAuthorEn } from "@/lib/content-en";
import { authorUrlEn } from "@/lib/site-en";
import { slugify } from "@/lib/utils";

export function AuthorBoxEn({ name }: { name: string }) {
  const author = getAuthorEn(slugify(name));

  if (!author) return null;

  return (
    <section className="mt-10 rounded-lg border border-line bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex gap-4">
        <Image
          src={author.avatar}
          alt={author.name}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full"
        />

        <div>
          <p className="text-xs font-semibold tracking-wide text-brand">Author</p>

          <h2 className="mt-1 font-display text-xl font-semibold">
            <Link href={authorUrlEn(author.slug)}>{author.name}</Link>
          </h2>

          <p className="mt-2 text-sm leading-7 text-muted dark:text-slate-300">{author.bio}</p>
        </div>
      </div>
    </section>
  );
}
