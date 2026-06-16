import { Baby, HeartHandshake, Home, UserRound } from "lucide-react";
import Link from "next/link";
import { business } from "@/lib/business";
import Reveal from "./Reveal";

const icons = [UserRound, Baby, Home];

export default function CompassionateCleaning() {
  return <section className="section overflow-hidden bg-[var(--primary)] text-white"><div className="shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
    <Reveal>
      <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.16em] text-amber-200"><HeartHandshake size={16} />Compassionate cleaning</span>
      <h2 className="mt-5 font-[var(--font-display)] text-3xl font-extrabold leading-tight tracking-[-.04em] sm:text-5xl">{business.compassionate.title}</h2>
      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">{business.compassionate.description}</p>
      <blockquote className="mt-8 border-l-2 border-[var(--secondary)] pl-5 text-xl font-extrabold text-amber-100">“{business.compassionate.statement}”</blockquote>
      <Link href="/contact#quote" className="button-secondary mt-8 !border-amber-200 !bg-amber-50">Discuss the support you need</Link>
    </Reveal>
    <div className="grid gap-4">{business.compassionate.audiences.map((audience, index) => { const Icon = icons[index] ?? HeartHandshake; return <Reveal key={audience} delay={index * .08} className="flex items-center gap-5 rounded-2xl border border-white/15 bg-white/10 p-6"><span className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--secondary)] text-[var(--primary)]"><Icon size={23} /></span><p className="font-bold leading-6">{audience}</p></Reveal>; })}</div>
  </div></section>;
}
