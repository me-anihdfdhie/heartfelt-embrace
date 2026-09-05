"use client";

import { useCallback, useRef, type ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface ScrollLockedVideoHeroProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollLockedVideoHero({ children, className }: ScrollLockedVideoHeroProps) {
  const stage = useRef<HTMLDivElement>(null);

  const onPointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = stage.current?.getBoundingClientRect();
    if (!bounds || window.matchMedia("(pointer: coarse)").matches) return;
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stage.current?.style.setProperty("--tilt-x", `${-y * 5}deg`);
    stage.current?.style.setProperty("--tilt-y", `${x * 7}deg`);
  }, []);

  const reset = useCallback(() => {
    stage.current?.style.setProperty("--tilt-x", "0deg");
    stage.current?.style.setProperty("--tilt-y", "0deg");
  }, []);

  return (
    <motion.div
      ref={stage}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      className={cn("perspective-stage preserve-stage transition-transform duration-500", className)}
      style={{ rotateX: "var(--tilt-x)", rotateY: "var(--tilt-y)" }}
      initial={{ opacity: 0, y: 28, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}