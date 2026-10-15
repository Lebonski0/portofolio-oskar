import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { Language, Translations } from "../data/translations";

interface NavbarProps {
  onOpenAudit: () => void;
  activeSection: string;
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  t: Translations["nav"];
}

export default function Navbar({
  onOpenAudit,
  activeSection,
  lang,
  onLanguageChange,
  t
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#portfolio", label: t.work, id: "portfolio" },
    { href: "#services", label: t.services, id: "services" },
    { href: "#about", label: t.about, id: "about" },
    { href: "#contact", label: t.contact, id: "contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[rgba(26,23,20,0.06)] shadow-xs py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Name */}
        <a
          href="#"
          className="group flex items-center gap-2 font-sans font-bold text-lg sm:text-xl tracking-[0.16em] text-[#1A1714] uppercase hover:opacity-85 transition-opacity"
          aria-label="Oskar Lebon - Naar boven"
        >
          <span>OSKAR LEBON</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D36241] group-hover:scale-125 transition-transform" />
        </a>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-[#6E675F]"
          aria-label="Hoofdnavigatie"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-[#1A1714] ${
                  isActive ? "text-[#1A1714] font-semibold" : ""
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D36241] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Language Switcher & Audit CTA Button */}
        <div className="hidden md:flex items-center gap-3.5 lg:gap-4">
          {/* Language Toggle Pill */}
          <div className="flex items-center rounded-full bg-[#F3EFEA] p-0.5 border border-[rgba(26,23,20,0.08)]">
            <button
              onClick={() => onLanguageChange("nl")}
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                lang === "nl"
                  ? "bg-[#FFFFFF] text-[#1A1714] shadow-xs"
                  : "text-[#6E675F] hover:text-[#1A1714]"
              }`}
              aria-label="Schakel naar Nederlands"
            >
              NL
            </button>
            <button
              onClick={() => onLanguageChange("en")}
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                lang === "en"
                  ? "bg-[#FFFFFF] text-[#1A1714] shadow-xs"
                  : "text-[#6E675F] hover:text-[#1A1714]"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          <button
            onClick={onOpenAudit}
            className="btn-terracotta text-xs font-semibold uppercase tracking-wider py-2.5 px-5"
          >
            {t.auditCta}
          </button>
        </div>

        {/* Mobile Header Controls: Language switcher + Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center rounded-full bg-[#F3EFEA] p-0.5 border border-[rgba(26,23,20,0.08)] mr-1">
            <button
              onClick={() => onLanguageChange("nl")}
              className={`px-2 py-0.5 text-[11px] font-semibold rounded-full transition-all ${
                lang === "nl" ? "bg-[#FFFFFF] text-[#1A1714] shadow-xs" : "text-[#6E675F]"
              }`}
            >
              NL
            </button>
            <button
              onClick={() => onLanguageChange("en")}
              className={`px-2 py-0.5 text-[11px] font-semibold rounded-full transition-all ${
                lang === "en" ? "bg-[#FFFFFF] text-[#1A1714] shadow-xs" : "text-[#6E675F]"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1A1714] hover:bg-[#F3EFEA] rounded-xl transition-colors"
            aria-label={mobileMenuOpen ? "Sluit navigatiemenu" : "Open navigatiemenu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF8F5] border-b border-[rgba(26,23,20,0.08)] px-6 py-6 shadow-xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 border-b border-[rgba(26,23,20,0.05)] ${
                    activeSection === link.id
                      ? "text-[#D36241] font-semibold"
                      : "text-[#1A1714]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAudit();
                  }}
                  className="w-full btn-terracotta text-sm py-3 justify-center"
                >
                  {t.auditCta}
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
