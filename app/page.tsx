import Hero3DLoader from "@/components/Hero3DLoader";
import { ArrowRight, AppWindow, Smartphone, Layers, Bot, Cloud, PenTool, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Process from "@/components/Process";
import { Reveal, Spot } from "@/components/motion-kit";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const caps = [[AppWindow, "Web Applications"], [Smartphone, "Mobile Products"], [Layers, "SaaS Platforms"], [Bot, "AI and Automation"], [Cloud, "Cloud and DevOps"], [PenTool, "Product Design"]] as const;
const groups = [
  ["Strategy and design", "Translate user needs into a prioritized product plan"], ["Application engineering", "Build the interfaces, services and data model"],
  ["AI and integration", "Connect systems and introduce evaluated automation"], ["Cloud and modernization", "Plan releases, infrastructure and system change"],
  ["Quality and support", "Test, maintain and extend the software"],
];
const tech = [["Frontend", "Next.js · React · TypeScript"], ["Backend", "Node.js · Python · APIs"], ["Mobile", "React Native · Swift · Kotlin"], ["Data", "PostgreSQL · MongoDB · Redis"], ["Cloud", "AWS · Azure · GCP"], ["AI + DevOps", "LLM evaluation · CI/CD · Observability"]];
const industries = [["SaaS", "Onboarding, permissions and subscription operations"], ["Professional services", "Client intake, approvals and reporting"], ["E-commerce", "Product, inventory and order workflows"]];
const models = ["Fixed Scope", "Time and Materials", "Dedicated Team", "Staff Augmentation", "Discovery Sprint", "Maintenance"];
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
const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">{children}</h2>;
const Sec = ({ id, children }: { id?: string; children: React.ReactNode }) => <section id={id} className="mx-auto max-w-wrap px-4 py-12 md:px-6 md:py-24">{children}</section>;

export default function Home() {
  return (
    <div id="top">
      <div className="bg-brand/20 px-4 py-3 text-center text-sm text-sky-100">Explore how a software project moves from discovery to support. <a href="#process" className="underline underline-offset-4">Our process.</a></div>
      <Header />
      <main id="main">
        <section className="relative overflow-hidden">
          <div className="grid-bg absolute inset-0" aria-hidden />
          <div className="absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-brand/30 blur-[140px]" aria-hidden />
          <div className="relative mx-auto grid max-w-wrap items-center gap-8 px-4 py-14 md:px-6 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-7">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-accent"><ShieldCheck className="size-3.5" aria-hidden />Custom software &amp; product engineering</p>
              <h1 className="grad-text max-w-[12ch] text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Software built around your business.</h1>
              <p className="mt-6 max-w-[620px] text-lg leading-8 text-muted">Turn a product idea or a difficult workflow into a clear development plan. Design, build and maintain web, mobile, SaaS and AI-enabled software around your users, systems and commercial priorities.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild><a href="#contact">Discuss Your Project <ArrowRight className="size-4" aria-hidden /></a></Button>
                <Button asChild variant="outline"><a href="#process">Explore Our Process</a></Button>
              </div>
              <p className="mt-6 text-sm text-muted">Define the scope, delivery responsibilities and next steps before development begins.</p>
            </div>
            <div className="relative h-[320px] sm:h-[440px] lg:col-span-5 lg:h-[520px]"><Hero3DLoader /><span className="absolute bottom-0 right-0 font-mono text-[11px] text-muted">Illustrative product interface</span></div>
          </div>
        </section>

        <Sec>
          <Reveal><H2>From product decisions to production software.</H2><p className="mt-4 text-muted">Choose a starting point based on the problem you need to solve.</p></Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {caps.map(([Icon, l], i) => <Reveal key={l} delay={i * 0.05}><a href="#services" className="group flex min-h-24 items-center gap-4 rounded-xl border border-white/10 bg-panel/60 p-5 transition-all hover:-translate-y-0.5 hover:border-accent/50"><Icon className="size-6 shrink-0 text-accent" aria-hidden /><span className="font-medium">{l}</span></a></Reveal>)}
          </div>
        </Sec>

        <Sec id="value">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5"><H2>Make the important decisions before they become expensive changes.</H2>
              <p className="mt-5 leading-7 text-muted">Clarify who will use the software, which workflows matter first, and how the system will connect to the tools you already use. A documented plan makes scope, trade-offs and acceptance criteria easier to discuss.</p>
              <Button asChild variant="outline" className="mt-7"><a href="#contact">Plan Product Discovery</a></Button></Reveal>
            <div className="grid gap-4 lg:col-span-7">
              {[["Scope", "Who the users are, which workflows ship first, what is deliberately left out."], ["Architecture", "Decisions recorded with their trade-offs, integrations and operating costs."], ["Delivery", "Sprint reviews, tested releases and a planned handover."]].map(([t, d], i) =>
                <Reveal key={t} delay={i * 0.08}><Spot><span className="font-mono text-sm text-accent">0{i + 1}</span><h3 className="mt-2 text-2xl font-semibold">{t}</h3><p className="mt-2 text-muted">{d}</p></Spot></Reveal>)}
            </div>
          </div>
        </Sec>

        <Sec id="services">
          <Reveal><H2>Choose the support your project needs.</H2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {groups.map(([t, d], i) => <Reveal key={t} delay={i * 0.06} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}><Spot className="h-full"><a href="#contact" className="block after:absolute after:inset-0"><h3 className="text-xl font-semibold">{t}</h3><p className="mt-2 text-muted">{d}</p><span className="mt-6 inline-flex items-center gap-1 text-sm text-accent">Learn more <ArrowRight className="size-4" aria-hidden /></span></a></Spot></Reveal>)}
          </div>
        </Sec>

        <Sec id="process">
          <Reveal className="mb-10"><H2>A clear path from discovery to release.</H2><p className="mt-4 max-w-2xl text-muted">Each stage should produce something you can review, from the initial brief to tested software and operating documentation.</p></Reveal>
          <Process />
        </Sec>

        <Sec id="tech">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5"><H2>Choose technology for the job.</H2><p className="mt-5 leading-7 text-muted">The right stack depends on the product, your existing systems, the team maintaining it and the cost of operating it. Review the options and trade-offs before committing.</p></Reveal>
            <dl className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:col-span-7">
              {tech.map(([k, v]) => <div key={k} className="bg-panel p-6"><dt className="font-mono text-sm text-accent">{k}</dt><dd className="mt-2 text-lg">{v}</dd></div>)}
            </dl>
          </div>
        </Sec>

        <Sec id="industries">
          <Reveal><H2>Software shaped by the workflow.</H2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">{industries.map(([t, d], i) => <Reveal key={t} delay={i * 0.08}><Spot className="h-full"><h3 className="text-xl font-semibold">{t}</h3><p className="mt-2 text-muted">{d}</p></Spot></Reveal>)}</div>
          <Reveal><h3 className="mb-4 mt-20 text-2xl font-semibold">A commercial model that fits the work.</h3>
            <ul className="flex flex-wrap gap-3">{models.map((m) => <li key={m} className="rounded-full border border-white/15 px-5 py-2.5 text-[15px] text-white/90">{m}</li>)}</ul></Reveal>
        </Sec>

        <Sec id="faq">
          <div className="mx-auto max-w-[800px]"><Reveal><H2>Practical answers before you reach out.</H2></Reveal>
            <Accordion type="multiple" className="mt-8">{faqs.map(([q, a]) => <AccordionItem key={q} value={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}</Accordion></div>
        </Sec>

        <section id="contact" className="relative mx-4 mb-12 overflow-hidden rounded-3xl border border-white/10 bg-panel md:mx-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(29,78,216,.55),transparent_65%)]" aria-hidden />
          <Reveal className="relative mx-auto max-w-[800px] px-6 py-14 md:py-20 md:text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">Tell us what you’re building.</h2>
            <p className="mt-5 leading-7 text-muted">Share the problem, the stage of your project and any important constraints. Start with a short summary; confidential files can wait until an appropriate sharing arrangement is in place.</p>
            <Button asChild className="mt-8 w-full md:w-auto"><a href="mailto:hello@example.com">Discuss Your Project</a></Button>
          </Reveal>
        </section>
      </main>
      <footer className="border-t border-white/10 px-4 py-10 text-sm text-muted md:px-6"><div className="mx-auto flex max-w-wrap flex-col justify-between gap-4 md:flex-row">
        <p>© 2026 [LEGAL COMPANY NAME]. Forgeline is a placeholder brand.</p>
        <nav aria-label="Legal" className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a><a href="#">Accessibility</a></nav></div></footer>
    </div>
  );
}
