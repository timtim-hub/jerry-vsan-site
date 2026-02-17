"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";
import { AnimatedWords } from "@/components/AnimatedWords";
import { CursorGlow } from "@/components/CursorGlow";
import { MicroLink } from "@/components/MicroLink";
import {
  copyByLocale,
  featuredVideos,
  glassesGifUrl,
  heroImage,
  managementContact,
  pressImages,
  socialLinks,
  tourDates,
  type Locale
} from "@/lib/site-data";

type MotionSiteProps = {
  locale: Locale;
};

export function MotionSite({ locale }: MotionSiteProps) {
  const copy = copyByLocale[locale];
  const reduceMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();

  const heroContentY = useTransform(scrollY, [0, 700], [0, 120]);
  const heroContentRotate = useTransform(scrollYProgress, [0, 0.22], [0, -1.7]);
  const heroImageScale = useTransform(scrollY, [0, 950], [1, 1.12]);
  const whiteTapeX = useTransform(scrollYProgress, [0, 0.46], ["0%", "-46%"]);
  const whiteTapeRotate = useTransform(scrollYProgress, [0, 0.4], [-2.2, -1.1]);
  const sectionSkew = useTransform(scrollYProgress, [0.34, 0.52, 0.72], [1.1, 0, -0.8]);
  const bgShift = useTransform(scrollYProgress, [0, 1], ["8% 0%", "92% 100%"]);

  const langSwitchHref = locale === "de" ? "/en" : "/";
  const legalHref = locale === "de" ? "/impressum" : "/en/legal";
  const homeHref = locale === "de" ? "/" : "/en";

  const cityTimeline = useMemo(() => {
    return tourDates.reduce<
      Array<{ city: string; venue: string; ticketUrl: string; dates: typeof tourDates }>
    >((acc, event) => {
      const existing = acc.find((entry) => entry.city === event.city);

      if (!existing) {
        acc.push({
          city: event.city,
          venue: event.venue,
          ticketUrl: event.ticketUrl,
          dates: [event]
        });
      } else {
        existing.dates.push(event);
      }

      return acc;
    }, []);
  }, []);

  return (
    <div className="relative overflow-x-clip bg-charcoal text-chrome">
      <CursorGlow />

      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-noise"
        style={{ backgroundPosition: reduceMotion ? "50% 50%" : bgShift }}
      />

      <header className="sticky top-0 z-40 border-b border-chrome/15 bg-charcoal/80 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="relative inline-flex">
            <MicroLink
              href={homeHref}
              className="relative inline-flex font-display text-2xl tracking-[0.14em] text-chrome"
            >
              JERRY VSAN
            </MicroLink>
            <motion.img
              id="glasses-nav"
              src={glassesGifUrl}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="pointer-events-none absolute left-full ml-1 h-6 w-auto opacity-100 scale-100"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: [-5, 5, -5],
                      y: [0, -1, 0]
                    }
              }
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <ul className="hidden items-center gap-5 text-xs uppercase tracking-[0.2em] md:flex">
            <li>
              <a href="#about" className="micro-link">
                {copy.nav.about}
              </a>
            </li>
            <li>
              <a href="#tour" className="micro-link">
                {copy.nav.tour}
              </a>
            </li>
            <li>
              <a href="#features" className="micro-link">
                {copy.nav.features}
              </a>
            </li>
            <li>
              <a href="#media" className="micro-link">
                {copy.nav.media}
              </a>
            </li>
            <li>
              <a href="#press" className="micro-link">
                {copy.nav.press}
              </a>
            </li>
            <li>
              <a href="#contact" className="micro-link">
                {copy.nav.contact}
              </a>
            </li>
          </ul>

          <MicroLink
            href={langSwitchHref}
            className="rounded-full border border-chrome/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-chrome"
          >
            {copy.nav.langSwitch}
          </MicroLink>
        </nav>
      </header>

      <main>
        <section className="relative min-h-[95vh] overflow-hidden px-5 pb-16 pt-14 md:px-8 md:pt-20">
          <motion.div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={reduceMotion ? undefined : { scale: heroImageScale }}
          >
            <Image
              src={heroImage.src}
              alt={heroImage.alt[locale]}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(15,15,18,0.75)_0%,rgba(15,15,18,0.45)_42%,rgba(15,15,18,0.86)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(255,46,46,0.26),transparent_38%)]" />
          </motion.div>

          <motion.div
            className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]"
            style={
              reduceMotion
                ? undefined
                : {
                    y: heroContentY,
                    rotate: heroContentRotate
                  }
            }
          >
            <div>
              <motion.p
                className="mb-6 inline-flex rounded-full border border-chrome/35 bg-black/45 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-chrome"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                {copy.hero.kicker}
              </motion.p>

              <div className="relative">
                <h1 className="hero-type text-[22vw] leading-[0.8] md:text-[13vw]" aria-label={copy.hero.headline}>
                  {copy.hero.headline}
                </h1>
                <span className="hero-ghost" aria-hidden>
                  {copy.hero.headline}
                </span>
              </div>

              <p className="mt-7 max-w-xl text-lg text-chrome/92 md:text-2xl">
                <AnimatedWords text={copy.hero.subline} />
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#tour" className="cta-primary">
                  {copy.hero.ctas.tickets}
                </a>
                <a href="#tour" className="cta-secondary">
                  {copy.hero.ctas.tour}
                </a>
                <a href="#media" className="cta-ghost">
                  {copy.hero.ctas.watch}
                </a>
                <a href="#tour" className="cta-joke">
                  {copy.hero.ctas.joke}
                </a>
              </div>

              <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-chrome/70">
                {locale === "de" ? "*Running Gag. Keine Fake-Versprechen." : "*Running gag. No fake promises."}
              </p>
            </div>

            <motion.aside
              initial={reduceMotion ? false : { opacity: 0, x: 26 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-[2rem] border border-chrome/25 bg-black/50 p-6"
            >
              <p className="mb-5 font-display text-3xl uppercase tracking-[0.12em] text-electric">
                {copy.keyword}
              </p>
              <p className="text-sm leading-relaxed text-chrome/85">
                {locale === "de"
                  ? "Von Musik zur Comedy, von Clubnächten zu ausverkauften Sälen: die Bühne ist sein natürlicher Habitat geworden."
                  : "From music to comedy, from club nights to sold-out rooms: stage became his natural habitat."}
              </p>

              <div className="mt-6 grid gap-3 text-sm">
                {copy.marquee.slice(0, 3).map((item) => (
                  <div key={item} className="rounded-xl border border-chrome/20 bg-black/45 px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        </section>

        <section aria-hidden className="relative z-30 -mt-10 mb-6 px-5 md:px-8">
          <motion.div
            className="white-tape"
            style={
              reduceMotion
                ? undefined
                : {
                    x: whiteTapeX,
                    rotate: whiteTapeRotate
                  }
            }
          >
            {copy.quoteTape.concat(copy.quoteTape).map((line, index) => (
              <span key={`${line}-${index}`} className="white-tape-item">
                {line}
              </span>
            ))}
          </motion.div>
        </section>

        <section id="about" className="section-shell">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
            className="section-card"
          >
            <h2 className="section-heading">
              <AnimatedWords text={copy.about.title} />
            </h2>

            <div className="mt-7 grid gap-6 lg:grid-cols-3">
              {copy.about.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className="rounded-2xl border border-chrome/20 bg-black/30 p-5 text-base leading-relaxed text-chrome/88">
                  {paragraph}
                  {index === 2 ? null : null}
                </p>
              ))}
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-chrome/65">{copy.about.note}</p>
          </motion.div>
        </section>

        <section id="tour" className="section-shell">
          <div className="mb-7">
            <h2 className="section-heading">{copy.tour.title}</h2>
            <p className="mt-3 text-chrome/80">{copy.tour.subtitle}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-electric">{copy.tour.cityIntro}</p>
          </div>

          <motion.ul
            className="timeline-wrap"
            drag={reduceMotion ? false : "x"}
            dragConstraints={{ left: -980, right: 0 }}
            dragElastic={0.14}
            dragMomentum
            style={{ cursor: reduceMotion ? "auto" : "grab" }}
          >
            {cityTimeline.map((city, index) => (
              <motion.li
                key={city.city}
                className="timeline-card"
                initial={reduceMotion ? false : { opacity: 0, y: 36, rotate: -1.5 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={reduceMotion ? undefined : { scale: 1.018, rotate: 0.7 }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-display text-4xl uppercase tracking-[0.08em] text-electric">{city.city}</h3>
                  <span className="sold-out">{copy.tour.soldOut}</span>
                </div>

                <p className="mb-4 text-sm uppercase tracking-[0.14em] text-chrome/70">{city.venue}</p>

                <ul className="space-y-2">
                  {city.dates.map((date) => (
                    <li key={date.id} className="rounded-lg border border-chrome/20 px-3 py-2 text-sm">
                      {date.displayDate[locale]}
                    </li>
                  ))}
                </ul>

                <a
                  href={city.ticketUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full border border-electric/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-electric transition hover:bg-electric hover:text-charcoal"
                >
                  {locale === "de" ? "Zum Ticket-Host" : "Open ticket host"}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </section>

        <section id="features" className="section-shell relative">
          <motion.div
            style={reduceMotion ? undefined : { skewY: sectionSkew }}
            className="section-card border-electric/20 bg-black/28"
          >
            <h2 className="section-heading text-electric">{copy.features.title}</h2>
            <p className="mt-5 max-w-3xl text-lg text-chrome/85">{copy.features.intro}</p>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {copy.features.items.map((item, index) => (
                <motion.li
                  key={item}
                  className="rounded-2xl border border-chrome/20 bg-charcoal/80 p-5"
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>

        <section id="media" className="section-shell">
          <h2 className="section-heading">{copy.media.title}</h2>
          <p className="mt-4 max-w-3xl text-lg text-chrome/80">{copy.media.subtitle}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pressImages.map((image, index) => (
              <motion.figure
                key={image.src}
                className="overflow-hidden rounded-2xl border border-chrome/20 bg-black/42"
                initial={reduceMotion ? false : { opacity: 0, y: 18, rotate: -1.1 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.48, delay: index * 0.06 }}
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </motion.figure>
            ))}
          </div>

          <div className="mt-9 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
            <div className="grid gap-6">
              {featuredVideos.map((video, index) => (
                <motion.article
                  key={video.id}
                  className="overflow-hidden rounded-3xl border border-chrome/25 bg-black/50"
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.64, delay: index * 0.08 }}
                >
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title[locale]}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-3xl uppercase tracking-[0.08em] text-toxic">
                      {video.title[locale]}
                    </h3>
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex text-sm uppercase tracking-[0.15em] text-electric underline-offset-4 hover:underline"
                    >
                      {locale === "de" ? "Auf YouTube öffnen" : "Open on YouTube"}
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="grid gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-card group"
                  style={{
                    backgroundImage: `${social.background}, linear-gradient(120deg, rgba(0,0,0,0.55), rgba(0,0,0,0.75))`
                  }}
                  initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: index * 0.08, duration: 0.48 }}
                  whileHover={reduceMotion ? undefined : { scale: 1.02, x: 5 }}
                >
                  <img src={social.logoUrl} alt="" aria-hidden="true" className="social-icon" loading="lazy" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between text-sm uppercase tracking-[0.18em]">
                      <span>{social.label}</span>
                      <span className="transition group-hover:translate-x-1">↗</span>
                    </div>
                    <p className="mt-2 text-sm text-chrome/85">{social.description[locale]}</p>
                  </div>
                  <img
                    src={social.logoUrl}
                    alt=""
                    aria-hidden="true"
                    className="social-watermark"
                    loading="lazy"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section id="press" className="section-shell">
          <h2 className="section-heading">{copy.press.title}</h2>
          <p className="mt-4 max-w-3xl text-lg text-chrome/80">{copy.press.subtitle}</p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {copy.press.quotes.map((quote, index) => (
              <motion.blockquote
                key={quote.source}
                className="rounded-2xl border border-chrome/20 bg-black/30 p-5"
                initial={reduceMotion ? false : { opacity: 0, y: 30, rotate: -1.1 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.58, delay: index * 0.08 }}
              >
                <p className="text-chrome/90">{quote.text}</p>
                {quote.sourceUrl ? (
                  <a
                    href={quote.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 block text-xs uppercase tracking-[0.2em] text-electric not-italic hover:underline"
                  >
                    {quote.source}
                  </a>
                ) : (
                  <cite className="mt-4 block text-xs uppercase tracking-[0.2em] text-electric not-italic">
                    {quote.source}
                  </cite>
                )}
              </motion.blockquote>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell pb-24">
          <motion.div
            className="section-card border-chrome/22 bg-gradient-to-br from-charcoal via-charcoal to-black"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">{copy.contact.title}</h2>
            <p className="mt-5 text-lg text-chrome/90">{copy.contact.text}</p>
            <a className="cta-primary mt-8" href={`mailto:${managementContact.email}`}>
              {copy.contact.cta}
            </a>

            <div className="mt-8 grid gap-2 text-sm text-chrome/80 md:grid-cols-2">
              <p>{locale === "de" ? "Management:" : "Management:"} {managementContact.name}</p>
              <p>{locale === "de" ? "Rolle:" : "Role:"} {managementContact.role}</p>
              <p>{locale === "de" ? "E-Mail:" : "Email:"} {managementContact.email}</p>
              {copy.contact.quickFacts.map((fact) => (
                <p key={fact}>{fact}</p>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-chrome/15 px-5 py-8 text-xs uppercase tracking-[0.16em] text-chrome/60 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4">
          <p>© 2026 Jerry Vsan</p>
          <div className="flex items-center gap-4">
            <MicroLink href={legalHref} className="micro-link">
              {copy.legal.footerLabel}
            </MicroLink>
            <MicroLink href={langSwitchHref} className="micro-link">
              {copy.nav.langSwitch}
            </MicroLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
