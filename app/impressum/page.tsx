import type { Metadata } from "next";
import Link from "next/link";
import { legalAddress } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum für Jerry Vsan Entertainment."
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-5 py-16 text-chrome md:px-8">
      <h1 className="font-display text-6xl uppercase tracking-[0.08em] text-toxic">Impressum</h1>
      <div className="mt-8 space-y-2 text-lg">
        <p>{legalAddress.company}</p>
        <p>{legalAddress.type}</p>
        <p>{legalAddress.street}</p>
        <p>{legalAddress.zipCity}</p>
        <p>E-Mail: {legalAddress.email}</p>
        <p>Telefon: {legalAddress.phone}</p>
      </div>
      <p className="mt-10 text-chrome/75">
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: House of Hoff - Jerry Vsan Entertainment.
      </p>
      <Link href="/" className="micro-link mt-10 inline-flex text-sm uppercase tracking-[0.14em]">
        Zurück zur Startseite
      </Link>
    </main>
  );
}
