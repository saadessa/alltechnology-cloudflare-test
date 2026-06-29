import type { Metadata } from "next";

import { LegalPageEn } from "@/components/en/legal-page";
import { legalPagesEn } from "@/lib/legal-en";
import { pageMetadataEn } from "@/lib/seo-en";

export const metadata: Metadata = pageMetadataEn({
  title: legalPagesEn["terms-and-conditions"].title,
  description: legalPagesEn["terms-and-conditions"].description,
  path: legalPagesEn["terms-and-conditions"].path
});

export default function Page() {
  return <LegalPageEn pageKey="terms-and-conditions" />;
}
