import { CalendarCheck, ClipboardCheck, Smile } from "lucide-react";
import { business } from "@/lib/business";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const icons = [ClipboardCheck, CalendarCheck, Smile];
export default function HowItWorks() {
  return <section className="section bg-white" id="process"><div className="shell"><SectionTitle eyebrow="How it works" title="Three easy steps to a fresher space" description="A simple process for booking a friendly, reliable clean." />
    <div className="relative mt-14 grid gap-5 md:grid-cols-3">
      {business.process.map((step, i) => { const Icon = icons[i] ?? Smile; return <Reveal key={step.title} delay={i * .1} className="relative rounded-[1.75rem] border border-pink-100 bg-[#fffafb] p-7 text-left shadow-sm">
        <span className="font-[var(--font-display)] text-5xl font-extrabold text-pink-100">0{i + 1}</span>
        <span className="mt-5 grid size-12 place-items-center rounded-2xl bg-pink-100 text-[var(--primary)]"><Icon size={24} /></span>
        <span className="mt-5 block text-xs font-extrabold uppercase tracking-[.15em] text-[var(--secondary)]">Step {i + 1}</span>
        <h3 className="mt-2 font-[var(--font-display)] text-xl font-extrabold">{step.title}</h3><p className="mt-3 leading-7 text-slate-600">{step.text}</p>
      </Reveal>})}
    </div>
  </div></section>;
}
