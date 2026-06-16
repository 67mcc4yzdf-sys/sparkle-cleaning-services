import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section">
      <div className="shell max-w-2xl text-center">
        <SearchX className="mx-auto text-[var(--primary)]" size={42} />
        <p className="eyebrow mt-5">404</p>
        <h1 className="font-[var(--font-display)] text-4xl font-extrabold">We could not find that page.</h1>
        <p className="mt-4 leading-7 text-slate-600">The link may be outdated, but the rest of the website is still available.</p>
        <Link href="/" className="button-primary mt-7">Return home</Link>
      </div>
    </section>
  );
}
