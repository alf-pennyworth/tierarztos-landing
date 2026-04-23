import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PawPrint, Github, Twitter, Linkedin, Heart, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const links = {
    Product: [
      { label: 'Features', href: '/features' },
      { label: 'Technology', href: '/tech' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Blog', href: '/blog' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '/demo' },
    ],
    Legal: [
      { label: 'Imprint', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  }

  const socials = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="relative border-t border-border bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <PawPrint className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold font-display text-text tracking-tight">TierarztOS</span>
            </Link>
            <p className="text-sm text-text-dim leading-relaxed max-w-sm mb-6">
              The future of veterinary practice management. Built with AI, designed for veterinarians, made in Germany.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-dim hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-sm text-text-dim hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      {item.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-dim">
            © {new Date().getFullYear()} TierarztOS. All rights reserved.
          </p>
          <p className="text-xs text-text-dim flex items-center gap-1.5">
            Crafted with <Heart className="w-3 h-3 text-secondary" /> in Berlin
          </p>
        </div>
      </div>
    </footer>
  )
}
