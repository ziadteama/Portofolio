'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const NAVIGATION_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'portfolio', label: 'Work', href: '#portfolio' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const NAVBAR_HEIGHT = 64;

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = NAVIGATION_LINKS.map(link => link.id);
      const current = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        const offset = NAVBAR_HEIGHT + 20;
        return rect.top <= offset && rect.bottom >= offset;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigationStyles = isScrolled
    ? 'bg-[rgba(17,17,17,0.94)] backdrop-blur-xl border-b border-white/8'
    : 'bg-transparent';

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navigationStyles}`}
    >
      {/* Navigation container with modern spacing system */}
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        
        {/* Left section: Navigation links with proper spacing */}
        <div className="flex flex-1 items-center">
          {/* Mobile menu toggle with optimized spacing */}
          <motion.button
            type="button"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="relative -ml-2 flex h-10 w-10 items-center justify-center rounded-lg border border-white/8 bg-white/[0.03] p-2 md:hidden"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
            data-cursor="pointer"
          >
            <div className="flex w-4 flex-col items-center justify-center space-y-1">
              <motion.span
                animate={{ 
                  rotate: isMobileMenuOpen ? 45 : 0, 
                  y: isMobileMenuOpen ? 2 : 0,
                  width: isMobileMenuOpen ? '100%' : '75%'
                }}
                className="h-0.5 w-full bg-white/90"
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1, scaleX: isMobileMenuOpen ? 0 : 1 }}
                className="h-0.5 w-full bg-white/90"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={{ 
                  rotate: isMobileMenuOpen ? -45 : 0, 
                  y: isMobileMenuOpen ? -2 : 0,
                  width: isMobileMenuOpen ? '100%' : '50%'
                }}
                className="h-0.5 w-3/4 bg-white/90"
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          </motion.button>
          
          {/* Desktop navigation with reference-based spacing */}
          <nav className="ml-10 hidden items-center md:flex">
            <div className="flex items-center space-x-1">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.button
                    key={link.id}
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className={`relative rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive 
                        ? 'text-white bg-white/[0.08]' 
                        : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]'
                    }`}
                    whileHover={{ y: -0.5 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor="pointer"
                  >
                    <span className="relative z-10 uppercase tracking-[0.025em] font-medium">
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 rounded-md bg-white/[0.08]"
                        transition={{ 
                          type: "spring", 
                          stiffness: 380, 
                          damping: 30,
                          duration: 0.2
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Center: Brand with balanced spacing */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.button
            type="button"
            onClick={() => scrollToSection('#home')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.15em] text-white/95 transition-all duration-200 hover:text-white"
            data-cursor="pointer"
          >
            ZIAD TEAMA
          </motion.button>
        </div>
        
        {/* Right section: CTA with reference spacing */}
        <div className="flex flex-1 justify-end">
          <motion.button
            type="button"
            onClick={() => scrollToSection('#contact')}
            whileHover={{ scale: 1.02, y: -0.5 }}
            whileTap={{ scale: 0.98 }}
            className="hidden items-center rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition-all duration-200 hover:border-white/25 hover:bg-white/[0.1] hover:text-white md:inline-flex"
            data-cursor="pointer"
          >
            <span className="uppercase tracking-[0.05em]">Let&apos;s Talk</span>
            <svg 
              className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu with improved spacing and interaction */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              duration: 0.25, 
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: 0.15 }
            }}
            className="border-t border-white/10 bg-[rgba(17,17,17,0.97)] backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 pb-6 pt-4 sm:px-6">
              <nav className="space-y-1">
                {NAVIGATION_LINKS.map((link, index) => (
                  <motion.button
                    key={link.id}
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: index * 0.05,
                        duration: 0.2,
                        ease: [0.25, 0.1, 0.25, 1]
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      x: -20,
                      transition: { 
                        delay: (NAVIGATION_LINKS.length - index - 1) * 0.03,
                        duration: 0.15
                      }
                    }}
                    className="group flex w-full items-center rounded-lg px-3 py-3 text-left transition-all duration-200 hover:bg-white/[0.05]"
                    whileTap={{ scale: 0.98 }}
                    data-cursor="pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex h-2 w-2 items-center justify-center">
                        <div className="h-1 w-1 rounded-full bg-white/40 transition-all duration-200 group-hover:h-2 group-hover:w-2 group-hover:bg-white/80" />
                      </div>
                      <span className="text-base font-medium uppercase tracking-[0.025em] text-gray-300 transition-colors duration-200 group-hover:text-white">
                        {link.label}
                      </span>
                    </div>
                    <svg 
                      className="ml-auto h-4 w-4 text-gray-500 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-gray-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                ))}
              </nav>
              
              {/* Mobile CTA */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <motion.button
                  type="button"
                  onClick={() => scrollToSection('#contact')}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: NAVIGATION_LINKS.length * 0.05 + 0.1 }
                  }}
                  className="flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-medium uppercase tracking-[0.05em] text-white/90 backdrop-blur-sm transition-all duration-200 hover:border-white/25 hover:bg-white/[0.1] hover:text-white"
                  whileTap={{ scale: 0.98 }}
                  data-cursor="pointer"
                >
                  Let&apos;s Talk
                  <svg 
                    className="ml-2 h-4 w-4 transition-transform duration-200" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}