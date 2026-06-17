import Link from "next/link";
import { MapPin } from "lucide-react";
import { business } from "@/lib/business";
import SectionTitle from "./SectionTitle";

export default function ServiceAreasSection() {
  return <section className="section bg-[#fffaf4]"><div className="shell"><SectionTitle eyebrow="Areas served" title={`Baldivis, WA and nearby surrounding suburbs`} description="A local cleaning service for homes around Baldivis. Surrounding areas can be edited as the business grows." />
    <div className="mx-auto mt-10 grid max-w-4xl overflow-hidden rounded-[1.75rem] border border-pink-100 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">{business.serviceAreas.map(area => <span key={area} className="flex items-center gap-2 border-b border-pink-100 px-4 py-4 font-bold text-slate-700 sm:border-r"><MapPin size={16} className="text-[var(--secondary)]" />{area}</span>)}</div>
    <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-pink-100 bg-white px-6 py-5 text-left shadow-sm"><p className="font-semibold text-slate-700">Not sure if your suburb is covered? Send a quick message and Celestial Glow will confirm.</p><Link href="/contact#quote" className="mt-3 inline-block text-sm font-extrabold text-[var(--primary)]">Check your area →</Link></div>
  </div></section>;
}
