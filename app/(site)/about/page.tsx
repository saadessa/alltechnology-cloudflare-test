import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";
import { defaultMetadata } from "@/lib/seo";

export const metadata: Metadata = defaultMetadata({ title: legalPages.about.title, description: legalPages.about.description, alternates: { canonical: legalPages.about.path } });

export default function Page() {
  return <LegalPage pageKey="about" />;
}
