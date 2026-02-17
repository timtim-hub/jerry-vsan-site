import type { Metadata } from "next";
import { MotionSite } from "@/components/MotionSite";
import { copyByLocale, siteBaseUrl } from "@/lib/site-data";
import { getEventSchema, getPersonSchema } from "@/lib/schema";

const copy = copyByLocale.de;

export const metadata: Metadata = {
  title: copy.title,
  description: copy.description,
  keywords: ["Comedian Köln", "Jerry Vsan", "Stand-up Köln", "Try Out Tour 2026"],
  alternates: {
    canonical: "/",
    languages: {
      de: "/",
      en: "/en"
    }
  },
  openGraph: {
    title: copy.title,
    description: copy.description,
    url: siteBaseUrl,
    locale: "de_DE",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Jerry Vsan - Comedian Köln" }]
  },
  twitter: {
    card: "summary_large_image",
    title: copy.title,
    description: copy.description,
    images: ["/og-image.svg"]
  }
};

export default function GermanHomePage() {
  const personSchema = getPersonSchema("de");
  const eventSchema = { "@context": "https://schema.org", "@graph": getEventSchema() };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <MotionSite locale="de" />
    </>
  );
}
