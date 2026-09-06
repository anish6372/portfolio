'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/data/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-zinc-200 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`font-black text-2xl tracking-tighter transition-colors ${isScrolled ? 'text-[#5A7EE2]' : 'text-zinc-900 md:text-white lg:text-[#5A7EE2]'}`}
          >
            {SITE_CONFIG.name.split(' ')[0].toUpperCase()}
            <span className="text-[#F9E13E]">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-bold uppercase tracking-widest hover:text-[#F9E13E] transition-colors duration-200 ${isScrolled ? 'text-zinc-600' : 'text-zinc-500 md:text-white/80'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Anish_Kumar_Panda_Resume.pdf"
              className="flex items-center gap-2 text-sm text-zinc-900 bg-[#F9E13E] hover:bg-[#E5D036] px-6 py-2.5 rounded-full font-bold uppercase tracking-widest transition-transform hover:scale-105"
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`md:hidden transition-colors ${isScrolled ? 'text-zinc-900' : 'text-zinc-900 md:text-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24"
          >
            <div className="flex flex-col items-center justify-start h-full gap-8 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-4xl font-black text-zinc-900 hover:text-[#5A7EE2] uppercase tracking-tighter transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Anish_Kumar_Panda_Resume.pdf"
                className="flex items-center justify-center w-full gap-2 text-zinc-900 bg-[#F9E13E] px-6 py-4 rounded-full font-bold uppercase tracking-widest mt-8"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
