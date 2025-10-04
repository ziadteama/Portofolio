'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getFeaturedProjects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import Checkpoint from './Checkpoint';

export default function Projects() {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <motion.path
            d="M 100 500 Q 300 100, 500 500 T 900 500"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="50%" stopColor="#00ff88" />
              <stop offset="100%" stopColor="#ff6b35" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Background gradient blobs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-sport-blue/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-sport-green/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-sport-orange font-sport text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold">
            Project Journey
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
            Featured <span className="text-sport-orange">Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Each project is a checkpoint in my journey. Click to explore the full story.
          </p>
        </motion.div>

        {/* Timeline with checkpoints */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 z-0">
            <div className="w-full h-full bg-gradient-to-b from-sport-blue via-sport-green to-sport-orange opacity-30" />
            {/* Moving pulse */}
            <motion.div
              className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-sport-blue to-transparent"
              animate={{ y: ['0%', '2000%', '0%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Projects */}
          <div className="space-y-20 sm:space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Desktop: Cards alternate sides with checkpoint in center */}
                <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-12 lg:items-center">
                  {/* Left column - shows card on odd indices */}
                  <div className="flex justify-end">
                    {index % 2 !== 0 && <ProjectCard project={project} />}
                  </div>

                  {/* Center checkpoint */}
                  <div className="flex-shrink-0">
                    <Checkpoint number={project.checkpoint} color={project.color} slug={project.slug} />
                  </div>

                  {/* Right column - shows card on even indices */}
                  <div className="flex justify-start">
                    {index % 2 === 0 && <ProjectCard project={project} />}
                  </div>
                </div>

                {/* Mobile: Simple stacked layout */}
                <div className="lg:hidden">
                  <ProjectCard project={project} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 sm:mt-24"
        >
          <p className="text-slate-400 mb-6">Discover all my projects and their stories</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sport-blue to-sport-green rounded-lg font-bold hover:shadow-xl hover:shadow-sport-blue/50 transition-all group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
