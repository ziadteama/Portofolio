'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Award } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Supermarket Billing System',
      description: 'Full-featured Windows application for managing supermarket operations with inventory tracking, billing, and reporting.',
      tech: ['C#', 'WinForms', 'SQL Server', '.NET'],
      category: 'Desktop Application',
      stats: { users: '500+', performance: '98%', rating: '4.8/5' },
      github: 'https://github.com/ziadteama',
      demo: null,
      color: 'sport-blue',
      checkpoint: 1,
    },
    {
      id: 2,
      title: 'University Management System',
      description: 'Comprehensive multi-role system for managing students, faculty, courses, and grades with advanced authentication.',
      tech: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
      category: 'Enterprise System',
      stats: { roles: '5', modules: '12', uptime: '99.9%' },
      github: 'https://github.com/ziadteama',
      demo: null,
      color: 'sport-green',
      checkpoint: 2,
    },
    {
      id: 3,
      title: 'Book Rating Platform',
      description: 'Dynamic web app for book reviews and ratings with user authentication, search functionality, and real-time updates.',
      tech: ['Express.js', 'EJS', 'MongoDB', 'Node.js'],
      category: 'Full-Stack Web App',
      stats: { books: '1000+', reviews: '5000+', users: '200+' },
      github: 'https://github.com/ziadteama',
      demo: 'https://example.com',
      color: 'sport-orange',
      checkpoint: 3,
    },
    {
      id: 4,
      title: 'React Dashboard',
      description: 'Modern, responsive admin dashboard with data visualization, real-time analytics, and REST API integration.',
      tech: ['React', 'TypeScript', 'Chart.js', 'REST API'],
      category: 'Frontend Application',
      stats: { components: '50+', charts: '15', responsive: '100%' },
      github: 'https://github.com/ziadteama',
      demo: 'https://example.com',
      color: 'sport-blue',
      checkpoint: 4,
    },
    {
      id: 5,
      title: 'Data Analysis Pipeline',
      description: 'Automated data processing and machine learning pipeline for predictive analytics using Python libraries.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'PostgreSQL'],
      category: 'Data Science',
      stats: { accuracy: '94%', datasets: '10+', models: '5' },
      github: 'https://github.com/ziadteama',
      demo: null,
      color: 'sport-green',
      checkpoint: 5,
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Race Track Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <path
            d="M 100 500 Q 300 100, 500 500 T 900 500"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-sport-blue"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sport-orange font-sport text-sm uppercase tracking-[0.3em] font-semibold">
            Project Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Race <span className="text-sport-orange">Checkpoints</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Each project is a checkpoint in my development journey. Click to explore the tech, challenges, and achievements.
          </p>
        </motion.div>

        {/* Projects Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sport-blue via-sport-green to-sport-orange" />

          {/* Projects */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Checkpoint Marker */}
                <motion.div
                  className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-${project.color} items-center justify-center z-20 border-4 border-slate-950`}
                  whileHover={{ scale: 1.2 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                >
                  <span className="font-sport font-bold text-xl text-white">
                    {project.checkpoint}
                  </span>
                </motion.div>

                {/* Project Card */}
                <motion.div
                  className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'} group`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glass-card p-8 hover:border-${project.color} transition-all duration-300">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-sport uppercase tracking-wider px-3 py-1 rounded-full bg-${project.color}/10 text-${project.color} border border-${project.color}/30`}>
                        {project.category}
                      </span>
                      {project.stats.rating && (
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Award className="w-4 h-4" />
                          <span className="text-sm font-bold">{project.stats.rating}</span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-${project.color} transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded text-sm font-sport hover:border-${project.color} transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-900/50 rounded-lg">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className={`text-lg font-bold text-${project.color}`}>{value}</div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-4 py-2 bg-${project.color}/10 border border-${project.color}/30 rounded-lg hover:bg-${project.color} hover:text-white transition-all font-sport text-sm`}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-4 py-2 bg-${project.color}/10 border border-${project.color}/30 rounded-lg hover:bg-${project.color} hover:text-white transition-all font-sport text-sm`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-slate-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/ziadteama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sport-blue to-sport-green rounded-lg font-sport font-bold hover:shadow-lg hover:shadow-sport-blue/50 transition-all hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
