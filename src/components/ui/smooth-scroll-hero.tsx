"use client";

import type { ReactNode, RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SmoothScrollHeroProps {
  image: string;
  containerRef: RefObject<HTMLElement | null>;
  children: ReactNode;
}

export default function SmoothScrollHero({ image, containerRef, children }: SmoothScrollHeroProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.35, 0.85],
    ["inset(15% 24% round 28px)", "inset(4% 5% round 12px)", "inset(0% 0% round 0px)"],
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);

  return (
    <motion.div className="sticky top-0 h-dvh overflow-hidden bg-ink" style={{ clipPath }}>
      <motion.img
        src={image}
        alt="A sealed burgundy letter resting in warm evening light"
        width={1536}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ scale }}
      />
      <div className="absolute inset-0 bg-cinematic-overlay" />
      {children}
    </motion.div>
  );
}