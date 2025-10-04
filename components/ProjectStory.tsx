'use client';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { AlertCircle, CheckCircle, Lightbulb, Award, ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectStoryProps {
  project: Project;
}

export default function ProjectStory({ project }: ProjectStoryProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link 
          href="/#projects"
          className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Projects</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-${project.color}/20 to-transparent rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-${project.color}/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000`} />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className={`px-4 py-2 ${project.bgClass} ${project.borderClass} border rounded-full text-sm font-medium ${project.colorClass}`}>
              {project.category}
            </span>
            <span className="text-slate-400 text-sm">{project.duration} • {project.year}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent"
          >
            {project.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 mb-8 max-w-3xl"
          >
            {project.shortDescription}
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-${project.color}/20 to-${project.color}/10 hover:from-${project.color}/30 hover:to-${project.color}/20 ${project.borderClass} border rounded-lg transition-all`}
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="px-6 pb-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className={`relative rounded-2xl overflow-hidden border ${project.borderClass} ${project.glowClass} shadow-2xl`}>
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              {/* Placeholder - Replace with actual images */}
              <p className="text-slate-500 text-sm">Hero Image: {project.images.hero}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* The Problem Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-red-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/30">
                <AlertCircle className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">The Problem</h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-red-300">
              {project.problem.title}
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              {project.problem.description}
            </p>
          </motion.div>

          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-4"
          >
            {project.problem.painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start gap-3 p-4 bg-red-950/20 border border-red-900/30 rounded-xl"
              >
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <p className="text-slate-300">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-green-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/30">
                <Lightbulb className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">The Solution</h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-green-300">
              {project.solution.title}
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              {project.solution.description}
            </p>
          </motion.div>

          {/* Approach Steps */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {project.solution.approach.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start gap-4 p-4 bg-green-950/20 border border-green-900/30 rounded-xl"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex-shrink-0">
                  <span className="text-green-400 font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-slate-300 pt-1">{step}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Visual Showcase
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {project.images.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className={`relative rounded-xl overflow-hidden border ${project.borderClass} ${project.glowClass} shadow-xl hover:scale-105 transition-transform`}
              >
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  {/* Placeholder - Replace with actual images */}
                  <p className="text-slate-500 text-sm">Screenshot {index + 1}: {screenshot}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-blue-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 ${project.bgClass} rounded-xl border ${project.borderClass}`}>
                <Award className={`w-6 h-6 ${project.colorClass}`} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">{project.highlights.title}</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {project.highlights.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className={`p-6 bg-slate-800/30 backdrop-blur-sm border ${project.borderClass} rounded-2xl hover:${project.bgClass} transition-all group`}
              >
                <div className={`w-12 h-12 ${project.bgClass} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <CheckCircle className={`w-6 h-6 ${project.colorClass}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Achievements */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Impact & Results
          </motion.h2>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12"
          >
            {Object.entries(project.stats).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className={`p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border ${project.borderClass} rounded-2xl text-center`}
              >
                <div className={`text-4xl md:text-5xl font-bold ${project.colorClass} mb-2`}>
                  {value}
                </div>
                <div className="text-slate-400 capitalize">{key}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            {project.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className={`flex items-center gap-3 p-4 bg-slate-800/30 border ${project.borderClass} rounded-xl`}
              >
                <CheckCircle className={`w-5 h-5 ${project.colorClass} flex-shrink-0`} />
                <span className="text-slate-300">{achievement}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-8 md:p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border ${project.borderClass} rounded-2xl text-center`}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Interested in this project?</h3>
            <p className="text-lg text-slate-300 mb-8">
              Let&apos;s discuss how I can build something similar for you
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all"
                >
                  <Github className="w-5 h-5" />
                  <span>View Source Code</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-${project.color}/20 to-${project.color}/10 hover:from-${project.color}/30 hover:to-${project.color}/20 ${project.borderClass} border rounded-xl transition-all`}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}
              <Link
                href="/#contact"
                className={`px-8 py-4 bg-gradient-to-r ${project.bgClass} ${project.borderClass} border rounded-xl hover:scale-105 transition-all font-semibold`}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
