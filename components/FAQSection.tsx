"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { business } from "@/lib/business";
import SectionTitle from "./SectionTitle";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="section bg-mist"><div className="shell grid gap-12 lg:grid-cols-[.65fr_1fr]">
    <SectionTitle align="left" eyebrow="Good to know" title="Frequently asked questions" description="Clear answers before you book. Contact us anytime if your question is not listed." />
    <div className="border-y border-slate-200">{business.faqs.map((faq, i) => <div key={faq.question} className="border-b border-slate-200 bg-white last:border-b-0">
      <button className="flex w-full items-center justify-between gap-5 p-5 text-left font-bold sm:p-6" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}><span>{faq.question}</span><Plus className={`shrink-0 text-[var(--primary)] transition ${open === i ? "rotate-45" : ""}`} /></button>
      <AnimatePresence initial={false}>{open === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p className="px-5 pb-6 leading-7 text-slate-600 sm:px-6">{faq.answer}</p></motion.div>}</AnimatePresence>
    </div>)}</div>
  </div></section>;
}
