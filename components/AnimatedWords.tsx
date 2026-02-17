"use client";

import { motion, useReducedMotion } from "framer-motion";

type AnimatedWordsProps = {
  text: string;
  className?: string;
};

export function AnimatedWords({ text, className }: AnimatedWordsProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="mr-[0.3em] inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{
              duration: 0.6,
              ease: [0.2, 0.65, 0.3, 0.9],
              delay: index * 0.045
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
