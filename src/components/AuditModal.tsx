import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, Sparkles, Globe, Mail, Phone, Building } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { Translations } from "../data/translations";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations["auditModal"];
}

export default function AuditModal({ isOpen, onClose, t }: AuditModalProps) {
  const [state, handleSubmit] = useForm("xpqkygqo");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1A1714]/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[rgba(26,23,20,0.08)] z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#6E675F] hover:text-[#1A1714] hover:bg-[#F3EFEA] transition-colors"
              aria-label="Sluit modal"
            >
              <X size={20} />
            </button>

            {state.succeeded ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#EFF4EA] text-[#556B2F] rounded-full flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1714] mb-2">
                  {t.successTitle}
                </h3>
                <p className="text-sm text-[#6E675F] leading-relaxed max-w-sm mx-auto mb-6">
                  {t.successDesc}
                </p>
                <button
                  onClick={onClose}
                  className="btn-terracotta text-sm py-2.5 px-6"
                >
                  {t.closeBtn}
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-2 text-[#D36241] font-semibold text-xs tracking-wider uppercase">
                  <Sparkles size={16} />
                  <span>{t.freeTag}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1714] mb-2 leading-snug">
                  {t.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6E675F] leading-relaxed mb-5">
                  {t.subtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <input type="hidden" name="type" value="Gratis Website Audit" />

                  <div>
                    <label className="block text-[11px] font-semibold text-[#1A1714] uppercase tracking-wider mb-1">
                      {t.urlLabel}
                    </label>
                    <div className="relative">
                      <Globe size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9E968D]" />
                      <input
                        type="text"
                        name="website_of_bedrijf"
                        required
                        placeholder={t.urlPlaceholder}
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="w-full pl-10 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#1A1714] uppercase tracking-wider mb-1">
                      {t.nameLabel}
                    </label>
                    <div className="relative">
                      <Building size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9E968D]" />
                      <input
                        type="text"
                        name="naam"
                        required
                        placeholder={t.namePlaceholder}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full pl-10 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#1A1714] uppercase tracking-wider mb-1">
                      {t.emailLabel}
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9E968D]" />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder={t.emailPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 text-xs sm:text-sm"
                      />
                    </div>
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-xs mt-1" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#1A1714] uppercase tracking-wider mb-1">
                      {t.phoneLabel}
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9E968D]" />
                      <input
                        type="tel"
                        name="telefoon"
                        placeholder={t.phonePlaceholder}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={state.submitting || !website || !email}
                      className="w-full btn-terracotta text-sm py-3 font-semibold disabled:opacity-50"
                    >
                      {state.submitting ? t.submitting : t.submit}
                    </button>
                  </div>

                  <p className="text-[10px] text-center text-[#9E968D]">
                    {t.privacy}
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
