'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      name: 'Web Development',
      color: 'sport-blue',
      skills: [
        { name: 'React / Next.js', level: 92, experience: '2+ years' },
        { name: 'TypeScript', level: 88, experience: '1.5+ years' },
        { name: 'TailwindCSS', level: 95, experience: '2+ years' },
        { name: 'Express.js / Node.js', level: 85, experience: '2+ years' },
      ],
    },
    {
      name: 'Embedded & Systems',
      color: 'sport-green',
      skills: [
        { name: 'C / C++', level: 90, experience: '3+ years' },
        { name: 'Java', level: 82, experience: '2+ years' },
        { name: 'Python', level: 88, experience: '3+ years' },
        { name: 'Embedded Systems', level: 78, experience: '1+ years' },
      ],
    },
    {
      name: 'Data & Databases',
      color: 'sport-orange',
      skills: [
        { name: 'PostgreSQL', level: 85, experience: '2+ years' },
        { name: 'Pandas / NumPy', level: 80, experience: '2+ years' },
        { name: 'Scikit-learn', level: 75, experience: '1+ years' },
        { name: 'Data Analysis', level: 82, experience: '2+ years' },
      ],
    },
  ];

  const tools = [
    'Git / GitHub',
    'VS Code',
    'Linux',
    'Docker',
    'Postman',
    'Figma',
    'JIRA',
    'Bootstrap',
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sport-green font-sport text-sm uppercase tracking-[0.3em] font-semibold">
            Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Skills & <span className="text-sport-green">Expertise</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A comprehensive tech stack built through real-world projects and continuous learning.
          </p>
        </motion.div>

        {/* Skill Categories - Energy Bar Style */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-card p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`h-1 w-12 bg-${category.color} rounded-full`} />
                <h3 className="text-2xl md:text-3xl font-bold">{category.name}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="group"
                  >
                    {/* Skill Info */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-sport text-lg">{skill.name}</span>
                        <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                          {skill.experience}
                        </span>
                      </div>
                      <motion.span
                        className={`text-${category.color} font-bold text-xl font-sport`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 + 0.5 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    {/* Energy Bar */}
                    <div className="relative h-4 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50">
                      {/* Background glow */}
                      <motion.div
                        className={`absolute inset-0 bg-${category.color}/10`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      />
                      
                      {/* Fill bar */}
                      <motion.div
                        className={`h-full relative overflow-hidden`}
                        style={{
                          background: `linear-gradient(90deg, var(--${category.color}), var(--${category.color}))`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: skillIndex * 0.1 + 0.3,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: 'linear',
                          }}
                        />
                      </motion.div>

                      {/* Segments (for visual effect) */}
                      <div className="absolute inset-0 flex">
                        {[...Array(10)].map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 border-r border-slate-900/30"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg font-sport text-sm hover:border-sport-blue hover:bg-sport-blue/10 transition-all cursor-pointer"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
