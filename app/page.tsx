import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import QuoteForm from "@/components/QuoteForm";
import SectionTitle from "@/components/SectionTitle";
import AboutSparkle from "@/components/AboutSparkle";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return <><Hero /><TrustBar /><AboutSparkle /><ServicesSection /><PricingSection /><WhyChooseUs /><HowItWorks /><GallerySection /><ReviewsSection /><CTASection />
    <section className="section bg-[#fffaf4]"><div className="shell grid items-start gap-12 lg:grid-cols-[.7fr_1fr]"><SectionTitle align="left" eyebrow="Free quote" title="Request a Free Cleaning Quote" description="Tell us about your property, cleaning needs and preferred schedule. We’ll follow up with a suitable plan and clear next steps." /><QuoteForm /></div></section>
  </>;
}
