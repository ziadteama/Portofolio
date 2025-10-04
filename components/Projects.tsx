'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getFeaturedProjects } from '@/data/projects';

export default function Projects() {
  const projects = getFeaturedProjects();
  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="space-y-8">
          {projects.map((p) => (
            <Link key={p.id} href={`/projects/${p.slug}`} className="block">
              <div className={`glass-card p-6 border-2 ${p.borderClass}`}>
                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-slate-400">{p.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/projects" className="px-8 py-4 bg-sport-blue rounded-lg inline-block">View All</Link>
        </div>
      </div>
    </section>
  );
}
