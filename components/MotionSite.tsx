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
  heroShowVideo,
  legalAddress,
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

  const heroY = useTransform(scrollY, [0, 800], [0, 80]);
  const heroScale = useTransform(scrollY, [0, 900], [1, 0.965]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.2], [0, -1]);
  const interludeX = useTransform(scrollYProgress, [0.2, 0.44], ["2%", "-24%"]);
  const distortionSkew = useTransform(scrollYProgress, [0.42, 0.56, 0.7], [-1, 0, 1]);
  const backgroundShift = useTransform(scrollYProgress, [0, 1], ["10% 0%", "90% 100%"]);

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
        className="pointer-events-none fixed inset-0 -z-10 bg-noise"
        style={{ backgroundPosition: reduceMotion ? "50% 50%" : backgroundShift }}
      />

      <header className="sticky top-0 z-30 border-b border-chrome/15 bg-charcoal/85 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <MicroLink href={homeHref} className="font-display text-2xl tracking-[0.12em] text-chrome">
            JERRY VSAN
          </MicroLink>
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
            className="rounded-full border border-chrome/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-chrome"
          >
            {copy.nav.langSwitch}
          </MicroLink>
        </nav>
      </header>

      <main>
        <section className="relative min-h-[92vh] overflow-hidden px-5 pb-14 pt-16 md:px-8 md:pt-24">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 scale-[1.35] md:scale-110">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${heroShowVideo.id}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${heroShowVideo.id}&rel=0&modestbranding=1&iv_load_policy=3&start=11`}
                title={heroShowVideo.title[locale]}
                allow="autoplay; encrypted-media; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/80 to-charcoal" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,46,46,0.2),transparent_35%)]" />
          </div>

          <motion.div
            className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr]"
            style={
              reduceMotion
                ? undefined
                : {
                    y: heroY,
                    scale: heroScale,
                    rotate: heroRotate
                  }
            }
          >
            <div>
              <motion.p
                className="mb-6 inline-flex rounded-full border border-chrome/30 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-chrome"
                initial={reduceMotion ? false : { opacity: 0, y: 15 }}
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

              <p className="mt-8 max-w-xl text-lg text-chrome/90 md:text-2xl">
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
              </div>
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 30 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-[2rem] border border-chrome/25 bg-black/50 p-6"
            >
              <p className="mb-6 font-display text-3xl uppercase tracking-[0.12em] text-electric">
                {copy.keyword}
              </p>
              <p className="text-sm leading-relaxed text-chrome/80">
                {locale === "de"
                  ? "Köln-Attitüde, deutschlandweite Nachfrage. Die Try Out Tour 2026 ging in Rekordzeit auf Sold Out."
                  : "Cologne attitude, nationwide demand. The Try Out Tour 2026 hit sold out in record time."}
              </p>
              <div className="mt-7 space-y-4 text-sm">
                <p className="rounded-xl border border-electric/40 bg-electric/10 px-4 py-3">
                  {locale === "de"
                    ? "Zitatlage aus Pressekit: Szenegrößen bestätigen den Vibe und das Handwerk."
                    : "Press-kit signal: major comedy names validate both vibe and technical craft."}
                </p>
                <p className="rounded-xl border border-chrome/25 bg-black/50 px-4 py-3">
                  {locale === "de"
                    ? "Lineup-Signale: NightWash, Rebell-Umfeld, 1LIVE-Kontext."
                    : "Lineup signals: NightWash, Rebell ecosystem, 1LIVE context."}
                </p>
              </div>
            </motion.div>
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
            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-chrome/88 md:text-2xl">
              {copy.about.text}
            </p>
          </motion.div>
        </section>

        <section className="section-shell relative overflow-hidden py-5">
          <motion.div
            style={reduceMotion ? undefined : { x: interludeX }}
            className="flex w-[165vw] gap-4"
          >
            {copy.marquee.concat(copy.marquee).map((line, index) => (
              <div
                key={`${line}-${index}`}
                className="min-w-[18rem] rounded-2xl border border-chrome/20 bg-black/30 px-6 py-4 font-display text-3xl uppercase tracking-[0.1em] text-chrome/80 md:min-w-[26rem] md:text-5xl"
              >
                {line}
              </div>
            ))}
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
            dragConstraints={{ left: -940, right: 0 }}
            dragElastic={0.15}
            dragMomentum
            style={{ cursor: reduceMotion ? "auto" : "grab" }}
          >
            {cityTimeline.map((city, index) => (
              <motion.li
                key={city.city}
                className="timeline-card"
                initial={reduceMotion ? false : { opacity: 0, y: 35, rotate: -2 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={reduceMotion ? undefined : { scale: 1.02, rotate: 1.5 }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-display text-4xl uppercase tracking-[0.08em] text-electric">
                    {city.city}
                  </h3>
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
                  className="mt-6 inline-flex rounded-full border border-electric/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-electric transition hover:bg-electric hover:text-charcoal"
                >
                  {locale === "de" ? "Zum Ticket-Host" : "Open ticket host"}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </section>

        <section id="features" className="section-shell relative">
          <motion.div
            style={reduceMotion ? undefined : { skewY: distortionSkew }}
            className="section-card border-electric/20 bg-black/25"
          >
            <h2 className="section-heading text-electric">{copy.features.title}</h2>
            <p className="mt-5 max-w-3xl text-lg text-chrome/80">{copy.features.intro}</p>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {copy.features.items.map((item, index) => (
                <motion.li
                  key={item}
                  className="rounded-2xl border border-chrome/20 bg-charcoal/75 p-5"
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

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pressImages.map((image, index) => (
              <motion.figure
                key={image.src}
                className="overflow-hidden rounded-2xl border border-chrome/20 bg-black/40"
                initial={reduceMotion ? false : { opacity: 0, y: 18, rotate: -1.5 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.48, delay: index * 0.06 }}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </motion.figure>
            ))}
          </div>

          <div className="mt-9 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="grid gap-6">
              {featuredVideos.map((video, index) => (
                <motion.article
                  key={video.id}
                  className="overflow-hidden rounded-3xl border border-chrome/25 bg-black/50"
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
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
                  className="group rounded-2xl border border-chrome/25 bg-charcoal/85 px-5 py-4"
                  initial={reduceMotion ? false : { opacity: 0, x: 26 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={reduceMotion ? undefined : { scale: 1.03, x: 5 }}
                >
                  <div className="flex items-center justify-between text-sm uppercase tracking-[0.18em]">
                    <span>{social.label}</span>
                    <span className="text-toxic transition group-hover:translate-x-1">↗</span>
                  </div>
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
                initial={reduceMotion ? false : { opacity: 0, y: 30, rotate: -1.5 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.58, delay: index * 0.08 }}
              >
                <p className="text-chrome/90">{quote.text}</p>
                <cite className="mt-4 block text-xs uppercase tracking-[0.2em] text-electric not-italic">
                  {quote.source}
                </cite>
              </motion.blockquote>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell pb-24">
          <motion.div
            className="section-card border-chrome/20 bg-gradient-to-br from-charcoal via-charcoal to-black"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">{copy.contact.title}</h2>
            <p className="mt-5 text-lg text-chrome/90">{copy.contact.text}</p>
            <a className="cta-primary mt-8" href={`mailto:${legalAddress.email}`}>
              {copy.contact.cta}
            </a>

            <div className="mt-8 grid gap-2 text-sm text-chrome/80">
              <p>{legalAddress.company}</p>
              <p>{legalAddress.type}</p>
              <p>{legalAddress.street}</p>
              <p>{legalAddress.zipCity}</p>
              <p>{legalAddress.email}</p>
              <p>{legalAddress.phone}</p>
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
