'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, align = 'center', className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-1">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-500/50" />
        <div className="h-1 w-1 rounded-full bg-indigo-500" />
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-500/50" />
      </div>
    </motion.div>
  );
}
