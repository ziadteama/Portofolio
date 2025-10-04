'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20 pb-16 px-4 sm:px-6">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 -left-20 h-64 w-64 sm:h-96 sm:w-96 rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-64 w-64 sm:h-[400px] sm:w-[400px] rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(0, 255, 136, 0.4) 0%, transparent 70%)' }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5 sm:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-sport-blue/40 bg-slate-900/60 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur text-center"
            >
              <span className="h-2 w-2 rounded-full bg-sport-green animate-pulse" />
              <span className="font-sport text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-300">
                Engineer · Developer · Triathlete
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
                <span className="block text-white">Ziad Teama</span>
                <span className="block bg-gradient-to-r from-sport-blue via-sport-green to-sport-orange bg-clip-text text-transparent">
                  Always in motion.
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                Computer engineering student hunting for freelance and remote opportunities in software development. 
                Specialized in full-stack web applications with a solid foundation in IoT and embedded systems. 
                I bring the same relentless energy from triathlon training to shipping quality code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button onClick={() => scrollToSection('projects')} className="btn-sport">
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-lg border-2 border-sport-blue text-sport-blue font-sport text-xs uppercase tracking-wider hover:bg-sport-blue hover:text-slate-950 transition-all duration-300"
              >
                Get in Touch
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, href: 'https://github.com/ziadteama', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 hover:border-sport-blue hover:text-sport-blue transition-all"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-sport-blue/20 via-sport-green/20 to-sport-orange/20 blur-3xl rounded-full scale-105" />
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-800/50 bg-slate-900/30 backdrop-blur">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/profile.jpg"
                    alt="Ziad Teama - Engineer, Developer, Triathlete"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl"
              >
                <div className="flex gap-3 sm:gap-6">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-sport-blue font-sport">10+</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-sport-green font-sport">5</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">Tech Stacks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-sport-orange font-sport">3</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">Sports</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-sport uppercase tracking-widest text-slate-500">Scroll</span>
        <ChevronDown className="h-5 w-5 text-sport-blue" />
      </motion.button>
    </section>
  );
}
