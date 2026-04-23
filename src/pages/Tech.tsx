import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Database,
  Cpu,
  Cloud,
  Lock,
  Zap,
  ArrowRight,
  GitBranch,
  Terminal,
  Server,
  Globe,
  Code2,
  Layers,
  Shield,
  Wifi,
  HardDrive,
} from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal'

/* ────────── Terminal Animation ────────── */

function TerminalAnimation() {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)

  const commands = [
    { text: '$ git clone https://github.com/tierarztos/core.git', color: 'text-text' },
    { text: 'Cloning into \'core\'...', color: 'text-text-dim' },
    { text: 'done.', color: 'text-primary' },
    { text: '', color: 'text-text' },
    { text: '$ cd core && npm install', color: 'text-text' },
    { text: 'added 1,247 packages in 2.4s', color: 'text-text-dim' },
    { text: '', color: 'text-text' },
    { text: '$ npm run build', color: 'text-text' },
    { text: 'vite v5.0.0 building for production...', color: 'text-text-dim' },
    { text: '✓ 1,432 modules transformed.', color: 'text-primary' },
    { text: 'dist/                     2.4 MB │ gzip: 0.6 MB', color: 'text-accent' },
    { text: '✓ built in 4.23s', color: 'text-primary' },
    { text: '', color: 'text-text' },
    { text: '$ npm run deploy', color: 'text-text' },
    { text: '🚀 Deployed to https://app.tierarztos.de', color: 'text-secondary' },
    { text: '', color: 'text-text' },
    { text: '$ _', color: 'text-primary', blink: true },
  ]

  useEffect(() => {
    let idx = 0
    const interval = setInterval(() => {
      if (idx < commands.length) {
        setLines((prev) => [...prev, commands[idx].text])
        idx++
      }
    }, 600)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass rounded-2xl border border-border overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-light border-b border-border">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs font-mono text-text-dim">bash — tierarztos/build</span>
      </div>
      <div className="p-4 font-mono text-sm h-[300px] overflow-hidden">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`${
              line.startsWith('$') ? 'text-text' :
              line.startsWith('✓') || line.startsWith('done') ? 'text-primary' :
              line.startsWith('🚀') ? 'text-secondary' :
              line.includes('MB') ? 'text-accent' :
              'text-text-dim'
            }`}
          >
            {line}
            {i === lines.length - 1 && line === '$ _' && (
              <span className="animate-blink">█</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ────────── Architecture Diagram ────────── */

function ArchitectureDiagram() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const layers = [
    {
      name: 'Frontend',
      items: [
        { name: 'React 18', icon: Code2, color: 'text-[#61dafb]' },
        { name: 'TypeScript', icon: Terminal, color: 'text-[#3178c6]' },
        { name: 'Tailwind CSS', icon: Layers, color: 'text-[#38bdf8]' },
        { name: 'Framer Motion', icon: Zap, color: 'text-[#ff6b6b]' },
      ],
    },
    {
      name: 'API Layer',
      items: [
        { name: 'REST API', icon: Globe, color: 'text-primary' },
        { name: 'GraphQL', icon: Database, color: 'text-[#e535ab]' },
        { name: 'WebSocket', icon: Wifi, color: 'text-[#00d4aa]' },
      ],
    },
    {
      name: 'Backend',
      items: [
        { name: 'Supabase Edge', icon: Cloud, color: 'text-[#3ecf8e]' },
        { name: 'PostgreSQL', icon: Database, color: 'text-[#336791]' },
        { name: 'Auth', icon: Lock, color: 'text-accent' },
      ],
    },
    {
      name: 'Infrastructure',
      items: [
        { name: 'Edge Functions', icon: Server, color: 'text-primary' },
        { name: 'Storage', icon: HardDrive, color: 'text-text-muted' },
        { name: 'Realtime', icon: Zap, color: 'text-secondary' },
      ],
    },
  ]

  return (
    <div ref={ref} className="glass rounded-2xl border border-border p-6">
      <div className="flex items-center gap-2 mb-6">
        <Server className="w-5 h-5 text-primary" />
        <span className="font-semibold text-text">System Architecture</span>
      </div>

      <div className="space-y-4">
        {layers.map((layer, layerIdx) => (
          <motion.div
            key={layer.name}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: layerIdx * 0.15 }}
          >
            <div className="text-xs font-mono text-text-dim mb-2">{layer.name}</div>
            <div className="flex flex-wrap gap-2">
              {layer.items.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-light border border-border hover:border-primary/20 transition-colors cursor-default"
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-xs font-mono text-text">{item.name}</span>
                </motion.div>
              ))}
            </div>

            {layerIdx < layers.length - 1 && (
              <div className="flex justify-center py-2">
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 text-text-dim rotate-90" />
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ────────── API Example ────────── */

function APIExample() {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/patients',
      description: 'List all patients',
      response: `{
  "data": [
    {
      "id": "pat_123",
      "name": "Bello",
      "species": "Canis lupus familiaris",
      "owner": {
        "id": "own_456",
        "name": "Hans Müller",
        "email": "hans@example.com"
      }
    }
  ],
  "meta": {
    "total": 142,
    "page": 1,
    "per_page": 20
  }
}`,
    },
    {
      method: 'POST',
      path: '/api/v1/transcribe',
      description: 'Start AI transcription',
      response: `{
  "job_id": "trsc_789",
  "status": "processing",
  "estimated_duration": "30s",
  "webhook_url": "https://..."
}`,
    },
    {
      method: 'GET',
      path: '/api/v1/drugs/search',
      description: 'Search drug database',
      response: `{
  "data": [
    {
      "id": "drg_001",
      "name": "Amoxicillin",
      "dosage": {
        "dog": "15 mg/kg PO q12h",
        "cat": "10-15 mg/kg PO q12h"
      },
      "approved": true
    }
  ]
}`,
    },
  ]

  const [activeEndpoint, setActiveEndpoint] = useState(0)

  return (
    <div className="glass rounded-2xl border border-border overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-light border-b border-border">
        <Globe className="w-4 h-4 text-primary" />
        <span className="text-xs font-mono text-text-dim">REST API — v1.0</span>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="border-r border-border">
          {endpoints.map((ep, i) => (
            <button
              key={ep.path}
              onClick={() => setActiveEndpoint(i)}
              className={`w-full text-left p-4 border-b border-border last:border-b-0 transition-colors ${
                activeEndpoint === i ? 'bg-primary/5' : 'hover:bg-surface-light'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  ep.method === 'GET' ? 'bg-primary/20 text-primary' :
                  ep.method === 'POST' ? 'bg-secondary/20 text-secondary' :
                  'bg-accent/20 text-accent'
                }`}>
                  {ep.method}
                </span>
                <span className="text-xs font-mono text-text">{ep.path}</span>
              </div>
              <p className="text-xs text-text-dim">{ep.description}</p>
            </button>
          ))}
        </div>

        <div className="p-4 font-mono text-xs leading-relaxed">
          <div className="text-text-dim mb-2">Response:</div>
          <pre className="text-text-muted whitespace-pre-wrap">
            {endpoints[activeEndpoint].response}
          </pre>
        </div>
      </div>
    </div>
  )
}

/* ────────── Stack Grid ────────── */

const stack = [
  { name: 'React', version: '18.x', icon: Code2, color: '#61dafb', desc: 'UI Framework' },
  { name: 'TypeScript', version: '5.x', icon: Terminal, color: '#3178c6', desc: 'Type Safety' },
  { name: 'Tailwind', version: '4.x', icon: Layers, color: '#38bdf8', desc: 'Styling' },
  { name: 'Supabase', version: '2.x', icon: Database, color: '#3ecf8e', desc: 'Backend' },
  { name: 'PostgreSQL', version: '15.x', icon: Database, color: '#336791', desc: 'Database' },
  { name: 'AssemblyAI', version: '—', icon: Cpu, color: '#ff6b6b', desc: 'Voice AI' },
  { name: 'Gemini', version: '—', icon: Zap, color: '#ffd93d', desc: 'AI Models' },
  { name: 'Framer Motion', version: '11.x', icon: Zap, color: '#ff6b6b', desc: 'Animation' },
]

/* ────────── Main Page ────────── */

export default function Tech() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-accent font-semibold uppercase tracking-wider">Technology</span>
            <h1 className="text-4xl lg:text-6xl font-bold font-display text-text mt-3 mb-4">
              Built with <span className="gradient-text">modern tech</span>
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Wir nutzen modernste Technologie, um eine Plattform zu schaffen, die mit Ihrer Praxis wächst.
            </p>
          </div>
        </ScrollReveal>

        {/* Stack grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stack.map((tech) => (
            <StaggerItem key={tech.name}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass rounded-xl p-5 border border-border hover:border-primary/20 transition-colors text-center group cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: `${tech.color}15` }}
                >
                  <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                </div>
                <div className="font-semibold text-text text-sm">{tech.name}</div>
                <div className="text-xs text-text-dim mb-1">{tech.version}</div>
                <div className="text-[10px] font-mono text-text-dim">{tech.desc}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Terminal + Architecture */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="font-semibold text-text">Build Process</span>
              </div>
              <TerminalAnimation />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ArchitectureDiagram />
          </ScrollReveal>
        </div>

        {/* API Section */}
        <ScrollReveal>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-accent" />
              <span className="font-semibold text-text">Open API</span>
            </div>
            <APIExample />
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
