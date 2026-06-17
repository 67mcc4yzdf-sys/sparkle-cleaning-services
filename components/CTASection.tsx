import Link from "next/link";
import { Instagram, Sparkles } from "lucide-react";
import { business } from "@/lib/business";

export default function CTASection() {
  return <section className="relative overflow-hidden border-y border-pink-100 bg-[radial-gradient(circle_at_top,#ffe2ec_0,#fff7fa_48%,#fffaf4_100%)] px-5 py-16 text-ink sm:px-8 sm:py-20"><div className="absolute left-8 top-8 text-pink-300/40"><Sparkles size={70} /></div><div className="absolute bottom-8 right-8 text-[#e9b96d]/40"><Sparkles size={54} /></div><div className="relative mx-auto max-w-7xl px-1 text-center sm:px-12">
    <Sparkles className="mx-auto text-[var(--secondary)]" />
    <h2 className="mt-5 font-[var(--font-display)] text-3xl font-black tracking-[-.035em] sm:text-5xl">Let&rsquo;s Bring the Glow Back to Your Home</h2>
    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">Send a quick enquiry and make it easy to come home to a fresh, calm, beautifully cared-for space.</p>
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/contact#quote" className="button-primary">{business.ctaPrimary}</Link><a href={business.socialLinks[0]?.href ?? "#"} target="_blank" rel="noreferrer" className="button-secondary"><Instagram size={17} />Message on Instagram</a></div>
  </div></section>;
}
