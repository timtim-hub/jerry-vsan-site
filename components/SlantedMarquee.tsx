"use client";

import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import { useLayoutEffect, useMemo, useRef, useState } from "react";

type RowProps = {
  words: string[];
  direction: 1 | -1;
  rotation: number;
  pxPerSecond: number;
  outlined?: boolean;
};

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  if (range === 0) return min;
  return ((((v - min) % range) + range) % range) + min;
}

function MarqueeRow({ words, direction, rotation, pxPerSecond, outlined = false }: RowProps) {
  const reduceMotion = useReducedMotion();
  // Repeat enough times to avoid visible gaps on ultra-wide viewports.
  const repeated = useMemo(() => {
    const out: string[] = [];
    for (let i = 0; i < 6; i++) out.push(...words);
    return out;
  }, [words]);

  const baseX = useMotionValue(0);
  const segmentRef = useRef<HTMLDivElement | null>(null);
  const [segmentWidth, setSegmentWidth] = useState(0);

  useLayoutEffect(() => {
    if (!segmentRef.current) return;
    const el = segmentRef.current;
    const ro = new ResizeObserver(() => setSegmentWidth(el.getBoundingClientRect().width));
    ro.observe(el);
    setSegmentWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;
    if (!segmentWidth) return;
    const moveBy = (direction * pxPerSecond * delta) / 1000;
    baseX.set(wrap(-segmentWidth, 0, baseX.get() + moveBy));
  });

  return (
    <div
      className="origin-center overflow-hidden border-y-2 border-charcoal bg-paper will-change-transform"
      style={reduceMotion ? undefined : { transform: `rotate(${rotation}deg)` }}
    >
      <motion.div
        className="flex min-w-max items-center"
        style={reduceMotion ? undefined : { x: baseX }}
        data-marquee-track
      >
        <div ref={segmentRef} className="flex min-w-max items-center gap-6 py-5 leading-none">
          {repeated.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={[
                "font-display text-3xl uppercase tracking-[0.24em] md:text-5xl",
                // Premium white band: mostly black ink, with one red hollow row.
                outlined
                  ? "comic-outline comic-thin comic-hollow comic-stroke-red"
                  : "text-charcoal"
              ].join(" ")}
            >
              {word}
            </span>
          ))}
        </div>
        <div aria-hidden className="flex min-w-max items-center gap-6 py-5 leading-none">
          {repeated.map((word, index) => (
            <span
              key={`dup-${word}-${index}`}
              className={[
                "font-display text-3xl uppercase tracking-[0.24em] md:text-5xl",
                outlined
                  ? "comic-outline comic-thin comic-hollow comic-stroke-red"
                  : "text-charcoal"
              ].join(" ")}
            >
              {word}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

type SlantedMarqueeProps = {
  rows: string[][];
};

export function SlantedMarquee({ rows }: SlantedMarqueeProps) {
  const safeRows =
    rows.length > 0
      ? rows
      : [["JERRY VSAN", "COMEDIAN AUS KÖLN", "TRY OUT TOUR 2026", "NIGHTWASH LIVE"]];

  return (
    <section aria-label="Marquee" className="relative z-20 -mt-3 space-y-2 pb-6">
      {safeRows.map((words, index) => (
        <MarqueeRow
          key={`marquee-row-${index}`}
          words={words}
          direction={index % 2 === 0 ? -1 : 1}
          rotation={index % 2 === 0 ? -3 + index : 3 - index}
          pxPerSecond={70 + index * 12}
          outlined={index % 2 === 1}
        />
      ))}
    </section>
  );
}
