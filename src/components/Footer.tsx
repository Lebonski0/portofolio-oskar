import { Linkedin, Instagram, Facebook, ArrowUp } from "lucide-react";
import { Translations } from "../data/translations";

interface FooterProps {
  t: Translations["footer"];
}

export default function Footer({ t }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[rgba(26,23,20,0.08)] py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-10 border-b border-[rgba(26,23,20,0.06)]">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="#"
              className="flex items-center gap-2 font-sans font-bold text-lg sm:text-xl tracking-[0.16em] text-[#1A1714] uppercase mb-2.5"
            >
              <span>OSKAR LEBON</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D36241]" />
            </a>
            <p className="text-xs sm:text-sm text-[#6E675F] max-w-sm leading-relaxed mb-4">
              {t.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF4EA] text-[#556B2F] text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#556B2F]" />
              <span>{t.badge}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#1A1714] mb-3">
              {t.navTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#6E675F]">
              <li>
                <a href="#portfolio" className="hover:text-[#D36241] transition-colors">
                  {t.work}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D36241] transition-colors">
                  {t.services}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D36241] transition-colors">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D36241] transition-colors">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#1A1714] mb-3 md:text-right">
                {t.socialTitle}
              </h4>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.linkedin.com/in/oskar-lebon-3a4869398/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#F3EFEA] hover:bg-[#D36241] hover:text-[#FFFFFF] text-[#1A1714] flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://www.instagram.com/oskarlebon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#F3EFEA] hover:bg-[#D36241] hover:text-[#FFFFFF] text-[#1A1714] flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.facebook.com/oskar.lebon.14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#F3EFEA] hover:bg-[#D36241] hover:text-[#FFFFFF] text-[#1A1714] flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 flex items-center gap-1.5 text-xs font-semibold text-[#6E675F] hover:text-[#1A1714] transition-colors"
              aria-label="Back to top"
            >
              <span>{t.backToTop}</span>
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9E968D]">
          <p>© {new Date().getFullYear()} Oskar Lebon. {t.rights}</p>
          <p className="flex items-center gap-2">
            <span>{t.payGuar}</span>
            <span>•</span>
            <span>{t.speedGuar}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
