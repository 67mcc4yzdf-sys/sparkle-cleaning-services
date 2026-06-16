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
  businessName: "Sparkle Cleaning Services",
  logoText: "Sparkle",
  tagline: "Clean Home, Happy Home",
  mainHeadline: "A Clean Space Makes a Happy Place",
  ctaPrimary: "Get a Free Quote",
  ctaSecondary: "Call Now",
  city: "Halifax",
  country: "United Kingdom",
  phone: "07954024241",
  phoneHref: "+447954024241",
  email: "sparklecleaningservices@gmail.com",
  instagram: "@sparkle.cleaning.servicess",
  primaryColor: "#C86F91",
  secondaryColor: "#F6B8C9",
  seoDescription: "Friendly, reliable cleaning services for fresh, comfortable homes and business spaces by Sparkle Cleaning Services.",
  hero: {
    eyebrow: "Clean Home, Happy Home",
    title: "A Clean Space Makes a Happy Place",
    lead: "Friendly, reliable cleaning services for fresh, comfortable spaces you can enjoy.",
    supportingText: "Standard, deep, end of tenancy and commercial cleaning delivered with care, detail and a warm local touch.",
    reassurance: "Reliable, friendly and detail-focused every time.",
  },
  about: {
    heroTitle: "Fresh, comfortable spaces with a friendly local touch",
    heroDescription: "At Sparkle Cleaning Services, we take pride in creating clean, fresh, and comfortable spaces for you to enjoy.",
    storyTitle: "Clean spaces, happy places",
    story: "At Sparkle Cleaning Services, we take pride in creating clean, fresh, and comfortable spaces for you to enjoy. Reliable, friendly, and detail-focused every time.",
    mission: "Our goal is to make everyday spaces feel calmer, brighter and easier to enjoy through dependable cleaning and thoughtful service.",
    ownerHeading: "A friendly, trustworthy cleaning service",
    ownerText: "Warm, professional support for homes and local businesses, with flexible appointments and attention to the details that make a space feel cared for.",
  },
  servicesPage: {
    heroTitle: "Cleaning services for fresh, happy spaces",
    heroDescription: "Choose from standard, deep, end of tenancy and commercial cleaning services tailored to your needs.",
    guidanceTitle: "Not sure which clean is right?",
    guidanceText: "Tell us about your space, priorities and preferred schedule. We will recommend the service that fits best.",
  },
  whyChooseUs: {
    eyebrow: "Why choose us?",
    title: "A reassuring clean from people who care.",
    description: "Friendly, professional cleaning with flexible appointments, careful details and a focus on leaving every space fresh and comfortable.",
    differentiator: "Products and equipment are provided, so you can simply book your clean and relax.",
    signatureTitle: "Clean Home, Happy Home",
    signatureText: "Premium local cleaning with a warm, trustworthy feel.",
    reasons: ["Reliable & trustworthy", "Attention to detail", "Friendly & professional", "Flexible appointments", "Satisfaction guaranteed", "Products & equipment provided"],
  },
  servicePromise: {
    title: "Free quotes available.",
    text: "Tell us what you need and we will recommend a practical cleaning service with clear next steps.",
  },
  pricing: {
    heading: "Simple starting prices",
    explanation: "Prices start from the guide below and may vary depending on property size, condition and cleaning requirements.",
    recurringNote: "Free quotes available!",
    items: [
      { label: "Standard Clean", price: "From £20ph" },
      { label: "Deep Clean", price: "From £25ph" },
      { label: "End of Tenancy Clean", price: "From £120+" },
      { label: "Commercial Cleaning", price: "Contact for a free quote" },
    ],
    footer: "Free quotes available!",
  },
  addOns: ["Inside appliances", "Inside cupboards", "Interior windows", "Priority rooms", "Extra detail areas"],
  cleaningPlans: [
    { title: "Standard Clean", text: "Regular upkeep for fresh, comfortable homes." },
    { title: "Deep Clean", text: "A thorough reset for hard-to-reach places." },
    { title: "End of Tenancy", text: "Move-out cleaning for spotless handovers." },
    { title: "Commercial", text: "Reliable cleans for offices, shops and workspaces." },
  ],
  scheduleOptions: ["One-off clean", "Weekly", "Fortnightly", "Monthly", "End of tenancy date", "Commercial schedule", "Not sure yet"],
  compassionate: {
    title: "A clean space makes a happy place",
    description: "Friendly, reliable cleaning services for homes and businesses that want a fresh, comfortable finish.",
    statement: "Just sit back and relax.",
    audiences: ["Busy homes", "Fresh starts", "Local businesses"],
  },
  process: [
    { title: "Request your free quote", text: "Tell us about your space, priorities and preferred timing." },
    { title: "Choose your cleaning service", text: "Pick the clean that suits your home, move or business." },
    { title: "Relax while we handle the cleaning", text: "Enjoy a fresh, comfortable space without the stress." },
  ],
  reviewProof: {
    rating: undefined,
    reviewCount: undefined,
    platform: undefined,
    fallbackLabel: "Friendly local cleaning",
    detail: "Fresh, reliable service you can trust",
    href: "/about",
    // Add verified values for the real business, for example:
    // rating: "4.9",
    // reviewCount: "127 reviews",
    // platform: "Google",
  },
  quoteForm: {
    endpoint: undefined,
  },
  serviceAreas: ["Birmingham"],
  services: [
    { title: "Standard Clean", description: "Perfect for regular upkeep of your home, including dusting, hoovering, mopping, bathroom cleaning, and kitchen cleaning.", icon: "home", bestFor: "Regular home upkeep", planningNote: "Ideal for weekly, fortnightly or routine appointments.", pricingNote: "From £20ph", recurringAvailable: true, included: ["Dusting", "Hoovering", "Mopping", "Bathroom and kitchen cleaning"] },
    { title: "Deep Clean", description: "A more thorough clean for those hard-to-reach places. Ideal for seasonal cleans or a fresh start.", icon: "sparkles", bestFor: "Seasonal cleans and fresh starts", planningNote: "Allow extra time for detail work and priority areas.", pricingNote: "From £25ph", recurringAvailable: false, included: ["Detailed surfaces", "Hard-to-reach areas", "Kitchen and bathroom detail", "Floor care"] },
    { title: "End of Tenancy Clean", description: "Moving out? We’ll leave the property spotless and ready for the next person.", icon: "key", bestFor: "Tenants, landlords and move-outs", planningNote: "Best for empty properties or move-out handovers.", pricingNote: "From £120+", recurringAvailable: false, included: ["Kitchen and bathrooms", "Cupboards and surfaces", "Floors", "Move-out finishing touches"] },
    { title: "Commercial Cleaning", description: "Reliable cleaning for offices, shops, and other business spaces. Tailored to your needs.", icon: "building", bestFor: "Offices, shops and business spaces", planningNote: "Cleaning can be planned around your opening hours.", pricingNote: "Contact for a free quote", recurringAvailable: true, included: ["Work areas", "Washrooms", "Floors", "Agreed touchpoints"] },
  ],
  trustBadges: ["Reliable & trustworthy", "Flexible appointments", "Satisfaction guaranteed"],
  reviews: [
    { quote: "Sparkle Cleaning Services left my home feeling fresh and calm. Friendly, reliable and really thorough.", name: "Emma", area: "Halifax", service: "Standard Clean" },
    { quote: "The deep clean made such a difference. Every room felt brighter and the attention to detail was excellent.", name: "Rachel", area: "West Yorkshire", service: "Deep Clean" },
    { quote: "Great communication and a spotless finish for our move-out clean. I would happily book again.", name: "Sophie", area: "Halifax", service: "End of Tenancy Clean" },
  ],
  faqs: [
    { question: "Do you bring your own cleaning supplies?", answer: "Yes. Products and equipment are provided. Tell us about product preferences or sensitivities when requesting your quote." },
    { question: "Do I need to be home during the cleaning?", answer: "No. Many clients arrange secure access and return to a freshly cleaned space. We will confirm access details with you before the visit." },
    { question: "Can I book recurring cleaning?", answer: "Yes. Flexible appointments are available depending on your property and requirements." },
    { question: "How do I get a quote?", answer: "Complete the short quote form or call us. We will ask a few questions about your space and cleaning needs before confirming pricing." },
    { question: "Do you clean commercial spaces?", answer: "Yes. Commercial cleaning is available for offices, shops and other business spaces, tailored to your needs." },
    { question: "What if I’m not satisfied?", answer: "Please contact us promptly so we can understand the concern and work with you toward a practical resolution." },
  ],
  businessHours: ["Flexible appointments available"],
  images: {
    hero: "/images/cleaning-1.jpg",
    team: "/images/cleaning-2.jpg",
    before: "/images/cleaning-3.jpg",
    after: "/images/cleaning-4.jpg",
    gallery: ["/images/cleaning-1.jpg", "/images/cleaning-2.jpg", "/images/cleaning-3.jpg", "/images/cleaning-4.jpg"],
  },
  socialLinks: [{ label: "Instagram", href: "https://www.instagram.com/sparkle.cleaning.servicess" }],
  legal: {
    privacyContact: "sparklecleaningservices@gmail.com",
    lastUpdated: "June 15, 2026",
  },
} satisfies BusinessConfig);

export type Business = typeof business;
