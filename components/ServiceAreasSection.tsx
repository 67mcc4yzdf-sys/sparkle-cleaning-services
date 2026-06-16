import Link from "next/link";
import { MapPin } from "lucide-react";
import { business } from "@/lib/business";
import SectionTitle from "./SectionTitle";

export default function ServiceAreasSection() {
  return <section className="section"><div className="shell"><SectionTitle eyebrow="Local service" title={`Proudly serving ${business.city} and nearby areas`} description="Local cleaning with flexible scheduling across the city." />
    <div className="mx-auto mt-10 grid max-w-4xl border-y border-slate-200 sm:grid-cols-2 lg:grid-cols-4">{business.serviceAreas.map(area => <span key={area} className="flex items-center gap-2 border-b border-slate-200 px-4 py-4 font-bold text-slate-700 sm:border-r"><MapPin size={16} className="text-[var(--secondary)]" />{area}</span>)}</div>
    <div className="mx-auto mt-10 max-w-2xl border-l-2 border-[var(--secondary)] px-6 py-2 text-left"><p className="font-semibold text-slate-700">Not sure if we serve your area? Send a quick message and we’ll confirm.</p><Link href="/contact" className="mt-3 inline-block text-sm font-extrabold text-[var(--primary)]">Check your area →</Link></div>
  </div></section>;
}
