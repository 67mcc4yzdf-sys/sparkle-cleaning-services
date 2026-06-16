import type { Metadata } from "next";
import { business } from "@/lib/business";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: `Terms of Service | ${business.businessName}` };

export default function TermsPage() {
  return <><PageHero eyebrow="Legal" title="Terms of Service" description={`Last updated ${business.legal.lastUpdated}`} showCta={false} />
    <section className="section pt-12"><div className="shell max-w-3xl space-y-8 leading-7 text-slate-600">
      <div><h2 className="text-xl font-extrabold text-ink">Quotes and scope</h2><p className="mt-3">Quotes are based on the information provided before the visit. Changes in property condition, access, requested work, or selected add-ons may require an updated price or schedule before additional work begins.</p></div>
      <div><h2 className="text-xl font-extrabold text-ink">Access and preparation</h2><p className="mt-3">Customers are responsible for providing safe access, identifying fragile or restricted areas, securing pets, and disclosing hazards or conditions that could affect the service.</p></div>
      <div><h2 className="text-xl font-extrabold text-ink">Scheduling and cancellation</h2><p className="mt-3">Appointment, rescheduling, cancellation, deposit, and payment requirements will be confirmed during booking. The business’s current written policy applies to each accepted booking.</p></div>
      <div><h2 className="text-xl font-extrabold text-ink">Service concerns</h2><p className="mt-3">{business.servicePromise.text}</p></div>
      <div><h2 className="text-xl font-extrabold text-ink">Contact</h2><p className="mt-3">Questions about these terms can be discussed during your consultation{business.phoneHref ? <> or by calling <a className="font-bold text-[var(--primary)]" href={`tel:${business.phoneHref}`}>{business.phone}</a></> : null}.</p></div>
      <p className="border-l-2 border-amber-400 bg-amber-50 p-4 text-sm text-amber-950">Template notice: replace these terms with the business’s confirmed booking, cancellation, payment, damage, and re-clean policies and obtain local legal review before launch.</p>
    </div></section>
  </>;
}
