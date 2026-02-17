import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal notice and website disclosures for Jerry Vsan."
};

export default function LegalPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-5 py-16 text-silver md:px-8" lang="en">
      <h1 className="font-display text-5xl uppercase tracking-[0.08em] md:text-7xl">Legal Notice</h1>

      <section className="mt-10 space-y-10">
        <div className="border border-silver/20 bg-charcoal/40 p-6">
          <h2 className="font-display text-2xl uppercase tracking-[0.08em] md:text-4xl">
            Information pursuant to § 5 DDG
          </h2>
          <div className="mt-6 space-y-1 text-sm font-semibold text-silver/85">
            <p>Jeremi Winter</p>
            <p>c/o Impressumservice Dein-Impressum, Stettiner Straße 41</p>
            <p>35410 Hungen</p>
            <p className="mt-4 text-silver/70">Please do not send parcels to this address.</p>
          </div>
        </div>

        <div className="border border-silver/20 bg-charcoal/40 p-6">
          <h2 className="font-display text-2xl uppercase tracking-[0.08em] md:text-4xl">Contact</h2>
          <div className="mt-6 space-y-1 text-sm font-semibold text-silver/85">
            <p>
              Email:{" "}
              <a className="text-lime hover:underline" href="mailto:mail@jerryvsan.com">
                mail@jerryvsan.com
              </a>
            </p>
            <p>Phone: available</p>
          </div>
        </div>

        <div className="border border-silver/20 bg-charcoal/40 p-6">
          <h2 className="font-display text-2xl uppercase tracking-[0.08em] md:text-4xl">
            Consumer Dispute Resolution / Universal Arbitration Board
          </h2>
          <p className="mt-6 text-sm font-semibold leading-relaxed text-silver/85">
            We are not willing or obliged to participate in dispute resolution proceedings before a consumer
            arbitration board.
          </p>
        </div>

        <div className="border border-silver/20 bg-charcoal/40 p-6">
          <h2 className="font-display text-2xl uppercase tracking-[0.08em] md:text-4xl">
            Liability for Content
          </h2>
          <p className="mt-6 text-sm font-semibold leading-relaxed text-silver/85">
            As a service provider, we are responsible for our own content on these pages in accordance with § 7
            (1) DDG and general laws. According to §§ 8 to 10 DDG, however, we are not obliged to monitor
            transmitted or stored third-party information or to investigate circumstances indicating illegal
            activity.
          </p>
          <p className="mt-4 text-sm font-semibold leading-relaxed text-silver/85">
            Obligations to remove or block the use of information under general laws remain unaffected. Liability
            in this regard is only possible from the time of knowledge of a specific infringement. If we become
            aware of any such infringements, we will remove the content immediately.
          </p>
        </div>

        <div className="border border-silver/20 bg-charcoal/40 p-6">
          <h2 className="font-display text-2xl uppercase tracking-[0.08em] md:text-4xl">Copyright</h2>
          <p className="mt-6 text-sm font-semibold leading-relaxed text-silver/85">
            The content and works created by the site operator on these pages are subject to German copyright law.
            Reproduction, processing, distribution, and any kind of exploitation outside the limits of copyright
            require the written consent of the respective author or creator.
          </p>
          <p className="mt-4 text-sm font-semibold leading-relaxed text-silver/85">
            Downloads and copies of this site are permitted for private, non-commercial use only. Insofar as the
            content on this site was not created by the operator, third-party copyrights are respected. In
            particular, third-party content is marked as such. Should you nevertheless become aware of a copyright
            infringement, please notify us accordingly. If we become aware of infringements, we will remove such
            content immediately.
          </p>
        </div>
      </section>

      <Link
        href="/en"
        className="mt-12 inline-flex border border-silver/25 bg-charcoal/40 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-silver hover:text-lime transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}

