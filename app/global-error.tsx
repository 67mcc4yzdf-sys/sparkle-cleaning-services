"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px", fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
          <h1>We could not load the website.</h1>
          <p>Please try again. If the problem continues, return in a few minutes.</p>
          <button type="button" onClick={reset} style={{ marginTop: 20, padding: "12px 20px", cursor: "pointer" }}>Try again</button>
        </main>
      </body>
    </html>
  );
}
