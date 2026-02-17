import type { Metadata } from "next";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";
import { siteBaseUrl } from "@/lib/site-data";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: {
    default: "Jerry Vsan",
    template: "%s | Jerry Vsan"
  },
  description:
    "Jerry Vsan: Comedian Köln, ausverkaufte Try Out Tour 2026, aktuelle Termine, Media und Booking.",
  openGraph: {
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Jerry Vsan" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-charcoal font-body text-chrome">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
