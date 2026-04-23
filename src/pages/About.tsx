import { motion } from 'framer-motion'
import {
  Heart,
  Target,
  Rocket,
  PawPrint,
  Sparkles,
  Zap,
  Globe,
  Shield,
} from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal'
import Timeline from '../components/Timeline'

const milestones = [
  {
    year: '2023',
    title: 'Die Idee',
    description: 'Konstantin arbeitete in einer Tierarztpraxis und sah die Probleme hautnah. Veraltete Software, manuelle Prozesse, hohe Kosten.',
    completed: true,
    highlight: 'Birth',
  },
  {
    year: 'Q1 2024',
    title: 'Erster Prototyp',
    description: 'Ein Wochenende, viel Koffein, und die erste Version von TierarztOS war geboren. Die KI-Transkription funktionierte bereits.',
    completed: true,
  },
  {
    year: 'Q2 2024',
    title: 'Closed Beta',
    description: '5 Tierarztpraxen testeten die Software. Das Feedback war überwältigend positiv. 98% würden weiterempfehlen.',
    completed: true,
  },
  {
    year: 'Q3 2024',
    title: 'Public Launch',
    description: 'TierarztOS ging live. Die erste Paying Customer meldete sich innerhalb der ersten Woche.',
    completed: true,
    highlight: 'Launch',
  },
  {
    year: '2025',
    title: 'Series A?',
    description: 'Wir wachsen organisch. Kein VC, kein Burn-Rate-Stress. Nur gutes Produkt, zufriedene Kunden, und kontinuierliche Verbesserung.',
    completed: false,
  },
]

const values = [
  {
    icon: Heart,
    title: 'Wir kümmern uns',
    description: 'Tierärzte kümmern sich um Tiere. Wir kümmern uns um Tierärzte.',
  },
  {
    icon: Target,
    title: 'Fokus auf Qualität',
    description: 'Wir bauen keine Features, die keiner braucht. Jedes Pixel hat einen Zweck.',
  },
  {
    icon: Rocket,
    title: 'Schnell und mutig',
    description: 'Wir probieren Dinge aus. Wir lernen daraus. Wir verbessern uns ständig.',
  },
  {
    icon: Shield,
    title: 'Vertrauen wahren',
    description: 'Patientendaten sind heilig. DSGVO ist nicht nur ein Akronym für uns.',
  },
]

const team = [
  {
    initials: 'KH',
    name: 'Konstantin H.',
    role: 'Founder & Builder',
    color: '#00d4aa',
    facts: [
      'Former software dev → e-commerce manager',
      'Obsessed with good UX',
      'Builds in public on Twitter',
      'Dreams in TypeScript',
    ],
  },
  {
    initials: 'AI',
    name: 'AI Assistant',
    role: 'Chief of Staff',
    color: '#ff6b6b',
    facts: [
      'Always online, never sleeps',
      'Helps with everything',
      'Probably smarter than the founder',
      'Does not drink coffee',
    ],
  },
  {
    initials: '??',
    name: 'You?',
    role: 'Next Team Member',
    color: '#ffd93d',
    facts: [
      'Passionate about veterinary tech',
      'Loves building things',
      'Wants to make a difference',
      'Send your GitHub, not your CV',
    ],
  },
]

export default function About() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-xs font-mono text-primary font-semibold uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl lg:text-6xl font-bold font-display text-text mt-3 mb-4">
              Who we <span className="gradient-text">are</span>
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              A small team with big ambitions. No corporate bureaucracy, no endless meetings. Just builders building.
            </p>
          </div>
        </ScrollReveal>

        {/* Founder's story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <ScrollReveal>
            <div>
              <span className="text-xs font-mono text-secondary font-semibold uppercase tracking-wider">Why we care</span>
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-text mt-3 mb-6">
                From the veterinary frontline
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  I worked in a veterinary practice and saw firsthand how broken the software was. 
                  Hours spent on TAMG documentation. Expensive, outdated systems. No AI, no offline mode, no modern UX.
                </p>
                <p>
                  I thought: "This can be done better." So I built it.
                </p>
                <p>
                  TierarztOS started as a weekend project. Now it's growing into something that could 
                  change how veterinary practices operate in Germany and beyond.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <PawPrint className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-text">Konstantin H.</div>
                  <div className="text-sm text-text-dim">Founder & Builder</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="glass rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">KH</span>
                  </div>
                  <div>
                    <div className="font-semibold text-text">Konstantin H.</div>
                    <div className="text-xs text-text-dim">Founder</div>
                  </div>
                  <div className="ml-auto">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <blockquote className="text-text-muted italic leading-relaxed">
                  "I didn't set out to build a company. I set out to solve a problem I experienced every day. 
                  The fact that others have the same problem means we're onto something."
                </blockquote>
                <div className="mt-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-xs text-primary">Building in public since 2023</span>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center"
              >
                <Rocket className="w-8 h-8 text-secondary" />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Values */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-accent font-semibold uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl font-bold font-display text-text mt-3">What we stand for</h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="glass rounded-2xl p-6 border border-border hover:border-primary/20 transition-all group h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{v.title}</h3>
                <p className="text-sm text-text-dim leading-relaxed">{v.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Timeline */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-primary font-semibold uppercase tracking-wider">Timeline</span>
            <h2 className="text-3xl font-bold font-display text-text mt-3">Our journey so far</h2>
          </div>
        </ScrollReveal>

        <div className="mb-24">
          <Timeline items={milestones} />
        </div>

        {/* Team */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-primary font-semibold uppercase tracking-wider">The Team</span>
            <h2 className="text-3xl font-bold font-display text-text mt-3">Small but mighty</h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((person) => (
            <StaggerItem key={person.initials}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 border border-border hover:border-primary/20 transition-all group cursor-default"
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-xl font-bold text-bg transition-transform group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${person.color}, ${person.color}88)` }}
                >
                  {person.initials}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-text">{person.name}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{person.role}</p>
                  <div className="space-y-1">
                    {person.facts.map((fact) => (
                      <div key={fact} className="flex items-center gap-2 justify-center">
                        <Globe className="w-3 h-3 text-text-dim" />
                        <span className="text-xs text-text-dim">{fact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  )
}
