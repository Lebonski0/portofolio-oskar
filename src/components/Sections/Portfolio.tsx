import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Siebon",
    description: "Professionele website voor een loodgieter in Roeselare. Lokale SEO en bliksemsnelle performance.",
    link: "https://siebon.com",
    image: "/assets/projects/siebon.png",
    tags: ["Loodgieter Roeselare", "Local SEO", "AI-Built Website"]
  },
  {
    title: "Jong Ondernemend België",
    description: "Netwerkplatform voor jonge Belgische ondernemers. Community-gedreven design en moderne architectuur.",
    link: "https://jongondernemendbelgie.be",
    image: "/assets/projects/job.png",
    tags: ["Ondernemen België", "UX/UI Design", "Digital Identity"]
  },
  {
    title: "Examiqo",
    description: "AI-app voor examenoptimalisatie. Focus op schaalbare infrastructuur en intuïtieve user journey.",
    image: "/assets/projects/examiqo.png",
    link: "https://examiqo.com",
    tags: ["AI Web App", "SaaS Development", "Performance"]
  }
];

const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function Portfolio() {
  return (
    <section 
      id="portfolio" 
      aria-labelledby="portfolio-title"
      className="py-24 bg-[#060606] relative"
    >
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 id="portfolio-title" className="font-display text-4xl md:text-7xl font-bold tracking-tighter mb-6 italic uppercase">Recent Werk</h2>
              <p className="text-white/50 text-xl font-light italic leading-relaxed">
                Projecten gericht op snelheid, conversie en perfecte user experience. <br />
                <span className="text-accent/60 opacity-80 underline underline-offset-4 decoration-accent/30">ELK DETAIL TELT.</span>
              </p>
            </div>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROJECTS.map((p, i) => (
            <FadeInUp key={i} delay={i * 0.15}>
              <a 
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/5 hover:border-accent/40 transition-all duration-700 active:scale-[0.98] block hover-lift shadow-2xl shadow-black"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/95 z-10" />
                
                <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                  />
                </div>

                <div className="absolute bottom-0 left-0 p-8 sm:p-10 z-20 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {p.tags.map((t, ti) => (
                      <span key={ti} className="text-[9px] uppercase font-black tracking-widest px-2.5 py-1.5 bg-white/5 rounded-lg border border-white/5 backdrop-blur-xl">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="min-h-[4rem] flex items-start">
                    <h3 className="font-display font-bold text-2xl lg:text-3xl group-hover:text-accent transition-colors flex items-center gap-3 leading-tight">
                      {p.title}
                      <ExternalLink size={18} className="text-white/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                    </h3>
                  </div>
                  <div className="min-h-[3rem]">
                    <p className="text-sm sm:text-base text-white/40 mt-4 font-light leading-snug line-clamp-2 italic">
                      {p.description}
                    </p>
                  </div>
                </div>
              </a>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
