import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";

import "@/app/globals.css";
import "@/app/en/en.css";

import { FooterEn } from "@/components/layout/en/footer";
import { NavbarEn } from "@/components/layout/en/navbar";
import { JsonLd } from "@/components/seo/json-ld";

import { defaultMetadataEn } from "@/lib/seo-en";
import { organizationSchemaEn, websiteSchemaEn } from "@/lib/schema-en";

const space = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space"
});

export const metadata: Metadata = defaultMetadataEn();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" }
  ]
};

export default function EnglishLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`locale-en ${space.variable}`}>
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT ? (
          <Script
            id="adsense-en"
            strategy="afterInteractive"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        ) : null}

        <JsonLd data={websiteSchemaEn()} />
        <JsonLd data={organizationSchemaEn()} />

        <NavbarEn />

        <main>{children}</main>

        <FooterEn />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
