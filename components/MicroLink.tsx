"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type MicroLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    children: ReactNode;
  };

export function MicroLink({ children, className, ...props }: MicroLinkProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Link {...props} className={className}>
      <motion.span
        className="inline-flex"
        whileHover={reduceMotion ? undefined : { scale: 1.04, y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.55 }}
      >
        {children}
      </motion.span>
    </Link>
  );
}
