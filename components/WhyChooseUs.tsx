import { Check, Heart } from "lucide-react";
import { business } from "@/lib/business";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function WhyChooseUs() {
  return <section className="section bg-[#fffaf4]" id="why"><div className="shell grid items-center gap-12 lg:grid-cols-2">
    <Reveal><div className="relative overflow-hidden rounded-[2rem] border border-pink-100 bg-white p-8 shadow-xl shadow-pink-100 sm:p-12">
      <Heart className="absolute -right-5 -top-5 text-pink-100" size={96} />
      <span className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.15em] text-[var(--primary)]"><Heart size={14} />{business.whyChooseUs.eyebrow}</span>
      <h2 className="font-[var(--font-display)] text-3xl font-extrabold leading-tight tracking-[-.035em] sm:text-4xl">{business.whyChooseUs.title}</h2>
      <p className="mt-6 text-lg leading-8 text-slate-600">{business.whyChooseUs.description}</p>
      <p className="mt-6 rounded-2xl border border-pink-100 bg-pink-50 p-4 text-sm font-bold leading-6 text-slate-700">{business.whyChooseUs.differentiator}</p>
      <div className="mt-9 flex items-center gap-4 border-t border-pink-100 pt-6">
        <span className="grid size-11 place-items-center rounded-full bg-pink-100 text-lg font-extrabold text-[var(--primary)]">S</span>
        <div><p className="font-bold">{business.whyChooseUs.signatureTitle}</p><p className="text-sm text-slate-500">{business.whyChooseUs.signatureText}</p></div>
      </div>
    </div></Reveal>
    <div><SectionTitle align="left" eyebrow="Trustworthy details" title="Clean, reassuring and professional" description="Everything is designed to feel simple, friendly and easy to book." />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">{business.whyChooseUs.reasons.map((reason, i) => <Reveal key={reason} delay={i * .05} className="flex items-center gap-3 rounded-2xl border border-pink-100 bg-white p-4 shadow-sm"><Check size={18} className="shrink-0 text-[var(--primary)]" strokeWidth={3} /><span className="font-bold text-slate-700">{reason}</span></Reveal>)}</div>
      <div className="mt-8 rounded-[1.5rem] border border-pink-100 bg-white p-5 shadow-sm"><p className="font-extrabold">{business.servicePromise.title}</p><p className="mt-2 text-sm leading-6 text-slate-600">{business.servicePromise.text}</p></div>
    </div>
  </div></section>;
}
