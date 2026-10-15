import { Language } from "./translations";

export interface Project {
  id: string;
  title: string;
  tag: Record<Language, string>;
  category: 'local' | 'saas' | 'ecommerce';
  categoryLabel: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  link: string | null;
  badge?: Record<Language, string>;
  speedScore?: number;
}

export const PROJECTS: Project[] = [
  {
    id: "white-leaf",
    title: "White Leaf Catering",
    tag: {
      nl: "Web Design & Lokale Branding",
      en: "Web Design & Local Branding"
    },
    category: "local",
    categoryLabel: {
      nl: "Lokale Bedrijven",
      en: "Local Businesses"
    },
    description: {
      nl: "Exclusieve cateringervaring met interactieve menupresentatie en snelle offerte-aanvragen.",
      en: "Exclusive catering website featuring an interactive menu showcase and fast quote requests."
    },
    image: "/assets/projects/white-leaf.png",
    link: null,
    badge: {
      nl: "Lokaal Ambacht",
      en: "Local Craft"
    },
    speedScore: 99
  },
  {
    id: "mymarka",
    title: "MyMarka App",
    tag: {
      nl: "SaaS / Boekingssoftware",
      en: "SaaS / Booking Software"
    },
    category: "saas",
    categoryLabel: {
      nl: "SaaS & AI Platforms",
      en: "SaaS & AI Platforms"
    },
    description: {
      nl: "Complexe software voor salons met realtime agendabeheer, roosters en sms-notificaties.",
      en: "Full-scale salon software with live booking, team rosters, and automated SMS alerts."
    },
    image: "/assets/projects/marka.png",
    link: "https://www.mymarka.app/en",
    badge: {
      nl: "Full-Stack SaaS",
      en: "Full-Stack SaaS"
    },
    speedScore: 96
  },
  {
    id: "garmsourced",
    title: "Garmsourced",
    tag: {
      nl: "E-Commerce & High-End Fashion",
      en: "E-Commerce & High-End Fashion"
    },
    category: "ecommerce",
    categoryLabel: {
      nl: "E-Commerce",
      en: "E-Commerce"
    },
    description: {
      nl: "Minimalistisch streetwear-platform met gecureerde drops en bliksemsnelle checkout.",
      en: "Minimalist fashion platform with curated drops and ultra-fast, frictionless checkout."
    },
    image: "/assets/projects/garmsourced.png",
    link: "https://garmsourced.vercel.app/",
    badge: {
      nl: "E-Commerce",
      en: "E-Commerce"
    },
    speedScore: 97
  },
  {
    id: "siebon",
    title: "Siebon Sanitair & Renovatie",
    tag: {
      nl: "Lokale SEO • PageSpeed 98/100",
      en: "Local SEO • PageSpeed 98/100"
    },
    category: "local",
    categoryLabel: {
      nl: "Lokale Bedrijven",
      en: "Local Businesses"
    },
    description: {
      nl: "Nummer 1 Google-positie in de regio met 98/100 PageSpeed en continue offerte-aanvragen.",
      en: "Number 1 Google ranking in the region with 98/100 PageSpeed and daily new client leads."
    },
    image: "/assets/projects/siebon.png",
    link: "https://www.siebon.com/",
    badge: {
      nl: "PageSpeed 98/100",
      en: "PageSpeed 98/100"
    },
    speedScore: 98
  },
  {
    id: "barbershop-abreu",
    title: "Barbershop Abreu",
    tag: {
      nl: "Website & Boekingsintegratie",
      en: "Website & Booking Integration"
    },
    category: "local",
    categoryLabel: {
      nl: "Lokale Bedrijven",
      en: "Local Businesses"
    },
    description: {
      nl: "Authentiek ambachtelijke website met 1-klik afsprakensysteem en Google Maps integratie.",
      en: "Craft barbershop website with 1-click booking and high-converting Google Maps profile."
    },
    image: "/assets/projects/abreu-barbershop.png",
    link: "https://barbershop-abreu-two.vercel.app/",
    badge: {
      nl: "Boekingssysteem",
      en: "Booking Engine"
    },
    speedScore: 99
  },
  {
    id: "examiqo",
    title: "Examiqo AI",
    tag: {
      nl: "AI Web Applicatie / Studieplanner",
      en: "AI Web Application / Study Planner"
    },
    category: "saas",
    categoryLabel: {
      nl: "SaaS & AI Platforms",
      en: "SaaS & AI Platforms"
    },
    description: {
      nl: "Intelligente AI-studieplanner die lesmateriaal omzet in adaptieve oefensessies.",
      en: "Intelligent AI study planner turning learning materials into adaptive practice sessions."
    },
    image: "/assets/projects/examiqo.png",
    link: "https://www.examiqo.com/",
    badge: {
      nl: "AI Application",
      en: "AI Application"
    },
    speedScore: 97
  }
];
