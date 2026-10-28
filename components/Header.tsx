"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
const links = [["Services", "#services"], ["Solutions", "#value"], ["Industries", "#industries"], ["Technologies", "#tech"], ["Process", "#process"], ["Resources", "#faq"]];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => { const f = () => setSolid(scrollY > 24); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${solid ? "border-b border-white/10 bg-ink/75 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-wrap items-center justify-between px-4 md:h-20 md:px-6">
        <a href="#top" aria-label="Forgeline home" className="flex items-center gap-2 text-lg font-semibold tracking-tight"><Hexagon className="size-6 text-accent" aria-hidden />Forgeline</a>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map(([l, h]) => <a key={l} href={h} className="text-[15px] text-muted transition-colors hover:text-white">{l}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden h-11 sm:inline-flex"><a href="#contact">Discuss Your Project</a></Button>
          <button className="grid size-11 place-items-center rounded-lg border border-white/15 lg:hidden" aria-expanded={open} aria-controls="mnav" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mnav" aria-label="Mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/10 bg-ink lg:hidden">
            <div className="flex flex-col gap-1 p-4">
              {links.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-lg hover:bg-white/5">{l}</a>)}
              <Button asChild className="mt-3"><a href="#contact" onClick={() => setOpen(false)}>Discuss Your Project</a></Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
