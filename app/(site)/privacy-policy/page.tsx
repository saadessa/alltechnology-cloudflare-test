import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";
import { defaultMetadata } from "@/lib/seo";

export const metadata: Metadata = defaultMetadata({ title: legalPages["privacy-policy"].title, description: legalPages["privacy-policy"].description, alternates: { canonical: legalPages["privacy-policy"].path } });

export default function Page() {
  return <LegalPage pageKey="privacy-policy" />;
}
