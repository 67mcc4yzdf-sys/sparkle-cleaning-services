import { CalendarDays, Check } from "lucide-react";
import { business } from "@/lib/business";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function CleaningPlans() {
  return <section className="section bg-[#faf7f0]"><div className="shell">
    <SectionTitle eyebrow="Flexible cleaning plans" title="Support when and how you need it" description="Choose a schedule that fits your home, business, B&B or changing circumstances." />
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{business.cleaningPlans.map((plan, index) =>
      <Reveal key={plan.title} delay={index * .05} className="rounded-2xl border border-amber-200/70 bg-white p-6">
        <CalendarDays className="text-[var(--secondary)]" size={24} />
        <h3 className="mt-5 text-xl font-extrabold">{plan.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{plan.text}</p>
        <Check className="mt-5 text-[var(--primary)]" size={18} />
      </Reveal>)}
    </div>
  </div></section>;
}
