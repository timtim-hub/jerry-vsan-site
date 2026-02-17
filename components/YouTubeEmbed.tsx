"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  reduceMotion: boolean;
  ctaLabel: string;
};

export function YouTubeEmbed({ videoId, title, reduceMotion, ctaLabel }: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;

  return (
    <div className="relative overflow-hidden border border-silver/25 bg-black">
      <div className="aspect-video">
        {loaded ? (
          <iframe
            className="h-full w-full"
            src={src}
            title={title}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <motion.button
            type="button"
            aria-label={ctaLabel}
            className="group relative h-full w-full"
            onClick={() => setLoaded(true)}
            initial={false}
            whileHover={reduceMotion ? undefined : { scale: 1.01 }}
            whileTap={reduceMotion ? undefined : { scale: 0.99 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumb}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,46,46,0.18),transparent_55%)] opacity-80" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,15,18,0.15),rgba(15,15,18,0.78))]" />
            <div className="absolute inset-0 opacity-[0.08] bg-grid-lines" />

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
              <div className="max-w-[70%] text-left">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-silver/70">YouTube</p>
                <p className="mt-1 line-clamp-2 text-sm font-semibold text-silver">{title}</p>
              </div>
              <div className="inline-flex items-center gap-3 border border-silver/25 bg-charcoal/50 px-4 py-3 text-xs font-black uppercase tracking-[0.22em] text-silver backdrop-blur transition-colors group-hover:border-red/60 group-hover:text-red">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red/60 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
                </span>
                Play
              </div>
            </div>
          </motion.button>
        )}
      </div>
    </div>
  );
}
