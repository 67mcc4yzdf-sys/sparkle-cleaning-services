import Link from "next/link";
import { Building2, HardHat, Home, KeyRound, Sparkles, Truck, ArrowRight, Heart } from "lucide-react";
import { business, type Service } from "@/lib/business";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const iconMap = { home: Home, sparkles: Sparkles, truck: Truck, building: Building2, key: KeyRound, hardHat: HardHat };
export function ServiceIcon({ name }: { name: Service["icon"] }) { const Icon = iconMap[name]; return <Icon size={25} />; }

export default function ServicesSection() {
  return <section className="section border-b border-pink-100 bg-white" id="services"><div className="shell">
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <SectionTitle align="left" eyebrow="Our services" title="Fresh cleaning for homes, moves and businesses" description="Choose the service that fits your space, schedule and priorities." />
      <Link href="/services" className="button-secondary shrink-0">Compare services <ArrowRight size={16} /></Link>
    </div>
    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{business.services.map((service, i) =>
      <Reveal key={service.title} delay={(i % 4) * .05} className="group relative overflow-hidden rounded-[1.75rem] border border-pink-100 bg-[#fffafb] p-7 shadow-sm transition hover:-translate-y-1 hover:border-[var(--secondary)] hover:shadow-xl hover:shadow-pink-100">
        <Heart className="absolute right-6 top-6 text-pink-100 transition group-hover:text-pink-200" size={34} />
        <span className="grid size-14 place-items-center rounded-2xl bg-pink-100 text-[var(--primary)] transition group-hover:scale-105">
          <ServiceIcon name={service.icon} />
        </span>
        <h3 className="mt-5 font-[var(--font-display)] text-xl font-extrabold">{service.title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
        <p className="mt-4 text-sm font-bold text-[var(--primary)]">{service.pricingNote}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link href={`/contact?service=${encodeURIComponent(service.title)}#quote`} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[var(--primary)] shadow-sm">Request Quote <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link>
        </div>
      </Reveal>)}
    </div>
  </div></section>;
}
