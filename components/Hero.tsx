'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-dark-900 pt-32 pb-24">
      {/* Energetic background layers */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute -top-32 -left-16 h-96 w-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0, 212, 255, 0.28) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(255, 107, 53, 0.22) 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1.3, 1.1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 left-0 h-px w-full"
          style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }}
          animate={{ x: ['-10%', '10%', '-10%'], opacity: [0.15, 0.45, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] xl:gap-24">
            {/* Left column: introduction */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex w-fit items-center gap-3 rounded-full border border-sport-blue/40 bg-slate-900/60 px-5 py-2 backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-sport-green animate-pulse" />
                <span className="font-sport text-xs uppercase tracking-[0.4em] text-slate-300">
                  Engineer • Developer • Triathlete
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="space-y-6"
              >
                <h1 className="hero-text leading-none">
                  Always in motion.
                </h1>
                <p className="font-body text-lg text-slate-300 md:text-xl md:leading-relaxed">
                  I’m Ziad Teama, an electrical engineering student obsessed with building high-performance software and embedded systems. Discipline from triathlon training fuels my drive to ship resilient, ambitious products—from automotive firmware to full-stack web apps.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex flex-wrap items-center gap-6"
              >
                <button onClick={() => scrollToSection('projects')} className="btn-sport">
                  View projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="rounded-lg border-2 border-sport-blue px-8 py-4 font-sport text-xs uppercase tracking-[0.35em] text-sport-blue transition-all duration-300 hover:-translate-y-1 hover:bg-sport-blue hover:text-dark-900"
                >
                  Get in touch
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="flex flex-wrap items-center gap-5"
              >
                {[{
                  icon: Github,
                  href: 'https://github.com/ziadteama',
                  label: 'GitHub',
                }, {
                  icon: Linkedin,
                  href: 'https://linkedin.com/in/yourprofile',
                  label: 'LinkedIn',
                }, {
                  icon: Mail,
                  href: 'mailto:your.email@example.com',
                  label: 'Email',
                }].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-300 transition-all hover:border-sport-blue hover:text-sport-blue"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="grid w-full gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 md:max-w-xl md:grid-cols-3"
              >
                {[{
                  value: '10+',
                  label: 'Projects Delivered',
                }, {
                  value: '5',
                  label: 'Tech Domains',
                }, {
                  value: '3',
                  label: 'Triathlon Disciplines',
                }].map(({ value, label }) => (
                  <div key={label} className="flex flex-col gap-1 text-center">
                    <span className="font-sport text-3xl text-sport-green">{value}</span>
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-500">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right column: visual identity */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-full max-w-xl">
                <div className="relative overflow-hidden rounded-[28px] border border-slate-800/60 bg-slate-900/70 p-4 shadow-[0px_0px_80px_rgba(0,212,255,0.15)]">
                  <div className="gear-rotate rounded-[22px] bg-slate-900/80 p-1">
                    <div className="relative h-full rounded-[18px] border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800/90">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-[18px]">
                        {/* Replace with your photo */}
                        <div
                          className="flex h-full w-full items-center justify-center bg-slate-900/60"
                          style={{ background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.18) 0%, rgba(0, 255, 136, 0.18) 50%, rgba(255, 107, 53, 0.18) 100%)' }}
                        >
                          <div className="flex flex-col items-center gap-4 text-center">
                            <div
                              className="flex h-32 w-32 items-center justify-center rounded-full text-5xl font-bold text-sport-blue"
                              style={{ background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.35) 0%, rgba(0, 255, 136, 0.35) 50%, rgba(255, 107, 53, 0.35) 100%)' }}
                            >
                              ZT
                            </div>
                            <p className="max-w-xs text-sm text-slate-400">
                              Drop <span className="text-sport-blue">profile.jpg</span> into the public folder to replace this placeholder.
                            </p>
                          </div>
                        </div>
                        {/*
                        <Image
                          src="/profile.jpg"
                          alt="Ziad Teama portrait"
                          fill
                          className="object-cover"
                          priority
                        />
                        */}
                      </div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <motion.div
                    className="absolute -right-8 top-10 w-40 rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-slate-200 shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <p className="font-sport text-lg text-sport-blue">Embedded</p>
                    <p className="text-xs text-slate-500">Automotive Systems • C/C++</p>
                  </motion.div>

                  <motion.div
                    className="absolute -left-6 bottom-10 flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-900/80 px-5 py-4"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                  >
                    <div className="h-10 w-10 rounded-full bg-sport-green/20" />
                    <div>
                      <p className="font-sport text-sm uppercase tracking-[0.3em] text-sport-green">VO2 Max</p>
                      <p className="text-xs text-slate-500">Endurance ready • Always training</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-sport uppercase tracking-[0.5em] text-slate-500">Scroll</span>
        <ChevronDown className="h-6 w-6 text-sport-blue" />
      </motion.button>
    </section>
  );
}
