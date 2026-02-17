import type { Metadata } from "next";
import Link from "next/link";
import { legalAddress } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal notice for Jerry Vsan Entertainment."
};

export default function LegalPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-5 py-16 text-chrome md:px-8" lang="en">
      <h1 className="font-display text-6xl uppercase tracking-[0.08em] text-toxic">Legal Notice</h1>
      <div className="mt-8 space-y-2 text-lg">
        <p>{legalAddress.company}</p>
        <p>{legalAddress.type}</p>
        <p>{legalAddress.street}</p>
        <p>{legalAddress.zipCity}</p>
        <p>Email: {legalAddress.email}</p>
        <p>Phone: {legalAddress.phone}</p>
      </div>
      <p className="mt-10 text-chrome/75">
        Responsible for editorial content under German law: House of Hoff - Jerry Vsan Entertainment.
      </p>
      <Link href="/en" className="micro-link mt-10 inline-flex text-sm uppercase tracking-[0.14em]">
        Back to homepage
      </Link>
    </main>
  );
}
