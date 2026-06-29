import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";
import { defaultMetadata } from "@/lib/seo";

export const metadata: Metadata = defaultMetadata({ title: legalPages["terms-and-conditions"].title, description: legalPages["terms-and-conditions"].description, alternates: { canonical: legalPages["terms-and-conditions"].path } });

export default function Page() {
  return <LegalPage pageKey="terms-and-conditions" />;
}
