"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { business } from "@/lib/business";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="section">
      <div className="shell max-w-2xl text-center">
        <AlertTriangle className="mx-auto text-[var(--primary)]" size={42} />
        <h1 className="mt-5 font-[var(--font-display)] text-3xl font-extrabold">This page hit a temporary problem.</h1>
        <p className="mt-4 leading-7 text-slate-600">Try loading it again. You can also call {business.businessName} directly if you need help now.</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="button-primary">Try again</button>
          <a href={`tel:${business.phoneHref}`} className="button-secondary">Call {business.phone}</a>
          <Link href="/" className="button-secondary">Go home</Link>
        </div>
      </div>
    </section>
  );
}
