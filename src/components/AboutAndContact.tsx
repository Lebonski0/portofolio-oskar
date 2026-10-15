import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, CheckCircle2, Copy, Check, Sparkles, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { Translations } from "../data/translations";

interface AboutAndContactProps {
  selectedPlan?: string;
  t: Translations["aboutContact"];
}

export default function AboutAndContact({ selectedPlan, t }: AboutAndContactProps) {
  const [state, handleSubmit] = useForm("xpqkygqo");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState(selectedPlan || t.options.complete);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setPlan(selectedPlan);
    }
  }, [selectedPlan]);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Two-Column Symmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Human Story & Direct Reach */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D36241] mb-2">
                <Sparkles size={14} />
                <span>{t.tag}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1714] tracking-tight mb-4 leading-tight">
                {t.title}
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-[#6E675F] leading-relaxed mb-6">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-[rgba(26,23,20,0.08)]">
              {/* Email Card */}
              <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-[#FFFFFF] border border-[rgba(26,23,20,0.08)] shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FBF0EB] text-[#D36241] flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-[#9E968D] font-medium">{t.emailLabel}</div>
                    <div className="text-xs sm:text-sm font-semibold text-[#1A1714] truncate">oskar.lebon@gmail.com</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("oskar.lebon@gmail.com", "email")}
                  className="p-2 rounded-lg text-[#6E675F] hover:bg-[#F3EFEA] hover:text-[#1A1714] transition-colors shrink-0"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="text-[#556B2F]" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-[#FFFFFF] border border-[rgba(26,23,20,0.08)] shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EFF4EA] text-[#556B2F] flex items-center justify-center shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-[#9E968D] font-medium">{t.phoneLabel}</div>
                    <div className="text-xs sm:text-sm font-semibold text-[#1A1714] truncate">+32 499 48 02 34</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("+32499480234", "phone")}
                  className="p-2 rounded-lg text-[#6E675F] hover:bg-[#F3EFEA] hover:text-[#1A1714] transition-colors shrink-0"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check size={16} className="text-[#556B2F]" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#FFFFFF] border border-[rgba(26,23,20,0.08)] shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#F3EFEA] text-[#1A1714] flex items-center justify-center shrink-0">
                  <MapPin size={16} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-[#9E968D] font-medium">{t.locationLabel}</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#1A1714]">{t.locationVal}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Symmetrical Contact Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-[#FFFFFF] border border-[rgba(26,23,20,0.08)] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-craft h-full flex flex-col justify-between">
              
              {state.succeeded ? (
                <div className="py-10 sm:py-12 text-center my-auto">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#EFF4EA] text-[#556B2F] rounded-full flex items-center justify-center">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1714] mb-2">
                    {t.formSuccessTitle}
                  </h3>
                  <p className="text-sm text-[#6E675F] max-w-md mx-auto mb-6 leading-relaxed">
                    {t.formSuccessDesc}
                  </p>
                  <button
                    onClick={() => {
                      setName("");
                      setEmail("");
                      setPhone("");
                      setMessage("");
                    }}
                    className="btn-outline-warm text-xs sm:text-sm py-2.5 px-5"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-4 sm:mb-5">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1714] mb-1">
                      {t.formTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E675F]">
                      {t.formSubtitle}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5 flex-grow flex flex-col justify-between">
                    <div className="space-y-3 sm:space-y-3.5">
                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#1A1714] mb-1">
                            {t.nameLabel}
                          </label>
                          <input
                            type="text"
                            name="naam"
                            required
                            placeholder={t.namePlaceholder}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full text-base sm:text-sm py-2.5 px-3.5"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#1A1714] mb-1">
                            {t.phoneLabelInput}
                          </label>
                          <input
                            type="tel"
                            name="telefoon"
                            placeholder={t.phonePlaceholderInput}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full text-base sm:text-sm py-2.5 px-3.5"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#1A1714] mb-1">
                          {t.emailInputLabel}
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder={t.emailPlaceholder}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full text-base sm:text-sm py-2.5 px-3.5"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-xs mt-1" />
                      </div>

                      {/* Service / Plan Selection */}
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#1A1714] mb-1">
                          {t.interestLabel}
                        </label>
                        <select
                          name="dienst"
                          value={plan}
                          onChange={(e) => setPlan(e.target.value)}
                          className="w-full text-base sm:text-sm py-2.5 px-3.5 cursor-pointer"
                        >
                          <option value="Lokale Zichtbaarheid (€190)">{t.options.local}</option>
                          <option value="Compleet Online (€450)">{t.options.complete}</option>
                          <option value="Google Care (€29/maand)">{t.options.care}</option>
                          <option value="Maatwerk Project (€950+)">{t.options.custom}</option>
                          <option value="Gratis Audit">{t.options.audit}</option>
                          <option value="Algemene Vraag">{t.options.general}</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#1A1714] mb-1">
                          {t.messageLabel}
                        </label>
                        <textarea
                          name="bericht"
                          rows={3}
                          required
                          placeholder={t.messagePlaceholder}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full text-base sm:text-sm py-2.5 px-3.5 resize-none"
                        />
                        <ValidationError prefix="Bericht" field="bericht" errors={state.errors} className="text-red-600 text-xs mt-1" />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={state.submitting || !name || !email || !message}
                        className="w-full btn-terracotta text-sm sm:text-base py-3.5 font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {state.submitting ? (
                          t.submittingBtn
                        ) : (
                          <>
                            <span>{t.submitBtn}</span>
                            <Send size={16} />
                          </>
                        )}
                      </button>
                      <p className="text-[10px] text-center text-[#9E968D] mt-2">
                        {t.guarantee}
                      </p>
                    </div>

                  </form>
                </>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
