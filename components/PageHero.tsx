"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function PageHero({ eyebrow, title, description, showCta = true }: { eyebrow: string; title: string; description: string; showCta?: boolean }) {
  return <section className="border-b border-slate-200 bg-[#f5f3ee] py-16 sm:py-20">
    <div className="shell text-left">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow">{eyebrow}</motion.span>
      <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .05, duration: .45 }} className="text-balance max-w-4xl font-[var(--font-display)] text-4xl font-extrabold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-6xl">{title}</motion.h1>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .45 }} className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</motion.p>
      {showCta && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }}><Link href="/contact#quote" className="button-primary mt-8">Request a Free Quote <ArrowRight size={17} /></Link></motion.div>}
    </div>
  </section>;
}
