import type { Metadata } from "next";
import Link from "next/link";
import { legalAddress } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Pflichtangaben für Jerry Vsan."
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-5 py-16 text-chrome md:px-8">
      <h1 className="font-display text-6xl uppercase tracking-[0.08em] text-electric">Impressum</h1>

      <section className="mt-10 space-y-4 rounded-2xl border border-chrome/20 bg-black/30 p-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.08em]">ANGABEN GEMÄSS § 5 DDG</h2>
        <p className="leading-relaxed">
          {legalAddress.name}
          <br />
          {legalAddress.careOf}, {legalAddress.street}
          <br />
          {legalAddress.zipCity}
        </p>
        <p className="font-semibold">{legalAddress.packageNote}</p>
      </section>

      <section className="mt-6 space-y-4 rounded-2xl border border-chrome/20 bg-black/30 p-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.08em]">KONTAKT</h2>
        <p>
          E-Mail: <a href="mailto:mail@jerryvsan.com" className="micro-link">mail@jerryvsan.com</a>
          <br />
          Telefon: vorhanden
        </p>
      </section>

      <section className="mt-6 space-y-4 rounded-2xl border border-chrome/20 bg-black/30 p-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.08em]">
          VERBRAUCHERSTREITBEILEGUNG / UNIVERSALSCHLICHTUNGSSTELLE
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section className="mt-6 space-y-4 rounded-2xl border border-chrome/20 bg-black/30 p-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.08em]">HAFTUNG FÜR INHALTE</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
          bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
          konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </p>
      </section>

      <section className="mt-6 space-y-4 rounded-2xl border border-chrome/20 bg-black/30 p-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.08em]">URHEBERRECHT</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
        <p>
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit
          die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
          Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
      </section>

      <Link href="/" className="micro-link mt-10 inline-flex text-sm uppercase tracking-[0.14em]">
        Zurück zur Startseite
      </Link>
    </main>
  );
}
