import { motion } from "motion/react";
import { ArrowRight, Check, Zap, Award, Sparkles } from "lucide-react";
import { Translations } from "../data/translations";

interface HeroProps {
  onOpenAudit: () => void;
  t: Translations["hero"];
}

export default function Hero({ onOpenAudit, t }: HeroProps) {
  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden border-b border-[rgba(26,23,20,0.06)] bg-[#FAF8F5]">
      {/* Giant Robinsweb-style Background Typography Watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none pointer-events-none z-0 overflow-hidden leading-none whitespace-nowrap"
        aria-hidden="true"
      >
        <span className="font-serif font-black text-[18vw] text-[#1A1714]/[0.04] tracking-tighter">
          {t.bgWatermark}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          
          {/* Left Column: Bold Copy & Direct Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start pt-4 pb-4 lg:pb-10"
          >
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFEA] border border-[rgba(26,23,20,0.06)] text-[#6E675F] text-xs font-medium tracking-wide mb-5">
              <span className="w-2 h-2 rounded-full bg-[#556B2F]" />
              <span>{t.greeting}</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.2rem] font-bold text-[#1A1714] leading-[1.08] tracking-tight mb-5">
              {t.titlePart1}{" "}
              <span className="inline-block">
                {t.titlePart2}{" "}
                <span className="relative inline-block text-[#D36241]">
                  {t.titleHighlight}
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#D36241]/30"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M0 6C30 2 70 10 100 6"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#6E675F] leading-relaxed max-w-xl mb-7">
              {t.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <a
                href="#portfolio"
                className="btn-terracotta text-sm sm:text-base py-3.5 px-7 shadow-md"
              >
                <span>{t.workCta}</span>
                <ArrowRight size={17} />
              </a>

              <button
                onClick={onOpenAudit}
                className="btn-outline-warm text-sm sm:text-base py-3.5 px-7"
              >
                <span>{t.auditCta}</span>
              </button>
            </div>

            {/* Symmetric Ticker Line */}
            <div className="pt-5 border-t border-[rgba(26,23,20,0.08)] w-full">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#1A1714]">
                {t.tickerItems.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-[#FFFFFF] border border-[rgba(26,23,20,0.06)] shadow-xs"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#EFF4EA] flex items-center justify-center shrink-0 text-[#556B2F]">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span className="font-medium text-xs leading-snug line-clamp-1">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Oskar as Prominent, Grounded Hero (Robinsweb Scale) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-end justify-center lg:justify-end self-end"
          >
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] flex items-end justify-center">
              
              {/* Warm Sunset/Amber Studio Halo radiating behind Oskar */}
              <div
                className="absolute inset-0 top-8 rounded-full bg-gradient-to-tr from-[#D36241]/20 via-[#F3EFEA] to-[#556B2F]/15 blur-3xl -z-10"
                aria-hidden="true"
              />

              {/* Large, Confident Portrait - Grounded Flush to Section Bottom */}
              <img
                src="/assets/oskar-portrait.png"
                alt="Oskar Lebon - Senior Front-End Developer en Webdesigner"
                className="w-full h-auto max-h-[580px] sm:max-h-[620px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(26,23,20,0.16)] select-none block"
                loading="eager"
                fetchPriority="high"
              />

              {/* Sleek Floating Badge: PageSpeed Guarantee */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute bottom-6 left-0 sm:-left-4 z-20 bg-[#FFFFFF]/95 backdrop-blur-xs border border-[rgba(26,23,20,0.08)] shadow-craft-hover rounded-2xl p-3 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-[#EFF4EA] flex items-center justify-center text-[#556B2F]">
                  <Zap size={18} className="fill-[#556B2F]" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-[#1A1714]">{t.badgeTopTier}</div>
                  <p className="text-[10px] text-[#6E675F]">{t.badgeSpeedDesc}</p>
                </div>
              </motion.div>

              {/* Sleek Floating Badge: 1-op-1 Maatwerk */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="hidden sm:flex absolute top-10 -right-2 z-20 bg-[#FFFFFF]/95 backdrop-blur-xs border border-[rgba(26,23,20,0.08)] shadow-craft-hover rounded-2xl p-2.5 sm:p-3 items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-full bg-[#FBF0EB] flex items-center justify-center text-[#D36241]">
                  <Award size={15} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A1714]">{t.badgeCraft}</div>
                  <div className="text-[10px] text-[#6E675F]">{t.badgeCraftDesc}</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
