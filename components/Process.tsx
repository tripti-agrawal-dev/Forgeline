"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const steps = [
  ["Discovery", "Prioritized project brief"], ["Planning", "Scope and backlog"], ["UX/UI", "Reviewable flows and designs"],
  ["Architecture", "Recorded decision log"], ["Development", "Sprint review demos"], ["Testing", "Release evidence"],
  ["Deployment", "Release notes and rollback plan"], ["Monitoring", "Alerts and runbook"], ["Improvement", "Next-release backlog"],
];
export default function Process() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".step", { opacity: 0, y: 40, stagger: 0.08, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: root.current, start: "top 75%" } });
      gsap.fromTo(".bar", { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 60%", scrub: true } });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={root}>
      <div className="mb-10 h-px w-full bg-white/10"><div className="bar h-px origin-left bg-gradient-to-r from-brand to-accent" /></div>
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(([t, a], i) => (
          <li key={t} className="step rounded-2xl border border-white/10 bg-panel/80 p-7">
            <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-2xl font-semibold">{t}</h3>
            <p className="mt-2 text-muted">Artifact: {a}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
