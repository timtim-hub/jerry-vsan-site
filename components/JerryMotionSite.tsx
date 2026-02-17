"use client";

import { SlantedMarquee } from "@/components/SlantedMarquee";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { copyByLocale, socials, tour2026, type Locale, youtube } from "@/lib/i18n";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function usePointerGlow(reduceMotion: boolean) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.25 });
  const smoothY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.25 });

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduceMotion, x, y]);

  return { smoothX, smoothY };
}

function CursorGlow({ reduceMotion }: { reduceMotion: boolean }) {
  const { smoothX, smoothY } = usePointerGlow(reduceMotion);
  if (reduceMotion) return null;

  return (
    <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[5]">
      <motion.div
        className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          left: smoothX,
          top: smoothY,
          background:
            "radial-gradient(circle at 30% 30%, rgba(180,255,0,0.25), rgba(0,240,255,0.12), rgba(255,46,46,0.06), transparent 65%)"
        }}
      />
    </motion.div>
  );
}

function WordStagger({
  text,
  className,
  reduceMotion
}: {
  text: string;
  className?: string;
  reduceMotion: boolean;
}) {
  const words = useMemo(() => text.split(" ").filter(Boolean), [text]);
  return (
    <span className={className}>
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className="inline-block will-change-transform"
          initial={reduceMotion ? false : { y: 18, opacity: 0, rotate: -2 }}
          whileInView={reduceMotion ? { opacity: 1 } : { y: 0, opacity: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}

function Header({ locale }: { locale: Locale }) {
  const copy = copyByLocale[locale];
  const other = locale === "de" ? "en" : "de";
  const otherHref = other === "de" ? "/" : "/en";

  return (
    <header className="sticky top-0 z-[80] border-b border-silver/20 bg-charcoal/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href={locale === "de" ? "/" : "/en"}
          className="group relative inline-flex items-center gap-2 py-2 font-display text-lg tracking-[0.18em] text-silver"
        >
          <span className="uppercase">Jerry Vsan</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="glasses-nav"
            src="/glasses-nav.gif"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-full ml-1 h-6 w-auto opacity-100 scale-100 transition-all duration-500"
            loading="lazy"
            style={{ transition: "opacity 0.5s, transform 0.5s" }}
          />
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label={locale === "de" ? "Hauptnavigation" : "Main"}>
          {[
            ["#about", copy.nav.about],
            ["#tour", copy.nav.tour],
            ["#features", copy.nav.features],
            ["#media", copy.nav.media],
            ["#press", copy.nav.press],
            ["#contact", copy.nav.contact]
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="relative px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-silver/70 transition-colors hover:text-silver"
            >
              <span className="absolute left-2 top-1/2 h-[2px] w-0 -translate-y-1/2 bg-red transition-all duration-300 hover:w-2" />
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={otherHref}
            className="inline-flex items-center justify-center border border-silver/30 bg-charcoal px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-silver transition-colors hover:border-lime/80 hover:text-lime"
            aria-label={copy.nav.languageSwitch}
          >
            {copy.nav.languageSwitch}
          </Link>
        </div>
      </div>
    </header>
  );
}

function Section({
  id,
  title,
  children,
  reduceMotion
}: {
  id: string;
  title: React.ReactNode;
  children: React.ReactNode;
  reduceMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-15% 0px -15% 0px", amount: 0.2 });
  return (
    <section id={id} className="relative scroll-mt-24">
      <motion.div
        ref={ref}
        initial={reduceMotion ? false : { opacity: 0, y: 18, rotate: -0.3 }}
        animate={reduceMotion ? { opacity: 1 } : inView ? { opacity: 1, y: 0, rotate: 0 } : undefined}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6"
      >
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-silver/20 pb-6">
          <h2 className="font-display text-4xl uppercase tracking-[0.08em] text-silver md:text-6xl">
            {title}
          </h2>
          <div className="hidden md:block h-px w-24 bg-red/80" />
        </div>
        {children}
      </motion.div>
    </section>
  );
}

function TourSlider({ locale, reduceMotion }: { locale: Locale; reduceMotion: boolean }) {
  const copy = copyByLocale[locale];
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const [constraints, setConstraints] = useState({ left: -1, right: 0 });
  const snap = 360;

  useEffect(() => {
    const update = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;
      const max = viewport.clientWidth - track.scrollWidth;
      setConstraints({ left: Math.min(0, max), right: 0 });
      x.set(clamp(x.get(), Math.min(0, max), 0));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [x]);

  return (
    <div ref={viewportRef} className="relative overflow-hidden">
      <motion.div
        ref={trackRef}
        className="flex gap-4 will-change-transform"
        style={{ x }}
        drag={reduceMotion ? false : "x"}
        dragElastic={0.06}
        dragConstraints={constraints}
        dragMomentum={!reduceMotion}
        onDragEnd={() => {
          if (reduceMotion) return;
          const current = x.get();
          const snapped = Math.round(current / snap) * snap;
          const clamped = clamp(snapped, constraints.left, constraints.right);
          animate(x, clamped, { type: "spring", stiffness: 260, damping: 28, mass: 0.55 });
        }}
      >
        {tour2026.map((stop) => (
          <motion.a
            key={stop.city}
            href={stop.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-[320px] shrink-0 border border-silver/25 bg-charcoal/60 p-5 backdrop-blur md:w-[340px]"
            whileHover={reduceMotion ? undefined : { y: -6, rotate: -0.3 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(255,46,46,0.25),transparent_55%)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-3xl uppercase tracking-[0.08em] text-silver">
                    {stop.city}
                  </p>
                  <p className="mt-2 text-sm font-semibold tracking-wide text-silver/70">
                    {stop.venue}
                  </p>
                </div>
                {stop.soldOut ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-red/50 bg-red/15 px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-red shadow-[0_0_24px_rgba(255,46,46,0.25)]">
                    {copy.tour.soldOut}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-lime/50 bg-lime/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-lime">
                    {copy.tour.tickets}
                  </span>
                )}
              </div>

              <div className="mt-6 space-y-2">
                {stop.dates.map((d) => (
                  <div
                    key={d.isoDate}
                    className="flex items-center justify-between border-t border-silver/15 pt-2 text-sm"
                  >
                    <span className="font-semibold text-silver">{d.label}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-silver/60">
                      {stop.soldOut ? copy.tour.soldOut : copy.tour.tickets}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-silver/80">
                <span className="h-px w-6 bg-lime/80" />
                {copy.tour.tickets}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

function SocialGrid({ reduceMotion }: { reduceMotion: boolean }) {
  const items = [
    { label: "Instagram", url: socials.instagram, accent: "bg-red/70" },
    { label: "TikTok", url: socials.tiktok, accent: "bg-cyan/70" },
    { label: "YouTube", url: socials.youtube, accent: "bg-red/70" },
    { label: "Spotify", url: socials.spotify, accent: "bg-lime/70" },
    { label: "OnlyFans", url: socials.onlyfans, accent: "bg-silver/60" }
  ] as const;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
      {items.map((it, i) => (
        <motion.a
          key={it.label}
          href={it.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden border border-silver/20 bg-charcoal/35 p-5"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduceMotion ? undefined : { y: -4, rotate: -0.15 }}
        >
          <div className="absolute inset-0 opacity-[0.06] bg-grid-lines" />
          <div className={`absolute left-0 top-0 h-full w-1 ${it.accent}`} aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-xl uppercase tracking-[0.18em] text-silver">{it.label}</p>
              <span className="text-xs font-black uppercase tracking-[0.22em] text-silver/70 transition-colors group-hover:text-lime">
                Open
              </span>
            </div>
            <div className="mt-4 h-px w-10 bg-red/80" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}

export function JerryMotionSite({ locale }: { locale: Locale }) {
  const copy = copyByLocale[locale];
  const reduceMotion = useReducedMotion();
  const reduce = !!reduceMotion;

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.18], [1, 1.06]);
  const heroY = useTransform(scrollYProgress, [0, 0.18], [0, -24]);
  const heroTypeY = useTransform(scrollYProgress, [0, 0.22], [0, -16]);

  return (
    <div className="min-h-screen bg-charcoal text-silver">
      <CursorGlow reduceMotion={reduce} />
      <Header locale={locale} />

      <main className="relative">
        <section className="relative">
          <motion.div
            style={reduce ? undefined : { scale: heroScale, y: heroY }}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <Image
                src="/media/jerry-vsan-hero.avif"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center opacity-95"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,15,18,0.55),rgba(15,15,18,0.82))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(255,46,46,0.12),transparent_58%)]" />
              <div className="absolute inset-0 bg-grid-lines opacity-[0.06]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
              <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                <div>
                  <p className="inline-flex items-center gap-3 border border-silver/25 bg-charcoal/40 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-silver/80 backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-lime shadow-[0_0_18px_rgba(180,255,0,0.35)]" />
                    {copy.hero.kicker}
                  </p>

                  <motion.div style={reduce ? undefined : { y: heroTypeY }} className="mt-8">
                    <h1 className="font-display text-6xl uppercase leading-[0.9] tracking-[0.08em] md:text-8xl">
                      <span className="block text-silver comic-outline comic-fat comic-stroke-lime">
                        {copy.hero.headline[0]}
                      </span>
                      <span className="block text-silver comic-outline comic-fat comic-stroke-red">
                        {copy.hero.headline[1]}
                      </span>
                    </h1>
                  </motion.div>

                  <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-silver/85 md:text-xl">
                    {copy.hero.intro}
                  </p>

                  <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#tour"
                      className="group inline-flex items-center justify-center border border-red/50 bg-red/15 px-6 py-4 text-xs font-black uppercase tracking-[0.22em] text-red shadow-[0_0_36px_rgba(255,46,46,0.22)] transition-colors hover:bg-red/20"
                    >
                      {copy.hero.ctaTour}
                      <span className="ml-3 h-px w-6 bg-red transition-all group-hover:w-10" />
                    </a>
                    <a
                      href="#media"
                      className="group inline-flex items-center justify-center border border-silver/30 bg-charcoal/40 px-6 py-4 text-xs font-black uppercase tracking-[0.22em] text-silver transition-colors hover:border-lime/70 hover:text-lime"
                    >
                      {copy.hero.ctaWatch}
                      <span className="ml-3 h-px w-6 bg-lime/70 transition-all group-hover:w-10" />
                    </a>
                    <a
                      href="#tour"
                      className="inline-flex items-center justify-center border border-silver/20 bg-charcoal/30 px-6 py-4 text-xs font-black uppercase tracking-[0.22em] text-silver/80 transition-colors hover:text-silver"
                      aria-label={copy.hero.ctaTickets}
                    >
                      {copy.hero.ctaTickets}
                    </a>
                  </div>
                </div>

                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 18, rotate: 1.5 }}
                  animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="absolute -inset-3 rotate-1 border border-silver/20 bg-[radial-gradient(circle_at_30%_20%,rgba(0,240,255,0.14),transparent_55%)]" />
                  <div className="relative overflow-hidden border border-silver/30 bg-charcoal">
                    <Image
                      src="/media/jerry-vsan-hero.avif"
                      alt="Jerry Vsan – Try Out Tour 2026"
                      width={2560}
                      height={1313}
                      priority
                      className="h-[280px] w-full object-cover md:h-[360px]"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.28em] text-silver/60">
                    <span>{copy.hero.assetLabel}</span>
                    <span className="text-lime/80">LIVE</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="-skew-y-2">
              <SlantedMarquee
                rows={[
                  locale === "de"
                    ? ["COMEDIAN AUS KÖLN", "TRY OUT TOUR", "AUSVERKAUFT", "NIGHTWASH LIVE", "KÖLN ATTITUDE"]
                    : ["COMEDIAN FROM COLOGNE", "TRY OUT TOUR", "SOLD OUT", "NIGHTWASH LIVE", "COLOGNE ATTITUDE"],
                  locale === "de"
                    ? ["BOOKING", "PRESSE", "LINEUPS", "CLIPS", "STREET ENERGY"]
                    : ["BOOKING", "PRESS", "LINEUPS", "CLIPS", "STREET ENERGY"],
                  locale === "de"
                    ? ["JERRY VSAN", "STAND-UP", "SHOW", "TIMING", "PUNCHLINES"]
                    : ["JERRY VSAN", "STAND-UP", "SHOW", "TIMING", "PUNCHLINES"]
                ]}
              />
            </div>
          </div>
        </section>

        <Section
          id="about"
          title={<WordStagger text={copy.about.title} reduceMotion={reduce} />}
          reduceMotion={reduce}
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="space-y-6 text-lg font-semibold leading-relaxed text-silver/85">
              {copy.about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="relative overflow-hidden border border-silver/20 bg-charcoal/40 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,46,46,0.16),transparent_55%)]" />
              <div className="absolute inset-0 opacity-[0.08] bg-grid-lines" />
              <div className="relative">
                <p className="font-display text-2xl uppercase tracking-[0.16em] text-silver">
                  {locale === "de" ? "Kurzprofil" : "Quick profile"}
                </p>
                <div className="mt-6 space-y-3 text-sm font-semibold text-silver/80">
                  <p>
                    <span className="text-silver/60">Origin:</span>{" "}
                    <span className="text-lime">Köln</span>
                  </p>
                  <p>
                    <span className="text-silver/60">Vibe:</span>{" "}
                    <span className="text-silver">Street x High-Production</span>
                  </p>
                  <p>
                    <span className="text-silver/60">Format:</span>{" "}
                    <span className="text-silver">Stand-up</span>
                  </p>
                </div>
                <div className="mt-8 h-px w-16 bg-red/80" />
                <p className="mt-6 text-xs font-mono uppercase tracking-[0.28em] text-silver/60">
                  {locale === "de" ? "Motion-first Website" : "Motion-first site"}
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="tour" title={copy.tour.title} reduceMotion={reduce}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-silver/60">
                {copy.tour.badge}
              </p>
              <p className="max-w-2xl text-lg font-semibold text-silver/80">{copy.tour.intro}</p>
            </div>
            <TourSlider locale={locale} reduceMotion={reduce} />
            <div className="rounded-none border border-silver/15 bg-charcoal/40 p-5 text-sm font-semibold text-silver/75">
              {locale === "de"
                ? "Status: Alle Termine sind laut offizieller Tourseite ausverkauft."
                : "Status: All dates are sold out per the official tour page."}
            </div>
          </div>
        </Section>

        <Section id="features" title={copy.features.title} reduceMotion={reduce}>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="text-lg font-semibold leading-relaxed text-silver/85">
              {copy.features.intro}
            </div>
            <div className="space-y-4">
              {copy.features.bullets.map((b, i) => (
                <motion.div
                  key={b}
                  className="border border-silver/20 bg-charcoal/35 p-5"
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan shadow-[0_0_18px_rgba(0,240,255,0.25)]" />
                    <p className="text-sm font-semibold text-silver/85">{b}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="media" title={copy.media.title} reduceMotion={reduce}>
          <div className="space-y-10">
            <p className="max-w-3xl text-lg font-semibold text-silver/85">{copy.media.intro}</p>

            <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr] md:items-start">
              <YouTubeEmbed
                videoId={youtube.featuredId}
                title="Jerry Vsan | NightWash Live"
                reduceMotion={reduce}
                ctaLabel={copy.media.watchOnYouTube}
              />
              <div className="space-y-4">
                <a
                  href={`https://www.youtube.com/watch?v=${youtube.featuredId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-between border border-silver/25 bg-charcoal/40 px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-silver hover:border-red/60 hover:text-red transition-colors"
                >
                  <span>{copy.media.watchOnYouTube}</span>
                  <span className="text-lime">↗</span>
                </a>
                <SocialGrid reduceMotion={reduce} />
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl uppercase tracking-[0.12em] text-silver">
                {copy.media.gridTitle}
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  { src: "/media/press-0019.jpg", alt: "Jerry Vsan live mit Mikrofon" },
                  { src: "/media/press-0124.jpg", alt: "Jerry Vsan Nahaufnahme während des Auftritts" },
                  { src: "/media/press-9964.jpg", alt: "Jerry Vsan unter dem Spotlight" }
                ].map((img, i) => (
                  <motion.div
                    key={img.src}
                    className="group relative overflow-hidden border border-silver/20 bg-charcoal"
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                    transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={reduce ? undefined : { rotate: -0.25 }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={1400}
                      height={1400}
                      className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,240,255,0.14),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="press" title={copy.press.title} reduceMotion={reduce}>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-lg font-semibold text-silver/85">{copy.press.intro}</p>
              <p className="text-xs font-mono uppercase tracking-[0.28em] text-silver/60">
                {copy.press.note}
              </p>
            </div>
            <div className="space-y-4">
              {copy.press.quotes.map((q, i) => (
                <motion.blockquote
                  key={q.who}
                  className="relative border border-silver/20 bg-charcoal/40 p-6"
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute -left-2 -top-2 h-6 w-6 border border-red/40 bg-red/10" />
                  <p className="text-base font-semibold leading-relaxed text-silver/85">“{q.text}”</p>
                  <footer className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-lime">
                    {q.who}
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" title={copy.contact.title} reduceMotion={reduce}>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="space-y-6">
              <p className="max-w-xl text-lg font-semibold text-silver/85">{copy.contact.intro}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:mail@jerryvsan.com?subject=Anfrage%20Jerry%20Vsan"
                  className="inline-flex items-center justify-center border border-lime/50 bg-lime/10 px-6 py-4 text-xs font-black uppercase tracking-[0.22em] text-lime hover:bg-lime/15 transition-colors"
                >
                  {copy.contact.ctaMail}
                </a>
                <a
                  href="mailto:mail@jerryvsan.com?subject=Booking%20Jerry%20Vsan"
                  className="inline-flex items-center justify-center border border-silver/25 bg-charcoal/30 px-6 py-4 text-xs font-black uppercase tracking-[0.22em] text-silver hover:border-red/60 hover:text-red transition-colors"
                >
                  {copy.contact.ctaBooking}
                </a>
              </div>
            </div>
            <div className="border border-silver/20 bg-charcoal/40 p-6">
              <p className="text-xs font-mono uppercase tracking-[0.28em] text-silver/60">
                {locale === "de" ? "Direktlinks" : "Direct links"}
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3">
                {[
                  ["Instagram", socials.instagram],
                  ["TikTok", socials.tiktok],
                  ["YouTube", socials.youtube],
                  ["Spotify", socials.spotify],
                  ["OnlyFans", socials.onlyfans]
                ].map(([label, url]) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-silver/15 bg-charcoal px-4 py-3 text-sm font-semibold text-silver/80 hover:text-silver transition-colors"
                  >
                    <span>{label}</span>
                    <span className="text-lime">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-silver/20 bg-charcoal">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center">
          <p className="text-xs font-mono uppercase tracking-[0.28em] text-silver/60">
            © {new Date().getFullYear()} Jerry Vsan. {copy.footer.rights}
          </p>
          <Link
            href={locale === "de" ? "/impressum" : "/en/legal"}
            className="text-xs font-black uppercase tracking-[0.22em] text-silver/70 hover:text-silver transition-colors"
          >
            {copy.footer.legal}
          </Link>
        </div>
      </footer>
    </div>
  );
}
