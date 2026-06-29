import type { Metadata } from "next";

import { LegalPageEn } from "@/components/en/legal-page";
import { legalPagesEn } from "@/lib/legal-en";
import { pageMetadataEn } from "@/lib/seo-en";

export const metadata: Metadata = pageMetadataEn({
  title: legalPagesEn["cookie-policy"].title,
  description: legalPagesEn["cookie-policy"].description,
  path: legalPagesEn["cookie-policy"].path
});

export default function Page() {
  return <LegalPageEn pageKey="cookie-policy" />;
}
