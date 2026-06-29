import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";
import { defaultMetadata } from "@/lib/seo";

export const metadata: Metadata = defaultMetadata({ title: legalPages["dmca-policy"].title, description: legalPages["dmca-policy"].description, alternates: { canonical: legalPages["dmca-policy"].path } });

export default function Page() {
  return <LegalPage pageKey="dmca-policy" />;
}
