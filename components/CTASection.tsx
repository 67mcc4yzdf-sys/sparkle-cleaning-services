import Link from "next/link";
import { Instagram, Sparkles } from "lucide-react";
import { business } from "@/lib/business";

export default function CTASection() {
  return <section className="relative overflow-hidden border-y border-pink-200 bg-[var(--primary)] px-5 py-16 text-white sm:px-8 sm:py-20"><div className="absolute left-8 top-8 text-white/20"><Sparkles size={70} /></div><div className="absolute bottom-8 right-8 text-white/20"><Sparkles size={54} /></div><div className="relative mx-auto max-w-7xl px-1 text-center sm:px-12">
    <Sparkles className="mx-auto text-pink-100" />
    <h2 className="mt-5 font-[var(--font-display)] text-3xl font-extrabold tracking-[-.035em] sm:text-5xl">Let&rsquo;s Bring the Glow Back to Your Home</h2>
    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-pink-50">Send a quick enquiry and make it easy to come home to a fresh, calm, beautifully cared-for space.</p>
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/contact#quote" className="button-secondary !border-white !bg-white">{business.ctaPrimary}</Link><a href={business.socialLinks[0]?.href ?? "#"} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"><Instagram size={17} />Message on Instagram</a></div>
  </div></section>;
}
