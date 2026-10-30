"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Hexagon, ShieldCheck, Sparkles, Target, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceArt } from "@/components/visuals";
import Hero3DLoader from "@/components/Hero3DLoader";
import { asset } from "@/lib/assets";

const A = asset("/images/night-blue.jpg"), B = asset("/images/dark-pair.jpg");

export function Hero() {
  const r = useReducedMotion();
  const word = (t: string, d: number) => (
    <span className="inline-block overflow-hidden align-bottom"><motion.span className="inline-block" initial={r ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] }}>{t}</motion.span></span>
  );
  const thumbs: [string, string, string, string][] = [
    [asset("/images/cloud.jpg"), "50% 40%", "Cloud engineering", "h-24 w-32 sm:h-28 sm:w-40"],
    [asset("/images/saas.jpg"), "30% 50%", "SaaS development", "h-28 w-36 sm:h-36 sm:w-48"],
    [asset("/images/mobile.jpg"), "50% 30%", "Mobile applications", "h-24 w-32 sm:h-28 sm:w-40"],
  ];
  return (
    <section id="hero" className="relative isolate mx-3 mt-3 flex min-h-[calc(100svh-1.5rem)] flex-col overflow-hidden rounded-[28px] md:mx-4 md:mt-4 bg-gradient-to-b from-[#052e22] via-[#0b6b4d] to-[#f4f8f5] pb-8 pt-28 text-white">
      <div className="absolute inset-0 -z-10 opacity-40" style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,.08) 0 1px, transparent 1px 8.33%)" }} aria-hidden />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-[70%] -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[120px]" aria-hidden />
      <div id="hero-3d" className="pointer-events-none absolute inset-x-0 top-8 -z-10 mx-auto h-[65%] max-w-3xl opacity-40 mix-blend-screen" aria-hidden><Hero3DLoader /></div>
      <div id="hero-inner" className="mx-auto flex w-full max-w-wrap flex-1 flex-col items-center justify-center px-4 text-center md:px-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs tracking-wide backdrop-blur"><span className="size-1.5 rounded-full bg-emerald-300" />Forgeline — software product engineering</p>
        <h1 className="mt-7 text-[clamp(2.6rem,9.5vw,8rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
          {word("Design.", 0.1)} {word("Engineer.", 0.25)}<br />{word("Launch.", 0.4)}
        </h1>
        <motion.p initial={r ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 1 }} className="mt-6 max-w-2xl text-lg leading-8 text-white/80">We don’t just build software. We engineer what’s next. Define the scope, delivery responsibilities and next steps before development begins.</motion.p>
        <motion.div initial={r ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild><a href="#contact">Get Started <ArrowUpRight className="size-4" aria-hidden /></a></Button>
          <Button asChild variant="outline" className="border-white/50 text-white hover:border-white hover:bg-white/10"><a href="#process">Explore Our Process</a></Button>
        </motion.div>
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-wrap items-end justify-between gap-4 px-4 md:px-6">
        <a href="#process" className="hidden text-xs font-semibold tracking-widest text-ink/70 md:block">SEE OUR PROCESS</a>
        <div className="mx-auto flex items-end gap-3 md:mx-0">
          {thumbs.map(([src, pos, label, size]) => (
            <a key={label} href="#services" aria-label={label} className={`group relative block overflow-hidden rounded-xl border-2 border-white shadow-xl ${size}`}>
              <Image src={src} alt="" fill sizes="200px" className="object-cover transition-transform duration-500 group-hover:scale-110" style={{ objectPosition: pos }} />
            </a>))}
        </div>
        <a href="#intro" aria-label="Scroll down" className="hidden items-center gap-3 text-xs font-semibold tracking-widest text-ink/70 md:flex">SCROLL DOWN<span className="grid size-9 place-items-center rounded-full bg-ink text-white"><ChevronDown className="size-4" aria-hidden /></span></a>
      </div>
    </section>
  );
}

const svc: [string, string, string?, string?][] = [
  ["AI & Automation", "Connect systems and introduce evaluated automation.", A, "60% 40%"],
  ["Web Development", "Interfaces, services and data models built to be maintained.", B, "35% 50%"],
  ["Mobile Applications", "Products people use every day, from first release onward.", asset("/images/mobile.jpg"), "50% 35%"],
  ["SaaS Development", "Tenancy, billing and onboarding designed together.", asset("/images/saas.jpg"), "30% 50%"],
  ["Cloud Engineering", "Releases, infrastructure and system change, planned.", asset("/images/cloud.jpg"), "50% 40%"],
  ["UI/UX Design", "Flows and interfaces reviewed before engineering begins.", asset("/images/uiux.jpg"), "60% 50%"],
];
export function ServiceCards() {
  const layout = ["lg:col-span-2 lg:row-span-2 min-h-[380px]", "min-h-[260px]", "min-h-[260px]", "min-h-[260px]", "min-h-[260px]", "min-h-[260px]"];
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {svc.map(([t, d, img, pos], i) => (
        <a key={t} href="#contact" className={`group relative isolate flex overflow-hidden rounded-3xl border border-white/10 bg-panel text-white ${layout[i]}`}
          onMouseMove={(e) => { const b = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--x", `${e.clientX - b.left}px`); e.currentTarget.style.setProperty("--y", `${e.clientY - b.top}px`); }}>
          {img ? <Image src={img} alt="" fill sizes="(min-width:1024px) 66vw, 100vw" className="-z-10 object-cover transition-transform duration-700 group-hover:scale-110" style={{ objectPosition: pos }} />
            : <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand/25 via-panel to-panel"><div className="absolute -right-4 -top-2 w-44 opacity-60 transition-transform duration-500 group-hover:scale-110"><ServiceArt i={i} /></div></div>}
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
          <div className="spot-glow pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "radial-gradient(360px circle at var(--x,50%) var(--y,50%),rgba(72,214,232,.16),transparent 60%)" }} />
          <div className="mt-auto flex w-full items-end justify-between gap-4 p-7">
            <div><p className="font-mono text-xs text-emerald-300">0{i + 1}</p><h3 className="font-serif text-2xl md:text-3xl">{t}</h3><p className="mt-2 max-w-sm text-sm text-white/70">{d}</p></div>
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
          <circle r="70" fill="none" stroke="#0f172a" strokeOpacity=".1" />
          {keys.map((c, i) => <line key={c} x2={Math.cos(ang(i)) * 70} y2={Math.sin(ang(i)) * 70} stroke={c === k ? "#047857" : "#07241b"} strokeOpacity={c === k ? 0.9 : 0.15} strokeDasharray="3 3" />)}
        </svg>
        <div className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent/30 bg-white shadow-[0_10px_50px_rgba(4,120,87,.3)]"><Hexagon className="size-9 text-accent" aria-label="Forgeline" /></div>
        {keys.map((c, i) => <button key={c} aria-pressed={c === k} onClick={() => setK(c)} style={{ left: `${50 + Math.cos(ang(i)) * 35}%`, top: `${50 + Math.sin(ang(i)) * 35}%` }}
          className={`absolute min-h-11 -translate-x-1/2 -translate-y-1/2 rounded-full border px-3.5 text-xs transition-all sm:text-sm ${c === k ? "border-accent bg-accent text-white" : "border-ink/15 bg-white text-ink shadow-sm hover:border-accent"}`}>{c}</button>)}
      </div>
      <div aria-live="polite">
        <p className="font-mono text-sm text-accent">{k.toUpperCase()}</p>
        <AnimatePresence mode="wait"><motion.ul key={k} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="mt-4 flex flex-wrap gap-3">
          {cats[k].map((t) => <li key={t} className="rounded-full border border-ink/10 bg-white px-5 py-3 text-lg shadow-sm">{t}</li>)}</motion.ul></AnimatePresence>
        <p className="mt-6 max-w-md text-ink/60">The right stack depends on the product, your existing systems and the team maintaining it. We review the trade-offs before committing.</p>
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
const assistFeatures = [
  { Icon: Zap, a: "Fast", b: "Results" },
  { Icon: Target, a: "Accurate", b: "Suggestions" },
  { Icon: ShieldCheck, a: "Build With", b: "Confidence" },
];
const assistSteps = ["Project Overview", "Key Features", "Tech Stack", "Timeline & Steps"];

function Tick() {
  return <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-white"><Check className="size-3.5" strokeWidth={3} aria-hidden /></span>;
}

export function Assistant() {
  const [v, setV] = useState("");
  const [idea, setIdea] = useState("");
  const [out, setOut] = useState<ReturnType<typeof blueprint> | null>(null);
  const ok = v.trim().length >= 8;
  const submit = () => { if (!ok) return; setIdea(v.trim()); setOut(blueprint(v)); };
  return (
    <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
      <div className="pointer-events-none absolute -right-16 top-1/2 hidden size-[460px] -translate-y-1/2 rounded-full bg-emerald-300/15 blur-[120px] lg:block" aria-hidden />

      <div className="relative">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] tracking-widest text-emerald-200"><span className="size-1.5 rounded-full bg-emerald-300" />PROJECT IDEA ASSISTANT</p>
        <h2 className="mt-5 max-w-xl text-balance font-serif text-4xl font-extrabold leading-[1.05] md:text-6xl">Have an idea? Let’s shape it.</h2>
        <p className="mt-5 max-w-md text-[15px] leading-7 text-white/70">Share what you have in mind and get a starter blueprint with key features, a suggested tech stack and a delivery roadmap.</p>

        <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
          {assistFeatures.map(({ Icon, a, b }) => (
            <li key={a} className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-emerald-200"><Icon className="size-[18px]" aria-hidden /></span>
              <span className="text-xs font-medium leading-4 text-white/80">{a}<br />{b}</span>
            </li>
          ))}
        </ul>

        <form onSubmit={(e) => { e.preventDefault(); submit(); }} className="mt-9 flex items-center gap-2 rounded-full bg-white p-2 pl-5 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
          <label htmlFor="idea" className="sr-only">Describe what you want to build</label>
          <Sparkles className="size-5 shrink-0 text-accent" aria-hidden />
          <input id="idea" value={v} onChange={(e) => setV(e.target.value)} placeholder="I want to build an AI-powered HR management system." className="min-w-0 flex-1 bg-transparent px-1 py-3 text-[15px] text-ink outline-none placeholder:text-ink/40" />
          <button type="submit" disabled={!ok} aria-label="Generate Blueprint" className="grid size-12 shrink-0 place-items-center rounded-full bg-ink text-white transition-all hover:bg-accent active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"><ArrowRight className="size-5" aria-hidden /></button>
        </form>
        <div className="mt-3 flex items-center justify-between gap-4 pl-5">
          <p className="text-xs text-white/55">A quick preview built in your browser. Nothing is sent anywhere.</p>
          <p className="hidden -rotate-3 items-center gap-1 font-serif text-sm italic text-emerald-200 sm:flex" aria-hidden>Big ideas start here <ArrowRight className="size-4" /></p>
        </div>
      </div>

      <div className="relative rounded-3xl border border-white/30 bg-white/95 p-6 text-ink shadow-[0_30px_80px_rgba(0,0,0,.45)] backdrop-blur md:p-7" aria-live="polite">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-lg font-semibold">Your Project Blueprint</p>
          {out && <button type="button" onClick={() => { setOut(null); setV(""); setIdea(""); }} aria-label="Clear blueprint" className="grid size-8 place-items-center rounded-full text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink"><X className="size-4" aria-hidden /></button>}
        </div>
        {!out ? (
          <>
            <ul className="space-y-4">{assistSteps.map((s) => <li key={s} className="flex items-center gap-3 text-[15px]"><Tick />{s}</li>)}</ul>
            <p className="mt-6 border-t border-ink/10 pt-4 text-sm text-ink/50">Your product blueprint will appear here.</p>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5 text-[15px]">
            <div><p className="flex items-center gap-3 font-semibold"><Tick />Project Overview</p><p className="mt-2 pl-9 text-ink/70">{idea}</p></div>
            <div><p className="flex items-center gap-3 font-semibold"><Tick />Key Features</p><ul className="mt-2 list-disc space-y-1 pl-14 text-ink/70">{out.modules.map((m) => <li key={m}>{m}</li>)}</ul></div>
            <div><p className="flex items-center gap-3 font-semibold"><Tick />Tech Stack</p><p className="mt-2 pl-9 text-ink/70">{out.tech.join(" · ")}</p></div>
            <div><p className="flex items-center gap-3 font-semibold"><Tick />Timeline &amp; Steps</p><p className="mt-2 pl-9 text-ink/70">{out.phases.join(" → ")}</p></div>
            <div className="border-t border-ink/10 pt-4"><p className="font-mono text-xs text-accent">QUESTIONS TO SCOPE IT</p><ul className="mt-2 list-disc space-y-1 pl-5 text-ink/70">{out.q.map((m) => <li key={m}>{m}</li>)}</ul></div>
            <Button asChild><a href="#contact">Discuss This Project With Us <ArrowUpRight className="size-4" aria-hidden /></a></Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
