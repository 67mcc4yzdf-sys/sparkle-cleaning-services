import Link from "next/link";
import { Clock, Instagram, Mail, Phone } from "lucide-react";
import { business } from "@/lib/business";

export default function Footer() {
  return <footer className="border-t border-pink-100 bg-[#fff3f7] pb-24 pt-16 text-slate-600 md:pb-8"><div className="shell">
    <div className="grid gap-10 border-b border-pink-100 pb-12 md:grid-cols-2 lg:grid-cols-4">
      <div><Link href="/" className="font-[var(--font-accent)] text-4xl leading-none text-[var(--primary)]">{business.logoText}</Link><p className="mt-4 max-w-xs font-bold text-ink">{business.tagline}</p><div className="mt-5 flex gap-4">{business.socialLinks.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:text-pink-800"><Instagram size={16} />{business.instagram}</a>)}</div></div>
      <div><h3 className="font-bold text-ink">Contact</h3><ul className="mt-5 space-y-4 text-sm">{business.phoneHref && <li><a href={`tel:${business.phoneHref}`} className="flex items-center gap-3 hover:text-[var(--primary)]"><Phone size={16} />Phone: {business.phone}</a></li>}{business.email && <li><a href={`mailto:${business.email}`} className="flex items-center gap-3 break-all hover:text-[var(--primary)]"><Mail size={16} />Email: {business.email}</a></li>}<li><Link href="/contact#quote" className="font-bold text-[var(--primary)] hover:text-pink-800">{business.ctaPrimary}</Link></li><li className="flex items-start gap-3"><Clock size={16} className="mt-0.5 shrink-0 text-[var(--secondary)]" /><span>{business.businessHours.map(h => <span key={h} className="block">{h}</span>)}</span></li></ul></div>
      <div><h3 className="font-bold text-ink">Services</h3><ul className="mt-5 space-y-3 text-sm">{business.services.map(s => <li key={s.title}><Link href="/services" className="hover:text-[var(--primary)]">{s.title}</Link></li>)}</ul></div>
      <div><h3 className="font-bold text-ink">Quick links</h3><ul className="mt-5 space-y-3 text-sm"><li><Link href="/#about" className="hover:text-[var(--primary)]">About</Link></li><li><Link href="/#gallery" className="hover:text-[var(--primary)]">Results</Link></li><li><Link href="/#reviews" className="hover:text-[var(--primary)]">Reviews</Link></li><li><Link href="/contact" className="hover:text-[var(--primary)]">Contact</Link></li></ul></div>
    </div>
    <div className="flex flex-col gap-3 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {business.businessName}. All rights reserved.</p><div className="flex flex-wrap gap-4"><Link href="/privacy" className="hover:text-[var(--primary)]">Privacy Policy</Link><Link href="/terms" className="hover:text-[var(--primary)]">Terms</Link><span>{business.country}</span></div></div>
  </div></footer>;
}
