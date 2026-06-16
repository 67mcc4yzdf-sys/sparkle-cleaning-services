import Image from "next/image";
import { Sparkles } from "lucide-react";
import { business } from "@/lib/business";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function GallerySection() {
  return (
    <section className="section bg-white" id="gallery">
      <div className="shell">
        <SectionTitle eyebrow="Fresh spaces" title="A clean, cozy home feeling" description="Soft, bright image cards keep the template easy to update with real project photos later." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {business.images.gallery.map((src, index) => (
            <Reveal key={src} delay={index * .05} className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-pink-100 bg-pink-50 shadow-lg shadow-pink-100/70">
              <Image src={src} alt={`Sparkle Cleaning Services gallery image ${index + 1}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 to-transparent p-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-[var(--primary)]"><Sparkles size={13} />Sparkle clean</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
