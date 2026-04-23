import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useState } from 'react'

export default function Auth() {
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(timer)
          // In production, redirect to actual app
          window.location.href = 'https://app.tierarztos.de'
          return 0
        }
        return c - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center grid-bg">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md mx-auto px-6"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
        <h1 className="text-2xl font-bold font-display text-text mb-2">
          Weiterleitung...
        </h1>
        <p className="text-text-muted mb-6">
          Du wirst in <span className="text-primary font-semibold">{countdown}</span> Sekunden zur App weitergeleitet.
        </p>
        <a
          href="https://app.tierarztos.de"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-bg font-semibold rounded-xl hover:bg-primary-dark transition-all"
        >
          Direkt zur App
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  )
}
