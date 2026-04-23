import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  Mail,
  User,
  Building2,
  Send,
  ArrowRight,
  Check,
  Zap,
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
]

const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr']

export default function Demo() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    practice: '',
    email: '',
    phone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 lg:pt-32 pb-20 flex items-center justify-center">
        <ScrollReveal>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center max-w-md mx-auto px-6"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold font-display text-text mb-4">
              Demo gebucht!
            </h1>
            <p className="text-text-muted mb-8">
              Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
            <div className="glass rounded-2xl p-6 border border-border mb-8">
              <div className="flex items-center gap-3 mb-3">
                <User className="w-5 h-5 text-primary" />
                <span className="text-text">{formData.name}</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-text">{formData.practice}</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-text">{formData.email}</span>
              </div>
              {selectedSlot && (
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-text">{selectedSlot} Uhr</span>
                </div>
              )}
            </div>
            <a
              href="/auth?signup=true"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-bg font-semibold rounded-xl hover:bg-primary-dark transition-all"
            >
              <Zap className="w-4 h-4" />
              Oder direkt testen
            </a>
          </motion.div>
        </ScrollReveal>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-primary font-semibold uppercase tracking-wider">Demo</span>
            <h1 className="text-4xl lg:text-6xl font-bold font-display text-text mt-3 mb-4">
              Buche eine <span className="gradient-text">Demo</span>
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Sieh TierarztOS in Aktion. 30 Minuten, keine Verpflichtung, nur pure Begeisterung.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Calendar */}
          <ScrollReveal>
            <div className="glass rounded-2xl border border-border p-6">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-semibold text-text">Wähle einen Termin</span>
              </div>

              <div className="mb-6">
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {days.map((day) => (
                    <div key={day} className="text-center">
                      <div className="text-xs text-text-dim mb-1">{day}</div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {days.map((day) => (
                    <motion.button
                      key={day}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="aspect-square rounded-xl bg-surface-light border border-border flex items-center justify-center text-sm text-text-muted hover:border-primary/30 hover:text-primary transition-colors"
                    >
                      {Math.floor(Math.random() * 20) + 10}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs text-text-dim mb-3">Verfügbare Zeiten</div>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <motion.button
                      key={slot}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                        selectedSlot === slot
                          ? 'bg-primary text-bg'
                          : 'bg-surface-light border border-border text-text-muted hover:border-primary/30 hover:text-primary'
                      }`}
                    >
                      {slot}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl border border-border p-6">
              <div className="flex items-center gap-2 mb-6">
                <User className="w-5 h-5 text-primary" />
                <span className="font-semibold text-text">Deine Daten</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs text-text-dim mb-1.5 block">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-surface-light border border-border rounded-xl text-text placeholder-text-dim text-sm focus:border-primary/30 focus:outline-none transition-colors"
                      placeholder="Dr. Max Mustermann"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-text-dim mb-1.5 block">Praxis</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
                    <input
                      type="text"
                      required
                      value={formData.practice}
                      onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-surface-light border border-border rounded-xl text-text placeholder-text-dim text-sm focus:border-primary/30 focus:outline-none transition-colors"
                      placeholder="Tierarztpraxis Mustermann"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-text-dim mb-1.5 block">E-Mail</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-surface-light border border-border rounded-xl text-text placeholder-text-dim text-sm focus:border-primary/30 focus:outline-none transition-colors"
                      placeholder="max@tierarztpraxis.de"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-text-dim mb-1.5 block">Telefon (optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-light border border-border rounded-xl text-text placeholder-text-dim text-sm focus:border-primary/30 focus:outline-none transition-colors"
                    placeholder="+49 123 456789"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 inline-flex items-center justify-center gap-2 py-3 px-6 bg-primary text-bg font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-[0_0_20px_rgba(0,212,170,0.3)]"
              >
                <Send className="w-4 h-4" />
                Demo buchen
              </button>
            </form>
          </ScrollReveal>
        </div>

        {/* Alternative CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-text-dim mb-4">Oder direkt loslegen</p>
            <a
              href="/auth?signup=true"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text font-semibold rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all"
            >
              <Zap className="w-4 h-4 text-primary" />
              14 Tage kostenlos testen
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
