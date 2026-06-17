"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { business } from "@/lib/business";

type SubmitStatus = "idle" | "submitting" | "success" | "error" | "not-configured";

export default function QuoteForm({ initialService = "" }: { initialService?: string }) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const validInitialService = business.services.some((service) => service.title === initialService) ? initialService : "";
  const isSubmitting = status === "submitting";

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get("companyWebsite")) {
      setStatus("success");
      return;
    }

    if (!business.quoteForm.endpoint) {
      setStatus("not-configured");
      return;
    }

    const payload: Record<string, string | string[]> = Object.fromEntries(
      [...formData.entries()]
        .filter(([key]) => key !== "companyWebsite" && key !== "addOns")
        .map(([key, value]) => [key, String(value).trim()])
    );
    payload.addOns = formData.getAll("addOns").map((value) => String(value));
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 10000);

    setStatus("submitting");
    try {
      const response = await fetch(business.quoteForm.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`Quote request failed with status ${response.status}`);
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
    }
  }

  if (status === "success") return <div className="card grid min-h-[420px] place-items-center p-8 text-center"><div><CheckCircle2 className="mx-auto text-[var(--secondary)]" size={52} /><h3 className="mt-5 font-[var(--font-display)] text-2xl font-extrabold">Thanks for reaching out!</h3><p className="mx-auto mt-3 max-w-md leading-7 text-slate-600">Your quote request was received. The team will follow up with the next steps.</p><button onClick={() => setStatus("idle")} className="button-secondary mt-6">Send another request</button></div></div>;
  return <form onSubmit={submit} className="card p-6 sm:p-8" id="quote">
    <label className="absolute -left-[10000px] top-auto size-px overflow-hidden" aria-hidden="true">Company website<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label>
    <div className="mb-7 border-b border-slate-200 pb-6">
      <p className="text-xs font-extrabold uppercase tracking-[.14em] text-[var(--primary)]">1. Tell us about the clean</p>
      <div className="mt-4 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold">Type of clean needed<select required name="service" defaultValue={validInitialService} className="field"><option value="">Select a service</option>{business.services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}</select></label>
        <label className="text-sm font-bold">Suburb / location<input required name="suburb" maxLength={100} placeholder="e.g. Baldivis, Wellard" className="field" /></label>
        <label className="text-sm font-bold">Preferred date<input required name="preferredDate" type="date" className="field" /></label>
        <label className="text-sm font-bold">Preferred schedule<select required name="frequency" defaultValue="" className="field"><option value="">Select a schedule</option>{business.scheduleOptions.map(option => <option key={option}>{option}</option>)}</select></label>
      </div>
    </div>
    <p className="mb-4 text-xs font-extrabold uppercase tracking-[.14em] text-[var(--primary)]">2. Where should we send the quote?</p>
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-bold">Name<input required name="name" maxLength={100} autoComplete="name" placeholder="Your name" className="field" /></label>
      <label className="text-sm font-bold">Phone<input required name="phone" maxLength={30} type="tel" autoComplete="tel" placeholder="e.g. 07900 123456" className="field" /></label>
      <label className="text-sm font-bold sm:col-span-2">Email <span className="font-medium text-slate-400">(optional)</span><input name="email" maxLength={254} type="email" autoComplete="email" placeholder="you@example.com" className="field" /></label>
    </div>
    <label className="mt-6 block text-sm font-bold">Message / details<textarea name="message" maxLength={2000} rows={5} placeholder="Tell us what you need cleaned, any priority rooms, and anything helpful for the enquiry." className="field resize-y" /></label>
    {(status === "error" || status === "not-configured") && <div className="mt-5 flex gap-3 border-l-2 border-amber-500 bg-amber-50 p-4 text-sm leading-6 text-amber-950" role="alert"><AlertCircle className="mt-0.5 shrink-0" size={18} /><p>{status === "not-configured" ? "Online quote delivery will be connected when the business contact details are supplied. Your information has not been sent." : "We could not send your request. Your details are still in the form, so please try again."}</p></div>}
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <button type="submit" disabled={isSubmitting} className="button-primary disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? <><LoaderCircle className="animate-spin" size={17} />Sending...</> : <>Request a Clean <Send size={17} /></>}</button>
      <a href={business.socialLinks[0]?.href ?? "#"} target="_blank" rel="noreferrer" className="button-secondary">Message to Book</a>
    </div>
    <p className="mt-4 text-xs leading-5 text-slate-500">No obligation. Your details are used only to respond to this cleaning enquiry.</p>
  </form>;
}
