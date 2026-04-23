import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Zap,
  Mic,
  Shield,
  Calculator,
  Database,
  Pill,
  WifiOff,
  Sparkles,
  ChevronDown,
  Code2,
  Brain,
  Rocket,
  Users,
  Globe,
  Clock,
  CreditCard,
  Keyboard,
  AlertTriangle,
  Frown,
  Heart,
  TrendingUp,
  Microscope,
  Stethoscope,
  Leaf,
  Sun,
} from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal'

/* ────────── Hero ────────── */

function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
    const hero = heroRef.current
    hero?.addEventListener('mousemove', handleMouseMove)
    return () => hero?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden paper-texture"
    >
      {/* Organic blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full pointer-events-none shape-blob"
        style={{
          background: 'radial-gradient(circle, rgba(143,201,168,0.08) 0%, transparent 70%)',
          x: (mousePos.x - 0.5) * -30,
          y: (mousePos.y - 0.5) * -30,
        }}
        transition={{ type: 'spring', damping: 30 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none shape-egg"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)',
          x: (mousePos.x - 0.5) * 20,
          y: (mousePos.y - 0.5) * 20,
        }}
        transition={{ type: 'spring', damping: 30 }}
      />

      {/* Decorative leaves */}
      <div className="absolute top-20 left-10 opacity-20 animate-drift">
        <Leaf className="w-16 h-16 text-forest-300" />
      </div>
      <div className="absolute bottom-40 right-20 opacity-15 animate-drift" style={{ animationDelay: '-5s' }}>
        <Leaf className="w-12 h-12 text-amber-400" />
      </div>
      <div className="absolute top-1/2 right-10 opacity-10 animate-drift" style={{ animationDelay: '-10s' }}>
        <Sun className="w-20 h-20 text-amber-300" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium mb-6 sm:mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Now with AI transcription — v2.0 live</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display text-cream-100 tracking-tight leading-[0.95] mb-6 sm:mb-8"
        >
          Tierärzte verdienen{' '}
          <span className="gradient-text">bessere Software</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-cream-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
        >
          Wir bauen die Zukunft der Tierarztpraxis. Mit KI. Mit Herz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <a
            href="#story"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-amber-500 text-forest-900 font-semibold rounded-2xl hover:bg-amber-400 transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] text-sm sm:text-base"
          >
            Die Geschichte lesen
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <Link
            to="/auth?signup=true"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-cream-300/20 text-cream-100 font-semibold rounded-2xl hover:border-amber-500/30 hover:bg-amber-500/5 transition-all text-sm sm:text-base"
          >
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            Jetzt testen
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-cream-500"
          >
            <span className="text-xs font-mono">SCROLL</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ────────── Story: The Problem ────────── */

function ProblemSection() {
  const stats = [
    { value: '4-6h', label: 'pro Woche', desc: 'TAMG-Dokumentation' },
    { value: '300-500€', label: 'pro Monat', desc: 'für veraltete Software' },
    { value: '62%', label: 'der Praxen', desc: 'doppelte Dateneingabe' },
  ]

  const painPoints = [
    { icon: Clock, text: 'Stunden für manuelle TAMG-Meldungen' },
    { icon: CreditCard, text: 'Vetidata kostet 300-500€/Monat' },
    { icon: Keyboard, text: 'Doppelte Dateneingabe in mehrere Systeme' },
    { icon: AlertTriangle, text: 'Keine Offline-Unterstützung' },
    { icon: Frown, text: 'Veraltete UI aus den 90ern' },
    { icon: WifiOff, text: 'Keine moderne KI-Unterstützung' },
  ]

  return (
    <section id="story" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-mono text-forest-200 font-semibold uppercase tracking-wider">Das Problem</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-cream-100 mt-3 mb-4">
              Die alte Art nervt
            </h2>
            <p className="text-base sm:text-lg text-cream-400 max-w-2xl mx-auto px-4">
              Tierärzte verbringen mehr Zeit mit Software als mit Patienten. Das ist falsch herum.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glass rounded-2xl p-6 sm:p-8 text-center border border-cream-300/10 hover:border-forest-200/20 transition-colors">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display gradient-text mb-2">{stat.value}</div>
                <div className="text-sm font-mono text-forest-200 mb-1">{stat.label}</div>
                <div className="text-sm text-cream-500">{stat.desc}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Pain points grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {painPoints.map((point) => (
            <StaggerItem key={point.text}>
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-forest-800/50 border border-cream-300/10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-forest-700 flex items-center justify-center shrink-0">
                  <point.icon className="w-4 h-4 sm:w-5 sm:h-5 text-forest-200" />
                </div>
                <p className="text-sm text-cream-400 leading-relaxed pt-1.5">{point.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ────────── Story: The Solution ────────── */

function SolutionSection() {
  const features = [
    {
      icon: Mic,
      title: 'KI-Transkription',
      desc: 'Sprech-zu-Text in 30 Sekunden. Automatische SOAP-Notizen direkt aus der Konsultation.',
    },
    {
      icon: Shield,
      title: 'TAMG-Compliance',
      desc: 'Antibiotika-Tracking und BVL-Export mit einem Klick. Vollständig TAMG-konform.',
    },
    {
      icon: Calculator,
      title: 'GOÄ-V Abrechnung',
      desc: 'Integrierter Gebührenrechner für Tierärzte. Automatische Rechnungserstellung.',
    },
    {
      icon: Database,
      title: 'EU Arzneimitteldatenbank',
      desc: 'Kostenlos. Aktuell. Tierspezifisch. Direkter Zugriff auf alle zugelassenen Arzneimittel.',
    },
    {
      icon: Pill,
      title: 'Dosierungsrechner',
      desc: 'Art- und gewichtsspezifische Dosierung. Nie wieder manuelles Nachschlagen.',
    },
    {
      icon: WifiOff,
      title: 'Offline-Modus',
      desc: 'Arbeiten Sie auch ohne Internetverbindung. Daten werden automatisch synchronisiert.',
    },
  ]

  return (
    <section className="relative py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-200/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">Die Lösung</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-cream-100 mt-3 mb-4">
              Wir haben etwas <span className="gradient-text">Neues gebaut</span>
            </h2>
            <p className="text-base sm:text-lg text-cream-400 max-w-2xl mx-auto px-4">
              Moderne Software für moderne Tierarztpraxen. Alles in einer Plattform.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group glass rounded-2xl p-5 sm:p-6 border border-cream-300/10 hover:border-amber-500/20 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <f.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-cream-100 mb-2">{f.title}</h3>
                <p className="text-sm text-cream-400 leading-relaxed">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ────────── Story: Technology ────────── */

function TechnologySection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-200/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <ScrollReveal>
              <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">Die Technologie</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-cream-100 mt-3 mb-4">
                Built for <span className="text-amber-400">speed</span>.
                <br />
                Built for <span className="text-forest-200">scale</span>.
              </h2>
              <p className="text-base sm:text-lg text-cream-400 mb-6 sm:mb-8">
                Wir nutzen modernste Technologie, um eine Plattform zu schaffen, die mit Ihrer Praxis wächst.
              </p>
            </ScrollReveal>

            <StaggerContainer className="space-y-3 sm:space-y-4">
              {[
                { icon: Code2, title: 'React + TypeScript', desc: 'Type-safe, komponentenbasiert, blitzschnell' },
                { icon: Brain, title: 'AssemblyAI + Gemini', desc: 'KI-Transkription mit medizinischer Fachterminologie' },
                { icon: Database, title: 'Supabase', desc: 'PostgreSQL mit Echtzeit-Synchronisation' },
                { icon: Globe, title: 'Supabase Edge Functions', desc: 'Serverless, global verteilt, DSGVO-konform' },
              ].map((tech) => (
                <StaggerItem key={tech.title}>
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-forest-800/50 border border-cream-300/10 hover:border-amber-500/20 transition-colors group">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <tech.icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cream-100 text-sm sm:text-base">{tech.title}</h4>
                      <p className="text-xs sm:text-sm text-cream-400">{tech.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-cream-300/10">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
                <div className="code-block text-cream-400 space-y-1 sm:space-y-2 overflow-x-auto">
                  <div><span className="text-amber-400">import</span> <span className="text-forest-200">{'{ TierarztOS }'}</span> <span className="text-amber-400">from</span> <span className="text-forest-200">&apos;tierarztos&apos;</span></div>
                  <div></div>
                  <div><span className="text-amber-400">const</span> <span className="text-forest-200">praxis</span> = <span className="text-amber-400">new</span> <span className="text-forest-200">TierarztOS</span>{'({'} </div>
                  <div>&nbsp;&nbsp;<span className="text-cream-300">modus</span>: <span className="text-forest-200">&apos;ki-aktiviert&apos;</span>,</div>
                  <div>&nbsp;&nbsp;<span className="text-cream-300">offline</span>: <span className="text-amber-400">true</span>,</div>
                  <div>&nbsp;&nbsp;<span className="text-cream-300">compliance</span>: <span className="text-forest-200">&apos;TAMG-konform&apos;</span>,</div>
                  <div>&nbsp;&nbsp;<span className="text-cream-300">sprache</span>: <span className="text-forest-200">&apos;de&apos;</span></div>
                  <div>{'})'}</div>
                  <div></div>
                  <div><span className="text-cream-500">// Automatische SOAP-Notizen</span></div>
                  <div><span className="text-amber-400">await</span> <span className="text-forest-200">praxis</span>.<span className="text-forest-200">transkribieren</span>{'('}<span className="text-forest-200">audioAufnahme</span>{')'}</div>
                  <div></div>
                  <div><span className="text-cream-500">// TAMG-Export</span></div>
                  <div><span className="text-amber-400">await</span> <span className="text-forest-200">praxis</span>.<span className="text-forest-200">exportieren</span>{'('}<span className="text-forest-200">&apos;BVL&apos;</span>{')'}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/* ────────── Team ────────── */

function TeamSection() {
  const people = [
    { name: 'Dr. med. vet.', role: 'Entwickelt von Tierärzten', fact: 'Jede Zeile Code ist geprüft von erfahrenen Tierärzten.', color: '#5a9e78' },
    { name: 'KI-Experten', role: 'Modernste KI-Modelle', fact: 'AssemblyAI + Gemini für medizinische Genauigkeit.', color: '#f59e0b' },
    { name: 'Open Source', role: 'Transparenter Code', fact: 'Vollständig open source. Keine Blackbox.', color: '#3d7a5a' },
    { name: 'Community', role: 'Wachsendes Netzwerk', fact: 'Über 50 Tierarztpraxen testen bereits.', color: '#b45309' },
  ]

  return (
    <section className="relative py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-mono text-forest-200 font-semibold uppercase tracking-wider">Das Team</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-cream-100 mt-3 mb-4">
              Gemacht für <span className="gradient-text">Tierärzte</span>
            </h2>
            <p className="text-base sm:text-lg text-cream-400 max-w-2xl mx-auto px-4">
              Wir sind ein Team aus Tierärzten, Entwicklern und Designern.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {people.map((person) => (
            <ScrollReveal key={person.name}>
              <div className="glass rounded-2xl p-5 sm:p-6 text-center border border-cream-300/10 hover:border-cream-300/20 transition-all h-full">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-forest-900 font-bold text-lg sm:text-xl"
                  style={{ background: person.color }}
                >
                  {person.name[0]}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-cream-100">{person.name}</h3>
                <p className="text-sm text-forest-200 font-medium mb-2 sm:mb-3">{person.role}</p>
                <p className="text-sm text-cream-400 leading-relaxed">{person.fact}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ────────── Story: Future ────────── */

function FutureSection() {
  const visions = [
    { icon: Rocket, title: 'eRezept für Tiere', desc: 'Digitale Rezepte, direkt an die Apotheke. Bald in Deutschland.' },
    { icon: Stethoscope, title: 'Telemedizin', desc: 'Video-Consultations für Follow-ups und Routine-Checks.' },
    { icon: Microscope, title: 'KI-Diagnostik', desc: 'Bildanalyse für Röntgen, Ultraschall und Hautveränderungen.' },
    { icon: TrendingUp, title: 'Predictive Analytics', desc: 'Vorhersage von Krankheitsausbrüchen in Regionen.' },
  ]

  return (
    <section className="relative py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-forest-200/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">Die Zukunft</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-cream-100 mt-3 mb-4">
              Das ist erst der <span className="gradient-text">Anfang</span>
            </h2>
            <p className="text-base sm:text-lg text-cream-400 max-w-2xl mx-auto px-4">
              Unsere Roadmap ist voll von Innovationen, die die Tierarztpraxis revolutionieren werden.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {visions.map((v) => (
            <StaggerItem key={v.title}>
              <div className="glass rounded-2xl p-5 sm:p-6 border border-cream-300/10 hover:border-amber-500/20 transition-all group h-full">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                    <v.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-cream-100 mb-1">{v.title}</h3>
                    <p className="text-sm text-cream-400 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12 sm:mt-16">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-amber-500 text-forest-900 font-semibold rounded-2xl hover:bg-amber-400 transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] text-sm sm:text-base"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              Sei dabei
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ────────── Main Page ────────── */

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: containerRef })

  return (
    <div ref={containerRef} className="relative">
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TechnologySection />
      <TeamSection />
      <FutureSection />
    </div>
  )
}
