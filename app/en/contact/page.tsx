import type { Metadata } from "next";

import { LegalPageEn } from "@/components/en/legal-page";
import { legalPagesEn } from "@/lib/legal-en";
import { pageMetadataEn } from "@/lib/seo-en";

export const metadata: Metadata = pageMetadataEn({
  title: legalPagesEn.contact.title,
  description: legalPagesEn.contact.description,
  path: legalPagesEn.contact.path
});

export default function Page() {
  return <LegalPageEn pageKey="contact" contactForm />;
}
