import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-50/95 backdrop-blur-xl shadow-[0_2px_24px_rgba(255,143,171,0.12)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 py-4">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="relative flex h-11 w-11 items-center justify-center bg-gradient-to-br from-blush-300 to-blush-500 rounded-full transition-transform group-hover:scale-105">
                <Heart className="h-5 w-5 text-white fill-white" strokeWidth={0} />
                <span className="absolute inset-0 rounded-full border border-gold-300/50" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif font-600 text-ink-800 text-xl tracking-tight">
                  Élysée
                </span>
                <span className="font-sans text-[10px] tracking-[0.3em] text-gold-500 uppercase">
                  Weddings
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-ink-700/80 hover:text-blush-500 transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gold-400 rounded-full transition-all duration-300 group-hover:w-6" />
                </a>
              ))}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blush-400 to-blush-500 hover:from-blush-500 hover:to-blush-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_4px_20px_rgba(255,107,149,0.35)]"
              >
                Plan Your Wedding
              </a>
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden flex h-10 w-10 items-center justify-center text-ink-800"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-900/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-cream-50 flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-blush-200/50">
                <span className="font-serif font-600 text-lg text-ink-800">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="h-10 w-10 flex items-center justify-center text-ink-700 hover:text-blush-500"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                    className="flex items-center justify-between py-3.5 text-lg font-serif text-ink-800 hover:text-blush-500 border-b border-blush-100/60 transition-colors"
                  >
                    {link.label}
                    <Heart className="h-3.5 w-3.5 text-blush-300" />
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto p-6">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blush-400 to-blush-500 text-white font-semibold py-3.5 rounded-full transition-all hover:shadow-[0_4px_20px_rgba(255,107,149,0.35)]"
                >
                  Plan Your Wedding
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
