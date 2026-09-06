'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import { SKILL_CATEGORIES } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase">
              TECH<br />STACK.
            </h2>
            <p className="text-zinc-500 font-medium uppercase tracking-widest max-w-sm text-sm">
              Technologies I use to build, deploy, and scale applications.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 0.1}>
              <div className="h-full p-8 bg-white shadow-sm border border-zinc-200 rounded-none group hover:border-zinc-400 transition-colors">
                <div className="flex flex-col gap-4 mb-8">
                  <category.icon size={32} className="text-[#5A7EE2]" />
                  <h3 className="font-black text-zinc-900 text-2xl uppercase tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-bold uppercase tracking-widest text-zinc-600 bg-zinc-100 px-3 py-1.5 transition-colors duration-200 group-hover:bg-[#5A7EE2] group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
