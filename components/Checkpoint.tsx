'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Link from 'next/link';

interface CheckpointProps {
  number: number;
  color: string;
  slug: string;
}

export default function Checkpoint({ number, color, slug }: CheckpointProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="hidden lg:flex w-16 h-16 rounded-full items-center justify-center border-4 border-slate-950 group cursor-pointer relative"
      style={{ backgroundColor: color }}
    >
      {/* Pulse rings */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      
      {/* Number */}
      <span className="font-sport font-bold text-2xl text-white relative z-10">
        {number}
      </span>

      {/* Hover icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        whileHover={{ rotate: 180 }}
      >
        <Zap className="w-8 h-8 text-white" fill="white" />
      </motion.div>
    </Link>
  );
}
