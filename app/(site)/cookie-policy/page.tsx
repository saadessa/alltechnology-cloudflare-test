import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";
import { defaultMetadata } from "@/lib/seo";

export const metadata: Metadata = defaultMetadata({ title: legalPages["cookie-policy"].title, description: legalPages["cookie-policy"].description, alternates: { canonical: legalPages["cookie-policy"].path } });

export default function Page() {
  return <LegalPage pageKey="cookie-policy" />;
}
