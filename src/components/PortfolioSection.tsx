import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Sparkles, Zap } from "lucide-react";
import { PROJECTS, Project } from "../data/projects";
import { Language, Translations } from "../data/translations";

interface PortfolioSectionProps {
  lang: Language;
  t: Translations["portfolio"];
}

export default function PortfolioSection({ lang, t }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: t.all },
    { id: "local", label: t.local },
    { id: "saas", label: t.saas },
    { id: "ecommerce", label: t.ecommerce }
  ];

  const filteredProjects = selectedCategory === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D36241] mb-2.5">
              <Sparkles size={14} />
              <span>{t.tag}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1714] tracking-tight">
              {t.title}
            </h2>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 bg-[#F3EFEA] p-1.5 rounded-full border border-[rgba(26,23,20,0.06)]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#1A1714] text-[#FAF8F5] shadow-xs"
                    : "text-[#6E675F] hover:text-[#1A1714]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Symmetrical 6-Project Grid (2 rows of 3 on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredProjects.map((project) => (
            <motion.article
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              key={project.id}
              className="flex flex-col bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[rgba(26,23,20,0.06)] shadow-craft hover:shadow-craft-hover transition-all duration-300 hover:-translate-y-1.5 group"
            >
              {/* Visual Showcase (Mockup with Floating Shadow) */}
              <div className="p-6 bg-[#F7F4EF] border-b border-[rgba(26,23,20,0.05)] flex flex-col items-center justify-center relative min-h-[230px]">
                {project.badge && (
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-xs text-[10px] font-semibold text-[#1A1714] border border-[rgba(26,23,20,0.06)] shadow-xs">
                    {project.speedScore && (
                      <Zap size={12} className="text-[#556B2F] fill-[#556B2F]" />
                    )}
                    <span>{project.badge[lang]}</span>
                  </div>
                )}

                <div className="w-full flex flex-col items-center justify-center relative pt-2">
                  <img
                    src={project.image}
                    alt={`Mockup van ${project.title}`}
                    className="w-full max-h-[195px] object-contain drop-shadow-[0_8px_16px_rgba(26,23,20,0.08)] transform group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="laptop-ground-shadow" aria-hidden="true" />
                </div>
              </div>

              {/* Card Body (Strictly below image, no overlays) */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-[#D36241] uppercase tracking-wider mb-1.5">
                    {project.tag[lang]}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1714] mb-2 group-hover:text-[#D36241] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6E675F] leading-relaxed mb-6 line-clamp-2">
                    {project.description[lang]}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-[rgba(26,23,20,0.06)] flex items-center justify-between">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1A1714] hover:text-[#D36241] transition-colors"
                    >
                      <span>{t.liveSite}</span>
                      <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#D36241] hover:underline"
                    >
                      <span>{t.caseStudy}</span>
                      <ArrowUpRight size={15} />
                    </button>
                  )}

                  {project.speedScore && (
                    <span className="text-[10px] font-semibold text-[#556B2F] bg-[#EFF4EA] px-2 py-0.5 rounded-md">
                      {project.speedScore}/100 {t.speedScore}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedCaseStudy && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCaseStudy(null)}
                className="fixed inset-0 bg-[#1A1714]/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[rgba(26,23,20,0.08)] z-10 my-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[#D36241] uppercase tracking-wider">
                    {selectedCaseStudy.tag[lang]}
                  </span>
                  <button
                    onClick={() => setSelectedCaseStudy(null)}
                    className="p-1 rounded-full text-[#6E675F] hover:bg-[#F3EFEA]"
                  >
                    ✕
                  </button>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1714] mb-3">
                  {selectedCaseStudy.title}
                </h3>
                <div className="my-5 bg-[#F7F4EF] p-4 rounded-2xl flex justify-center">
                  <img
                    src={selectedCaseStudy.image}
                    alt={selectedCaseStudy.title}
                    className="max-h-[250px] object-contain"
                  />
                </div>
                <p className="text-sm text-[#6E675F] leading-relaxed mb-6">
                  {selectedCaseStudy.description[lang]}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[rgba(26,23,20,0.08)]">
                  <a
                    href="#contact"
                    onClick={() => setSelectedCaseStudy(null)}
                    className="btn-terracotta text-sm py-2.5 px-5"
                  >
                    {t.modalDiscuss}
                  </a>
                  <button
                    onClick={() => setSelectedCaseStudy(null)}
                    className="btn-outline-warm text-sm py-2.5 px-5"
                  >
                    {t.close}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
