import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";
import { defaultMetadata } from "@/lib/seo";

export const metadata: Metadata = defaultMetadata({ title: legalPages["editorial-policy"].title, description: legalPages["editorial-policy"].description, alternates: { canonical: legalPages["editorial-policy"].path } });

export default function Page() {
  return <LegalPage pageKey="editorial-policy" />;
}
