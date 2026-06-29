import type { Metadata } from "next";

import { LegalPageEn } from "@/components/en/legal-page";
import { legalPagesEn } from "@/lib/legal-en";
import { pageMetadataEn } from "@/lib/seo-en";

export const metadata: Metadata = pageMetadataEn({
  title: legalPagesEn["privacy-policy"].title,
  description: legalPagesEn["privacy-policy"].description,
  path: legalPagesEn["privacy-policy"].path
});

export default function Page() {
  return <LegalPageEn pageKey="privacy-policy" />;
}
