'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold font-sport cursor-pointer group py-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white group-hover:text-sport-blue transition-colors">ZT</span>
            <span className="text-sport-blue group-hover:text-white transition-colors">.</span>
          </motion.button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.text}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="font-sport text-sm uppercase tracking-wider text-slate-300 hover:text-sport-blue transition-colors relative group py-2 px-1"
                >
                  {link.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sport-blue group-hover:w-full transition-all duration-300" />
                </button>
              </motion.li>
            ))}
            
            {/* CTA Button */}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-sport-sm"
              >
                Hire Me
              </button>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-sport-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-slate-800/50"
          >
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left font-sport text-sm uppercase tracking-wider text-slate-300 hover:text-sport-blue transition-colors py-2"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full btn-sport-sm"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};