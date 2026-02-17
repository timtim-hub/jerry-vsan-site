import { JerryMotionSite } from "@/components/JerryMotionSite";
import { copyByLocale, siteUrl } from "@/lib/i18n";
import { getPersonSchema, getTourEventGraph, getWebsiteSchema } from "@/lib/schema";
import type { Metadata } from "next";

const copy = copyByLocale.en;

export const metadata: Metadata = {
  title: copy.title,
  description: copy.description,
  alternates: {
    canonical: "/en",
    languages: {
      de: "/",
      en: "/en"
    }
  },
  keywords: ["Jerry Vsan", "Comedian from Cologne", "Stand-up", "Try Out Tour 2026", "NightWash"],
  openGraph: {
    title: copy.ogTitle,
    description: copy.ogDescription,
    url: `${siteUrl}/en`,
    locale: "en_US",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: copy.ogTitle }]
  },
  twitter: {
    card: "summary_large_image",
    title: copy.ogTitle,
    description: copy.ogDescription,
    images: ["/og-image.svg"]
  }
};

export default function EnglishPage() {
  return (
    <div lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonSchema("en")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema("en")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getTourEventGraph()) }}
      />
      <JerryMotionSite locale="en" />
    </div>
  );
}
