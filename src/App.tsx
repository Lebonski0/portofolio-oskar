/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Globe, 
  Mail, 
  MapPin, 
  Zap,
  ChevronUp,
  Instagram,
  Linkedin,
  Facebook,
  Phone,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

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
    name: "Premium + Booking",
    features: ["Full website", "Online reservatiesysteem", "Betalingsintegratie", "Advanced SEO"],
    accent: "border-white/10"
  },
  {
    name: "Onderhoud",
    features: ["Hosting inbegrepen", "Security updates", "Content aanpassingen", "Performance monitoring"],
    accent: "border-white/10"
  }
];

// Scroll Animation Wrapper - Defined outside App to prevent re-mounting glitches on scroll
const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["services", "portfolio", "about", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is in the upper part of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const isScrolled = offset > 50;
      const isScrollTopVisible = offset > 500;
      
      setScrolled(isScrolled);
      setShowScrollTop(isScrollTopVisible);
    };
    
    const timer = setTimeout(() => setLoading(false), 2000);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Mouse tracking for high-end background effects
  // High-Performance Mouse Tracking (Zero Re-render)
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  
  // HUD Label transforms
  const mouseXText = useTransform(mouseX, (v) => v.toFixed(2));
  const mouseYText = useTransform(mouseY, (v) => v.toFixed(2));

  // Layout transforms (Moved to top-level to follow Rules of Hooks)
  const crosshairX = useTransform(mouseX, (v) => `${v}%`);
  const crosshairY = useTransform(mouseY, (v) => `${v}%`);
  const pointerX = useTransform(mouseX, (v) => `calc(${v}% + 20px)`);
  const pointerY = useTransform(mouseY, (v) => `calc(${v}% + 20px)`);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 100);
      mouseY.set((e.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  
  // High-Precision Scroll Parallax Logic
  const { scrollY } = useScroll();
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  // Layer 1: Primary Matrix (Slow drift)
  const dotY1 = useSpring(useTransform(scrollY, [0, 1000], [0, -200]), springConfig);
  // Layer 2: Deep Matrix (Fast drift for 3D effect)
  const dotY2 = useSpring(useTransform(scrollY, [0, 1000], [0, -400]), springConfig);
  // Layer 3: HUD Vertical Offset (Subtle shift)
  const hudY = useSpring(useTransform(scrollY, [0, 1000], [0, -50]), springConfig);

  // Formspree Contact Form Integration
  const [state, handleSubmit] = useForm("xpqkygqo");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ email: false, name: false });

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    if (name === "email") {
      setErrors(prev => ({ ...prev, email: value.length > 0 && !validateEmail(value) }));
    }
    if (name === "name") {
      setErrors(prev => ({ ...prev, name: value.length > 0 && value.length < 2 }));
    }
  };

  // Check if we should reset form after success
  useEffect(() => {
    if (state.succeeded) {
      setFormState({ name: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden">
      {/* High-Performance Loading Overlay (Always mounted to preserve hook order) */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 bg-dark z-[100] flex flex-col items-center justify-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="font-display font-black text-6xl italic mb-4 tracking-tighter">
                OL<span className="text-accent">.</span>
              </div>
              <div className="w-12 h-[2px] bg-white/10 mx-auto relative overflow-hidden text-accent">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-current"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <motion.nav 
        role="navigation"
        aria-label="Main Navigation"
        initial={false}
        animate={{ 
          backgroundColor: scrolled ? "rgba(5, 5, 5, 0.8)" : "rgba(5, 5, 5, 0)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          padding: scrolled ? "12px 0" : "28px 0",
          borderBottomColor: scrolled ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0)",
          y: 0
        }}
        transition={{ 
          default: { duration: 0.5 }
        }}
        className="fixed top-0 w-full z-50 border-b"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" aria-label="LebonWeb - Homepage" className="flex items-center gap-3 font-display font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity">
            <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="20" fill="rgba(255,255,255,0.03)" />
              <path d="M30 30 v40 h30" stroke="#00f0ff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M50 30 l10 40 l10 -40 l10 40" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            LEBON<span className="text-accent">WEB</span>
          </a>
          
          <div className="hidden md:flex gap-8 items-center font-display text-sm uppercase tracking-widest font-medium">
            {[
              { id: "services", label: "Services" },
              { id: "portfolio", label: "Portfolio" },
              { id: "about", label: "Over mij" }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`relative py-2 transition-colors duration-300 ${
                  activeSection === item.id ? 'text-accent' : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent shadow-[0_0_8px_rgba(0,240,255,0.6)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a 
              href="#contact" 
              className={`px-6 py-2.5 rounded-full transition-all shadow-lg hover:scale-105 active:scale-95 ${
                activeSection === "contact" 
                  ? 'bg-accent text-dark shadow-accent/40 scale-105' 
                  : 'bg-accent/10 border border-accent/20 text-accent hover:bg-accent hover:text-dark'
              }`}
            >
              Offerte
            </a>
          </div>

          <button 
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors border border-white/5" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden absolute top-full left-0 w-full bg-dark/98 backdrop-blur-2xl py-8 px-6 flex flex-col gap-6 text-center font-display uppercase tracking-widest border-b border-white/10"
          >
            {[
              { id: "services", label: "Services" },
              { id: "portfolio", label: "Portfolio" },
              { id: "about", label: "Over mij" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={() => setIsMenuOpen(false)}
                className={activeSection === item.id ? 'text-accent font-bold' : 'text-white/60'}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section 
        aria-labelledby="hero-title"
        className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden precision-void"
      >
        {/* Layer 1: Primary Dot Matrix (Slow Parallax) */}
        <motion.div 
          style={{ y: dotY1 }}
          className="absolute inset-0 dot-matrix opacity-[0.4] z-0" 
        />

        {/* Layer 2: Deep Void Matrix (3D Depth) */}
        <motion.div 
          style={{ y: dotY2 }}
          className="absolute inset-0 dot-matrix opacity-[0.1] z-0 scale-150 rotate-12" 
        />

        {/* Layer 3: Vector Scanning Beams */}
        <motion.div 
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-10"
        />

        {/* Layer 4: Interactive HUD Crosshair */}
        <motion.div 
          style={{ y: hudY }}
          className="absolute inset-0 pointer-events-none z-20 overflow-hidden" 
        >
           <div className="absolute inset-0">
              {/* Horizontal Crosshair Line */}
              <motion.div 
                className="absolute w-full h-[1px] bg-white/10"
                style={{ top: crosshairY }}
              />
              {/* Vertical Crosshair Line */}
              <motion.div 
                className="absolute h-full w-[1px] bg-white/10"
                style={{ left: crosshairX }}
              />
              
              {/* HUD Data Pointer */}
              <motion.div 
                className="absolute flex flex-col gap-1 font-display text-[8px] uppercase tracking-[0.2em] text-white/40 bg-black/60 backdrop-blur-md p-3 border border-white/10 rounded-sm"
                style={{ left: pointerX, top: pointerY }}
              >
                  <div className="flex justify-between gap-4">
                    <span className="text-accent/60">POS_X</span>
                    <motion.span>{mouseXText}</motion.span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-accent/60">POS_Y</span>
                    <motion.span>{mouseYText}</motion.span>
                  </div>
                  <div className="pt-1 border-t border-white/5 mt-1 text-[7px] text-white/20">
                    REF_ID: LW-HUD-2026-ULTRA
                  </div>
              </motion.div>
           </div>
        </motion.div>



        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-white/10 rounded-full font-display text-white/60 text-[10px] uppercase tracking-[0.3em] bg-white/5 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Freelance Web Designer uit Roeselare
              </span>
              
              <h1 id="hero-title" className="font-display font-black text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter mb-12 bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent text-glow">
                BOOST <br />
                <span className="text-accent italic font-black">YOUR LOCAL</span> <br />
                BUSINESS.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-16 leading-relaxed font-light italic">
                Gedreven door resultaat. Ik ontwerp websites die niet alleen mooi zijn, maar <span className="text-white font-medium">concreet klanten opleveren</span> voor lokale ondernemers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#portfolio" className="btn-premium-primary" aria-label="Bekijk mijn afgeronde projecten in Roeselare">
                  Bekijk projecten
                  <ArrowRight size={18} />
                </a>
                <a href="#services" className="btn-premium-secondary" aria-label="Bekijk de diensten van Oskar Lebon">
                  Onze diensten
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                    onClick={() => setFormState(prev => ({ ...prev, message: `Ik heb interesse in het ${s.name} pakket.` }))}
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

      {/* Portfolio Section */}
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
                    {/* Fixed minimum height for title to ensure symmetry */}
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

      {/* About Section */}
      <section 
        id="about" 
        aria-labelledby="about-title"
        className="py-24 overflow-hidden relative"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <FadeInUp>
              <div className="relative group">
                <div className="relative z-10 aspect-square rounded-[3rem] bg-gradient-to-br from-accent/20 to-blue-900/10 border border-white/5 overflow-hidden shadow-2xl shadow-black/50">
                   <img 
                     src="/assets/oskarlebon.jpg" 
                     alt="Oskar Lebon" 
                     className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-70" />
                    <div className="absolute bottom-16 left-12 z-20">
                       <p className="font-display font-black text-7xl leading-tight italic opacity-100 text-glow tracking-tighter">LW<span className="text-accent">.</span></p>
                       <p className="font-display text-[11px] uppercase tracking-[1em] text-accent mt-2 font-bold">LebonWeb</p>
                    </div>
                </div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px] -z-10" aria-hidden="true" />
              </div>
            </FadeInUp>
 
            <div className="space-y-10 italic">
              <FadeInUp>
                <h2 id="about-title" className="font-display text-5xl md:text-8xl font-bold tracking-tighter italic uppercase leading-[0.9]">Over <br /> <span className="text-accent underline decoration-white/10 underline-offset-8">Mij</span></h2>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <div className="space-y-6">
                  <p className="text-2xl text-white/80 font-light leading-relaxed">
                    Mijn naam is <span className="text-accent font-medium">Oskar Lebon</span>. Ik ben een jonge web designer gevestigd in <span className="underline decoration-accent/30 underline-offset-8 font-medium italic">Roeselare, West-Vlaanderen</span>.
                  </p>
                  <p className="text-lg text-white/50 font-light leading-relaxed">
                    Terwijl anderen nog vastzitten in oude processen, gebruik ik de nieuwste AI tools om sneller, slimmer en met meer precisie te bouwen. Mijn focus ligt niet alleen op esthetiek, maar op resultaten. Een goeie website is pas geslaagd als hij zorgt voor meer succes.
                  </p>
                </div>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <div className="flex flex-col gap-6 font-display text-sm uppercase tracking-[0.3em] text-white/60 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><MapPin size={18} className="text-accent" /></div>
                    Roeselare, België
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><Zap size={18} className="text-accent" /></div>
                    AI-Native Workflow
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-white/5 relative bg-[#060606]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <FadeInUp>
              <div className="max-w-xl">
                <h2 id="contact-title" className="font-display text-6xl md:text-9xl font-bold tracking-tighter mb-10 italic leading-[0.8]">LET'S <span className="text-accent">GO.</span></h2>
                <p className="text-xl text-white/50 mb-12 font-light leading-relaxed italic">
                  Heb je een project of wil je weten hoe ik jouw zaak kan versnellen? <br className="hidden md:block" /> 
                  Laat je gegevens achter en ik kom binnen 24u bij je terug.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 group hover:border-accent/20 transition-all flex-1">
                     <Mail size={32} className="text-accent mb-6" />
                     <div className="font-display uppercase tracking-widest text-xs text-white/40 mb-2">E-mailadres</div>
                     <div className="text-lg font-medium tracking-tight">oskar.lebon@gmail.com</div>
                  </div>
                  <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 group hover:border-accent/20 transition-all flex-1">
                     <Phone size={32} className="text-accent mb-6" />
                     <div className="font-display uppercase tracking-widest text-xs text-white/40 mb-2">Telefoon</div>
                     <div className="text-lg font-medium tracking-tight">+32 499 48 02 34</div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="p-8 md:p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden">
                {state.succeeded ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-8">
                       <CheckCircle2 size={48} className="text-accent" />
                    </div>
                    <h3 className="font-display text-4xl font-bold mb-4 uppercase tracking-tighter">Bericht Verzonden!</h3>
                    <p className="text-white/50 text-lg font-light leading-relaxed">
                      Bedankt voor je aanvraag. <br />
                      Ik neem zo snel mogelijk contact met je op.
                    </p>
                    <motion.button 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      onClick={() => window.location.reload()}
                      className="mt-8 text-accent text-xs uppercase tracking-widest hover:underline"
                    >
                      Nog een bericht sturen
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="font-display text-xs uppercase tracking-[0.2em] text-white/40 pl-2">Naam</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          required
                          placeholder="Je volledige naam"
                          value={formState.name}
                          onChange={handleInputChange}
                          className={`w-full ${errors.name ? 'border-red-500/50' : formState.name.length >= 2 ? 'border-accent/50' : 'border-white/10'}`}
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-[10px] mt-1 ml-2" />
                        {formState.name.length >= 2 && !errors.name && (
                          <CheckCircle2 size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-accent" />
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="email" className="font-display text-xs uppercase tracking-[0.2em] text-white/40 pl-2">E-mail</label>
                      <div className="relative">
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          required
                          placeholder="jouw@email.be"
                          value={formState.email}
                          onChange={handleInputChange}
                          className={`w-full ${errors.email ? 'border-red-500/50' : validateEmail(formState.email) ? 'border-accent/50' : 'border-white/10'}`}
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] mt-1 ml-2" />
                        {validateEmail(formState.email) && (
                          <CheckCircle2 size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-accent" />
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="message" className="font-display text-xs uppercase tracking-[0.2em] text-white/40 pl-2">Bericht</label>
                      <textarea 
                        id="message" 
                        name="message"
                        rows={4}
                        placeholder="Vertel me over je project..."
                        value={formState.message}
                        onChange={handleInputChange}
                        className="w-full resize-none"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-[10px] mt-1 ml-2" />
                    </div>

                    <button 
                      type="submit"
                      disabled={state.submitting || errors.email || errors.name || !formState.name || !formState.email}
                      className="w-full py-6 bg-white text-dark rounded-[2rem] font-display font-black text-lg uppercase tracking-widest hover:bg-accent transition-all duration-300 disabled:opacity-30 disabled:hover:bg-white active:scale-[0.98] shadow-2xl shadow-black"
                    >
                      {state.submitting ? "Verzenden..." : "Bespreek project"}
                    </button>
                    
                    {state.errors && state.errors.length > 0 && !state.errors.find(e => e.field) && (
                      <p className="text-red-500 text-center text-xs mt-4">
                        Er is iets misgegaan. Probeer het later opnieuw.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Premium Footer Section */}
      <footer className="relative pt-24 pb-16 overflow-hidden bg-dark border-t border-white/5 footer-glow">
        {/* Massive Background Ghost Branding */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap branding-ghost">
          LEBON WEB
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Column 1: Branding */}
            <div className="space-y-8">
              <a href="#" className="flex items-center gap-3 font-display font-bold text-3xl tracking-tighter group" aria-label="LebonWeb - Terug naar boven">
                <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="20" fill="rgba(255,255,255,0.03)" />
                  <path d="M30 30 v40 h30" stroke="#00f0ff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M50 30 l10 40 l10 -40 l10 40" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                LEBON<span className="text-accent group-hover:text-glow transition-all">WEB</span>
              </a>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light italic">
                Architecting digital success for local businesses using an AI-native design workflow. Result-driven by nature.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-widest text-accent font-bold">
                 <Zap size={12} className="animate-pulse" />
                 AI-Native Agency
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="space-y-8">
              <h4 className="font-display text-xs uppercase tracking-[0.3em] font-black text-white/20">Navigatie</h4>
              <ul className="space-y-4 font-display text-sm uppercase tracking-widest">
                <li><a href="#home" className="hover:text-accent transition-colors block">Home</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors block">Diensten</a></li>
                <li><a href="#portfolio" className="hover:text-accent transition-colors block">Portfolio</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors block">Over mij</a></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="space-y-8">
              <h4 className="font-display text-xs uppercase tracking-[0.3em] font-black text-white/20">Direct Contact</h4>
              <ul className="space-y-4 font-display text-sm tracking-widest">
                <li className="flex items-center gap-4 group">
                  <Mail size={18} className="text-accent/40 group-hover:text-accent transition-colors" />
                  <a href="mailto:oskar.lebon@gmail.com" className="hover:text-accent transition-colors italic">oskar.lebon@gmail.com</a>
                </li>
                <li className="flex items-center gap-4 group">
                  <Phone size={18} className="text-accent/40 group-hover:text-accent transition-colors" />
                  <a href="tel:+32499480234" className="hover:text-accent transition-colors italic">+32 499 48 02 34</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Socials */}
            <div className="space-y-8">
              <h4 className="font-display text-xs uppercase tracking-[0.3em] font-black text-white/20">Social Media</h4>
              <div className="flex gap-4">
                 <a href="https://www.instagram.com/oskarlebon/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-accent hover:text-dark transition-all duration-500 hover:-translate-y-1">
                    <Instagram size={20} />
                 </a>
                 <a href="https://www.linkedin.com/in/oskar-lebon-3a4869398/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-accent hover:text-dark transition-all duration-500 hover:-translate-y-1">
                    <Linkedin size={20} />
                 </a>
                 <a href="https://www.facebook.com/oskar.lebon.14?locale=nl_BE" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-accent hover:text-dark transition-all duration-500 hover:-translate-y-1">
                    <Facebook size={20} />
                 </a>
              </div>
              <p className="text-[10px] text-white/20 uppercase tracking-widest leading-relaxed">
                Volg mijn proces en <br /> dagelijkse updates.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 font-display text-[9px] uppercase tracking-[0.4em] opacity-40">
             <div>© 2026 Oskar Lebon — Digital Architecture</div>
             <div className="flex gap-10">
                <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
             </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-10 right-10 z-[60]">
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-5 bg-accent text-dark rounded-full shadow-[0_0_30px_-5px_rgba(0,209,255,0.5)] hover:scale-110 active:scale-90 transition-all border border-accent/20"
            aria-label="Terug naar boven"
          >
            <ChevronUp size={24} strokeWidth={3} />
          </motion.button>
        )}
      </div>

      {/* Fixed Background Grid */}
      <div 
        className="fixed inset-0 -z-30 opacity-[0.02] pointer-events-none" 
        aria-hidden="true"
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}
      />
    </div>
  );
}
