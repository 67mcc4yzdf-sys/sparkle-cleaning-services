import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";
import { business } from "@/lib/business";
import Reveal from "./Reveal";

export default function AboutSparkle() {
  return (
    <section className="section bg-[#fffaf4]" id="about">
      <div className="shell grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-8 border-white shadow-xl shadow-pink-100">
            <Image src={business.images.team} alt="Fresh, cozy home interior" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-5 left-6 rounded-3xl border border-pink-100 bg-white px-5 py-4 shadow-lg">
            <p className="font-[var(--font-accent)] text-2xl leading-none text-[var(--primary)]">{business.tagline}</p>
          </div>
        </Reveal>
        <Reveal delay={.08}>
          <span className="eyebrow"><Sparkles size={14} />The pressure-off clean</span>
          <h2 className="max-w-2xl font-[var(--font-display)] text-3xl font-extrabold leading-[1.12] tracking-[-.035em] text-ink sm:text-4xl lg:text-5xl">{business.about.heroTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">{business.about.story}</p>
          <div className="mt-8 rounded-[1.75rem] border border-pink-100 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-pink-100 text-[var(--primary)]"><Heart size={22} /></span>
              <div>
                <h3 className="font-extrabold">{business.about.ownerHeading}</h3>
                <p className="mt-2 leading-7 text-slate-600">{business.about.ownerText}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
