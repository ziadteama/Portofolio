'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Dumbbell, Monitor, Server, Smartphone } from 'lucide-react';

export default function About() {
  const identities = [
    {
      icon: Code2,
      title: 'Software Engineer',
      description: 'Building production systems across platforms — web apps, desktop applications, and mobile solutions. Not limited to just browsers.',
      color: '#00d4ff',
      colorClass: 'text-sport-blue',
      bgClass: 'bg-sport-blue/10',
    },
    {
      icon: Cpu,
      title: 'Systems Developer',
      description: 'Working with embedded systems and IoT solutions using C/C++. Implemented systems currently running in production environments.',
      color: '#00ff88',
      colorClass: 'text-sport-green',
      bgClass: 'bg-sport-green/10',
    },
    {
      icon: Dumbbell,
      title: 'Athlete & Problem Solver',
      description: 'Endurance sports taught me discipline and persistence. I bring the same structured approach to solving complex technical challenges.',
      color: '#ff6b35',
      colorClass: 'text-sport-orange',
      bgClass: 'bg-sport-orange/10',
    },
  ];

  const techSkills = [
    { icon: Monitor, name: 'Web Development', level: 90 },
    { icon: Server, name: 'Backend Systems', level: 85 },
    { icon: Smartphone, name: 'Desktop & Mobile', level: 80 },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-sport-blue font-sport text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold">
            Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 sm:mb-6">
            Software Engineer.<br className="md:hidden" /> Systems Developer.<br className="md:hidden" /> Problem Solver.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-4">
            I build real software that runs in production. From full-stack web apps to embedded systems — 
            I&apos;ve deployed solutions that people and businesses use every day.
          </p>
        </motion.div>

        {/* Identity Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {identities.map((identity, index) => (
            <motion.div
              key={identity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 sm:p-8 group cursor-pointer"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${identity.bgClass} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                <identity.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${identity.colorClass}`} />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{identity.title}</h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{identity.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Development Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 sm:p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                <span className="text-sport-orange">Production-Ready</span> Code
              </h3>
              <p className="text-sm sm:text-base text-slate-400 mb-4 sm:mb-6 leading-relaxed">
                I don&apos;t just write code — I build systems that scale. My experience ranges from web applications 
                handling real users to embedded systems running 24/7 in production environments.
              </p>
              <ul className="space-y-3">
                {[
                  'Deployed systems serving real customers',
                  'Full-stack development with modern frameworks',
                  'Embedded & IoT solutions in production',
                  'Focus on reliability and performance',
                ].map((lesson, index) => (
                  <motion.li
                    key={lesson}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-sm sm:text-base text-slate-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-sport-orange" />
                    {lesson}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tech Proficiency Meters */}
            <div className="space-y-6">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-sport-blue" />
                      <span className="font-sport uppercase text-sm tracking-wider">{skill.name}</span>
                    </div>
                    <span className="text-sport-blue font-bold">{skill.level}%</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      style={{
                        height: '100%',
                        background: 'linear-gradient(to right, #00d4ff, #00ff88)',
                      }}
                      initial={{ width: '0%' }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
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
