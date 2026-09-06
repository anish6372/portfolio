'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import { EXPERIENCE } from '@/data/experience';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase leading-[0.9]">
              PROFESSIONAL<br />EXPERIENCE.
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col border-t-4 border-zinc-900">
          {EXPERIENCE.map((exp, i) => (
            <ScrollReveal key={`${exp.company}-${exp.role}`} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row py-8 border-b border-zinc-200 hover:bg-zinc-50 transition-colors group">
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <h3 className="font-bold text-zinc-900 text-xl uppercase tracking-wider group-hover:text-[#5A7EE2] transition-colors">{exp.company}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mt-1">{exp.period}</p>
                </div>
                
                <div className="w-full md:w-3/4">
                  <h4 className="font-black text-2xl text-zinc-900 uppercase tracking-tight mb-4">{exp.role}</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-sm text-zinc-600 font-medium leading-relaxed flex items-start gap-3">
                        <span className="text-[#5A7EE2] font-black mt-0.5">/</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
