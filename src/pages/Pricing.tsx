import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Check,
  ArrowRight,
  Zap,
  Users,
  Building2,
  Clock,
  TrendingUp,
  CreditCard,
} from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal'

const plans = [
  {
    name: 'Solo Practitioner',
    price: '49',
    period: '/month',
    description: 'Für Einzelarztpraxen, die gerade starten',
    icon: Zap,
    cta: 'Start free trial',
    highlighted: false,
    features: [
      '1 Veterinarian',
      'Unlimited patients',
      'Basic features',
      'GOÄ-V billing',
      'Email support',
      'DSGVO compliant',
    ],
    notIncluded: [
      'AI transcription',
      'API access',
      'Offline mode',
      'Priority support',
    ],
  },
  {
    name: 'Growing Practice',
    price: '99',
    period: '/month',
    description: 'Für wachsende Praxen mit mehreren Ärzten',
    icon: Users,
    cta: 'Start free trial',
    highlighted: true,
    features: [
      '3 Veterinarians',
      'Unlimited patients',
      'All features included',
      'AI transcription',
      'API access',
      'Priority support',
      'Offline mode',
      'TAMG export',
    ],
    notIncluded: [],
  },
  {
    name: 'Veterinary Chain',
    price: '199',
    period: '/month',
    description: 'Für Tierarztketten und Großpraxen',
    icon: Building2,
    cta: 'Contact sales',
    highlighted: false,
    features: [
      'Unlimited veterinarians',
      'Multi-location support',
      'SSO & audit logs',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee',
      'Onboarding assistant',
      'Advanced analytics',
    ],
    notIncluded: [],
  },
]

const comparisonData = {
  features: [
    'KI-Transkription',
    'TAMG-Compliance',
    'GOÄ-V Abrechnung',
    'EU Arzneimitteldatenbank',
    'Offline-Modus',
    'API-Zugang',
    'DSGVO-konform',
    'Priority Support',
  ],
  competitors: [
    {
      name: 'TierarztOS',
      checks: [true, true, true, true, true, true, true, true],
      price: 'Ab 49€',
      ours: true,
    },
    {
      name: 'VetData',
      checks: [false, true, true, false, false, false, true, false],
      price: '300-500€',
      ours: false,
    },
    {
      name: 'easyVET',
      checks: [false, false, true, false, false, false, true, false],
      price: '200-400€',
      ours: false,
    },
    {
      name: 'IDEXX',
      checks: [false, true, true, true, false, false, true, true],
      price: '400-800€',
      ours: false,
    },
  ],
}

function ROICalculator() {
  const [patientsPerDay, setPatientsPerDay] = useState(15)
  const [timePerPatient, setTimePerPatient] = useState(5)
  const [hourlyRate, setHourlyRate] = useState(80)

  const minutesSavedPerDay = patientsPerDay * timePerPatient
  const hoursSavedPerMonth = (minutesSavedPerDay * 22) / 60
  const moneySavedPerMonth = hoursSavedPerMonth * hourlyRate
  const planCost = 99
  const netSavings = moneySavedPerMonth - planCost

  return (
    <div className="glass rounded-2xl border border-border p-6 lg:p-8">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-primary" />
        <span className="font-semibold text-text">ROI Calculator</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="text-xs text-text-dim mb-2 block">Patients per day</label>
          <input
            type="range"
            min="5"
            max="50"
            value={patientsPerDay}
            onChange={(e) => setPatientsPerDay(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="text-center text-sm font-semibold text-primary mt-1">{patientsPerDay}</div>
        </div>

        <div>
          <label className="text-xs text-text-dim mb-2 block">Minutes saved per patient</label>
          <input
            type="range"
            min="1"
            max="15"
            value={timePerPatient}
            onChange={(e) => setTimePerPatient(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="text-center text-sm font-semibold text-primary mt-1">{timePerPatient} min</div>
        </div>

        <div>
          <label className="text-xs text-text-dim mb-2 block">Hourly rate (€)</label>
          <input
            type="range"
            min="40"
            max="200"
            step="10"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="text-center text-sm font-semibold text-primary mt-1">€{hourlyRate}</div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-4 rounded-xl bg-surface-light border border-border text-center"
        >
          <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-primary font-display">{hoursSavedPerMonth.toFixed(1)}h</div>
          <div className="text-xs text-text-dim">Saved per month</div>
        </motion.div>

        <div className="p-4 rounded-xl bg-surface-light border border-border text-center"
        >
          <TrendingUp className="w-5 h-5 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-accent font-display">€{moneySavedPerMonth.toFixed(0)}</div>
          <div className="text-xs text-text-dim">Value saved/month</div>
        </div>

        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-center"
        >
          <CreditCard className="w-5 h-5 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-primary font-display">€{netSavings.toFixed(0)}</div>
          <div className="text-xs text-text-dim">Net savings/month</div>
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-primary font-semibold uppercase tracking-wider">Pricing</span>
            <h1 className="text-4xl lg:text-6xl font-bold font-display text-text mt-3 mb-4">
              Transparente <span className="gradient-text">Preise</span>
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Keine versteckten Kosten. Keine Einrichtungsgebühren. Einfach fair.
            </p>
          </div>
        </ScrollReveal>

        {/* Billing toggle */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!annual ? 'text-text' : 'text-text-dim'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${annual ? 'bg-primary' : 'bg-surface-light'}`}
            >
              <motion.div
                animate={{ x: annual ? 28 : 2 }}
                className="absolute top-1 w-5 h-5 rounded-full bg-bg"
              />
            </button>
            <span className={`text-sm ${annual ? 'text-text' : 'text-text-dim'}`}>Annual</span>
            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">2 months free</span>
          </div>
        </ScrollReveal>

        {/* Plans */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`relative rounded-2xl p-6 lg:p-8 flex flex-col ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-primary/10 to-bg border-2 border-primary/30 shadow-[0_0_40px_rgba(0,212,170,0.1)]'
                    : 'glass border border-border'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-bg text-xs font-semibold rounded-full">
                    Empfohlen
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      plan.highlighted ? 'bg-primary/20' : 'bg-surface-light'
                    }`}>
                      <plan.icon className={`w-5 h-5 ${plan.highlighted ? 'text-primary' : 'text-text-dim'}`} />
                    </div>
                    <span className="font-semibold text-text">{plan.name}</span>
                  </div>
                  <p className="text-sm text-text-dim">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-text font-display">€{plan.price}</span>
                    <span className="text-sm text-text-dim">{plan.period}</span>
                  </div>
                  <p className="text-xs text-text-dim mt-1">Jährlich: 2 Monate geschenkt</p>
                </div>

                <a
                  href="/auth?signup=true"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-semibold transition-all mb-6 ${
                    plan.highlighted
                      ? 'bg-primary text-bg hover:bg-primary-dark shadow-[0_0_20px_rgba(0,212,170,0.3)]'
                      : 'bg-surface-light text-text border border-border hover:border-primary/30'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className={`w-4 h-4 ${plan.highlighted ? 'text-primary' : 'text-text-dim'}`} />
                      <span className="text-sm text-text-muted">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded?.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 opacity-40">
                      <div className="w-4 h-4 rounded-full border border-text-dim" />
                      <span className="text-sm text-text-dim">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Comparison table */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-display text-text mb-6">Vergleich</h2>
            <div className="glass rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-surface-light">
                      <th className="text-left px-6 py-4 text-xs font-mono text-text-dim font-normal">Feature</th>
                      {comparisonData.competitors.map((c) => (
                        <th
                          key={c.name}
                          className={`text-center px-6 py-4 text-sm font-semibold ${c.ours ? 'text-primary' : 'text-text-muted'}`}
                        >
                          {c.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.features.map((feature, i) => (
                      <tr key={feature} className="border-b border-border last:border-b-0">
                        <td className="px-6 py-3 text-sm text-text-muted">{feature}</td>
                        {comparisonData.competitors.map((c) => (
                          <td key={`${c.name}-${i}`} className="text-center px-6 py-3">
                            {c.checks[i] ? (
                              <Check className={`w-4 h-4 mx-auto ${c.ours ? 'text-primary' : 'text-text-dim'}`} />
                            ) : (
                              <div className="w-4 h-1 bg-text-dim/20 rounded mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr className="border-t-2 border-border bg-surface-light">
                      <td className="px-6 py-4 text-sm font-semibold text-text">Ab-Preis</td>
                      {comparisonData.competitors.map((c) => (
                        <td
                          key={c.name}
                          className={`text-center px-6 py-4 text-sm font-semibold ${c.ours ? 'text-primary' : 'text-text-muted'}`}
                        >
                          {c.price}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ROI Calculator */}
        <ScrollReveal>
          <ROICalculator />
        </ScrollReveal>
      </div>
    </div>
  )
}
