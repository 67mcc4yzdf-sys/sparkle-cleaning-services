import Link from "next/link";
import Image from "next/image";
import { Clock, Instagram, Mail, Phone } from "lucide-react";
import { business } from "@/lib/business";

export default function Footer() {
  return <footer className="bg-[#3f2931] pb-24 pt-16 text-pink-50/80 md:pb-8"><div className="shell">
    <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
      <div><Link href="/" className="flex items-center gap-3 font-[var(--font-display)] text-xl font-extrabold text-white"><Image src="/images/celestial-glow-logo-mark.svg" alt="" width={48} height={48} className="rounded-full" /><span className="leading-none"><span className="block font-[var(--font-accent)] text-3xl font-normal leading-none text-pink-100">{business.logoText}</span><span className="block text-[9px] font-extrabold uppercase tracking-[.24em] text-pink-100/80">Cleaning Co.</span></span></Link><p className="mt-5 max-w-xs leading-7 text-pink-50/70">{business.tagline}</p><div className="mt-5 flex gap-4">{business.socialLinks.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-pink-200"><Instagram size={16} />{business.instagram}</a>)}</div></div>
      <div><h3 className="font-bold text-white">Contact</h3><ul className="mt-5 space-y-4 text-sm">{business.phoneHref && <li><a href={`tel:${business.phoneHref}`} className="flex items-center gap-3 hover:text-white"><Phone size={16} />Phone: {business.phone}</a></li>}{business.email && <li><a href={`mailto:${business.email}`} className="flex items-center gap-3 break-all hover:text-white"><Mail size={16} />Email: {business.email}</a></li>}<li><Link href="/contact#quote" className="font-bold text-white hover:text-pink-200">{business.ctaPrimary}</Link></li><li className="flex items-start gap-3"><Clock size={16} className="mt-0.5 shrink-0" /><span>{business.businessHours.map(h => <span key={h} className="block">{h}</span>)}</span></li></ul></div>
      <div><h3 className="font-bold text-white">Services</h3><ul className="mt-5 space-y-3 text-sm">{business.services.map(s => <li key={s.title}><Link href="/services" className="hover:text-white">{s.title}</Link></li>)}</ul></div>
      <div><h3 className="font-bold text-white">Quick links</h3><ul className="mt-5 space-y-3 text-sm"><li><Link href="/#about" className="hover:text-white">About</Link></li><li><Link href="/#gallery" className="hover:text-white">Results</Link></li><li><Link href="/#reviews" className="hover:text-white">Reviews</Link></li><li><Link href="/contact" className="hover:text-white">Contact</Link></li></ul></div>
    </div>
    <div className="flex flex-col gap-3 pt-7 text-xs text-pink-50/50 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {business.businessName}. All rights reserved.</p><div className="flex flex-wrap gap-4"><Link href="/privacy" className="hover:text-white">Privacy Policy</Link><Link href="/terms" className="hover:text-white">Terms</Link><span>{business.country}</span></div></div>
  </div></footer>;
}
