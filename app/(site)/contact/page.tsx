import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";
import { defaultMetadata } from "@/lib/seo";

export const metadata: Metadata = defaultMetadata({ title: legalPages.contact.title, description: legalPages.contact.description, alternates: { canonical: legalPages.contact.path } });

export default function Page() {
  return <LegalPage pageKey="contact" contactForm />;
}
