import { motion } from "motion/react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Translations } from "../data/translations";

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
  t: Translations["pricing"];
}

export default function PricingSection({ onSelectPlan, t }: PricingSectionProps) {
  const plans = [
    {
      id: "local",
      ...t.localPlan,
      featured: false
    },
    {
      id: "complete",
      ...t.completePlan,
      featured: true
    },
    {
      id: "care",
      ...t.carePlan,
      featured: false
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#F3EFEA] relative border-y border-[rgba(26,23,20,0.06)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D36241] mb-2.5">
            <Sparkles size={14} />
            <span>{t.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1714] tracking-tight mb-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6E675F] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Distilled Pricing Cards (Zero Text Overload) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-10">
          {plans.map((plan) => (
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all ${
                plan.featured
                  ? "bg-[#FFFFFF] border-2 border-[#D36241] shadow-craft-hover"
                  : "bg-[#FFFFFF] border border-[rgba(26,23,20,0.08)] shadow-craft hover:border-[rgba(26,23,20,0.16)]"
              }`}
            >
              {"badge" in plan && plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#D36241] text-[#FFFFFF] text-[10px] font-bold tracking-wider uppercase shadow-xs">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1714] mb-1.5">
                  {plan.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E675F] min-h-[34px] mb-5 leading-relaxed">
                  {plan.tagline}
                </p>

                <div className="flex items-baseline gap-2 mb-6 pb-5 border-b border-[rgba(26,23,20,0.08)]">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1714] tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#6E675F]">
                    {plan.period}
                  </span>
                </div>

                {/* Exactly 3 Crisp Bullets */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feat, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1A1714] leading-snug">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-[#EFF4EA] flex items-center justify-center shrink-0 text-[#556B2F]">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span className="font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href="#contact"
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full text-center text-xs sm:text-sm py-3.5 font-semibold rounded-full block transition-all ${
                    plan.featured ? "btn-terracotta" : "btn-outline-warm"
                  }`}
                >
                  {plan.cta}
                </a>

                {"subtext" in plan && plan.subtext && (
                  <p className="text-[10px] text-center text-[#9E968D] mt-2.5">
                    {plan.subtext}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clean 1-Line Custom Project Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#D36241] to-[#BD5435] text-[#FFFFFF] p-6 sm:p-7 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFFFFF]/80">
              {t.customBanner.badge}
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight mt-0.5">
              {t.customBanner.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#FFFFFF]/90 mt-0.5">
              {t.customBanner.desc}
            </p>
          </div>

          <a
            href="#contact"
            onClick={() => onSelectPlan(t.customBanner.title)}
            className="shrink-0 bg-[#FFFFFF] text-[#1A1714] hover:bg-[#FAF8F5] text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-xs flex items-center gap-2 hover:gap-3 transition-all"
          >
            <span>{t.customBanner.cta}</span>
            <ArrowRight size={15} className="text-[#D36241]" />
          </a>
        </div>

      </div>
    </section>
  );
}
