import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mic,
  Shield,
  Calculator,
  Database,
  Pill,
  WifiOff,
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  FileText,
  ChevronRight,
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const features = [
  {
    id: 'ai-transcription',
    icon: Mic,
    title: 'KI-Transkription',
    tag: 'AI-Powered',
    tagColor: 'bg-primary/10 text-primary border-primary/20',
    shortDesc: 'Sprech-zu-Text in 30 Sekunden',
    description: 'Während der Konsultation nimmt TierarztOS Ihre Sprache auf und wandelt sie in strukturierte SOAP-Notizen um. Die Transkription dauert ca. 30 Sekunden und erkennt medizinische Fachbegriffe zuverlässig.',
    highlights: [
      { label: 'Dauer', value: '<30 Sekunden' },
      { label: 'Genauigkeit', value: '98.5%' },
      { label: 'Sprachen', value: 'DE, EN, FR' },
    ],
    mockup: {
      type: 'transcription',
      data: [
        { speaker: 'Arzt', text: 'Bello, 5 Jahre, männlich kastriert.', time: '0:03' },
        { speaker: 'Arzt', text: 'Husten seit 3 Tagen, leichtes Fieber.', time: '0:08' },
        { speaker: 'Arzt', text: 'Lunge: leichte Rasselgeräusche rechts.', time: '0:15' },
        { speaker: 'KI', text: '→ SOAP-Notiz generiert', time: '0:30', highlight: true },
      ],
    },
  },
  {
    id: 'tamg',
    icon: Shield,
    title: 'TAMG-Compliance',
    tag: 'TAMG 2026',
    tagColor: 'bg-secondary/10 text-secondary border-secondary/20',
    shortDesc: 'Antibiotika-Tracking automatisch',
    description: 'Alle Antibiotika-Verordnungen werden automatisch erfasst und der BVL-Export funktioniert mit einem einzigen Klick – ohne manuelle Doppelarbeit.',
    highlights: [
      { label: 'Export', value: '1 Klick' },
      { label: 'Format', value: 'BVL-konform' },
      { label: 'Aktualität', value: 'Echtzeit' },
    ],
    mockup: {
      type: 'tamg',
      data: [
        { label: 'Tierart', value: 'Hund (Canis lupus familiaris)', time: '2024-04-23' },
        { label: 'Wirkstoff', value: 'Amoxicillin', time: '2024-04-23' },
        { label: 'Dosis', value: '15 mg/kg KG', time: '2024-04-23' },
        { label: 'Behandlungsdauer', value: '7 Tage', time: '2024-04-23' },
        { label: 'Status', value: '✓ BVL-konform', time: '2024-04-23', highlight: true },
      ],
    },
  },
  {
    id: 'goev',
    icon: Calculator,
    title: 'GOÄ-V Abrechnung',
    tag: 'GOÄ-V 2024',
    tagColor: 'bg-accent/10 text-accent border-accent/20',
    shortDesc: 'Integrierter Gebührenrechner',
    description: 'Automatische Rechnungserstellung basierend auf den GOÄ-V Gebühren. Kein manuelles Nachschlagen mehr, keine Fehler.',
    highlights: [
      { label: 'Gebühren', value: 'GOÄ-V 2024' },
      { label: 'Rechnungen', value: 'Auto' },
      { label: 'Steuer', value: 'MWSt. 19%' },
    ],
    mockup: {
      type: 'goev',
      data: [
        { code: 'GOT 1', desc: 'Grundgebühr', price: '28,80 €' },
        { code: 'GOT 2', desc: 'Untersuchung', price: '15,60 €' },
        { code: 'GOT 5', desc: 'Impfung', price: '12,40 €' },
        { code: '', desc: 'Summe', price: '56,80 €', highlight: true },
      ],
    },
  },
  {
    id: 'drug-db',
    icon: Database,
    title: 'EU Arzneimitteldatenbank',
    tag: 'Free',
    tagColor: 'bg-primary/10 text-primary border-primary/20',
    shortDesc: 'Kostenlos. Aktuell. Tierspezifisch.',
    description: 'Direkter Zugriff auf alle in der EU zugelassenen Arzneimittel. Vollständig integriert in die Praxissoftware.',
    highlights: [
      { label: 'Datensätze', value: '50.000+' },
      { label: 'Update', value: 'Täglich' },
      { label: 'Kosten', value: 'Kostenlos' },
    ],
    mockup: {
      type: 'drug',
      data: [
        { name: 'Amoxicillin 500mg', status: 'Zugelassen', type: 'Antibiotikum' },
        { name: 'Carprofen 75mg', status: 'Zugelassen', type: 'NSAR' },
        { name: 'Meloxicam 1.5mg/ml', status: 'Zugelassen', type: 'NSAR' },
        { name: 'Suchen...', status: '', type: '', highlight: true },
      ],
    },
  },
  {
    id: 'dosage',
    icon: Pill,
    title: 'Dosierungsrechner',
    tag: 'Smart',
    tagColor: 'bg-accent/10 text-accent border-accent/20',
    shortDesc: 'Art- und gewichtsspezifisch',
    description: 'Automatische Dosierungsberechnung basierend auf Tierart, Gewicht und Indikation. Reduziert Fehler und spart Zeit.',
    highlights: [
      { label: 'Tiere', value: 'Alle Arten' },
      { label: 'Formeln', value: 'Evidence-based' },
      { label: 'Warnungen', value: 'Echtzeit' },
    ],
    mockup: {
      type: 'dosage',
      data: [
        { label: 'Tier', value: 'Hund, 25kg' },
        { label: 'Wirkstoff', value: 'Amoxicillin' },
        { label: 'Dosis', value: '15 mg/kg KG' },
        { label: 'Ergebnis', value: '375 mg 2×/Tag', highlight: true },
        { label: 'Verabreichung', value: 'PO, 7 Tage' },
      ],
    },
  },
  {
    id: 'offline',
    icon: WifiOff,
    title: 'Offline-Modus',
    tag: 'PWA',
    tagColor: 'bg-secondary/10 text-secondary border-secondary/20',
    shortDesc: 'Funktioniert auch ohne Internet',
    description: 'Arbeiten Sie auch ohne Internetverbindung. Alle Daten werden lokal gespeichert und automatisch synchronisiert, sobald die Verbindung wiederhergestellt ist.',
    highlights: [
      { label: 'Sync', value: 'Auto' },
      { label: 'Konflikte', value: 'Smart Resolve' },
      { label: 'Speicher', value: 'Unbegrenzt' },
    ],
    mockup: {
      type: 'offline',
      data: [
        { status: 'online', label: 'Letzte Synchronisation', time: 'Vor 2 Minuten' },
        { status: 'offline', label: 'Aktueller Status', time: 'Offline-Modus aktiv' },
        { status: 'pending', label: 'Wartende Änderungen', time: '3 Einträge' },
        { status: 'sync', label: 'Bei Verbindung', time: 'Auto-Sync', highlight: true },
      ],
    },
  },
]

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(features[0])

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-primary font-semibold uppercase tracking-wider">Features</span>
            <h1 className="text-4xl lg:text-6xl font-bold font-display text-text mt-3 mb-4">
              Feature <span className="gradient-text">Explorer</span>
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Entdecke die Features, die TierarztOS von anderen Praxissoftware-Anbietern abhebt.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature explorer layout */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left: Feature list */}
          <div className="lg:col-span-2 space-y-2">
            {features.map((feature) => {
              const isActive = activeFeature.id === feature.id
              const Icon = feature.icon

              return (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-surface border-primary/30 shadow-[0_0_20px_rgba(0,212,170,0.1)]'
                      : 'bg-surface/50 border-border hover:border-border-light'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-primary/10' : 'bg-surface-light'
                    }`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-text-dim'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-sm font-semibold ${isActive ? 'text-text' : 'text-text-muted'}`}>
                          {feature.title}
                        </span>
                        <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${feature.tagColor}`}>
                          {feature.tag}
                        </span>
                      </div>
                      <p className="text-xs text-text-dim">{feature.shortDesc}</p>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all ${
                      isActive ? 'text-primary translate-x-0 opacity-100' : 'text-text-dim -translate-x-2 opacity-0'
                    }`} />
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Right: Preview */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl border border-border overflow-hidden h-full"
              >
                {/* Preview header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface-light">
                  <div className="flex items-center gap-3">
                    <activeFeature.icon className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-text">{activeFeature.title}</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                </div>

                {/* Mockup content */}
                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-sm text-text-dim leading-relaxed mb-4">{activeFeature.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {activeFeature.highlights.map((h) => (
                        <div key={h.label} className="px-3 py-1.5 rounded-lg bg-surface-light border border-border">
                          <span className="text-xs text-text-dim">{h.label}: </span>
                          <span className="text-xs font-mono font-semibold text-primary">{h.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mockup screen */}
                  <div className="rounded-xl bg-bg border border-border overflow-hidden">
                    <div className="px-4 py-3 border-b border-border bg-surface-light flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-xs font-mono text-text-dim">{activeFeature.title} Preview</span>
                    </div>
                    <div className="p-4 font-mono text-sm">
                      {activeFeature.mockup.type === 'transcription' && (
                        <div className="space-y-2">
                          {activeFeature.mockup.data.map((line, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className={`flex items-center gap-3 p-2 rounded-lg ${line.highlight ? 'bg-primary/5 border border-primary/20' : ''}`}
                            >
                              <span className={`text-xs px-2 py-0.5 rounded ${line.highlight ? 'bg-primary/20 text-primary' : 'bg-surface-light text-text-dim'}`}>
                                {line.speaker}
                              </span>
                              <span className="flex-1 text-text-muted text-xs">{line.text}</span>
                              <span className="text-xs text-text-dim">{line.time}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}
                      {activeFeature.mockup.type === 'tamg' && (
                        <div className="space-y-2">
                          {activeFeature.mockup.data.map((line, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className={`flex items-center justify-between p-2 rounded-lg ${line.highlight ? 'bg-primary/5 border border-primary/20' : ''}`}
                            >
                              <span className="text-xs text-text-dim">{line.label}</span>
                              <span className={`text-xs ${line.highlight ? 'text-primary font-semibold' : 'text-text-muted'}`}>{line.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}
                      {activeFeature.mockup.type === 'goev' && (
                        <div className="space-y-2">
                          {activeFeature.mockup.data.map((line, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className={`flex items-center justify-between p-2 rounded-lg ${line.highlight ? 'bg-primary/5 border border-primary/20' : ''}`}
                            >
                              <div className="flex items-center gap-2">
                                {line.code && <span className="text-xs font-mono text-text-dim w-16">{line.code}</span>}
                                <span className="text-xs text-text-muted">{line.desc}</span>
                              </div>
                              <span className={`text-xs font-mono ${line.highlight ? 'text-primary font-semibold' : 'text-text-muted'}`}>{line.price}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}
                      {activeFeature.mockup.type === 'drug' && (
                        <div className="space-y-2">
                          {activeFeature.mockup.data.map((line, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className={`flex items-center justify-between p-2 rounded-lg ${line.highlight ? 'bg-primary/5 border border-primary/20' : ''}`}
                            >
                              {line.highlight ? (
                                <div className="flex items-center gap-2 w-full">
                                  <Sparkles className="w-4 h-4 text-primary" />
                                  <span className="text-xs text-text-dim flex-1">{line.name}</span>
                                </div>
                              ) : (
                                <>
                                  <span className="text-xs text-text">{line.name}</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-400 rounded">{line.status}</span>
                                    <span className="text-xs text-text-dim">{line.type}</span>
                                  </div>
                                </>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      )}
                      {activeFeature.mockup.type === 'dosage' && (
                        <div className="space-y-2">
                          {activeFeature.mockup.data.map((line, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className={`flex items-center justify-between p-2 rounded-lg ${line.highlight ? 'bg-primary/5 border border-primary/20' : ''}`}
                            >
                              <span className="text-xs text-text-dim">{line.label}</span>
                              <span className={`text-xs ${line.highlight ? 'text-primary font-semibold' : 'text-text-muted'}`}>{line.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}
                      {activeFeature.mockup.type === 'offline' && (
                        <div className="space-y-2">
                          {activeFeature.mockup.data.map((line, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className={`flex items-center justify-between p-2 rounded-lg ${line.highlight ? 'bg-primary/5 border border-primary/20' : ''}`}
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${
                                  line.status === 'online' ? 'bg-green-500' :
                                  line.status === 'offline' ? 'bg-secondary' :
                                  line.status === 'pending' ? 'bg-yellow-500' :
                                  'bg-primary animate-pulse'
                                }`} />
                                <span className="text-xs text-text-dim">{line.label}</span>
                              </div>
                              <span className={`text-xs ${line.highlight ? 'text-primary font-semibold' : 'text-text-muted'}`}>{line.time}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
