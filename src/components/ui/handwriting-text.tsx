"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export interface HandwritingTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function HandwritingText({ text, className, delay = 0 }: HandwritingTextProps) {
  return (
    <span className={cn("relative inline-block overflow-hidden align-bottom", className)} aria-label={text}>
      <motion.span
        aria-hidden="true"
        className="block whitespace-nowrap font-handwriting"
        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.35 }}
        whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 1.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
      <motion.span
        aria-hidden="true"
        className="absolute bottom-[0.08em] left-0 h-px bg-primary"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
      />
    </span>
  );
}

export default HandwritingText;