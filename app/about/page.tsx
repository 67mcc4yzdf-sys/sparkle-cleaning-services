import type { Metadata } from "next";
import { Heart, MessageCircle, ShieldCheck, SlidersHorizontal, UserRound } from "lucide-react";
import { business } from "@/lib/business";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = { title: `About ${business.businessName} | ${business.city} Cleaners` };
const values = [{ icon: Heart, title: "Care in the details", text: "We treat each space with attention and respect." }, { icon: MessageCircle, title: "Clear communication", text: "Simple updates, clear expectations, and responsive support." }, { icon: SlidersHorizontal, title: "Flexible by design", text: "Plans shaped around the way you use your space." }];
export default function AboutPage() {
  return <><PageHero eyebrow="About us" title={business.about.heroTitle} description={business.about.heroDescription} />
    <section className="section"><div className="shell grid items-center gap-12 lg:grid-cols-2"><div><SectionTitle align="left" eyebrow="Our story" title={business.about.storyTitle} description={business.about.story} /><p className="mt-5 leading-8 text-slate-600">{business.about.mission}</p></div><div className="rounded-[2rem] bg-mist p-8 sm:p-12"><ShieldCheck size={40} className="text-[var(--primary)]" /><h2 className="mt-6 font-[var(--font-display)] text-3xl font-extrabold">Trust is earned on every visit</h2><p className="mt-4 leading-8 text-slate-600">Dependable arrival windows, careful work, and open communication help create the consistency clients count on.</p></div></div></section>
    <section className="section bg-mist"><div className="shell"><SectionTitle eyebrow="Our values" title="What guides every clean" /><div className="mt-12 grid gap-5 md:grid-cols-3">{values.map(v => <div className="card p-7" key={v.title}><v.icon className="text-[var(--secondary)]" /><h2 className="mt-5 text-xl font-extrabold">{v.title}</h2><p className="mt-3 leading-7 text-slate-600">{v.text}</p></div>)}</div></div></section>
    <section className="section"><div className="shell grid items-center gap-10 rounded-[2rem] border border-slate-100 p-8 shadow-soft sm:p-12 lg:grid-cols-[auto_1fr]"><span className="grid size-28 place-items-center rounded-full bg-sky-50 text-[var(--primary)]"><UserRound size={48} /></span><div><p className="text-sm font-extrabold uppercase tracking-wider text-[var(--secondary)]">Meet the owner</p><h2 className="mt-2 font-[var(--font-display)] text-3xl font-extrabold">{business.about.ownerHeading}</h2><p className="mt-4 max-w-3xl leading-8 text-slate-600">{business.about.ownerText}</p></div></div></section><CTASection /></>;
}
