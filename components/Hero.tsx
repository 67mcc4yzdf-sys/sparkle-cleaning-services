"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Check, Heart, Instagram, Sparkles, Star } from "lucide-react";
import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-pink-100 bg-[radial-gradient(circle_at_top_right,#ffe8f0_0,#fff7fa_36%,#fffaf4_100%)] lg:min-h-[720px]">
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#e9b96d]/20 blur-3xl" />
      <div className="absolute left-8 top-20 hidden text-pink-300/60 sm:block"><Sparkles size={34} /></div>
      <div className="absolute bottom-24 left-[46%] hidden text-pink-300/40 lg:block"><Heart size={46} /></div>
      <div className="absolute right-8 top-28 hidden text-white/90 lg:block"><Sparkles size={42} /></div>
      <div className="shell relative z-10 grid gap-10 py-10 sm:py-16 lg:min-h-[720px] lg:grid-cols-[1fr_.92fr] lg:items-center lg:py-20">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-7 inline-flex max-w-full items-center gap-3 rounded-[2rem] border border-pink-200 bg-white/90 px-3 py-2 pr-5 shadow-lg shadow-pink-100/70">
            <span className="grid size-24 shrink-0 place-items-center rounded-full bg-white p-1.5 shadow-md ring-2 ring-pink-100 sm:size-20">
              <Image src="/images/celestial-glow-original-logo.png" alt="" width={88} height={88} quality={100} className="rounded-full sm:size-[74px]" priority />
            </span>
            <div>
              <p className="font-[var(--font-accent)] text-3xl leading-none text-[var(--primary)]">{business.logoText}</p>
              <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[.22em] text-pink-500">Cleaning Co.</p>
              <p className="mt-1 text-xs font-bold text-slate-500">Warm local cleaning in Baldivis</p>
            </div>
          </motion.div>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow"><Heart size={14} />{business.hero.eyebrow}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .6 }} className="font-[var(--font-display)] text-4xl font-black leading-[1.05] tracking-[-.035em] text-ink sm:text-5xl lg:text-6xl">
            {business.hero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }} className="mt-6 max-w-xl text-xl font-semibold leading-8 text-slate-700">{business.hero.lead}</motion.p>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-4 max-w-xl leading-7 text-slate-600">{business.hero.supportingText}</motion.p>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .24 }} className="mt-5 font-[var(--font-accent)] text-3xl leading-none text-[var(--primary)]">care, detail & a little glow</motion.p>
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
          <div className="absolute -left-4 -top-4 z-10 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[var(--primary)] shadow-lg shadow-pink-200/50"><Sparkles className="mr-1 inline" size={15} />Professional cleaning in Baldivis, WA</div>
          <div className="absolute -right-2 -top-12 z-20 hidden rounded-full bg-white p-2 shadow-2xl shadow-pink-200/70 ring-4 ring-white/80 sm:block lg:-right-7 lg:-top-14">
            <Image src="/images/celestial-glow-original-logo.png" alt="Celestial Glow Cleaning Co. logo" width={150} height={150} quality={100} className="rounded-full" priority />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.25rem] border-8 border-white bg-white shadow-2xl shadow-pink-200/70">
            <Image src={business.images.hero} alt="A clean, cozy living room" fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/30 via-transparent to-[#e9b96d]/20" />
          </div>
          <div className="absolute -bottom-5 right-4 rounded-3xl border border-pink-100 bg-white/95 px-5 py-4 shadow-xl sm:right-6">
            <p className="font-[var(--font-accent)] text-2xl leading-none text-[var(--primary)]">fresh, calm, glowing</p>
          </div>
          <a href={business.socialLinks[0]?.href ?? "#"} target="_blank" rel="noreferrer" className="absolute -bottom-5 left-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#3f2931] px-5 py-3 text-sm font-extrabold text-white shadow-xl shadow-pink-200/70"><Instagram size={17} />{business.instagram}</a>
        </motion.div>
      </div>
    </section>
  );
}
