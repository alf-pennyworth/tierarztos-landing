import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  delay?: number
}

export default function FeatureCard({ icon: Icon, title, description, gradient, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative glass rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${gradient}, transparent 40%)` }}
      />

      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${gradient.replace('bg-', 'bg-opacity-10 ')}`}
          style={{ background: `linear-gradient(135deg, ${gradient.includes('primary') ? 'rgba(0,212,170,0.1)' : gradient.includes('secondary') ? 'rgba(255,107,107,0.1)' : 'rgba(255,217,61,0.1)'})` }}
        >
          <Icon className={`w-6 h-6 ${
            gradient.includes('primary') ? 'text-primary' :
            gradient.includes('secondary') ? 'text-secondary' : 'text-accent'
          }`} />
        </div>

        <h3 className="text-lg font-semibold text-text mb-2 flex items-center gap-2">
          {title}
          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-primary" />
        </h3>
        <p className="text-sm text-text-dim leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
