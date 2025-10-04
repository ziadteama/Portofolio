'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Code2 } from 'lucide-react';
import Link from 'next/link';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <motion.div
        whileHover={{ scale: 1.02, y: -8 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-xl mx-auto lg:mx-0"
      >
        {/* Card */}
        <div 
          className={`glass-card p-6 border-2 ${project.borderClass} hover:border-opacity-100 transition-all duration-300 relative z-10`} 
          style={{ boxShadow: `0 20px 60px -15px ${project.color}40` }}
        >
          {/* Mobile checkpoint badge */}
          <div className="lg:hidden flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-sport font-bold text-white"
              style={{ backgroundColor: project.color }}
            >
              {project.checkpoint}
            </div>
            <span className={`text-xs uppercase px-3 py-1 rounded-full ${project.bgClass} ${project.colorClass} border ${project.borderClass}`}>
              {project.category}
            </span>
          </div>

          {/* Desktop category badge */}
          <div className="hidden lg:block mb-4">
            <span className={`text-xs uppercase px-3 py-1 rounded-full ${project.bgClass} ${project.colorClass} border ${project.borderClass}`}>
              {project.category}
            </span>
          </div>

          {/* Screenshot thumbnail */}
          <div className={`relative mb-4 rounded-xl overflow-hidden border-2 ${project.borderClass} group-hover:border-opacity-100`}>
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
              {/* Placeholder icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Code2 className={`w-12 h-12 ${project.colorClass} opacity-30`} />
                </motion.div>
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              
              {/* Hover effect */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all">
                <div className="text-center">
                  <Zap className={`w-10 h-10 ${project.colorClass} mx-auto mb-2`} fill="currentColor" />
                  <span className="text-white font-bold">View Story</span>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className={`text-xl sm:text-2xl font-bold mb-3 group-hover:${project.colorClass} transition-colors`}>
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Tech stack - compact */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className={`px-2 py-1 bg-slate-800/80 border border-slate-700/50 rounded text-xs ${project.colorClass}`}
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-500">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          {/* Stats - compact */}
          <div className="grid grid-cols-3 gap-2 p-3 bg-slate-900/50 rounded-lg mb-3">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className={`text-lg font-bold ${project.colorClass}`}>{value}</div>
                <div className="text-[10px] text-slate-500 uppercase">{key}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`flex items-center gap-2 text-sm font-semibold ${project.colorClass}`}>
            <span>Explore Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Glow effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
          style={{ backgroundColor: project.color }}
        />
      </motion.div>
    </Link>
  );
}
