"use client";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
  );
}
export function Spot({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("spot rounded-2xl border border-white/10 bg-panel/80 p-7 transition-colors hover:border-white/25", className)}
      onMouseMove={(e) => { const b = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--x", `${e.clientX - b.left}px`); e.currentTarget.style.setProperty("--y", `${e.clientY - b.top}px`); }}>
      <div className="relative">{children}</div>
    </div>
  );
}
