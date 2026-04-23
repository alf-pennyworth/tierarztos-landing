import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Leaf, Github, Twitter, Linkedin, Heart, ArrowUpRight } from 'lucide-react'

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
    <footer className="relative border-t border-cream-300/10 bg-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-forest-700 border border-forest-600 flex items-center justify-center group-hover:bg-forest-600 transition-colors">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              </div>
              <span className="text-xl font-bold font-display text-cream-100 tracking-tight">TierarztOS</span>
            </Link>
            <p className="text-sm text-cream-400 leading-relaxed max-w-sm mb-4 sm:mb-6">
              The future of veterinary practice management. Built with AI, designed for veterinarians, made in Germany.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-forest-800 border border-cream-300/10 flex items-center justify-center text-cream-400 hover:text-amber-400 hover:border-amber-500/30 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-cream-300 uppercase tracking-wider mb-3 sm:mb-4">{title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-sm text-cream-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
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
        <div className="border-t border-cream-300/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-cream-500">
            © {new Date().getFullYear()} TierarztOS. All rights reserved.
          </p>
          <p className="text-xs text-cream-500 flex items-center gap-1.5">
            Crafted with <Heart className="w-3 h-3 text-forest-200" /> in Berlin
          </p>
        </div>
      </div>
    </footer>
  )
}
