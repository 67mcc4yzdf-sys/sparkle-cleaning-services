import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/lib/business";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = { title: `Contact & Free Quote | ${business.businessName}`, description: `Request a free cleaning quote in ${business.city}.` };
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service = "" } = await searchParams;
  return <><PageHero eyebrow={`Contact ${business.logoText}`} title="Tell us what you need cleaned" description="Request a free quote or call us directly. We’ll help you choose a practical cleaning plan for your space." showCta={false} />
    <section className="section pt-8"><div className="shell grid items-start gap-10 lg:grid-cols-[.65fr_1fr]"><aside className="space-y-5 lg:sticky lg:top-24">
      <div className="card p-7"><h2 className="font-[var(--font-display)] text-2xl font-extrabold">Contact details</h2><div className="mt-6 space-y-5"><a href={`tel:${business.phoneHref}`} className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-xl bg-amber-50 text-[var(--primary)]"><Phone size={19} /></span><span><small className="block text-slate-500">Call us</small><strong>{business.phone}</strong></span></a>{business.email && <a href={`mailto:${business.email}`} className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-xl bg-amber-50 text-[var(--primary)]"><Mail size={19} /></span><span className="min-w-0"><small className="block text-slate-500">Email us</small><strong className="break-all text-sm">{business.email}</strong></span></a>}<div className="flex items-start gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-amber-50 text-[var(--primary)]"><Clock size={19} /></span><span><small className="block text-slate-500">Business hours</small>{business.businessHours.map(h => <strong key={h} className="block text-sm">{h}</strong>)}</span></div></div></div>
      <div className="rounded-[1.75rem] bg-ink p-7 text-white"><MapPin className="text-[var(--secondary)]" /><h2 className="mt-4 text-xl font-extrabold">Serving {business.city}</h2><p className="mt-3 leading-7 text-slate-300">Send your postal code with your request and we’ll quickly confirm service availability.</p></div>
      <div className="grid min-h-44 place-items-center rounded-[1.75rem] bg-mist text-center"><div><MapPin className="mx-auto text-[var(--primary)]" /><p className="mt-2 text-sm font-bold">Map placeholder</p></div></div>
    </aside><div><h2 className="mb-6 font-[var(--font-display)] text-3xl font-extrabold">Request Your Free Cleaning Quote</h2><QuoteForm initialService={service} /></div></div></section></>;
}
