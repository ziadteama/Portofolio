'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Swimming ripple effect */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Cycling track lines */}
        <motion.div
          className="absolute bottom-40 right-20 w-96 h-1"
          style={{
            background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
          }}
          animate={{
            x: [-200, 200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Running track effect */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-0.5"
          style={{
            background: 'linear-gradient(90deg, transparent, #00ff88, transparent)',
          }}
          animate={{
            x: [-300, 300],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'linear',
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="text-sport-blue font-sport text-sm md:text-base uppercase tracking-[0.3em] font-semibold">
                Engineer • Developer • Triathlete
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-text"
            >
              Always in
              <br />
              Motion.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-slate-300 font-body max-w-xl leading-relaxed"
            >
              Electrical Engineering student with a passion for building innovative software solutions. 
              From embedded systems to full-stack web apps, I turn ideas into reality with code and endurance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-sport relative z-10"
              >
                View Projects
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 font-sport text-sm font-bold uppercase tracking-wider rounded-lg border-2 border-sport-blue text-sport-blue hover:bg-sport-blue hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-6 pt-8"
            >
              {[
                { icon: Github, href: 'https://github.com/ziadteama', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full border border-slate-700 hover:border-sport-blue transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-sport-blue transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glowing gradient border effect */}
              <motion.div
                className="absolute -inset-4 rounded-3xl opacity-75 blur-2xl"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #00ff88, #ff6b35)',
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              {/* Photo container */}
              <div className="relative glass-card p-2 overflow-hidden">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                  {/* Placeholder for your professional photo */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 mx-auto rounded-full bg-sport-gradient opacity-20" />
                      <p className="text-slate-500 font-body">
                        Add your professional photo
                        <br />
                        <span className="text-xs">Recommended: 600x800px</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Uncomment and update when you have your photo */}
                  {/* <Image
                    src="/images/profile.jpg"
                    alt="Ziad Teama - Engineer, Developer, Triathlete"
                    fill
                    className="object-cover"
                    priority
                  /> */}
                </div>

                {/* Stats overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-6 left-6 right-6 glass-card p-4 space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-sport uppercase tracking-wider text-slate-400">Performance</span>
                    <span className="text-sport-green text-sm font-bold">Elite</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-2xl font-sport text-sport-blue">10+</div>
                      <div className="text-xs text-slate-400">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-sport text-sport-green">8</div>
                      <div className="text-xs text-slate-400">Tech Stack</div>
                    </div>
                    <div>
                      <div className="text-2xl font-sport text-sport-orange">3</div>
                      <div className="text-xs text-slate-400">Sports</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-sport uppercase tracking-wider text-slate-500">Scroll</span>
          <ChevronDown className="w-6 h-6 text-sport-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
}
