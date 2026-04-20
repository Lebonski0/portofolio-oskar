/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Globe, 
  Mail, 
  MapPin, 
  Zap,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const PROJECTS = [
  {
    title: "Siebon",
    description: "Moderne website voor een lokale loodgieter in Roeselare.",
    link: "https://siebon.com",
    tags: ["Local Business", "SEO", "AI-Built"]
  },
  {
    title: "Jong Ondernemend België",
    description: "Platform voor de nieuwe generatie ondernemers in België.",
    link: "https://jongondernemendbelgie.be",
    tags: ["Platform", "Community", "Design"]
  },
  {
    title: "Examiqo",
    description: "AI-gestuurde examenplanning voor studenten.",
    link: "https://examiqo.com",
    tags: ["AI Web App", "Productivity", "SaaS"]
  }
];

const SERVICES = [
  {
    name: "Starter Website",
    price: "Vanaf €799",
    features: ["One-page design", "Mobile responsive", "Basis SEO", "Contactformulier"],
    accent: "border-white/10"
  },
  {
    name: "Professional",
    price: "Vanaf €1499",
    features: ["Max 5 pagina's", "Custom design", "AI Content optimalisatie", "Google Business integratie"],
    accent: "border-accent",
    featured: true
  },
  {
    name: "Premium + Booking",
    price: "Vanaf €2499",
    features: ["Full website", "Online reservatiesysteem", "Betalingsintegratie", "Advanced SEO"],
    accent: "border-white/10"
  },
  {
    name: "Onderhoud",
    price: "€49 / mnd",
    features: ["Hosting inbegrepen", "Security updates", "Content aanpassingen", "Performance monitoring"],
    accent: "border-white/10"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-display font-bold text-2xl tracking-tighter">
            OSKAR<span className="text-accent">LEBON</span>
          </a>
          
          <div className="hidden md:flex gap-8 items-center font-display text-sm uppercase tracking-widest font-medium">
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-accent transition-colors">Over mij</a>
            <a href="#contact" className="bg-accent text-dark px-5 py-2 rounded-full hover:scale-105 transition-transform">Offerte</a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl py-8 px-6 flex flex-col gap-6 text-center font-display uppercase tracking-widest border-b border-white/10"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Over mij</a>
            <a href="#contact" className="text-accent" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block mb-4 px-3 py-1 border border-accent/30 rounded-full font-display text-accent text-xs uppercase tracking-[0.2em] bg-accent/5">
                Freelance Web Designer uit Roeselare
              </span>
              <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tighter mb-8 bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent">
                IK BOUW SITES <br /> 
                <span className="text-accent italic">DIE KLANTEN</span> <br /> 
                OPLEVEREN.
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed font-light">
                Geen standaard templates. Ik combineer modern design met de kracht van AI om websites te creëren die jouw lokale business doen groeien.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="group bg-white text-dark px-10 py-5 rounded-full font-display font-medium text-lg uppercase flex items-center justify-center gap-3 hover:bg-accent transition-all duration-300">
                  Bekijk projecten
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#services" className="px-10 py-5 rounded-full border border-white/20 font-display font-medium text-lg uppercase flex items-center justify-center hover:bg-white/5 transition-all">
                  Onze diensten
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none opacity-40" />
        <div className="absolute top-[40%] -left-[5%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 border-t border-white/[0.05]">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-4">DIENSTEN + PRIJZEN</h2>
            <div className="h-1 w-20 bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-3xl border bg-white/[0.02] backdrop-blur-sm relative transition-colors ${s.accent} ${s.featured ? 'shadow-[0_0_40px_-15px_rgba(0,209,255,0.3)]' : ''}`}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-dark font-display text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Aanbevolen
                  </span>
                )}
                <h3 className="font-display font-bold text-xl mb-1">{s.name}</h3>
                <div className="text-accent font-display text-2xl font-bold mb-6">{s.price}</div>
                <ul className="space-y-4 mb-10">
                  {s.features.map((f, fi) => (
                    <li key={fi} className="flex gap-3 text-sm text-white/70 italic">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a 
                  href={`mailto:oskarcoding1@gmail.com?subject=Offerte aanvraag: ${s.name}`}
                  className={`w-full py-4 rounded-xl font-display font-bold text-sm uppercase text-center block transition-all ${s.featured ? 'bg-accent text-dark hover:brightness-110' : 'bg-white/5 hover:bg-white/10'}`}
                >
                  Vraag offerte aan
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-4 italic">RECENT WERK</h2>
              <p className="text-white/60 text-lg font-light italic">
                Projecten gericht op snelheid, conversie en perfecte user experience.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="h-0.5 w-12 bg-accent mt-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((p, i) => (
              <a 
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-[400px] rounded-3xl overflow-hidden bg-white/5 border border-white/5 hover:border-accent/40 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/90 z-10" />
                
                {/* Placeholder Image replacement with stylized UI */}
                <div className="absolute inset-0 flex items-center justify-center bg-dark">
                   <Zap className="text-white/10 w-24 h-24 group-hover:scale-110 group-hover:text-accent/20 transition-all duration-700" />
                </div>

                <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {p.tags.map((t, ti) => (
                      <span key={ti} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-white/10 rounded-md backdrop-blur-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-2xl group-hover:text-accent transition-colors flex items-center gap-2">
                    {p.title}
                    <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-white/50 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {p.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative z-10 aspect-square rounded-3xl bg-gradient-to-br from-accent/20 to-blue-900/20 border border-white/10 flex items-center justify-center overflow-hidden"
              >
                 <motion.div 
                   animate={{ 
                     rotate: 360 
                   }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 opacity-20"
                   style={{ 
                     backgroundImage: 'radial-gradient(circle, #00D1FF 1px, transparent 1px)', 
                     backgroundSize: '40px 40px' 
                   }}
                 />
                 <div className="text-center p-12 relative z-20">
                    <p className="font-display font-black text-8xl mb-2 italic">OL.</p>
                    <p className="font-display text-sm uppercase tracking-[1em] text-accent opacity-50">Oskar Lebon</p>
                 </div>
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10" />
            </div>

            <div className="space-y-8 italic">
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter italic">OVER MIJ</h2>
              <p className="text-xl text-white/80 font-light leading-relaxed">
                Mijn naam is <span className="text-accent font-medium">Oskar Lebon</span>. Ik ben een jonge web designer gevestigd in <span className="underline decoration-accent underline-offset-8 font-medium italic">Roeselare, West-Vlaanderen</span>.
              </p>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                Terwijl anderen nog vastzitten in oude processen, gebruik ik de nieuwste AI tools om sneller, slimmer en met meer precisie te bouwen. Mijn focus ligt niet alleen op esthetiek, maar op resultaten. Een goeie website is pas geslaagd als hij zorgt voor meer telefoontjes, boekingen of verkopen.
              </p>
              <div className="flex flex-col gap-4 font-display text-sm uppercase tracking-widest text-white/70">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-accent" />
                  Roeselare, België
                </div>
                <div className="flex items-center gap-3">
                  <Zap size={20} className="text-accent" />
                  AI-Native Workflow
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={20} className="text-accent" />
                  Lokale Expertise
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-8 italic">READY TO <span className="text-accent">LAUNCH?</span></h2>
            <p className="text-xl text-white/60 mb-12 font-light">
              Heb je een project in gedachten of wil je weten hoe ik jouw zaak kan versnellen? <br className="hidden md:block" /> 
              Stuur me een berichtje en ik kom zo snel mogelijk bij je terug.
            </p>
            
            <a 
              href="mailto:oskarcoding1@gmail.com" 
              className="inline-flex items-center gap-4 bg-white text-dark px-12 py-6 rounded-full font-display font-bold text-xl uppercase hover:bg-accent transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={24} />
              Stuur een mail
            </a>

            <div className="mt-20 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 font-display text-xs uppercase tracking-[0.3em]">
               <div>© 2026 Oskar Lebon — Freelance Web Design</div>
               <div className="flex gap-8">
                  <a href="#" className="hover:text-accent transition-colors italic">Privacy</a>
                  <a href="#" className="hover:text-accent transition-colors italic">Terms</a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Background Grid */}
      <div 
        className="fixed inset-0 -z-20 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
}
