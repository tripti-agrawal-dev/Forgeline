import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import { Assistant, Ecosystem, Hero, Journey, ServiceCards } from "@/components/premium";
import { Reveal } from "@/components/motion-kit";
import ScrollFX from "@/components/ScrollFX";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  ["Where should a project start?", "Start with the users, workflows and constraints; discovery can turn these into a scoped backlog."],
  ["Can an existing product be improved?", "Begin with access, architecture and dependency review before deciding what to replace."],
  ["How is cost estimated?", "Scope, integrations, delivery capacity and risk inform the proposal."],
  ["Who owns the software?", "Ownership, pre-existing components and third-party licences must be set out in the signed agreement."],
  ["How are changes handled?", "Record the request, assess time and cost, and approve changes before work proceeds."],
  ["Can you sign an NDA?", "Raise confidentiality requirements before sharing restricted materials; availability and wording must be agreed."],
  ["What happens after launch?", "The agreement defines handover, any defect period and ongoing maintenance."],
  ["How do we start?", "Send a short project summary and your preferred contact method."],
];
const wrap = "mx-auto max-w-wrap px-4 md:px-6";
const Eyebrow = ({ children }: { children: React.ReactNode }) => <p className="mb-4 font-mono text-xs tracking-widest text-accent">{children}</p>;

export default function Home() {
  return (
    <div id="top">
      <ScrollFX />
      <Header />
      <main id="main">
        <Hero />

        <section id="intro" className="bg-ivory py-16 text-ink md:py-32"><div className={wrap}>
          <Reveal><p className="mb-4 font-mono text-xs tracking-widest text-ink/50">A PRODUCT ENGINEERING STUDIO</p>
            <h2 className="max-w-5xl text-balance font-serif text-4xl leading-tight md:text-6xl lg:text-7xl">Software built around the work your users need to do.</h2></Reveal>
          <div className="mt-14 grid gap-8 border-t border-ink/15 pt-8 md:grid-cols-3">
            {[["Scope", "Who the users are, which workflows ship first, and what is left out."], ["Architecture", "Decisions recorded with their trade-offs, integrations and running costs."], ["Delivery", "Sprint reviews, a tested release and a planned handover."]].map(([t, d], i) =>
              <Reveal key={t} delay={i * 0.1}><p className="font-mono text-sm text-ink/50">0{i + 1}</p><h3 className="mt-2 font-serif text-3xl">{t}</h3><p className="mt-2 text-ink/65">{d}</p></Reveal>)}
          </div></div></section>

        <section id="services" className="bg-ink py-16 md:py-28"><div className={wrap}>
          <Reveal className="mb-12"><Eyebrow>EXPERTISE</Eyebrow><h2 className="max-w-3xl text-balance font-serif text-4xl md:text-6xl">Expertise that turns complexity into opportunity.</h2></Reveal>
          <ServiceCards /></div></section>

        <section className="relative overflow-hidden bg-[#04060c] py-24 md:py-40">
          <div className="absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[130px]" aria-hidden />
          <Reveal className="relative mx-auto max-w-4xl px-6 text-center">
            <blockquote id="quote" className="text-balance font-serif text-3xl leading-snug md:text-6xl">“Great software isn’t defined by how much code we write. It’s defined by what we make <em className="text-accent">possible</em>.”</blockquote>
            <div className="mt-10 flex items-center justify-center gap-4 font-mono text-xs tracking-widest text-gold"><i className="h-px w-10 bg-gold/60" />FORGELINE PHILOSOPHY<i className="h-px w-10 bg-gold/60" /></div>
            <p className="mt-4 text-white/60">Think deeper. Build smarter. Scale further.</p>
          </Reveal></section>

        <section id="process" className="bg-ivory py-16 text-ink md:py-28"><div className={wrap}>
          <Reveal className="mb-6"><p className="mb-4 font-mono text-xs tracking-widest text-ink/50">FROM IDEA TO IMPACT</p><h2 className="max-w-3xl text-balance font-serif text-4xl md:text-6xl">Every great product starts with a possibility.</h2></Reveal>
          <Journey /></div></section>

        <section id="tech" className="bg-gradient-to-b from-ink to-panel py-16 md:py-28"><div className={wrap}>
          <Reveal className="mb-12"><Eyebrow>TECHNOLOGY</Eyebrow><h2 className="max-w-3xl text-balance font-serif text-4xl md:text-6xl">Built with the right technology. Engineered for what comes next.</h2></Reveal>
          <Ecosystem /></div></section>

        <section id="assistant" className="bg-panel py-16 md:py-28"><div className={wrap}>
          <Reveal className="mb-10"><Eyebrow>PROJECT IDEA ASSISTANT</Eyebrow><h2 className="max-w-3xl text-balance font-serif text-4xl md:text-6xl">Have an idea? Let’s shape it.</h2></Reveal>
          <Assistant /></div></section>

        <section id="faq" className="bg-ink py-16 md:py-28"><div className="mx-auto max-w-[800px] px-4 md:px-6">
          <Reveal><Eyebrow>FAQ</Eyebrow><h2 className="font-serif text-4xl md:text-5xl">Practical answers before you reach out.</h2></Reveal>
          <Accordion type="multiple" className="mt-8">{faqs.map(([q, a]) => <AccordionItem key={q} value={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

        <section id="contact" className="relative isolate overflow-hidden py-28 md:py-44">
          <Image src="/images/dark-pair.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />
          <Reveal className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-balance font-serif text-4xl leading-tight md:text-7xl">Your next big idea deserves <em className="text-gold">extraordinary</em> engineering.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">Whether you’re starting from scratch or transforming an existing product, let’s create technology that moves your business forward.</p>
            <Button asChild className="mt-10 h-14 px-8 text-base"><a href="mailto:hello@example.com">Let’s Build Something Remarkable <ArrowUpRight className="size-5" aria-hidden /></a></Button>
          </Reveal></section>
      </main>
      <footer className="border-t border-white/10 bg-ink px-4 py-10 text-sm text-muted md:px-6"><div className="mx-auto flex max-w-wrap flex-col justify-between gap-4 md:flex-row">
        <p>© 2026 [LEGAL COMPANY NAME]. Forgeline is a placeholder brand.</p>
        <nav aria-label="Legal" className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a><a href="#">Accessibility</a></nav></div></footer>
    </div>
  );
}
