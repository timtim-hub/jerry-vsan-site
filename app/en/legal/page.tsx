import type { Metadata } from "next";
import Link from "next/link";
import { legalAddress } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal notice and mandatory legal information for Jerry Vsan."
};

export default function LegalPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-5 py-16 text-chrome md:px-8" lang="en">
      <h1 className="font-display text-6xl uppercase tracking-[0.08em] text-electric">Legal Notice</h1>

      <section className="mt-10 space-y-4 rounded-2xl border border-chrome/20 bg-black/30 p-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.08em]">INFORMATION UNDER SECTION 5 DDG</h2>
        <p className="leading-relaxed">
          {legalAddress.name}
          <br />
          {legalAddress.careOf}, {legalAddress.street}
          <br />
          {legalAddress.zipCity}
        </p>
        <p className="font-semibold">Please do not send parcels to this address.</p>
      </section>

      <section className="mt-6 space-y-4 rounded-2xl border border-chrome/20 bg-black/30 p-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.08em]">CONTACT</h2>
        <p>
          Email: <a href="mailto:mail@jerryvsan.com" className="micro-link">mail@jerryvsan.com</a>
          <br />
          Phone: available
        </p>
      </section>

      <section className="mt-6 space-y-4 rounded-2xl border border-chrome/20 bg-black/30 p-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.08em]">
          CONSUMER DISPUTE RESOLUTION / UNIVERSAL ARBITRATION BODY
        </h2>
        <p>
          We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer
          arbitration board.
        </p>
      </section>

      <section className="mt-6 space-y-4 rounded-2xl border border-chrome/20 bg-black/30 p-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.08em]">LIABILITY FOR CONTENT</h2>
        <p>
          As a service provider, we are responsible for our own content on these pages under general law according to
          Section 7 (1) DDG. Under Sections 8 to 10 DDG, however, we are not obliged to monitor transmitted or stored
          third-party information, or to investigate circumstances indicating illegal activity.
        </p>
        <p>
          Obligations to remove or block the use of information under general law remain unaffected. Liability in this
          respect is only possible from the time we become aware of a specific legal infringement. If we become aware
          of such infringements, we will remove the relevant content immediately.
        </p>
      </section>

      <section className="mt-6 space-y-4 rounded-2xl border border-chrome/20 bg-black/30 p-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.08em]">COPYRIGHT</h2>
        <p>
          The content and works created by the site operators on these pages are subject to German copyright law.
          Reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the
          written consent of the respective author or creator.
        </p>
        <p>
          Downloads and copies of this site are permitted for private, non-commercial use only. Where content on this
          site was not created by the operator, third-party copyrights are respected. In particular, third-party
          content is marked as such. Should you nevertheless become aware of a copyright infringement, please notify
          us. Upon becoming aware of any legal infringement, we will remove such content immediately.
        </p>
      </section>

      <Link href="/en" className="micro-link mt-10 inline-flex text-sm uppercase tracking-[0.14em]">
        Back to homepage
      </Link>
    </main>
  );
}
