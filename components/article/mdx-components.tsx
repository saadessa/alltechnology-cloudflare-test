import type { MDXComponents } from "mdx/types";
import Link from "next/link";

import { AdSlot } from "@/components/ads/ad-slot";
import { ResponsiveTable } from "@/components/article/responsive-table";

export const mdxComponents: MDXComponents = {
  a: ({ href = "", children }) => {
    const isInternal = href.startsWith("/");

    return isInternal ? (
      <Link href={href}>{children}</Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },

  table: (props) => <ResponsiveTable {...props} />,

  AdSlot: () => <AdSlot className="my-10 min-h-[280px]" label="In-article advertisement" />
};
