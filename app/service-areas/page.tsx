import type { Metadata } from "next";
import { Map, MapPin } from "lucide-react";
import { business } from "@/lib/business";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = { title: `Service Areas | ${business.businessName}`, description: `Professional cleaning across ${business.city} and nearby areas.` };
export default function ServiceAreasPage() {
  return <><PageHero eyebrow="We come to you" title={`Cleaning Services Across ${business.city} and Nearby Areas`} description="Local residential and commercial cleaning with practical scheduling across the communities we serve." />
    <section className="section pt-8"><div className="shell"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{business.serviceAreas.map(area => <article key={area} className="card p-6"><MapPin className="text-[var(--secondary)]" /><h2 className="mt-5 font-[var(--font-display)] text-xl font-extrabold">{area}</h2><p className="mt-3 text-sm leading-6 text-slate-600">Flexible home, office, deep, and move-out cleaning availability in {area}.</p></article>)}</div>
      <div className="mt-16 grid overflow-hidden rounded-[2rem] bg-mist lg:grid-cols-2"><div className="grid min-h-80 place-items-center bg-[radial-gradient(circle_at_center,_#cce8df_0,_#e8f4f6_42%,_#f4f8fb_72%)] p-8"><div className="text-center"><span className="mx-auto grid size-20 place-items-center rounded-full bg-white text-[var(--primary)] shadow-soft"><Map size={34} /></span><p className="mt-4 font-extrabold">Interactive service map placeholder</p><p className="mt-2 text-sm text-slate-500">Connect Google Maps or embed your preferred map.</p></div></div><div className="p-8 sm:p-12"><span className="eyebrow">Local cleaning support</span><h2 className="font-[var(--font-display)] text-3xl font-extrabold">Cleaning plans built for {business.city} homes and businesses</h2><p className="mt-5 leading-8 text-slate-600">From downtown condos and family homes to offices and short-term rentals, our services can be tailored to the property types and schedules common across {business.city}. Share your postal code and preferred date, and we’ll confirm availability.</p><a href="/contact#quote" className="button-primary mt-7">Check availability</a></div></div>
    </div></section><CTASection /></>;
}
