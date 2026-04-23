import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowRight, Tag, Calendar } from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal'

const posts = [
  {
    id: 'tamg-2026',
    title: 'TAMG 2026: Was ändert sich?',
    excerpt: 'Die neue Tierarzneimittelgesetz-Novelle bringt wichtige Änderungen für die Praxis. Wir brechen sie für Sie herunter.',
    date: '2024-04-15',
    readTime: '8 min',
    tags: ['TAMG', 'Compliance', 'Gesetz'],
    featured: true,
    color: 'from-primary/20 to-primary/5',
  },
  {
    id: 'ki-tiermedizin',
    title: 'KI in der Tiermedizin: Hype oder Hilfe?',
    excerpt: 'Wir haben 100 Tierärzte befragt, die KI in ihrer Praxis nutzen. Die Ergebnisse sind überraschend positiv.',
    date: '2024-03-28',
    readTime: '12 min',
    tags: ['KI', 'Innovation', 'Studie'],
    featured: false,
    color: 'from-secondary/20 to-secondary/5',
  },
  {
    id: 'goev-got',
    title: 'GOÄ-V vs. GOT: Der Unterschied',
    excerpt: 'Wann GOÄ-V, wann GOT? Eine klare Erklärung für Tierärzte, die endlich verstehen wollen, was sie abrechnen.',
    date: '2024-03-10',
    readTime: '6 min',
    tags: ['GOÄ-V', 'Abrechnung', 'Guide'],
    featured: false,
    color: 'from-accent/20 to-accent/5',
  },
]

const allTags = [...new Set(posts.flatMap((p) => p.tags))]

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-primary font-semibold uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl lg:text-6xl font-bold font-display text-text mt-3 mb-4">
              Insights <span className="gradient-text">& Updates</span>
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Wissenswertes aus der Welt der Tiermedizin, Technologie und Praxissoftware.
            </p>
          </div>
        </ScrollReveal>

        {/* Tags */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Alle
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-1.5 rounded-full bg-surface-light border border-border text-text-dim text-sm hover:border-primary/20 hover:text-primary transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Featured post */}
        {posts.filter((p) => p.featured).map((post) => (
          <ScrollReveal key={post.id}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass rounded-2xl border border-border overflow-hidden mb-8 group cursor-pointer"
            >
              <div className="grid lg:grid-cols-2">
                <div className={`h-64 lg:h-auto bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                  <div className="text-center">
                    <span className="text-6xl font-bold font-display text-white/10">TAMG</span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">Featured</span>
                    <div className="flex items-center gap-1 text-xs text-text-dim">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-text-dim">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold font-display text-text mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-muted leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                    Lesen
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}

        {/* Post grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {posts.filter((p) => !p.featured).map((post) => (
            <StaggerItem key={post.id}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl border border-border overflow-hidden group cursor-pointer h-full flex flex-col"
              >
                <div className={`h-48 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                  <span className="text-4xl font-bold font-display text-white/10">{post.id.split('-')[0].toUpperCase()}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1 text-xs text-text-dim">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-text-dim">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-dim leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 bg-surface-light border border-border rounded text-text-dim">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                    Lesen
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
