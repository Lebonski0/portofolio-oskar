export type Language = "nl" | "en";

export interface Translations {
  nav: {
    work: string;
    services: string;
    about: string;
    contact: string;
    auditCta: string;
  };
  hero: {
    bgWatermark: string;
    greeting: string;
    titlePart1: string;
    titlePart2: string;
    titleHighlight: string;
    subtitle: string;
    workCta: string;
    auditCta: string;
    tickerItems: string[];
    badgeTopTier: string;
    badgeSpeedDesc: string;
    badgeCraft: string;
    badgeCraftDesc: string;
  };
  tools: {
    googleSearch: string;
    googleSearchDesc: string;
    pagespeed: string;
    pagespeedDesc: string;
    openSeo: string;
    openSeoDesc: string;
    antigravity: string;
    antigravityDesc: string;
    isAgentic: string;
    isAgenticDesc: string;
  };
  portfolio: {
    tag: string;
    title: string;
    all: string;
    local: string;
    saas: string;
    ecommerce: string;
    liveSite: string;
    caseStudy: string;
    speedScore: string;
    close: string;
    modalDiscuss: string;
  };
  pricing: {
    tag: string;
    title: string;
    subtitle: string;
    localPlan: {
      name: string;
      price: string;
      period: string;
      tagline: string;
      features: string[];
      cta: string;
    };
    completePlan: {
      name: string;
      price: string;
      period: string;
      badge: string;
      tagline: string;
      features: string[];
      cta: string;
      subtext: string;
    };
    carePlan: {
      name: string;
      price: string;
      period: string;
      tagline: string;
      features: string[];
      cta: string;
      subtext: string;
    };
    customBanner: {
      badge: string;
      title: string;
      desc: string;
      cta: string;
    };
  };
  aboutContact: {
    tag: string;
    title: string;
    p1: string;
    p2: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationVal: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailInputLabel: string;
    emailPlaceholder: string;
    phoneLabelInput: string;
    phonePlaceholderInput: string;
    interestLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    formSuccessTitle: string;
    formSuccessDesc: string;
    sendAnother: string;
    guarantee: string;
    options: {
      local: string;
      complete: string;
      care: string;
      custom: string;
      audit: string;
      general: string;
    };
  };
  auditModal: {
    freeTag: string;
    title: string;
    subtitle: string;
    urlLabel: string;
    urlPlaceholder: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    submit: string;
    submitting: string;
    privacy: string;
    successTitle: string;
    successDesc: string;
    closeBtn: string;
  };
  footer: {
    tagline: string;
    badge: string;
    navTitle: string;
    work: string;
    services: string;
    about: string;
    contact: string;
    socialTitle: string;
    backToTop: string;
    rights: string;
    payGuar: string;
    speedGuar: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  nl: {
    nav: {
      work: "Werk",
      services: "Tarieven",
      about: "Over Mij",
      contact: "Contact",
      auditCta: "Gratis Website Audit"
    },
    hero: {
      bgWatermark: "OSKAR LEBON",
      greeting: "Hoi, ik ben Oskar Lebon",
      titlePart1: "Menselijk vakmanschap,",
      titlePart2: "aangedreven door",
      titleHighlight: "AI-snelheid.",
      subtitle: "Ik ontwerp razendsnelle websites en Google-profielen die van lokale zoekers loyale klanten maken. Samen met AI als mijn teamgenoot bouw ik in dagen wat anderen in weken doen.",
      workCta: "Bekijk projecten",
      auditCta: "Gratis Website Audit",
      tickerItems: [
        "95+ Google PageSpeed",
        "Vaste prijzen vanaf €190",
        "Gevestigd in Lagos, Algarve",
        "Betalen na tevredenheid"
      ],
      badgeTopTier: "98/100 Top Tier",
      badgeSpeedDesc: "PageSpeed Garantie",
      badgeCraft: "1-op-1 Maatwerk",
      badgeCraftDesc: "Direct contact met Oskar"
    },
    tools: {
      googleSearch: "Google Search",
      googleSearchDesc: "Lokale Vindbaarheid",
      pagespeed: "Google PageSpeed",
      pagespeedDesc: "95+ Score Garantie",
      openSeo: "Open SEO",
      openSeoDesc: "Geoptimaliseerde Meta & Schema",
      antigravity: "Antigravity",
      antigravityDesc: "Advanced AI Development",
      isAgentic: "is-agentic.com",
      isAgenticDesc: "Autonomous Workflows"
    },
    portfolio: {
      tag: "Geselecteerd Werk",
      title: "Gerealiseerde Projecten",
      all: "Alles",
      local: "Lokale Bedrijven",
      saas: "SaaS & AI Platforms",
      ecommerce: "E-Commerce",
      liveSite: "Bekijk Live Website",
      caseStudy: "Bekijk Details",
      speedScore: "Speed",
      close: "Sluiten",
      modalDiscuss: "Bespreek Soortgelijk Project →"
    },
    pricing: {
      tag: "Duidelijke Tarieven",
      title: "Eerlijke & Transparante Prijzen",
      subtitle: "Geen verrassingen, geen ingewikkelde uurtarieven. Weet direct waar je aan toe bent.",
      localPlan: {
        name: "Lokale Zichtbaarheid",
        price: "€190",
        period: "eenmalig",
        tagline: "Direct vindbaar voor klanten in jouw buurt.",
        features: [
          "Google Bedrijfsprofiel volledige inrichting & SEO",
          "Fysieke NFC / QR-reviewkaart voor op locatie",
          "Officiële Google verificatiebegeleiding & support"
        ],
        cta: "Kies Lokale Zichtbaarheid"
      },
      completePlan: {
        name: "Compleet Online",
        price: "€450",
        period: "eenmalig",
        badge: "Meest gekozen",
        tagline: "Een professionele website die direct nieuwe klanten oplevert.",
        features: [
          "Alles uit Lokale Zichtbaarheid inbegrepen",
          "Op maat gemaakte, supersnelle 1-page website (95+ Speed)",
          "1e jaar custom domein, snelle hosting & Open SEO"
        ],
        cta: "Start met Compleet Online",
        subtext: "Na 1e jaar: €99/jaar voor optioneel onderhoud & hosting"
      },
      carePlan: {
        name: "Google Care",
        price: "€29",
        period: "/maand",
        tagline: "Laat ons de maandelijkse groei van je profiel beheren.",
        features: [
          "Openingstijden, foto's & diensten continu up-to-date",
          "AI review-antwoorden met 1-klik goedkeuring",
          "Maandelijks prestatierapport & ranking monitoring"
        ],
        cta: "Start met Google Care",
        subtext: "Maandelijks opzegbaar • Geen langlopend contract"
      },
      customBanner: {
        badge: "Grotere ambities?",
        title: "Maatwerk website of web-applicatie nodig?",
        desc: "Van meertalige platformen tot complexe SaaS tools. Projecten vanaf €950+.",
        cta: "Neem direct contact op"
      }
    },
    aboutContact: {
      tag: "Over Oskar",
      title: "Menselijk oog voor detail, razendsnel gebouwd.",
      p1: "Vanuit Lagos, Algarve help ik ondernemers en bedrijven om online te domineren. Waar traditionele agencies weken vergaderen, lever ik binnen dagen complete websites die converteren.",
      p2: "Samenwerken gebeurt 1-op-1 direct met mij. Geen bureaucratie, geen tussenpersonen, en je betaalt pas wanneer je 100% tevreden bent.",
      emailLabel: "E-mailadres",
      phoneLabel: "Telefoon / WhatsApp",
      locationLabel: "Locatie & Bereik",
      locationVal: "Lagos, Algarve • Beschikbaar voor België & Internationaal",
      formTitle: "Start je project",
      formSubtitle: "Stuur een bericht en ontvang binnen 24 uur een vrijblijvend voorstel.",
      nameLabel: "Je Naam *",
      namePlaceholder: "bijv. Thomas Vandevelde",
      emailInputLabel: "E-mailadres *",
      emailPlaceholder: "thomas@jouwbedrijf.be",
      phoneLabelInput: "Telefoon / WhatsApp",
      phonePlaceholderInput: "+32 ... of +351 ...",
      interestLabel: "Kies je gewenste pakket",
      messageLabel: "Vertel kort over je plannen *",
      messagePlaceholder: "Wat wil je bereiken met je website of Google profiel?",
      submitBtn: "Verstuur Aanvraag",
      submittingBtn: "Verzenden...",
      formSuccessTitle: "Aanvraag Ontvangen!",
      formSuccessDesc: "Bedankt! Ik neem binnen 24 uur persoonlijk contact met je op om je project door te nemen.",
      sendAnother: "Stuur nog een bericht",
      guarantee: "✓ 100% Vrijblijvend • Reactie binnen 24u • Betalen na tevredenheid",
      options: {
        local: "Lokale Zichtbaarheid (€190)",
        complete: "Compleet Online (€450)",
        care: "Google Care (€29/maand)",
        custom: "Maatwerk Project (€950+)",
        audit: "Gratis Website Audit",
        general: "Vrijblijvend Advies"
      }
    },
    auditModal: {
      freeTag: "100% Vrijblijvend & Kosteloos",
      title: "Gratis Website & Google Audit",
      subtitle: "Ontvang een heldere analyse van je huidige website op laadsnelheid, Google-vindbaarheid en conversiekansen.",
      urlLabel: "Website URL of Bedrijfsnaam *",
      urlPlaceholder: "bijv. www.jouwbedrijf.be of Bedrijfsnaam",
      nameLabel: "Jouw Naam *",
      namePlaceholder: "Voor- en achternaam",
      emailLabel: "E-mailadres *",
      emailPlaceholder: "jouw@email.com",
      phoneLabel: "Telefoon / WhatsApp (optioneel)",
      phonePlaceholder: "+32 ... of +351 ...",
      submit: "Vraag Gratis Audit Aan →",
      submitting: "Aanvragen...",
      privacy: "🔒 Geen spam. Enkel gebruikt voor deze eenmalige analyse.",
      successTitle: "Audit Aanvraag Ontvangen!",
      successDesc: "Bedankt! Ik bekijk jouw website persoonlijk en stuur je binnen 24 uur de analyse per mail.",
      closeBtn: "Sluit venster"
    },
    footer: {
      tagline: "Menselijk vakmanschap, aangedreven door AI-snelheid. Websites die converteren.",
      badge: "Lagos, Algarve • Wereldwijd inzetbaar",
      navTitle: "Navigatie",
      work: "Gerealiseerde Projecten",
      services: "Tarieven & Pakketten",
      about: "Over Mij",
      contact: "Contact & Aanvraag",
      socialTitle: "Socials",
      backToTop: "Naar boven",
      rights: "Alle rechten voorbehouden.",
      payGuar: "✓ Betalen na tevredenheid",
      speedGuar: "95+ PageSpeed garantie"
    }
  },
  en: {
    nav: {
      work: "Work",
      services: "Pricing",
      about: "About Me",
      contact: "Contact",
      auditCta: "Free Website Audit"
    },
    hero: {
      bgWatermark: "OSKAR LEBON",
      greeting: "Hi, I'm Oskar Lebon",
      titlePart1: "Human craftsmanship,",
      titlePart2: "powered by",
      titleHighlight: "AI speed.",
      subtitle: "I design ultra-fast websites and Google Business profiles that turn local searchers into loyal clients. Partnered with AI, I build in days what takes traditional agencies weeks.",
      workCta: "Explore projects",
      auditCta: "Free Website Audit",
      tickerItems: [
        "95+ Google PageSpeed",
        "Fixed prices from €190",
        "Based in Lagos, Algarve",
        "Pay after satisfaction"
      ],
      badgeTopTier: "98/100 Top Tier",
      badgeSpeedDesc: "PageSpeed Guarantee",
      badgeCraft: "1-on-1 Craftsmanship",
      badgeCraftDesc: "Direct contact with Oskar"
    },
    tools: {
      googleSearch: "Google Search",
      googleSearchDesc: "Local Search Visibility",
      pagespeed: "Google PageSpeed",
      pagespeedDesc: "95+ Score Guarantee",
      openSeo: "Open SEO",
      openSeoDesc: "Optimized Meta & Schema",
      antigravity: "Antigravity",
      antigravityDesc: "Advanced AI Development",
      isAgentic: "is-agentic.com",
      isAgenticDesc: "Autonomous Workflows"
    },
    portfolio: {
      tag: "Selected Work",
      title: "Featured Projects",
      all: "All",
      local: "Local Businesses",
      saas: "SaaS & AI Platforms",
      ecommerce: "E-Commerce",
      liveSite: "Visit Live Website",
      caseStudy: "View Details",
      speedScore: "Speed",
      close: "Close",
      modalDiscuss: "Discuss Similar Project →"
    },
    pricing: {
      tag: "Clear Pricing",
      title: "Fair & Transparent Pricing",
      subtitle: "No surprise invoices, no complex hourly rates. Know exactly what you get and what you invest.",
      localPlan: {
        name: "Local Visibility",
        price: "€190",
        period: "one-time",
        tagline: "Get found instantly by customers in your immediate area.",
        features: [
          "Complete Google Business Profile setup & SEO",
          "Physical NFC / QR review card for your counter",
          "Official verification guidance & direct support"
        ],
        cta: "Choose Local Visibility"
      },
      completePlan: {
        name: "Complete Online",
        price: "€450",
        period: "one-time",
        badge: "Most Popular",
        tagline: "A high-speed, modern website designed to convert visitors.",
        features: [
          "Everything in Local Visibility included",
          "Custom-built 1-page website (95+ PageSpeed guaranteed)",
          "1st year custom domain, fast hosting & Open SEO included"
        ],
        cta: "Start with Complete Online",
        subtext: "After 1st year: €99/year for optional maintenance & hosting"
      },
      carePlan: {
        name: "Google Care",
        price: "€29",
        period: "/month",
        tagline: "Let us manage and grow your Google profile continuously.",
        features: [
          "Business hours, photos & services kept up-to-date",
          "AI review reply drafts with 1-click approval",
          "Monthly performance reports & ranking monitoring"
        ],
        cta: "Start with Google Care",
        subtext: "Cancel anytime • No long-term commitments"
      },
      customBanner: {
        badge: "Bigger ambitions?",
        title: "Need a custom web app or larger project?",
        desc: "From multilingual online stores to bespoke AI tools. Projects starting from €950+.",
        cta: "Get in touch"
      }
    },
    aboutContact: {
      tag: "About Oskar",
      title: "Human eye for detail, built at high speed.",
      p1: "Based in Lagos, Algarve, I help entrepreneurs and ambitious businesses dominate online. While traditional agencies spend weeks in meetings, I deliver complete websites that convert in days.",
      p2: "You work directly 1-on-1 with me. No bureaucracy, no junior account managers, and you only pay once you are 100% satisfied.",
      emailLabel: "Email Address",
      phoneLabel: "Phone / WhatsApp",
      locationLabel: "Location & Reach",
      locationVal: "Lagos, Algarve • Serving Belgium & International Clients",
      formTitle: "Start your project",
      formSubtitle: "Send a message and receive a personalized quote within 24 hours.",
      nameLabel: "Your Name *",
      namePlaceholder: "e.g. Thomas Smith",
      emailInputLabel: "Email Address *",
      emailPlaceholder: "thomas@yourcompany.com",
      phoneLabelInput: "Phone / WhatsApp",
      phonePlaceholderInput: "+32 ... or +351 ...",
      interestLabel: "Select preferred package",
      messageLabel: "Tell me about your project *",
      messagePlaceholder: "What are your primary goals for your new website or profile?",
      submitBtn: "Submit Inquiry",
      submittingBtn: "Sending...",
      formSuccessTitle: "Inquiry Received!",
      formSuccessDesc: "Thank you! I will personally review your project and get back to you within 24 hours.",
      sendAnother: "Send another message",
      guarantee: "✓ 100% Free Consultation • Reply within 24h • Pay after satisfaction",
      options: {
        local: "Local Visibility (€190)",
        complete: "Complete Online (€450)",
        care: "Google Care (€29/month)",
        custom: "Custom Project (€950+)",
        audit: "Free Website Audit",
        general: "Free Consultation"
      }
    },
    auditModal: {
      freeTag: "100% Free & No Obligations",
      title: "Free Website & Google Audit",
      subtitle: "Receive a clear breakdown of your current website's speed, local ranking, and conversion opportunities.",
      urlLabel: "Website URL or Business Name *",
      urlPlaceholder: "e.g. www.yourcompany.com or Business Name",
      nameLabel: "Your Name *",
      namePlaceholder: "First and last name",
      emailLabel: "Email Address *",
      emailPlaceholder: "your@email.com",
      phoneLabel: "Phone / WhatsApp (optional)",
      phonePlaceholder: "+32 ... or +351 ...",
      submit: "Request Free Audit →",
      submitting: "Submitting...",
      privacy: "🔒 Zero spam. Strictly used for this single audit report.",
      successTitle: "Audit Request Received!",
      successDesc: "Thank you! I will personally review your site and send the report to your inbox within 24 hours.",
      closeBtn: "Close window"
    },
    footer: {
      tagline: "Human craftsmanship, powered by AI speed. Websites that convert.",
      badge: "Lagos, Algarve • Worldwide Reach",
      navTitle: "Navigation",
      work: "Featured Projects",
      services: "Pricing & Plans",
      about: "About Me",
      contact: "Contact & Inquiries",
      socialTitle: "Socials",
      backToTop: "Back to top",
      rights: "All rights reserved.",
      payGuar: "✓ Pay after satisfaction",
      speedGuar: "95+ PageSpeed guarantee"
    }
  }
};
