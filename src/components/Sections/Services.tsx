import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const SERVICES = [
  {
    name: "Starter Website",
    features: ["One-page design", "Mobile responsive", "Basis SEO", "Contactformulier"],
    accent: "border-white/10"
  },
  {
    name: "Professional",
    features: ["Max 5 pagina's", "Custom design", "AI Content optimalisatie", "Google Business integratie"],
    accent: "border-accent",
    featured: true
  },
  {
    name: "Digital Architecture",
    features: ["Custom Web Apps", "E-commerce oplossingen", "Advanced Performance", "Lead Gen systemen"],
    accent: "border-white/10"
  },
  {
    name: "AI Strategy",
    features: ["Workflows", "AI Agents", "Automatische Lead Gen", "Consultancy"],
    accent: "border-white/10"
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

export default function Services({ setFormState }: { setFormState: (val: any) => void }) {
  return (
    <section 
      id="services" 
      aria-labelledby="services-title"
      className="py-24 border-t border-white/[0.05]"
    >
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="mb-20">
            <h2 id="services-title" className="font-display text-4xl md:text-7xl font-bold tracking-tighter mb-4 uppercase">Diensten</h2>
            <div className="h-1.5 w-24 bg-accent" aria-hidden="true" />
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div 
                className={`p-10 rounded-[2.5rem] border bg-white/[0.02] backdrop-blur-sm relative transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] ${s.accent} ${s.featured ? 'glow-accent border-accent/40' : 'border-white/10'}`}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-accent text-dark font-display text-[11px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    Aanbevolen
                  </span>
                )}
                <h3 className="font-display font-bold text-xl mb-8 uppercase tracking-tight">{s.name}</h3>
                <ul className="space-y-5 mb-12">
                  {s.features.map((f, fi) => (
                    <li key={fi} className="flex gap-4 text-sm text-white/70 italic font-light">
                      <CheckCircle2 size={18} className="text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact"
                  onClick={() => setFormState((prev: any) => ({ ...prev, message: `Ik heb interesse in het ${s.name} pakket.` }))}
                  className={`w-full py-5 rounded-2xl font-display font-black text-xs uppercase text-center block transition-all active:scale-[0.96] tracking-[0.1em] ${s.featured ? 'bg-accent text-dark hover:brightness-110' : 'bg-white/5 hover:bg-white/10'}`}
                >
                  Vraag offerte aan
                </a>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
