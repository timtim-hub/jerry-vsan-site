import { JerryMotionSite } from "@/components/JerryMotionSite";
import { copyByLocale, siteUrl } from "@/lib/i18n";
import { getPersonSchema, getTourEventGraph, getWebsiteSchema } from "@/lib/schema";
import type { Metadata } from "next";

const copy = copyByLocale.de;

export const metadata: Metadata = {
  title: copy.title,
  description: copy.description,
  alternates: {
    canonical: "/",
    languages: {
      de: "/",
      en: "/en"
    }
  },
  keywords: ["Jerry Vsan", "Comedian aus Köln", "Stand-up", "Try Out Tour 2026", "NightWash"],
  openGraph: {
    title: copy.ogTitle,
    description: copy.ogDescription,
    url: siteUrl,
    locale: "de_DE",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: copy.ogTitle }]
  },
  twitter: {
    card: "summary_large_image",
    title: copy.ogTitle,
    description: copy.ogDescription,
    images: ["/og-image.svg"]
  }
};

export default function GermanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonSchema("de")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema("de")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getTourEventGraph()) }}
      />
      <JerryMotionSite locale="de" />
    </>
  );
}
