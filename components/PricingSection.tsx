import Link from "next/link";
import { Heart, Sparkles } from "lucide-react";
import { business } from "@/lib/business";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function PricingSection() {
  return (
    <section className="section bg-[#fff3f7]" id="pricing">
      <div className="shell grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <SectionTitle align="left" eyebrow="Pricing" title={business.pricing.heading} description={business.pricing.explanation} />
          <p className="mt-6 font-[var(--font-accent)] text-3xl text-[var(--primary)]">{business.pricing.footer}</p>
        </Reveal>
        <Reveal delay={.08} className="relative">
          <Sparkles className="absolute -right-3 -top-3 text-white" size={44} />
          <div className="rounded-[2rem] border border-pink-200 bg-white/90 p-6 shadow-2xl shadow-pink-200/60 sm:p-9">
            <div className="mb-7 text-center">
              <p className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-xs font-extrabold uppercase tracking-[.15em] text-[var(--primary)]">How to book <Heart size={14} /></p>
              <p className="mt-3 text-sm font-bold text-slate-500">Send a message with:</p>
            </div>
            <div className="space-y-4">
              {business.pricing.items.map((item) => (
                <div key={item.label} className="flex items-baseline gap-3 text-sm sm:text-base">
                  <span className="font-bold text-slate-700">{item.label}</span>
                  <span className="min-w-6 flex-1 border-b border-dotted border-pink-300" />
                  <span className="text-right font-extrabold text-[var(--primary)]">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#quote" className="button-primary flex-1">{business.ctaPrimary}</Link>
              <a href={business.socialLinks[0]?.href ?? "#"} target="_blank" rel="noreferrer" className="button-secondary flex-1">Message on Instagram</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
