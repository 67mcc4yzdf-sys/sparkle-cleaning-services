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
    <div className="mb-7 border-b border-pink-100 pb-6">
      <p className="text-xs font-extrabold uppercase tracking-[.14em] text-[var(--primary)]">Send a simple enquiry</p>
      <p className="mt-2 text-sm leading-6 text-slate-500">Add your details and what you need cleaned. Direct Instagram messages are welcome too.</p>
    </div>
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-bold">Name<input required name="name" maxLength={100} autoComplete="name" placeholder="Your name" className="field" /></label>
      <label className="text-sm font-bold">Phone<input required name="phone" maxLength={30} type="tel" autoComplete="tel" placeholder="e.g. 07900 123456" className="field" /></label>
      <label className="text-sm font-bold">Suburb<input required name="suburb" maxLength={100} placeholder="e.g. Baldivis, Wellard" className="field" /></label>
      <label className="text-sm font-bold">Type of clean<select required name="service" defaultValue={validInitialService} className="field"><option value="">Select a service</option>{business.services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}</select></label>
      <label className="text-sm font-bold sm:col-span-2">Preferred day<input required name="preferredDay" maxLength={100} placeholder="e.g. Monday morning, next Friday, flexible" className="field" /></label>
    </div>
    <label className="mt-6 block text-sm font-bold">Message<textarea name="message" maxLength={2000} rows={5} placeholder="What would you like cleaned? Any priority rooms or details?" className="field resize-y" /></label>
    {(status === "error" || status === "not-configured") && <div className="mt-5 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950" role="alert"><AlertCircle className="mt-0.5 shrink-0" size={18} /><p>{status === "not-configured" ? "The online form can be connected before launch. For now, please use the Instagram button to message directly." : "We could not send your request. Your details are still in the form, so please try again."}</p></div>}
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <button type="submit" disabled={isSubmitting} className="button-primary disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? <><LoaderCircle className="animate-spin" size={17} />Sending...</> : <>Send Enquiry <Send size={17} /></>}</button>
      <a href={business.socialLinks[0]?.href ?? "#"} target="_blank" rel="noreferrer" className="button-secondary">Message on Instagram</a>
    </div>
    <p className="mt-4 text-xs leading-5 text-slate-500">Prefer to message directly? Use Instagram and send your suburb, clean type and preferred day.</p>
  </form>;
}
