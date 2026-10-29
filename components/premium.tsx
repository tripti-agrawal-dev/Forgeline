"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronDown, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceArt } from "@/components/visuals";
import Hero3DLoader from "@/components/Hero3DLoader";

const A = "/images/night-blue.jpg", B = "/images/dark-pair.jpg";

export function Hero() {
  const r = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => { if (r) return; const t = setInterval(() => setI((x) => (x + 1) % 2), 9000); return () => clearInterval(t); }, [r]);
  const line = (t: React.ReactNode, d: number) => <span className="block overflow-hidden"><motion.span className="block" initial={r ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: d, ease: [0.22, 1, 0.36, 1] }}>{t}</motion.span></span>;
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-end overflow-hidden pb-24 pt-32 md:items-center md:pb-0">
      {[A, B].map((s, k) => (
        <motion.div key={s} className="absolute inset-0" initial={{ scale: 1 }} animate={{ scale: 1.08, opacity: k === i ? 1 : 0 }} transition={{ scale: { duration: 14, ease: "linear" }, opacity: { duration: 2.5 } }}>
          <Image src={s} alt="" fill priority={k === 0} sizes="100vw" className="object-cover" />
        </motion.div>))}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      <div id="hero-3d" className="pointer-events-none absolute right-[-15%] top-[8%] h-[70%] w-[75%] opacity-40 mix-blend-screen md:right-0 md:top-[10%] md:h-[80%] md:w-1/2 md:opacity-70" aria-hidden><Hero3DLoader /></div>
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        {[20, 40, 60, 80].map((p) => <i key={p} className="absolute inset-y-0 w-px bg-white/[.06]" style={{ left: `${p}%` }} />)}
        <span className="absolute right-8 top-28 font-mono text-[11px] text-white/40">ENGINEERING STUDIO / 01</span>
      </div>
      <div id="hero-inner" className="relative mx-auto w-full max-w-wrap px-4 md:px-6">
        <p className="mb-6 font-mono text-xs tracking-widest text-accent">FORGELINE — ENGINEERING THE FUTURE</p>
        <h1 className="max-w-4xl font-serif text-[2.6rem] leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
          {line("We don’t just build software.", 0.2)}{line(<>We engineer <em className="text-accent">what’s next.</em></>, 0.4)}
        </h1>
        <motion.p initial={r ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="mt-6 max-w-xl text-lg leading-8 text-white/75">Software built around your business. Define the scope, delivery responsibilities and next steps before development begins.</motion.p>
        <motion.div initial={r ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild><a href="#contact">Discuss Your Project <ArrowUpRight className="size-4" aria-hidden /></a></Button>
          <Button asChild variant="outline"><a href="#process">Explore Our Process</a></Button>
        </motion.div>
      </div>
      <a href="#intro" aria-label="Scroll down" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[11px] tracking-widest text-white/60 md:flex">SCROLL<motion.span animate={r ? undefined : { y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}><ChevronDown className="size-5" aria-hidden /></motion.span></a>
    </section>
  );
}

const svc: [string, string, string?, string?][] = [
  ["AI & Automation", "Connect systems and introduce evaluated automation.", A, "60% 40%"],
  ["Web Development", "Interfaces, services and data models built to be maintained.", B, "35% 50%"],
  ["Mobile Applications", "Products people use every day, from first release onward.", "/images/mobile.jpg", "50% 35%"],
  ["SaaS Development", "Tenancy, billing and onboarding designed together.", "/images/saas.jpg", "30% 50%"],
  ["Cloud Engineering", "Releases, infrastructure and system change, planned.", "/images/cloud.jpg", "50% 40%"],
  ["UI/UX Design", "Flows and interfaces reviewed before engineering begins.", "/images/uiux.jpg", "60% 50%"],
];
export function ServiceCards() {
  const layout = ["lg:col-span-2 lg:row-span-2 min-h-[380px]", "min-h-[260px]", "min-h-[260px]", "min-h-[260px]", "min-h-[260px]", "min-h-[260px]"];
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {svc.map(([t, d, img, pos], i) => (
        <a key={t} href="#contact" className={`group relative isolate flex overflow-hidden rounded-3xl border border-white/10 bg-panel ${layout[i]}`}
          onMouseMove={(e) => { const b = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--x", `${e.clientX - b.left}px`); e.currentTarget.style.setProperty("--y", `${e.clientY - b.top}px`); }}>
          {img ? <Image src={img} alt="" fill sizes="(min-width:1024px) 66vw, 100vw" className="-z-10 object-cover transition-transform duration-700 group-hover:scale-110" style={{ objectPosition: pos }} />
            : <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand/25 via-panel to-panel"><div className="absolute -right-4 -top-2 w-44 opacity-60 transition-transform duration-500 group-hover:scale-110"><ServiceArt i={i} /></div></div>}
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
          <div className="spot-glow pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "radial-gradient(360px circle at var(--x,50%) var(--y,50%),rgba(72,214,232,.16),transparent 60%)" }} />
          <div className="mt-auto flex w-full items-end justify-between gap-4 p-7">
            <div><p className="font-mono text-xs text-accent">0{i + 1}</p><h3 className="font-serif text-2xl md:text-3xl">{t}</h3><p className="mt-2 max-w-sm text-sm text-white/70">{d}</p></div>
            <ArrowUpRight className="size-6 shrink-0 text-white/60 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" aria-hidden />
          </div>
        </a>))}
    </div>
  );
}

const steps: [string, string, string, string, string][] = [
  ["Discover", "Understand the problem.", "We map users, workflows and constraints into a prioritized brief.", A, "60% 40%"],
  ["Design", "Shape the experience.", "Flows and interfaces you can review before engineering begins.", B, "30% 50%"],
  ["Engineer", "Build with precision.", "Recorded architecture decisions, sprint demos and tested code.", A, "95% 60%"],
  ["Launch", "Bring the product to life.", "A tested release with acceptance evidence and a rollback plan.", B, "85% 30%"],
  ["Evolve", "Improve what matters.", "Monitoring and a next-release backlog keep the product improving.", A, "5% 50%"],
];
export function Journey() {
  const [a, setA] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  useEffect(() => {
    const o = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setA(Number((e.target as HTMLElement).dataset.i))), { rootMargin: "-45% 0px -45% 0px" });
    refs.current.forEach((r) => r && o.observe(r)); return () => o.disconnect();
  }, []);
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
      <ol className="relative">
        <span className="absolute bottom-8 left-[11px] top-12 hidden w-px bg-ink/10 sm:block"><span className="block h-full w-full origin-top bg-gradient-to-b from-accent to-brand transition-transform duration-700" style={{ transform: `scaleY(${a / (steps.length - 1)})` }} /></span>
        {steps.map(([t, s, d, img, pos], i) => (
          <li key={t} ref={(el) => { refs.current[i] = el; }} data-i={i} className="relative py-8 sm:pl-14 lg:min-h-[62vh]">
            <span className={`absolute left-0 top-11 hidden size-6 rounded-full border-2 transition-colors duration-500 sm:block ${i <= a ? "border-accent bg-accent" : "border-ink/20 bg-ivory"}`} />
            <p className="font-mono text-sm text-ink/50">0{i + 1}</p>
            <h3 className={`font-serif text-5xl transition-opacity duration-500 md:text-6xl ${i === a ? "opacity-100" : "opacity-35"}`}>{t}</h3>
            <p className="mt-3 text-xl">{s}</p><p className="mt-2 max-w-md text-ink/60">{d}</p>
            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl lg:hidden"><Image src={img} alt="" fill sizes="100vw" className="object-cover" style={{ objectPosition: pos }} /></div>
          </li>))}
      </ol>
      <div className="sticky top-28 hidden h-[70vh] self-start overflow-hidden rounded-3xl bg-ink lg:block">
        <AnimatePresence>
          <motion.div key={a} className="absolute inset-0" initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }}>
            <Image src={steps[a][3]} alt="" fill sizes="50vw" className="object-cover" style={{ objectPosition: steps[a][4], filter: `hue-rotate(${a * 10}deg)` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/20" />
          </motion.div>
        </AnimatePresence>
        <p className="absolute bottom-6 left-6 font-mono text-xs tracking-widest text-white">0{a + 1} — {steps[a][0].toUpperCase()}</p>
      </div>
    </div>
  );
}

const cats: Record<string, string[]> = { Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"], Backend: ["Node.js", "Python", "GraphQL", "REST APIs"], Databases: ["PostgreSQL", "MongoDB", "Redis"], Cloud: ["AWS", "Azure", "Google Cloud"], AI: ["LLM integration", "Evaluation", "Vector search"], DevOps: ["Docker", "Kubernetes", "CI/CD", "Terraform"] };
export function Ecosystem() {
  const keys = Object.keys(cats); const [k, setK] = useState("Frontend");
  const ang = (i: number) => (i / keys.length) * 2 * Math.PI - Math.PI / 2;
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="relative mx-auto aspect-square w-full max-w-[460px]">
        <svg viewBox="-100 -100 200 200" className="absolute inset-0" aria-hidden>
          <circle r="70" fill="none" stroke="#fff" strokeOpacity=".08" />
          {keys.map((c, i) => <line key={c} x2={Math.cos(ang(i)) * 70} y2={Math.sin(ang(i)) * 70} stroke={c === k ? "#48d6e8" : "#fff"} strokeOpacity={c === k ? 0.9 : 0.15} strokeDasharray="3 3" />)}
        </svg>
        <div className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent/40 bg-accent/10 shadow-[0_0_60px_rgba(72,214,232,.3)]"><Hexagon className="size-9 text-accent" aria-label="Forgeline" /></div>
        {keys.map((c, i) => <button key={c} aria-pressed={c === k} onClick={() => setK(c)} style={{ left: `${50 + Math.cos(ang(i)) * 35}%`, top: `${50 + Math.sin(ang(i)) * 35}%` }}
          className={`absolute min-h-11 -translate-x-1/2 -translate-y-1/2 rounded-full border px-3.5 text-xs transition-all sm:text-sm ${c === k ? "border-accent bg-accent text-ink" : "border-white/20 bg-ink/80 text-white hover:border-accent/60"}`}>{c}</button>)}
      </div>
      <div aria-live="polite">
        <p className="font-mono text-sm text-accent">{k.toUpperCase()}</p>
        <AnimatePresence mode="wait"><motion.ul key={k} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="mt-4 flex flex-wrap gap-3">
          {cats[k].map((t) => <li key={t} className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-lg">{t}</li>)}</motion.ul></AnimatePresence>
        <p className="mt-6 max-w-md text-white/60">The right stack depends on the product, your existing systems and the team maintaining it. We review the trade-offs before committing.</p>
      </div>
    </div>
  );
}

function blueprint(text: string) {
  const s = text.toLowerCase(), has = (...w: string[]) => w.some((x) => s.includes(x));
  const modules = ["User accounts and roles"], tech = ["React / Next.js", "Node.js", "PostgreSQL"];
  if (has("hr", "employee", "staff", "payroll")) modules.push("Employee management", "Attendance and leave tracking");
  if (has("shop", "store", "commerce", "order", "product")) modules.push("Catalogue and inventory", "Checkout and orders");
  if (has("ai", "assistant", "chatbot", "predict")) { modules.push("AI-assisted workflows with evaluation"); tech.push("Python for AI integrations"); }
  if (has("mobile", "app", "ios", "android")) { modules.push("Mobile-first experience"); tech.push("React Native"); }
  if (has("dashboard", "analytics", "report")) modules.push("Analytics dashboard");
  if (has("book", "appointment", "schedule")) modules.push("Scheduling and reminders");
  modules.push("Admin and reporting");
  return { modules, tech, phases: ["Discovery sprint", "Design and architecture", "Build in reviewed sprints", "Testing and launch"], q: ["Who are the first users?", "Which existing tools must it connect to?", "What must the first release include?"] };
}
export function Assistant() {
  const [v, setV] = useState(""); const [out, setOut] = useState<ReturnType<typeof blueprint> | null>(null);
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <label htmlFor="idea" className="mb-3 block text-lg">Describe what you want to build</label>
        <textarea id="idea" value={v} onChange={(e) => setV(e.target.value)} placeholder="I want to build an AI-powered HR management system." className="min-h-36 w-full rounded-xl border border-white/20 bg-ink/60 p-4 text-white placeholder:text-white/40" />
        <Button className="mt-4 w-full sm:w-auto" disabled={v.trim().length < 8} onClick={() => setOut(blueprint(v))}>Generate Blueprint</Button>
        <p className="mt-3 text-xs text-white/50">A quick preview built in your browser. Nothing is sent anywhere.</p>
      </div>
      <div className="min-h-48 rounded-2xl border border-white/10 bg-ink/50 p-6" aria-live="polite">
        {!out ? <p className="text-white/50">Your product blueprint will appear here.</p> : (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5 text-[15px]">
            <p className="font-serif text-2xl">Your Product Blueprint</p>
            <div><p className="font-mono text-xs text-accent">SUGGESTED MODULES</p><ul className="mt-2 list-disc space-y-1 pl-5">{out.modules.map((m) => <li key={m}>{m}</li>)}</ul></div>
            <div><p className="font-mono text-xs text-accent">POSSIBLE TECHNOLOGIES</p><p className="mt-2">{out.tech.join(" · ")}</p></div>
            <div><p className="font-mono text-xs text-accent">PHASES</p><p className="mt-2">{out.phases.join(" → ")}</p></div>
            <div><p className="font-mono text-xs text-accent">QUESTIONS TO SCOPE IT</p><ul className="mt-2 list-disc space-y-1 pl-5">{out.q.map((m) => <li key={m}>{m}</li>)}</ul></div>
            <Button asChild><a href="#contact">Discuss This Project With Us <ArrowUpRight className="size-4" aria-hidden /></a></Button>
          </motion.div>)}
      </div>
    </div>
  );
}
