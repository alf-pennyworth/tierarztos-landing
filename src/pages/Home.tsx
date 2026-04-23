import { useEffect, useRef } from 'react'
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
  Terminal,
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
} from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal'

/* ────────── Hero ────────── */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg noise-overlay">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Now with AI transcription — v2.0 live</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold font-display text-text tracking-tight leading-[0.95] mb-6"
        >
          Tierärzte verdienen{' '}
          <span className="gradient-text">bessere Software</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Wir bauen die Zukunft der Tierarztpraxis. Mit KI. Mit Herz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#story"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-[0_0_30px_rgba(0,212,170,0.3)] hover:shadow-[0_0_50px_rgba(0,212,170,0.5)] text-base"
          >
            Die Geschichte lesen
            <ArrowRight className="w-5 h-5" />
          </a>
          <Link
            to="/auth?signup=true"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-text font-semibold rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all text-base"
          >
            <Zap className="w-5 h-5 text-primary" />
            Jetzt testen
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-text-dim"
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
    <section id="story" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-secondary font-semibold uppercase tracking-wider">Das Problem</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-text mt-3 mb-4">
              Die alte Art nervt
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Tierärzte verbringen mehr Zeit mit Software als mit Patienten. Das ist falsch herum.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glass rounded-2xl p-8 text-center border border-border hover:border-secondary/20 transition-colors">
                <div className="text-5xl font-bold font-display gradient-text-coral mb-2">{stat.value}</div>
                <div className="text-sm font-mono text-secondary mb-1">{stat.label}</div>
                <div className="text-sm text-text-dim">{stat.desc}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Pain points grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((point) => (
            <StaggerItem key={point.text}>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-border">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <point.icon className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-sm text-text-dim leading-relaxed">{point.text}</p>
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
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-primary font-semibold uppercase tracking-wider">Die Lösung</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-text mt-3 mb-4">
              Wir haben etwas <span className="gradient-text">Neues gebaut</span>
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Moderne Software für moderne Tierarztpraxen. Alles in einer Plattform.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group glass rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{f.title}</h3>
                <p className="text-sm text-text-dim leading-relaxed">{f.desc}</p>
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
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <span className="text-xs font-mono text-accent font-semibold uppercase tracking-wider">Die Technologie</span>
              <h2 className="text-4xl lg:text-5xl font-bold font-display text-text mt-3 mb-4">
                Built for <span className="text-accent">speed</span>.
                <br />
                Built for <span className="text-primary">scale</span>.
              </h2>
              <p className="text-lg text-text-muted mb-8">
                Wir nutzen modernste Technologie, um eine Plattform zu schaffen, die mit Ihrer Praxis wächst.
              </p>
            </ScrollReveal>

            <StaggerContainer className="space-y-4">
              {[
                { icon: Code2, title: 'React + TypeScript', desc: 'Type-safe, komponentenbasiert, blitzschnell' },
                { icon: Brain, title: 'AssemblyAI + Gemini', desc: 'KI-Transkription mit medizinischer Fachterminologie' },
                { icon: Database, title: 'Supabase', desc: 'PostgreSQL mit Echtzeit-Synchronisation' },
                { icon: Globe, title: 'Supabase Edge Functions', desc: 'Serverless, global verteilt, DSGVO-konform' },
              ].map((tech) => (
                <StaggerItem key={tech.title}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent/20 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <tech.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text">{tech.title}</h4>
                      <p className="text-sm text-text-dim">{tech.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              {/* Code window mockup */}
              <div className="glass rounded-2xl border border-border overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-surface-light border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-text-dim">TierarztOS.tsx</span>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed space-y-1">
                  <div className="text-text-dim">{`// Die Zukunft der Tierarztpraxis`}</div>
                  <div>
                    <span className="text-primary">import</span>
                    <span className="text-text">{' { '}</span>
                    <span className="text-accent">AIVoice</span>
                    <span className="text-text">{', '}</span>
                    <span className="text-accent">TAMG</span>
                    <span className="text-text">{', '}</span>
                    <span className="text-accent">GOEV</span>
                    <span className="text-text">{' } '}</span>
                    <span className="text-primary">from</span>
                    <span className="text-green-400">{' "tierarztos/core"'}</span>
                  </div>
                  <div className="text-text-dim">{` `}</div>
                  <div>
                    <span className="text-primary">const</span>
                    <span className="text-text">{' practice = '}</span>
                    <span className="text-primary">new</span>
                    <span className="text-text">{' '}</span>
                    <span className="text-accent">VeterinaryPractice</span>
                    <span className="text-text">{'({'}</span>
                  </div>
                  <div className="pl-4 text-text">
                    <span className="text-accent">ai</span>
                    <span className="text-text">{': '}</span>
                    <span className="text-primary">true</span>
                    <span className="text-text">{','}</span>
                  </div>
                  <div className="pl-4 text-text">
                    <span className="text-accent">tamgCompliant</span>
                    <span className="text-text">{': '}</span>
                    <span className="text-primary">true</span>
                    <span className="text-text">{','}</span>
                  </div>
                  <div className="pl-4 text-text">
                    <span className="text-accent">offlineMode</span>
                    <span className="text-text">{': '}</span>
                    <span className="text-primary">true</span>
                    <span className="text-text">{','}</span>
                  </div>
                  <div className="pl-4 text-text">
                    <span className="text-accent">language</span>
                    <span className="text-text">{': '}</span>
                    <span className="text-green-400">{'"de-DE"'}</span>
                  </div>
                  <div className="text-text">{'});'}</div>
                  <div className="text-text-dim">{` `}</div>
                  <div>
                    <span className="text-text">{'// '}</span>
                    <span className="text-secondary">Los geht's 🚀</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"
              >
                <Terminal className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center"
              >
                <Brain className="w-7 h-7 text-accent" />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/* ────────── Story: Team ────────── */

function TeamSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-primary font-semibold uppercase tracking-wider">Das Team</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-text mt-3 mb-4">
              Young builders, not a corporation
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Wir sind ein kleines Team, das Großes vorhat. Keine Meetings über Meetings. Nur Code und Kreativität.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { initials: 'KH', name: 'Konstantin H.', role: 'Founder & Builder', color: '#00d4aa', fact: 'Former dev turned e-commerce manager. Obsessed with good UX.' },
            { initials: 'AI', name: 'AI Assistant', role: 'Chief of Staff', color: '#ff6b6b', fact: 'Always online. Never sleeps. Helps with everything.' },
            { initials: '??', name: 'You?', role: 'Next Team Member', color: '#ffd93d', fact: 'We are hiring. Join the revolution.' },
          ].map((person) => (
            <ScrollReveal key={person.initials} delay={0.1}>
              <div className="glass rounded-2xl p-8 text-center border border-border hover:border-primary/20 transition-all group">
                <div
                  className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-bg transition-transform group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${person.color}, ${person.color}88)` }}
                >
                  {person.initials}
                </div>
                <h3 className="text-lg font-semibold text-text">{person.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{person.role}</p>
                <p className="text-sm text-text-dim leading-relaxed">{person.fact}</p>
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
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-accent font-semibold uppercase tracking-wider">Die Zukunft</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-text mt-3 mb-4">
              Das ist erst der <span className="gradient-text">Anfang</span>
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Unsere Roadmap ist voll von Innovationen, die die Tierarztpraxis revolutionieren werden.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6">
          {visions.map((v) => (
            <StaggerItem key={v.title}>
              <div className="glass rounded-2xl p-6 border border-border hover:border-accent/20 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <v.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text mb-1">{v.title}</h3>
                    <p className="text-sm text-text-dim leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-16">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-[0_0_30px_rgba(0,212,170,0.3)] text-base"
            >
              <Heart className="w-5 h-5" />
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
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={containerRef} className="relative">
      {/* Scroll progress */}
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress, transformOrigin: 'left' }} />

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TechnologySection />
      <TeamSection />
      <FutureSection />
    </div>
  )
}
