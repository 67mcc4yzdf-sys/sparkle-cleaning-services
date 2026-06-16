import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { business } from "@/lib/business";
import PageHero from "@/components/PageHero";
import { ServiceIcon } from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: `Cleaning Services in ${business.city} | ${business.businessName}`, description: business.tagline };
export default function ServicesPage() {
  return <><PageHero eyebrow="Cleaning for real life" title={business.servicesPage.heroTitle} description={business.servicesPage.heroDescription} showCta={false} />

    <section className="relative overflow-hidden border-b border-slate-200 bg-white lg:min-h-[620px]">
      <div className="absolute inset-y-0 left-0 hidden w-[58%] lg:block">
        <Image src={business.images.team} alt="A small professional cleaning team finishing a kitchen clean" fill sizes="(max-width: 1024px) 100vw, 58vw" className="image-fade-right object-cover" />
      </div>
      <div className="shell relative py-14 lg:flex lg:min-h-[620px] lg:items-center lg:justify-end lg:py-16">
      <div className="max-w-xl lg:w-[47%]">
        <div className="relative -mx-5 mb-10 aspect-[4/3] sm:-mx-8 lg:hidden">
          <Image src={business.images.team} alt="A small professional cleaning team finishing a kitchen clean" fill sizes="100vw" className="object-cover" />
        </div>
        <span className="eyebrow">Not sure what to book?</span>
        <h2 className="font-[var(--font-display)] text-3xl font-extrabold leading-tight tracking-[-.035em] sm:text-4xl">{business.servicesPage.guidanceTitle}</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">{business.servicesPage.guidanceText}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact#quote" className="button-primary">Talk through your clean <ArrowRight size={17} /></Link>
          <a href={`tel:${business.phoneHref}`} className="button-secondary"><Phone size={17} />{business.phone}</a>
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-500">Template team photography should be replaced with a real photo before launch.</p>
      </div>
      </div>
    </section>

    <section className="border-b border-slate-200 bg-slate-50 py-14"><div className="shell grid gap-8 lg:grid-cols-[1fr_.8fr]">
      <div><span className="eyebrow">Pricing approach</span><h2 className="font-[var(--font-display)] text-3xl font-extrabold tracking-[-.035em]">{business.pricing.heading}</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">{business.pricing.explanation}</p><p className="mt-3 text-sm leading-6 text-slate-500">{business.pricing.recurringNote}</p></div>
      <div className="border-l-2 border-[var(--secondary)] bg-white p-6"><h3 className="font-extrabold">Optional add-ons</h3><ul className="mt-4 grid gap-2 sm:grid-cols-2">{business.addOns.map(item => <li key={item} className="flex gap-2 text-sm font-semibold text-slate-700"><Check size={16} className="shrink-0 text-[var(--secondary)]" strokeWidth={3} />{item}</li>)}</ul></div>
    </div></section>

    <section className="section"><div className="shell">
      <div className="mb-12 max-w-2xl"><span className="eyebrow">What we clean</span><h2 className="font-[var(--font-display)] text-3xl font-extrabold tracking-[-.035em] sm:text-4xl">Choose the closest fit. We can adjust the details.</h2></div>
      <div className="divide-y divide-slate-200 border-y border-slate-200">{business.services.map((service, index) => <Reveal key={service.title} delay={index * .035}><article className="grid gap-6 py-9 md:grid-cols-[auto_1fr_1fr] md:items-start md:gap-8">
        <span className="icon-tile size-12"><ServiceIcon name={service.icon} /></span>
        <div>
          <h2 className="font-[var(--font-display)] text-2xl font-extrabold tracking-[-.025em]">{service.title}</h2>
          <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
          <p className="mt-4 text-sm font-bold text-[var(--primary)]">Best for: {service.bestFor}</p>
          <p className="mt-1 text-sm leading-6 text-slate-500">{service.planningNote}</p>
          <p className="mt-4 text-sm font-extrabold text-slate-800">{service.pricingNote}</p>
          {service.recurringAvailable && <p className="mt-2 text-xs font-bold uppercase tracking-[.1em] text-emerald-700">Recurring plans available</p>}
        </div>
        <div className="md:border-l md:border-slate-200 md:pl-8">
          <h3 className="text-xs font-extrabold uppercase tracking-[.14em] text-slate-500">A typical visit can include</h3>
          <ul className="mt-4 grid gap-3">{service.included.map(item => <li key={item} className="flex gap-2.5 text-sm font-semibold text-slate-700"><Check size={16} className="mt-0.5 shrink-0 text-[var(--secondary)]" strokeWidth={3} />{item}</li>)}</ul>
          <Link href={`/contact?service=${encodeURIComponent(service.title)}#quote`} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--primary)]">Ask about this service <ArrowRight size={16} /></Link>
        </div>
      </article></Reveal>)}</div>
    </div></section><CTASection /></>;
}
