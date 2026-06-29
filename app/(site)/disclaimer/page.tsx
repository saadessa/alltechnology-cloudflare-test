import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";
import { defaultMetadata } from "@/lib/seo";

export const metadata: Metadata = defaultMetadata({ title: legalPages.disclaimer.title, description: legalPages.disclaimer.description, alternates: { canonical: legalPages.disclaimer.path } });

export default function Page() {
  return <LegalPage pageKey="disclaimer" />;
}
