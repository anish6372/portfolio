'use client';

import { SITE_CONFIG } from '@/data/constants';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '@/components/ui/Icons';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-[#5A7EE2] text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-black text-3xl tracking-tighter mb-2"
          >
            {SITE_CONFIG.name.split(' ')[0].toUpperCase()}
            <span className="text-[#F9E13E]">.</span>
          </a>
          <p className="text-sm text-white/80 uppercase tracking-widest font-bold">
            {SITE_CONFIG.role}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F9E13E] hover:text-zinc-900 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F9E13E] hover:text-zinc-900 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F9E13E] hover:text-zinc-900 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
        
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/20 text-center md:text-left text-xs uppercase tracking-widest font-bold text-white/60 flex flex-col md:flex-row justify-between">
        <p>© {currentYear} {SITE_CONFIG.name.toUpperCase()}.</p>
        <p>ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
