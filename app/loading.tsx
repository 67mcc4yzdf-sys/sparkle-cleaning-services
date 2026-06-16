export default function Loading() {
  return (
    <div className="shell py-20" role="status" aria-live="polite">
      <div className="h-3 w-28 animate-pulse bg-slate-200" />
      <div className="mt-6 h-12 max-w-2xl animate-pulse bg-slate-200" />
      <div className="mt-4 h-5 max-w-xl animate-pulse bg-slate-100" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}
