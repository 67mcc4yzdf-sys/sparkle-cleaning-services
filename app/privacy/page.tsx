import type { Metadata } from "next";
import { business } from "@/lib/business";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: `Privacy Policy | ${business.businessName}` };

export default function PrivacyPage() {
  return <><PageHero eyebrow="Legal" title="Privacy Policy" description={`Last updated ${business.legal.lastUpdated}`} showCta={false} />
    <section className="section pt-12"><div className="shell max-w-3xl space-y-8 leading-7 text-slate-600">
      <div><h2 className="text-xl font-extrabold text-ink">Information we collect</h2><p className="mt-3">When you request a quote or contact us, we may collect your name, contact details, service address or postal code, cleaning preferences, and information you choose to provide about the property.</p></div>
      <div><h2 className="text-xl font-extrabold text-ink">How we use it</h2><p className="mt-3">We use this information to respond to inquiries, prepare quotes, schedule and provide services, communicate about appointments, and maintain business records required for operations.</p></div>
      <div><h2 className="text-xl font-extrabold text-ink">Sharing and retention</h2><p className="mt-3">We do not sell personal information. Information may be shared with service providers that support scheduling, communications, payments, hosting, or legal compliance. We retain it only as long as reasonably necessary for those purposes.</p></div>
      <div><h2 className="text-xl font-extrabold text-ink">Your choices</h2><p className="mt-3">You may ask to review, correct, or delete information, subject to applicable legal and recordkeeping requirements. Privacy contact details will be added before the website is published.</p></div>
      <p className="border-l-2 border-amber-400 bg-amber-50 p-4 text-sm text-amber-950">Template notice: have this policy reviewed for the business’s location, tools, payment provider, analytics, and applicable privacy laws before launch.</p>
    </div></section>
  </>;
}
