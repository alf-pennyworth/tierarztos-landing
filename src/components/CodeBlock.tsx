import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  delay?: number
}

export default function CodeBlock({ code, language = 'typescript', filename, delay = 0 }: CodeBlockProps) {
  const [displayed, setDisplayed] = useState('')
  const lines = code.split('\n')

  useEffect(() => {
    let currentLine = 0
    const interval = setInterval(() => {
      if (currentLine <= lines.length) {
        setDisplayed(lines.slice(0, currentLine).join('\n'))
        currentLine++
      } else {
        clearInterval(interval)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [code])

  const getLineColor = (line: string) => {
    if (line.trim().startsWith('//') || line.trim().startsWith('*') || line.trim().startsWith('/*')) return 'text-text-dim'
    if (line.includes('import') || line.includes('export') || line.includes('from')) return 'text-secondary'
    if (line.includes('const') || line.includes('let') || line.includes('var')) return 'text-primary'
    if (line.includes('function') || line.includes('=>') || line.includes('return')) return 'text-accent'
    if (line.includes('"') || line.includes("'")) return 'text-green-400'
    if (line.includes('true') || line.includes('false') || /\d/.test(line)) return 'text-orange-400'
    return 'text-text-muted'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="rounded-xl overflow-hidden bg-surface border border-border"
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-light border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        {filename && (
          <span className="ml-2 text-xs text-text-dim font-mono">{filename}</span>
        )}
        <span className="ml-auto text-xs text-text-dim font-mono">{language}</span>
      </div>

      {/* Code */}
      <div className="p-4 overflow-x-auto">
        <pre className="code-block">
          {displayed.split('\n').map((line, i) => (
            <div key={i} className="flex">
              <span className="select-none text-text-dim/40 w-8 text-right mr-4 text-xs leading-relaxed">
                {i + 1}
              </span>
              <span className={`leading-relaxed ${getLineColor(line)}`}>
                {line || ' '}
              </span>
            </div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-primary ml-8"
          />
        </pre>
      </div>
    </motion.div>
  )
}
