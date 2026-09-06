'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { PROJECTS } from '@/data/projects';
import { ExternalLink } from 'lucide-react';
import { GithubIcon as Github } from '@/components/ui/Icons';

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal delay={0.1}>
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center py-16 border-b border-zinc-200`}>
        
        {/* Image Side */}
        <div className="w-full md:w-1/2">
          <div className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 ${project.featured ? 'ring-4 ring-[#5A7EE2] ring-offset-4' : ''}`}>
            {project.image ? (
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#5A7EE2]/20 to-[#F9E13E]/20" />
            )}
            
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 left-4 bg-[#F9E13E] text-zinc-900 font-bold px-4 py-2 rounded-full text-xs uppercase tracking-widest shadow-lg">
                Featured Case Study
              </div>
            )}
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2">
          <div className="flex gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 leading-tight uppercase tracking-tighter">
            {project.title}
          </h3>
          
          <p className="text-zinc-600 mb-8 leading-relaxed">
            <strong className="text-zinc-900">Problem:</strong> {project.problem}
          </p>
          
          <p className="text-zinc-600 mb-8 leading-relaxed">
            <strong className="text-zinc-900">Solution:</strong> {project.solution}
          </p>

          <div className="flex items-center gap-4">
            <a
              href={project.github || '#'}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 text-white hover:bg-[#5A7EE2] transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                className="flex items-center gap-2 font-bold text-zinc-900 hover:text-[#5A7EE2] uppercase tracking-widest text-sm transition-colors"
              >
                View Live Project <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
        
      </div>
    </ScrollReveal>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase leading-[0.9]">
              FEATURED<br />PROJECTS.
            </h2>
            <p className="text-zinc-500 font-medium uppercase tracking-widest max-w-sm text-sm">
              Real-world engineering case studies showcasing architecture, performance, and scalability.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
