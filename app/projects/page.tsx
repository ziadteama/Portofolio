'use client';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { ArrowRight, Calendar, Code2 } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent">
              All Projects
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A comprehensive showcase of my software engineering journey—from desktop applications to full-stack web platforms and data science pipelines.
            </p>
          </motion.div>

          {/* Project Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-6 mb-16"
          >
            <div className="px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <span className="text-3xl font-bold text-sport-blue">{projects.length}</span>
              <span className="text-slate-400 ml-2">Projects</span>
            </div>
            <div className="px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <span className="text-3xl font-bold text-sport-green">{projects.filter(p => p.featured).length}</span>
              <span className="text-slate-400 ml-2">Featured</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className={`group relative p-6 bg-slate-800/30 backdrop-blur-sm border ${project.borderClass} rounded-2xl hover:${project.bgClass} transition-all hover:scale-105 hover:-translate-y-2 h-full flex flex-col`}>
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-slate-900">
                        Featured
                      </div>
                    )}

                    {/* Thumbnail Placeholder */}
                    <div className={`relative mb-4 rounded-xl overflow-hidden border ${project.borderClass} bg-gradient-to-br from-slate-700 to-slate-800 aspect-video flex items-center justify-center`}>
                      <Code2 className={`w-12 h-12 ${project.colorClass} opacity-50`} />
                    </div>

                    {/* Category & Year */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 ${project.bgClass} ${project.borderClass} border rounded-full text-xs font-medium ${project.colorClass}`}>
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Stats Preview */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <div className="flex gap-3 text-xs text-slate-500">
                        {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
                          <div key={key}>
                            <span className={`font-bold ${project.colorClass}`}>{value}</span>
                            <span className="ml-1 capitalize">{key}</span>
                          </div>
                        ))}
                      </div>
                      <ArrowRight className={`w-4 h-4 ${project.colorClass} group-hover:translate-x-1 transition-transform`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">Want to work together?</h3>
            <p className="text-slate-400 mb-6">
              I&apos;m always open to discussing new projects and opportunities.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-sport-blue to-sport-green rounded-xl font-semibold hover:scale-105 transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
