"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollFX() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to("#progress", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });
      gsap.to("#hero-inner", { yPercent: -14, opacity: 0.15, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true } });
      gsap.to("#hero-3d", { yPercent: 18, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true } });
      gsap.fromTo("#quote", { opacity: 0.15, y: 60 }, { opacity: 1, y: 0, ease: "none", scrollTrigger: { trigger: "#quote", start: "top 90%", end: "top 40%", scrub: true } });
    });
    return () => ctx.revert();
  }, []);
  return <div id="progress" className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand to-accent" aria-hidden />;
}
