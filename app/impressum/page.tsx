import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Hinweise zur Website von Jerry Vsan."
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-5 py-16 text-silver md:px-8">
      <h1 className="font-display text-5xl uppercase tracking-[0.08em] md:text-7xl">Impressum</h1>

      <section className="mt-10 space-y-10">
        <div className="border border-silver/20 bg-charcoal/40 p-6">
          <h2 className="font-display text-2xl uppercase tracking-[0.08em] md:text-4xl">
            Angaben gemäß § 5 DDG
          </h2>
          <div className="mt-6 space-y-1 text-sm font-semibold text-silver/85">
            <p>Jeremi Winter</p>
            <p>c/o Impressumservice Dein-Impressum, Stettiner Straße 41</p>
            <p>35410 Hungen</p>
            <p className="mt-4 text-silver/70">Bitte versenden Sie keine Pakete an dieser Adresse.</p>
          </div>
        </div>

        <div className="border border-silver/20 bg-charcoal/40 p-6">
          <h2 className="font-display text-2xl uppercase tracking-[0.08em] md:text-4xl">Kontakt</h2>
          <div className="mt-6 space-y-1 text-sm font-semibold text-silver/85">
            <p>
              E-Mail:{" "}
              <a className="text-lime hover:underline" href="mailto:mail@jerryvsan.com">
                mail@jerryvsan.com
              </a>
            </p>
            <p>Telefon: vorhanden</p>
          </div>
        </div>

        <div className="border border-silver/20 bg-charcoal/40 p-6">
          <h2 className="font-display text-2xl uppercase tracking-[0.08em] md:text-4xl">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p className="mt-6 text-sm font-semibold leading-relaxed text-silver/85">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div className="border border-silver/20 bg-charcoal/40 p-6">
          <h2 className="font-display text-2xl uppercase tracking-[0.08em] md:text-4xl">
            Haftung für Inhalte
          </h2>
          <p className="mt-6 text-sm font-semibold leading-relaxed text-silver/85">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="mt-4 text-sm font-semibold leading-relaxed text-silver/85">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
            Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </div>

        <div className="border border-silver/20 bg-charcoal/40 p-6">
          <h2 className="font-display text-2xl uppercase tracking-[0.08em] md:text-4xl">Urheberrecht</h2>
          <p className="mt-6 text-sm font-semibold leading-relaxed text-silver/85">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
            außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers.
          </p>
          <p className="mt-4 text-sm font-semibold leading-relaxed text-silver/85">
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
            gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
            Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
            Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend
            entfernen.
          </p>
        </div>
      </section>

      <Link
        href="/"
        className="mt-12 inline-flex border border-silver/25 bg-charcoal/40 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-silver hover:text-lime transition-colors"
      >
        Zur Startseite
      </Link>
    </main>
  );
}

