import { PageTransition } from "@/components/PageTransition";
import { siteUrl } from "@/lib/i18n";
import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jerry Vsan",
    template: "%s | Jerry Vsan"
  },
  description: "Jerry Vsan: Comedian aus Köln. Try Out Tour 2026, Clips, Presse und Booking.",
  openGraph: {
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Jerry Vsan"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className="bg-charcoal font-body text-silver antialiased overflow-x-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[2] opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E\")"
          }}
        />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
