/**
 * CLIENT CUSTOMIZATION
 *
 * This is the primary file to edit for each cleaning business. Contact details,
 * brand colors, page copy, services, reviews, FAQs, areas, hours, and images all
 * live here. Replace placeholder reviews and generated images before launch.
 *
 * Only include claims such as "insured", "bonded", or "background checked"
 * when the business has confirmed they are accurate.
 */

export type ServiceIconName = "home" | "sparkles" | "truck" | "building" | "key" | "hardHat";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIconName;
  bestFor: string;
  planningNote: string;
  pricingNote: string;
  recurringAvailable: boolean;
  included: string[];
};

export type BusinessConfig = {
  businessName: string;
  logoText: string;
  tagline: string;
  mainHeadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  city: string;
  country: string;
  phone: string;
  phoneHref: string;
  email: string;
  instagram: string;
  primaryColor: string;
  secondaryColor: string;
  seoDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    supportingText: string;
    reassurance: string;
  };
  about: {
    heroTitle: string;
    heroDescription: string;
    storyTitle: string;
    story: string;
    mission: string;
    ownerHeading: string;
    ownerText: string;
  };
  servicesPage: {
    heroTitle: string;
    heroDescription: string;
    guidanceTitle: string;
    guidanceText: string;
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    description: string;
    differentiator: string;
    signatureTitle: string;
    signatureText: string;
    reasons: string[];
  };
  servicePromise: {
    title: string;
    text: string;
  };
  pricing: {
    heading: string;
    explanation: string;
    recurringNote: string;
    items: { label: string; price: string }[];
    footer: string;
  };
  addOns: string[];
  cleaningPlans: { title: string; text: string }[];
  scheduleOptions: string[];
  compassionate: {
    title: string;
    description: string;
    statement: string;
    audiences: string[];
  };
  process: { title: string; text: string }[];
  reviewProof: {
    rating?: string;
    reviewCount?: string;
    platform?: string;
    fallbackLabel: string;
    detail: string;
    href: string;
  };
  quoteForm: {
    endpoint?: string;
  };
  serviceAreas: string[];
  services: Service[];
  trustBadges: string[];
  reviews: { quote: string; name: string; area: string; service: string }[];
  faqs: { question: string; answer: string }[];
  businessHours: string[];
  images: {
    hero: string;
    team: string;
    before: string;
    after: string;
    gallery: string[];
  };
  socialLinks: { label: string; href: string }[];
  legal: {
    privacyContact: string;
    lastUpdated: string;
  };
};

function validateBusinessConfig<T extends BusinessConfig>(config: T): T {
  const requiredStrings = [
    ["businessName", config.businessName],
    ["logoText", config.logoText],
    ["city", config.city],
    ["country", config.country],
    ["seoDescription", config.seoDescription],
  ] as const;

  for (const [field, value] of requiredStrings) {
    if (!value.trim()) throw new Error(`Business configuration field "${field}" cannot be empty.`);
  }

  if (config.phoneHref && !/^\+[\d]{8,15}$/.test(config.phoneHref)) {
    throw new Error('Business configuration "phoneHref" must use international format, for example +14165550184.');
  }

  if (config.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)) {
    throw new Error('Business configuration "email" is invalid.');
  }

  for (const [field, value] of [["primaryColor", config.primaryColor], ["secondaryColor", config.secondaryColor]] as const) {
    if (!/^#[0-9a-f]{6}$/i.test(value)) throw new Error(`Business configuration "${field}" must be a six-digit hex color.`);
  }

  if (!config.services.length) throw new Error("At least one service is required.");
  if (config.services.length < 4) throw new Error("At least four services are required for the featured homepage grid.");
  if (new Set(config.services.map((service) => service.title)).size !== config.services.length) {
    throw new Error("Service titles must be unique so quote links can select the correct service.");
  }
  if (!config.addOns.length) throw new Error("At least one optional add-on is required.");

  for (const [field, value] of Object.entries(config.images)) {
    const paths = Array.isArray(value) ? value : [value];
    for (const path of paths) {
      if (!path.startsWith("/")) throw new Error(`Image path "${field}" must begin with "/".`);
    }
  }

  const proofValues = [config.reviewProof.rating, config.reviewProof.reviewCount, config.reviewProof.platform];
  if (proofValues.some(Boolean) && !proofValues.every(Boolean)) {
    throw new Error("Review rating, count, and platform must either all be supplied or all be omitted.");
  }

  if (config.quoteForm.endpoint && !/^https:\/\//i.test(config.quoteForm.endpoint)) {
    throw new Error("Quote form endpoint must use HTTPS.");
  }

  return config;
}

export const business = validateBusinessConfig({
  businessName: "Celestial Glow Cleaning Co.",
  logoText: "Celestial Glow",
  tagline: "Spotless, Fresh & Glowing",
  mainHeadline: "Professional Cleaning That Leaves Your Home Spotless, Fresh & Glowing",
  ctaPrimary: "Request a Clean",
  ctaSecondary: "Message to Book",
  city: "Baldivis",
  country: "Australia",
  phone: "",
  phoneHref: "",
  email: "",
  instagram: "@celestialglowcleaningco",
  primaryColor: "#B95379",
  secondaryColor: "#E9B96D",
  seoDescription: "Celestial Glow Cleaning Co. provides friendly local cleaning services in Baldivis, WA, helping homes feel spotless, fresh and glowing.",
  hero: {
    eyebrow: "Baldivis, WA cleaning service",
    title: "Professional Cleaning That Leaves Your Home Spotless, Fresh & Glowing",
    lead: "Friendly local cleaning in Baldivis, WA, helping busy homes feel fresh, calm, and beautifully cared for.",
    supportingText: "Send a quick enquiry, choose the clean you need, and come home to a space that feels lighter again.",
    reassurance: "Warm, friendly and detail-focused.",
  },
  about: {
    heroTitle: "A Personal Touch for Every Home",
    heroDescription: "Celestial Glow Cleaning Co. takes the pressure off with warm, reliable cleaning for homes around Baldivis.",
    storyTitle: "Freshness you can feel",
    story: "Celestial Glow Cleaning Co. is built around care, detail, and helping your home feel fresh again. Whether you need a regular clean, a deep reset, or help getting your space back under control, the goal is simple: leave your home feeling spotless, fresh, and glowing.",
    mission: "A friendly clean should feel easy to book and lovely to come home to.",
    ownerHeading: "Warm, personal and easy to talk to",
    ownerText: "This is a local cleaning service with a soft personal touch, clear communication, and the kind of detail that makes a home feel cared for.",
  },
  servicesPage: {
    heroTitle: "Cleaning services for fresh, glowing homes",
    heroDescription: "Choose the clean that fits your home, priorities and schedule.",
    guidanceTitle: "Not sure which clean is right?",
    guidanceText: "Send a quick message with what you need cleaned, your suburb and your preferred day. We will guide you from there.",
  },
  whyChooseUs: {
    eyebrow: "Why Celestial Glow",
    title: "Friendly local cleaning you can feel good about booking.",
    description: "A warm Baldivis service for homes that need a little care, a fresh reset, or regular help keeping things calm.",
    differentiator: "Tell us what needs cleaning, your suburb and your preferred day. We will keep the next steps simple.",
    signatureTitle: "Spotless, Fresh & Glowing",
    signatureText: "A warm local clean that feels personal and professional.",
    reasons: ["Local Baldivis-based service", "Friendly and approachable", "Detail-focused cleaning", "Soft, personal touch", "Simple enquiry process", "Homes left fresh, spotless, and glowing"],
  },
  servicePromise: {
    title: "Easy enquiry process.",
    text: "Send what needs cleaning, your suburb and your preferred day. Celestial Glow will reply with availability.",
  },
  pricing: {
    heading: "Ready for your home to glow?",
    explanation: "Send a quick message with what you need cleaned, your suburb, and your preferred day. Celestial Glow Cleaning Co. will get back to you with availability.",
    recurringNote: "Easy to send. Easy to understand.",
    items: [
      { label: "What needs cleaning", price: "Clean type or rooms" },
      { label: "Where you are", price: "Baldivis or nearby" },
      { label: "Preferred day", price: "We check availability" },
      { label: "Fresh home feeling", price: "Spotless, calm, glowing" },
    ],
    footer: "Prefer to message directly? Instagram is one tap away.",
  },
  addOns: ["Inside appliances", "Inside cupboards", "Interior windows", "Priority rooms", "Extra detail areas"],
  cleaningPlans: [
    { title: "One-off", text: "A fresh reset for busy weeks, guests or when the home needs attention." },
    { title: "Regular", text: "Reliable recurring cleaning to keep your space feeling calm and cared for." },
    { title: "Room focus", text: "Target kitchens, bathrooms or priority areas that need the most glow." },
    { title: "Move support", text: "A practical clean for move-in, move-out or fresh-start moments." },
  ],
  scheduleOptions: ["One-off clean", "Weekly", "Fortnightly", "Monthly", "Preferred date", "Not sure yet"],
  compassionate: {
    title: "Professional cleaning that leaves your home glowing",
    description: "Warm, local cleaning for busy households that want the relief of walking into a fresh, calm space.",
    statement: "Fresh, calm, beautifully cared for.",
    audiences: ["Busy homes", "Kitchen resets", "Bathroom shine"],
  },
  process: [
    { title: "Send a quick enquiry", text: "Share what you need cleaned, your suburb and preferred date." },
    { title: "Confirm the details", text: "Celestial Glow replies with availability and the right clean for your home." },
    { title: "Come home to the glow", text: "Enjoy a spotless, fresh space that feels lighter and easier to enjoy." },
  ],
  reviewProof: {
    rating: undefined,
    reviewCount: undefined,
    platform: undefined,
    fallbackLabel: "Local Baldivis Cleaning Service",
    detail: "Friendly, reliable & detail-focused",
    href: "/about",
    // Add verified values for the real business, for example:
    // rating: "4.9",
    // reviewCount: "127 reviews",
    // platform: "Google",
  },
  quoteForm: {
    endpoint: undefined,
  },
  serviceAreas: ["Baldivis", "Rockingham", "Warnbro", "Wellard", "Waikiki", "Secret Harbour", "Port Kennedy", "Nearby surrounding suburbs"],
  services: [
    { title: "Regular Home Cleaning", description: "Ongoing help to keep your home feeling fresh, tidy and easier to enjoy.", icon: "home", bestFor: "Busy households wanting reliable upkeep", planningNote: "Choose the routine and rooms that matter most.", pricingNote: "Great for weekly or fortnightly cleans", recurringAvailable: true, included: ["Dusting and surfaces", "Floors", "Kitchen reset", "Bathroom refresh"] },
    { title: "Deep Cleaning", description: "A more detailed clean for build-up, missed areas and homes that need a proper reset.", icon: "sparkles", bestFor: "Seasonal resets and first-time cleans", planningNote: "Allow extra time for detail-focused work.", pricingNote: "For when your home needs extra glow", recurringAvailable: false, included: ["Detail surfaces", "Edges and touchpoints", "Kitchen and bathroom focus", "Floor care"] },
    { title: "Kitchen Cleaning", description: "A fresh kitchen clean for benches, sinks, splashbacks and high-use areas.", icon: "sparkles", bestFor: "High-use kitchens needing attention", planningNote: "Mention appliances or cupboards in your enquiry.", pricingNote: "A satisfying kitchen refresh", recurringAvailable: true, included: ["Benches and splashbacks", "Sink shine", "Exterior cupboards", "Floors"] },
    { title: "Bathroom Cleaning", description: "A bright bathroom refresh for showers, vanities, mirrors and floors.", icon: "home", bestFor: "Bathrooms needing regular or deeper care", planningNote: "Tell us about showers, glass and priority areas.", pricingNote: "Fresh, hygienic and shiny", recurringAvailable: true, included: ["Showers and screens", "Vanities", "Toilets", "Floors and mirrors"] },
    { title: "Move-In / Move-Out Cleaning", description: "Helpful cleaning when you are moving, settling in, or handing a space over.", icon: "key", bestFor: "Fresh starts, move-ins and move-outs", planningNote: "Empty-home access and key areas are confirmed first.", pricingNote: "For fresh starts", recurringAvailable: false, included: ["Kitchen and bathrooms", "Cupboards", "Floors", "Priority rooms"] },
    { title: "Custom Cleaning Requests", description: "Need specific rooms or tasks done? Send a short list and we can talk it through.", icon: "building", bestFor: "Homes with unique priorities", planningNote: "Send photos or a short list through Instagram if helpful.", pricingNote: "Message with what you need", recurringAvailable: true, included: ["Room priorities", "Task list", "Flexible scope", "Simple messaging"] },
  ],
  trustBadges: ["Local Baldivis service", "Easy enquiry process", "Homes left glowing"],
  reviews: [
    { quote: "Absolutely loved coming home to such a fresh clean house.", name: "Sample client", area: "Baldivis", service: "Regular Home Cleaning" },
    { quote: "My kitchen and bathroom looked amazing. Everything felt so fresh.", name: "Sample client", area: "Rockingham", service: "Kitchen & Bathroom Clean" },
    { quote: "Friendly, reliable, and left everything sparkling.", name: "Sample client", area: "Wellard", service: "Deep Cleaning" },
  ],
  faqs: [
    { question: "How do I book a clean?", answer: "Send an enquiry with your suburb, what you need cleaned and your preferred date. We will reply with availability and next steps." },
    { question: "Do you offer regular cleaning?", answer: "Yes. Regular home cleaning enquiries are welcome, including weekly, fortnightly or monthly routines." },
    { question: "Do you bring your own supplies?", answer: "Cleaning supply details can be confirmed during enquiry, including any preferences or sensitivities." },
    { question: "What areas do you service?", answer: "Baldivis, WA and nearby suburbs including Rockingham, Warnbro, Wellard, Waikiki, Secret Harbour and Port Kennedy." },
    { question: "Can I request specific rooms or tasks?", answer: "Yes. You can request kitchens, bathrooms, priority rooms or a custom task list." },
    { question: "How do I get pricing?", answer: "Pricing depends on the home, clean type and scope. Send the details and we will guide you from there." },
  ],
  businessHours: ["Baldivis, WA and nearby areas", "Message to enquire about availability"],
  images: {
    hero: "/images/cleaning-1.jpg",
    team: "/images/cleaning-2.jpg",
    before: "/images/cleaning-3.jpg",
    after: "/images/cleaning-4.jpg",
    gallery: ["/images/cleaning-1.jpg", "/images/cleaning-2.jpg", "/images/cleaning-3.jpg", "/images/cleaning-4.jpg"],
  },
  socialLinks: [{ label: "Instagram", href: "https://www.instagram.com/celestialglowcleaningco" }],
  legal: {
    privacyContact: "@celestialglowcleaningco",
    lastUpdated: "June 15, 2026",
  },
} satisfies BusinessConfig);

export type Business = typeof business;
