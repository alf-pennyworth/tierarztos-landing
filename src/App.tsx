import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion'
import {
  PawPrint,
  Menu,
  X,
  Mic,
  Shield,
  Calculator,
  Database,
  Pill,
  WifiOff,
  Clock,
  CreditCard,
  Keyboard,
  Check,
  Star,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Play,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Award,
  Server,
  Sparkles,
  Zap,
  HeartPulse,
} from 'lucide-react'

/* =========================================================
   Reusable Components
   ========================================================= */

function Section({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`w-full px-4 sm:px-6 lg:px-8 xl:px-12 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  )
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StaggerContainer({ children, className = '', stagger = 0.1 }: { children: React.ReactNode; className?: string; stagger?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StaggerItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* =========================================================
   Navigation
   ========================================================= */

function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Demo', href: '#demo' },
  ]

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center group-hover:bg-primary-dark transition-colors">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-slate-800 tracking-tight">TierarztOS</span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/auth"
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                Login
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/auth?signup=true"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
              >
                Kostenlos testen
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-lg font-medium text-slate-700 py-3 border-b border-slate-100"
                >
                  {link.label}
                </button>
              ))}
              <a href="/auth" className="text-lg font-medium text-slate-700 py-3 border-b border-slate-100">
                Login
              </a>
              <a
                href="/auth?signup=true"
                className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white text-base font-semibold rounded-lg"
              >
                Kostenlos testen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* =========================================================
   Hero Section with ECG Animation
   ========================================================= */

function ECGAnimation() {
  return (
    <div className="relative w-full max-w-md mx-auto h-32 flex items-center justify-center">
      <svg viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#0d9488" stopOpacity="1" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,30 L20,30 L25,30 L30,10 L35,50 L40,30 L45,30 L60,30 L80,30 L85,30 L90,15 L95,45 L100,30 L105,30 L120,30 L140,30 L145,30 L150,12 L155,48 L160,30 L165,30 L180,30 L200,30"
          fill="none"
          stroke="url(#ecgGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.circle
          cx="160"
          cy="30"
          r="6"
          fill="#0d9488"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
          transition={{ delay: 2.2, duration: 0.4 }}
        />
        <motion.path
          d="M157,30 L159.5,33 L164,26"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2.5, duration: 0.3 }}
        />
      </svg>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-white via-primary-50/30 to-slate-100" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-light/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Jetzt mit KI-Transkription
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Die Zukunft der{' '}
              <span className="text-primary">Tierarztpraxis</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              KI-gestützte Praxissoftware. TAMG-konform. GOÄ-V Abrechnung. EU-Arzneimitteldatenbank.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="/auth?signup=true"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                14 Tage kostenlos testen
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-primary/30 hover:bg-primary-50 transition-all text-base"
              >
                <Play className="w-5 h-5 text-primary" />
                Demo ansehen
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <ECGAnimation />
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-12">
              {[
                { icon: ShieldCheck, text: 'DSGVO-konform' },
                { icon: Award, text: 'TAMG-zertifiziert' },
                { icon: Server, text: 'Hosted in Deutschland' },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-sm text-slate-500">
                  <badge.icon className="w-4 h-4 text-primary" />
                  {badge.text}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   Problem Section
   ========================================================= */

function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: 'TAMG-Meldungen dauern Stunden',
      description: 'Tierärzte verbringen durchschnittlich 4-6 Stunden pro Woche mit manuellen TAMG-Dokumentationen und BVL-Meldungen.',
      stat: '4-6h',
      statLabel: 'pro Woche',
    },
    {
      icon: CreditCard,
      title: 'Vetidata kostet 300-500€/Monat',
      description: 'Traditionelle Praxissoftware frisst bis zu 20% des Praxisetats – ohne moderne Features wie KI oder Offline-Modus.',
      stat: '300-500€',
      statLabel: 'pro Monat',
    },
    {
      icon: Keyboard,
      title: 'Doppelte Dateneingabe',
      description: '62% der Tierarztpraxen geben Daten in mehrere Systeme ein – erhöhtes Fehlerrisiko und verschwendete Zeit.',
      stat: '62%',
      statLabel: 'der Praxen',
    },
  ]

  return (
    <Section id="problems" className="py-20 lg:py-28 bg-white">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Die Herausforderungen moderner Tierarztpraxen
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Viele Tierärzte kämpfen noch immer mit veralteter Software, manuellen Prozessen und hohen Kosten.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-3 gap-8">
        {problems.map((problem) => (
          <StaggerItem key={problem.title}>
            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <problem.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{problem.stat}</div>
              <div className="text-sm text-slate-400 mb-4">{problem.statLabel}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{problem.title}</h3>
              <p className="text-slate-500 leading-relaxed">{problem.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  )
}

/* =========================================================
   Features Section
   ========================================================= */

function FeaturesSection() {
  const features = [
    {
      icon: Mic,
      title: 'KI-Transkription',
      description: 'Sprech-zu-Text in 30 Sekunden. Automatische SOAP-Notizen direkt aus der Konsultation.',
      color: 'bg-rose-50 text-rose-600',
    },
    {
      icon: Shield,
      title: 'TAMG-Compliance',
      description: 'Antibiotika-Tracking und BVL-Export mit einem Klick. Vollständig TAMG-konform.',
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      icon: Calculator,
      title: 'GOÄ-V Abrechnung',
      description: 'Integrierter Gebührenrechner für Tierärzte. Automatische Rechnungserstellung.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Database,
      title: 'EU Arzneimitteldatenbank',
      description: 'Kostenlos. Aktuell. Tierspezifisch. Direkter Zugriff auf alle zugelassenen Arzneimittel.',
      color: 'bg-violet-50 text-violet-600',
    },
    {
      icon: Pill,
      title: 'Dosierungsrechner',
      description: 'Art- und gewichtsspezifische Dosierung. Nie wieder manuelles Nachschlagen.',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: WifiOff,
      title: 'Offline-Modus',
      description: 'Arbeiten Sie auch ohne Internetverbindung. Daten werden automatisch synchronisiert.',
      color: 'bg-cyan-50 text-cyan-600',
    },
  ]

  return (
    <Section id="features" className="py-20 lg:py-28 bg-slate-50">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Alles in einer modernen Plattform
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Von KI-gestützter Dokumentation bis zur automatischen Abrechnung – alles, was Ihre Praxis braucht.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <StaggerItem key={feature.title}>
            <div className="group p-6 lg:p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 h-full">
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  )
}

/* =========================================================
   Pricing Section
   ========================================================= */

function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '49',
      description: 'Für kleine Praxen und Einsteiger',
      features: [
        '1 Arzt',
        'Bis 500 Patienten',
        'Basis-Funktionen',
        'GOÄ-V Abrechnung',
        'Email-Support',
        'DSGVO-konform',
      ],
      cta: 'Kostenlos testen',
      href: '/auth?signup=true&plan=starter',
      popular: false,
    },
    {
      name: 'Professional',
      price: '99',
      description: 'Für wachsende Praxen',
      features: [
        '3 Ärzte',
        'Unbegrenzte Patienten',
        'KI-Transkription',
        'API-Zugang',
        'Priority-Support',
        'Offline-Modus',
        'TAMG-Export',
      ],
      cta: 'Kostenlos testen',
      href: '/auth?signup=true&plan=professional',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '199',
      description: 'Für große Praxisketten',
      features: [
        'Unbegrenzte Ärzte',
        'Multi-Location',
        'SSO & Audit-Log',
        'Dedizierter Support',
        'Custom Integrationen',
        'SLA-Garantie',
        'Onboarding-Assistent',
      ],
      cta: 'Vertrieb kontaktieren',
      href: '#cta',
      popular: false,
    },
  ]

  return (
    <Section id="pricing" className="py-20 lg:py-28 bg-white">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Transparente Preise für jede Praxisgröße
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-4">
            Keine versteckten Kosten. Keine Einrichtungsgebühren.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-slate-400">
            <span className="line-through">VetData: 300-500€/Monat</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-primary font-semibold">TierarztOS: Ab 49€/Monat</span>
          </div>
        </div>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <StaggerItem key={plan.name}>
            <div
              className={`relative rounded-2xl p-8 h-full flex flex-col ${
                plan.popular
                  ? 'bg-slate-900 text-white shadow-2xl scale-105 lg:scale-110'
                  : 'bg-slate-50 border border-slate-100 text-slate-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                  Empfohlen
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">€{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>/Monat</span>
                </div>
                <p className={`text-xs mt-2 ${plan.popular ? 'text-slate-400' : 'text-slate-400'}`}>
                  Jährlich: 2 Monate geschenkt
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary-light' : 'text-primary'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-light shadow-lg'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-primary hover:text-primary'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  )
}

/* =========================================================
   Demo Section
   ========================================================= */

function DemoSection() {
  return (
    <Section id="demo" className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sehen Sie es in Aktion</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Ein kurzer Einblick in die intuitive Benutzeroberfläche von TierarztOS.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
            {/* Mock browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-slate-700 rounded-md px-3 py-1.5 text-xs text-slate-400 text-center">
                  app.tierarztos.de/dashboard
                </div>
              </div>
            </div>

            {/* Mock dashboard */}
            <div className="p-6 lg:p-8">
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Sidebar */}
                <div className="hidden lg:block space-y-2">
                  {['Dashboard', 'Patienten', 'Termine', 'Abrechnung', 'TAMG', 'Arzneimittel', 'Einstellungen'].map((item, i) => (
                    <div
                      key={item}
                      className={`px-4 py-2.5 rounded-lg text-sm ${
                        i === 0 ? 'bg-primary/20 text-primary-light' : 'text-slate-400'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="lg:col-span-3 space-y-6">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Heutige Termine', value: '12' },
                      { label: 'Offene TAMG', value: '3' },
                      { label: 'Umsatz (Monat)', value: '€14.2k' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-slate-700/50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Recent patients */}
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <div className="text-sm font-medium text-slate-300 mb-3">Letzte Patienten</div>
                    <div className="space-y-2">
                      {[
                        { name: 'Bello (Hund)', owner: 'Müller, Berlin', time: '10:30' },
                        { name: 'Mimi (Katze)', owner: 'Schmidt, Hamburg', time: '09:45' },
                        { name: 'Hansi (Pferd)', owner: 'Weber, München', time: 'Gestern' },
                      ].map((patient) => (
                        <div key={patient.name} className="flex items-center justify-between py-2 px-3 bg-slate-700/40 rounded-lg">
                          <div>
                            <div className="text-sm text-white">{patient.name}</div>
                            <div className="text-xs text-slate-400">{patient.owner}</div>
                          </div>
                          <div className="text-xs text-slate-500">{patient.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* KI Transcription preview */}
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Mic className="w-4 h-4 text-primary-light" />
                      <span className="text-sm font-medium text-primary-light">KI-Transkription aktiv</span>
                    </div>
                    <div className="text-sm text-slate-300 bg-slate-800/50 rounded-lg p-3">
                      "Patient Bello, 5 Jahre, männlich kastriert. Vom Besitzer vorgestellt wegen Husten seit 3 Tagen..."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-all shadow-lg"
            >
              Persönliche Demo buchen
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}

/* =========================================================
   Testimonials Section
   ========================================================= */

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Dr. Sarah Weber',
      practice: 'Tierarztpraxis Weber, München',
      initials: 'SW',
      color: 'bg-rose-500',
      rating: 5,
      text: 'TierarztOS hat unsere Praxis komplett verändert. Die KI-Transkription spart mir täglich 1-2 Stunden – Zeit, die ich jetzt in meine Patienten investieren kann.',
    },
    {
      name: 'Dr. Markus Schneider',
      practice: 'Kleintierklinik Schneider, Hamburg',
      initials: 'MS',
      color: 'bg-blue-500',
      rating: 5,
      text: 'Endlich eine Software, die TAMG ernst nimmt. Der Export funktioniert mit einem Klick, und die GOÄ-V Abrechnung ist kinderleicht.',
    },
    {
      name: 'Dr. Lisa Hoffmann',
      practice: 'Tierärztliche Praxis Hoffmann, Köln',
      initials: 'LH',
      color: 'bg-emerald-500',
      rating: 5,
      text: 'Wir sind von VetData umgestiegen und sparen jetzt über 300€ pro Monat. Dabei bekommen wir mehr Features und eine viel modernere Oberfläche.',
    },
  ]

  return (
    <Section className="py-20 lg:py-28 bg-slate-50">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Was Tierärzte sagen
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Über 500 Tierarztpraxen vertrauen bereits auf TierarztOS.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <StaggerItem key={t.name}>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed flex-1 mb-6">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-semibold text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-slate-800">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.practice}</div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  )
}

/* =========================================================
   FAQ Section
   ========================================================= */

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Was ist TierarztOS und für wen ist es gedacht?',
      answer: 'TierarztOS ist eine moderne, KI-gestützte Praxissoftware speziell für Tierarztpraxen in Deutschland. Sie richtet sich an Kleintier- und Großtierpraxen aller Größen – vom Einzelarzt bis zur Praxiskette.',
    },
    {
      question: 'Ist TierarztOS TAMG-konform?',
      answer: 'Ja, TierarztOS ist vollständig TAMG-konform. Alle Antibiotika-Verordnungen werden automatisch erfasst, und der BVL-Export funktioniert mit einem einzigen Klick – ohne manuelle Doppelarbeit.',
    },
    {
      question: 'Wie funktioniert die KI-Transkription?',
      answer: 'Während der Konsultation nimmt TierarztOS Ihre Sprache auf und wandelt sie in strukturierte SOAP-Notizen um. Die Transkription dauert ca. 30 Sekunden und erkennt medizinische Fachbegriffe zuverlässig.',
    },
    {
      question: 'Kann ich meine bestehenden Daten importieren?',
      answer: 'Ja, wir bieten einen kostenlosen Import-Service für Daten aus VetData, vetSoft und anderen gängigen Systemen an. Ihr Praxis-Team wird Schritt für Schritt durch den Prozess begleitet.',
    },
    {
      question: 'Wie sicher sind meine Patientendaten?',
      answer: 'Alle Daten werden in Deutschland gehostet (ISO 27001 zertifizierte Rechenzentren) und sind DSGVO-konform verschlüsselt. Wir führen regelmäßige Sicherheitsaudits durch und bieten 2-Faktor-Authentifizierung an.',
    },
  ]

  return (
    <Section className="py-20 lg:py-28 bg-white">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Alles, was Sie über TierarztOS wissen müssen.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="border border-slate-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-800 pr-4">{faq.question}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}

/* =========================================================
   CTA Section
   ========================================================= */

function CTASection() {
  return (
    <Section id="cta" className="py-20 lg:py-28">
      <FadeIn>
        <div className="relative rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-12 lg:p-16 text-center text-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Bereit für die moderne Tierarztpraxis?
            </h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
              14 Tage kostenlos testen. Keine Kreditkarte erforderlich. Keine versteckten Kosten.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/auth?signup=true"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-slate-100 transition-all shadow-lg text-base"
              >
                Jetzt kostenlos starten
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:vertrieb@tierarztos.de"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20 text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Mit Vertriebsteam sprechen
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  )
}

/* =========================================================
   Footer
   ========================================================= */

function Footer() {
  const links = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Demo', href: '#demo' },
      { label: 'Blog', href: '#' },
    ],
    Company: [
      { label: 'Über uns', href: '#' },
      { label: 'Karriere', href: '#' },
      { label: 'Kontakt', href: '#cta' },
    ],
    Legal: [
      { label: 'Impressum', href: '#' },
      { label: 'Datenschutz', href: '#' },
      { label: 'AGB', href: '#' },
    ],
  }

  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-white tracking-tight">TierarztOS</span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Die moderne Praxissoftware für Tierärzte. KI-gestützt, TAMG-konform, made in Germany.
            </p>
            <div className="flex gap-3">
              {[Mail, Phone, MapPin].map((Icon, i) => (
                <div key={i} className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} TierarztOS. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm flex items-center gap-2">
            Made with <HeartPulse className="w-4 h-4 text-primary" /> in Deutschland
          </p>
        </div>
      </div>
    </footer>
  )
}

/* =========================================================
   Main App
   ========================================================= */

export default function App() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <PricingSection />
      <DemoSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}
