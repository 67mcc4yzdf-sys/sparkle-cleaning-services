import Link from "next/link";
import { ArrowRight, CalendarClock, HeartHandshake, MapPin, ReceiptText, ShieldCheck, Star } from "lucide-react";
import { business } from "@/lib/business";

const icons = [ReceiptText, MapPin, CalendarClock, HeartHandshake];
export default function TrustBar() {
  const proof = business.reviewProof;
  const hasVerifiedRating = Boolean(proof.rating && proof.reviewCount && proof.platform);

  return <section className="border-y border-pink-100 bg-white"><div className="shell">
    <div className="grid border-b border-pink-100 lg:grid-cols-[1.15fr_2fr]">
      <Link href={proof.href} className="group flex items-center gap-4 py-5 lg:border-r lg:border-pink-100 lg:pr-8">
        {hasVerifiedRating
          ? <div className="flex text-amber-400" aria-label={`${proof.rating} out of 5`}>{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={17} fill="currentColor" />)}</div>
          : <ShieldCheck className="shrink-0 text-[var(--primary)]" size={30} aria-label="Verified trust details" />}
        <div className="min-w-0">
          <p className="font-extrabold text-ink">{hasVerifiedRating ? `${proof.rating} from ${proof.reviewCount}` : proof.fallbackLabel}</p>
          <p className="text-sm text-slate-500">{hasVerifiedRating ? `Verified on ${proof.platform}` : proof.detail}</p>
        </div>
        <ArrowRight className="ml-auto shrink-0 text-[var(--primary)] transition group-hover:translate-x-1" size={17} />
      </Link>

      <div className="grid divide-x divide-y divide-pink-100 sm:grid-cols-3 sm:divide-y-0 lg:pl-4">
        {business.trustBadges.map((item, i) => { const Icon = icons[i % icons.length]; return <div key={item} className="flex items-center justify-center gap-2 px-2 py-5 text-center text-xs font-bold text-slate-700 sm:text-sm"><Icon className="shrink-0 text-[var(--primary)]" size={18} />{item}</div>; })}
      </div>
    </div>
  </div></section>;
}
