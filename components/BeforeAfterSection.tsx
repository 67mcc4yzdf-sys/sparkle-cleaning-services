"use client";

import Image from "next/image";
import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { business } from "@/lib/business";
import SectionTitle from "./SectionTitle";

export default function BeforeAfterSection() {
  const [position, setPosition] = useState(52);
  return <section className="section bg-mist"><div className="shell">
    <SectionTitle eyebrow="See the difference" title="A reset you can see and feel" description="Drag the slider to preview the kind of transformation a detailed clean can make." />
    <div className="mx-auto mt-12 max-w-5xl">
      <div className="relative aspect-[4/3] overflow-hidden border-y border-slate-300 bg-slate-200 sm:aspect-[16/9]">
        <Image src={business.images.after} alt="Kitchen after a professional clean" fill sizes="(max-width: 1280px) 90vw, 1100px" className="object-cover" />
        <Image src={business.images.before} alt="Kitchen before a professional clean" fill sizes="(max-width: 1280px) 90vw, 1100px" className="object-cover" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} />
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${position}%` }}><span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-[var(--primary)] text-white shadow-xl"><MoveHorizontal size={20} /></span></div>
        <span className="absolute left-4 top-4 bg-ink/80 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white">Before</span>
        <span className="absolute right-4 top-4 bg-white/90 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-ink">After</span>
        <input aria-label="Move before and after comparison" type="range" min="15" max="85" value={position} onChange={(e) => setPosition(Number(e.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
      </div>
      <p className="mt-5 text-center text-sm text-slate-500">Preview images can be replaced with your real team photos and cleaning results.</p>
    </div>
  </div></section>;
}
