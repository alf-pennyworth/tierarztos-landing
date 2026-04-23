import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Technology', href: '/tech' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Demo', href: '/demo' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'glass border-b border-cream-300/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-forest-700 border border-forest-600 flex items-center justify-center group-hover:bg-forest-600 transition-colors">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              </div>
              <span className="text-lg sm:text-xl font-bold font-display text-cream-100 tracking-tight">
                TierarztOS
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    location.pathname === link.href
                      ? 'text-amber-400'
                      : 'text-cream-400 hover:text-cream-100'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-amber-500/10 rounded-lg border border-amber-500/20"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/auth"
                className="text-sm font-medium text-cream-400 hover:text-cream-100 transition-colors px-4 py-2"
              >
                Login
              </Link>
              <Link
                to="/auth?signup=true"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-forest-900 font-semibold text-sm rounded-xl hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              >
                <Zap className="w-4 h-4" />
                Start free
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-cream-400 hover:text-cream-100 transition-colors min-h-[44px] min-w-[44px]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-forest-900/98 backdrop-blur-xl pt-20 px-4 sm:px-6 lg:hidden safe-area"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={`block text-lg font-medium py-3 border-b border-cream-300/10 ${
                      location.pathname === link.href
                        ? 'text-amber-400'
                        : 'text-cream-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  to="/auth"
                  className="text-center text-lg font-medium text-cream-400 py-3 border border-cream-300/10 rounded-xl"
                >
                  Login
                </Link>
                <Link
                  to="/auth?signup=true"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-amber-500 text-forest-900 font-semibold text-lg rounded-xl"
                >
                  <Zap className="w-5 h-5" />
                  Start free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
