import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import PortfolioSection from "./components/PortfolioSection";
import PricingSection from "./components/PricingSection";
import AboutAndContact from "./components/AboutAndContact";
import Footer from "./components/Footer";
import AuditModal from "./components/AuditModal";
import { Language, TRANSLATIONS } from "./data/translations";

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("oskar_portfolio_lang");
    return saved === "en" ? "en" : "nl";
  });

  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string>("");

  const t = TRANSLATIONS[lang];

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("oskar_portfolio_lang", newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const sections = ["portfolio", "services", "about", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -50% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1714] font-sans antialiased selection:bg-[#D36241] selection:text-[#FFFFFF] relative bg-grain">
      {/* Top Navigation with Language Switcher */}
      <Navbar
        onOpenAudit={() => setIsAuditModalOpen(true)}
        activeSection={activeSection}
        lang={lang}
        onLanguageChange={handleLanguageChange}
        t={t.nav}
      />

      <main>
        {/* Hero Section with Grounded Portrait and Symmetric Checks */}
        <Hero
          onOpenAudit={() => setIsAuditModalOpen(true)}
          t={t.hero}
        />

        {/* Logo Bar (Tools & Vertrouwen) */}
        <LogoBar t={t.tools} />

        {/* Portfolio Section (Interactive Horizontal Carousel) */}
        <PortfolioSection
          lang={lang}
          t={t.portfolio}
        />

        {/* Pricing & Services Section */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
          t={t.pricing}
        />

        {/* About & Contact Section with Symmetrical Heights */}
        <AboutAndContact
          selectedPlan={selectedPlan}
          t={t.aboutContact}
        />
      </main>

      {/* Footer */}
      <Footer t={t.footer} />

      {/* Conversion Audit Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        t={t.auditModal}
      />
    </div>
  );
}
