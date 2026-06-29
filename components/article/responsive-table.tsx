import type { TableHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function ResponsiveTable({
  className,
  children,
  ...props
}: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="prose-table-scroll my-8 w-full max-w-full min-w-0">
      <div
        className="prose-table-scroll__viewport overflow-x-auto overscroll-x-contain rounded-lg border border-slate-200 [-webkit-overflow-scrolling:touch] dark:border-slate-700"
        role="region"
        aria-label="Scrollable table"
        tabIndex={0}
      >
        <table {...props} className={cn("prose-table w-full min-w-max border-collapse", className)}>
          {children}
        </table>
      </div>
    </div>
  );
}
