"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Heart, Menu, Phone, Sparkles, X } from "lucide-react";
import { business } from "@/lib/business";

const links = [
  ["Services", "/#services"], ["Pricing", "/#pricing"], ["Reviews", "/#reviews"], ["Contact", "/contact"]
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header className={`sticky top-0 z-50 border-b border-pink-100 bg-white/85 backdrop-blur-2xl transition-all ${scrolled ? "shadow-[0_10px_35px_rgba(200,111,145,.12)]" : ""}`}>
        <div className={`shell flex items-center justify-between transition-all ${scrolled ? "h-16" : "h-20"}`}>
          <Link href="/" className="group flex items-center gap-3 font-[var(--font-display)] tracking-tight" aria-label={`${business.businessName} home`}>
            <span className="relative grid size-11 place-items-center rounded-full border border-pink-200 bg-pink-50 text-lg font-black text-[var(--primary)] shadow-sm">
              S
              <Sparkles className="absolute -right-1 -top-1 text-pink-400" size={13} />
            </span>
            <span className="leading-none">
              <span className="flex items-center gap-1 font-[var(--font-accent)] text-3xl font-normal leading-none text-[var(--primary)]">
                {business.logoText}
                <Heart className="mt-1 text-pink-400 transition group-hover:scale-110" size={15} fill="currentColor" />
              </span>
              <span className="block text-[9px] font-extrabold uppercase tracking-[.24em] text-pink-500">Cleaning Services</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {links.map(([label, href]) => {
              const active = href.startsWith("/#") ? false : pathname === href;
              return <Link key={label} href={href} className={`relative py-2 text-sm font-bold transition after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-[var(--secondary)] after:transition-transform ${active ? "text-[var(--primary)] after:scale-x-100" : "text-slate-600 after:scale-x-0 hover:text-[var(--primary)] hover:after:scale-x-100"}`}>{label}</Link>;
            })}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            {business.phoneHref && <a href={`tel:${business.phoneHref}`} className="flex items-center gap-2 text-sm font-bold"><Phone size={16} className="text-[var(--secondary)]" />{business.phone}</a>}
            <Link href="/contact#quote" className="button-primary">{business.ctaPrimary}</Link>
          </div>
          <button className="grid size-11 place-items-center border border-slate-300 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && <nav id="mobile-menu" className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="border-b border-slate-100 py-3.5 font-semibold">{label}</Link>)}
          </div>
        </nav>}
      </header>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-300 bg-white/95 p-2 shadow-2xl backdrop-blur md:hidden">
        <Link href="/contact#quote" className="button-primary min-h-11 w-full">{business.ctaPrimary}</Link>
      </div>
    </>
  );
}
