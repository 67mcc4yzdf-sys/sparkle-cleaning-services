"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Check, Heart, Instagram, Sparkles, Star } from "lucide-react";
import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-pink-100 bg-[#fff3f7] lg:min-h-[720px]">
      <div className="absolute left-8 top-20 hidden text-pink-300/50 sm:block"><Sparkles size={34} /></div>
      <div className="absolute bottom-24 left-[46%] hidden text-pink-300/40 lg:block"><Heart size={46} /></div>
      <div className="absolute right-8 top-28 hidden text-white/90 lg:block"><Sparkles size={42} /></div>
      <div className="shell relative z-10 grid gap-10 py-12 sm:py-16 lg:min-h-[720px] lg:grid-cols-[1fr_.92fr] lg:items-center lg:py-20">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-7 inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white/80 px-4 py-2 shadow-sm">
            <Image src="/images/celestial-glow-logo-mark.svg" alt="" width={44} height={44} className="rounded-full" priority />
            <div>
              <p className="font-[var(--font-accent)] text-2xl leading-none text-[var(--primary)]">{business.logoText}</p>
              <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[.2em] text-pink-500">Cleaning Co.</p>
            </div>
          </motion.div>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow"><Heart size={14} />{business.hero.eyebrow}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .6 }} className="font-[var(--font-display)] text-4xl font-extrabold leading-[1.05] tracking-[-.04em] text-ink sm:text-5xl lg:text-6xl">
            {business.hero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }} className="mt-6 max-w-xl text-xl font-semibold leading-8 text-slate-700">{business.hero.lead}</motion.p>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-4 max-w-xl leading-7 text-slate-600">{business.hero.supportingText}</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .28 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#quote" className="button-primary">{business.ctaPrimary} <span aria-hidden>→</span></Link>
            <Link href="/#services" className="button-secondary">View Services</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }} className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
            {business.trustBadges.map((item) => <span key={item} className="flex items-center gap-2 text-sm font-bold text-slate-600"><span className="grid size-5 place-items-center rounded-full bg-white text-[var(--primary)] shadow-sm"><Check size={12} strokeWidth={3} /></span>{item}</span>)}
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }} className="mt-8 flex items-center gap-4 border-t border-pink-200 pt-5">
            <div className="flex text-amber-400">{[1,2,3,4,5].map(n => <Star key={n} size={15} fill="currentColor" />)}</div>
            <p className="text-sm font-bold text-slate-700">{business.hero.reassurance}</p>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .18, duration: .6 }} className="relative">
          <div className="absolute -left-4 -top-4 z-10 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[var(--primary)] shadow-lg shadow-pink-200/50"><Sparkles className="mr-1 inline" size={15} />Local Baldivis clean</div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl shadow-pink-200/70">
            <Image src={business.images.hero} alt="A clean, cozy living room" fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-5 right-6 rounded-3xl border border-pink-100 bg-white/95 px-5 py-4 shadow-xl">
            <p className="font-[var(--font-accent)] text-2xl leading-none text-[var(--primary)]">message to book</p>
          </div>
          <a href={business.socialLinks[0]?.href ?? "#"} target="_blank" rel="noreferrer" className="absolute -bottom-5 left-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#3f2931] px-5 py-3 text-sm font-extrabold text-white shadow-xl shadow-pink-200/70"><Instagram size={17} />{business.instagram}</a>
        </motion.div>
      </div>
    </section>
  );
}
