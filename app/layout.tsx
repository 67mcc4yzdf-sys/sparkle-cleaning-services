import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/lib/business";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `${business.businessName} | ${business.tagline}`,
  description: business.seoDescription,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-[var(--font-body)] antialiased" style={{ "--primary": business.primaryColor, "--secondary": business.secondaryColor } as React.CSSProperties}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
