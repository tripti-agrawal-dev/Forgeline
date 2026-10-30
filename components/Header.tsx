"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [["Home", "#hero"], ["Services", "#services"], ["Process", "#process"], ["Technology", "#tech"], ["Assistant", "#assistant"], ["FAQ", "#faq"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("#hero");
  useEffect(() => {
    const f = () => setSolid(scrollY > 24);
    f(); addEventListener("scroll", f, { passive: true });
    const o = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive("#" + e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    links.forEach(([, h]) => { const el = document.getElementById(h.slice(1)); if (el) o.observe(el); });
    return () => { removeEventListener("scroll", f); o.disconnect(); };
  }, []);
  const cls = (h: string) => `rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-widest transition-colors ${
    solid ? (active === h ? "bg-ink text-white" : "text-ink/70 hover:text-ink") : (active === h ? "bg-white/15 text-white" : "text-white/75 hover:text-white")}`;
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-200 ${solid ? "border-b border-ink/10 bg-white/85 text-ink backdrop-blur-xl" : "border-b border-transparent text-white"}`}>
      <div className="mx-auto flex h-16 max-w-wrap items-center justify-between px-5 md:h-20 md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <a href="#hero" aria-label="Forgeline home" className="flex items-center gap-2 text-lg font-bold tracking-tight"><Hexagon className={`size-6 ${solid ? "text-accent" : "text-emerald-300"}`} aria-hidden />Forgeline</a>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map(([l, h]) => <a key={l} href={h} aria-current={active === h ? "true" : undefined} className={cls(h)}>{l}</a>)}
        </nav>
        <div className="flex items-center justify-end gap-2">
          <Button asChild className={`hidden h-11 sm:inline-flex ${solid ? "" : "bg-white text-ink hover:bg-emerald-200"}`}><a href="#contact">Get Started</a></Button>
          <button className={`grid size-11 place-items-center rounded-full border lg:hidden ${solid ? "border-ink/20" : "border-white/30"}`} aria-expanded={open} aria-controls="mnav" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mnav" aria-label="Mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-ink/10 bg-white text-ink lg:hidden">
            <div className="flex flex-col gap-1 p-4">
              {links.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-lg font-semibold hover:bg-ink/5">{l}</a>)}
              <Button asChild className="mt-3"><a href="#contact" onClick={() => setOpen(false)}>Get Started</a></Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
