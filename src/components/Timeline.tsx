import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Circle } from 'lucide-react'

interface TimelineItem {
  year: string
  title: string
  description: string
  completed: boolean
  highlight?: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="relative">
      {/* Vertical line */}
      <div className="absolute left-5 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

      <div className="space-y-12">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0

          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex items-start gap-6 lg:gap-0 ${
                isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                <div className={`glass rounded-2xl p-6 border border-border hover:border-primary/20 transition-colors ${
                  isLeft ? 'lg:ml-auto' : ''
                }`}
                style={{ maxWidth: '400px' }}>
                  <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                    <span className="text-xs font-mono text-primary font-semibold px-2 py-1 bg-primary/10 rounded-md">
                      {item.year}
                    </span>
                    {item.highlight && (
                      <span className="text-xs text-accent font-medium">
                        {item.highlight}
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-text mb-2">{item.title}</h4>
                  <p className="text-sm text-text-dim leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute left-5 lg:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-surface border-2 border-primary flex items-center justify-center z-10 shrink-0">
                {item.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                ) : (
                  <Circle className="w-5 h-5 text-text-dim" />
                )}
              </div>

              {/* Empty side for alignment */}
              <div className="flex-1 hidden lg:block" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
