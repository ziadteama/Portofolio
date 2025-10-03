'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Dumbbell, Bike, Waves } from 'lucide-react';

export default function About() {
  const identities = [
    {
      icon: Code2,
      title: 'Software Developer',
      description: 'Building full-stack web applications with React, Next.js, and Express.js. Passionate about clean code and user experience.',
      color: '#00d4ff',
      colorClass: 'text-sport-blue',
      bgClass: 'bg-sport-blue/10',
    },
    {
      icon: Cpu,
      title: 'Embedded Systems Engineer',
      description: 'Working with C/C++ on automotive systems. Interested in IoT, real-time systems, and hardware-software integration.',
      color: '#00ff88',
      colorClass: 'text-sport-green',
      bgClass: 'bg-sport-green/10',
    },
    {
      icon: Dumbbell,
      title: 'Triathlete',
      description: 'Committed to endurance sports: swimming, cycling, and running. Discipline from training translates to code.',
      color: '#ff6b35',
      colorClass: 'text-sport-orange',
      bgClass: 'bg-sport-orange/10',
    },
  ];

  const sports = [
    { icon: Waves, name: 'Swimming', level: 85 },
    { icon: Bike, name: 'Cycling', level: 90 },
    { icon: Dumbbell, name: 'Running', level: 88 },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent" />

      <div className="container mx-auto px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sport-blue font-sport text-sm uppercase tracking-[0.3em] font-semibold">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Engineer.<br className="md:hidden" /> Developer.<br className="md:hidden" /> Athlete.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A unique blend of technical expertise and athletic discipline. 
            I approach every project with the same dedication I bring to every race.
          </p>
        </motion.div>

        {/* Identity Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {identities.map((identity, index) => (
            <motion.div
              key={identity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl ${identity.bgClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <identity.icon className={`w-7 h-7 ${identity.colorClass}`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{identity.title}</h3>
              <p className="text-slate-400 leading-relaxed">{identity.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Triathlon Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="text-sport-orange">Triathlon</span> Mindset
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Training for triathlons has taught me invaluable lessons about persistence, 
                optimization, and continuous improvement — principles I apply to software development every day.
              </p>
              <ul className="space-y-3">
                {[
                  'Consistency builds mastery',
                  'Small optimizations compound over time',
                  'Mental toughness overcomes obstacles',
                  'Recovery is as important as effort',
                ].map((lesson, index) => (
                  <motion.li
                    key={lesson}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-sport-orange" />
                    {lesson}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Sport Performance Meters */}
            <div className="space-y-6">
              {sports.map((sport, index) => (
                <motion.div
                  key={sport.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <sport.icon className="w-5 h-5 text-sport-blue" />
                      <span className="font-sport uppercase text-sm tracking-wider">{sport.name}</span>
                    </div>
                    <span className="text-sport-blue font-bold">{sport.level}%</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-sport-blue to-sport-green"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${sport.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.15 + 0.3, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
