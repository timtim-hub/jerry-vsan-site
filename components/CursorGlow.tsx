"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-150);
  const y = useMotionValue(-150);
  const smoothX = useSpring(x, { stiffness: 120, damping: 22, mass: 0.3 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 22, mass: 0.3 });

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const move = (event: MouseEvent) => {
      x.set(event.clientX - 140);
      y.set(event.clientY - 140);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [reduceMotion, x, y]);

  if (reduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-10 h-64 w-64 rounded-full"
      style={{
        x: smoothX,
        y: smoothY,
        background:
          "radial-gradient(circle, rgba(255,46,46,0.16) 0%, rgba(217,217,217,0.08) 45%, rgba(15,15,18,0) 100%)",
        filter: "blur(10px)"
      }}
    />
  );
}
