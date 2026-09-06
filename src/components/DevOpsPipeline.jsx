'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';

const PIPELINE_STEPS = [
  { label: 'DEVELOPER', desc: 'Write Code' },
  { label: 'GIT/GITHUB', desc: 'Version Control' },
  { label: 'CI/CD', desc: 'Automate' },
  { label: 'DOCKER', desc: 'Containerize' },
  { label: 'AWS', desc: 'Deploy' },
];

export default function DevOpsPipeline() {
  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              FROM CODE<br />TO PRODUCTION.
            </h2>
            <p className="text-zinc-400 font-medium uppercase tracking-widest max-w-sm text-sm">
              Making deployments repeatable, automated, and production-ready.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row border-t border-b border-zinc-700">
            {PIPELINE_STEPS.map((step, i) => (
              <div key={step.label} className={`flex-1 py-8 px-4 ${i !== PIPELINE_STEPS.length - 1 ? 'border-b md:border-b-0 md:border-r border-zinc-700' : ''} hover:bg-zinc-800 transition-colors`}>
                <div className="text-[#F9E13E] font-black text-4xl mb-2 tracking-tighter">0{i + 1}</div>
                <h3 className="font-bold text-xl uppercase tracking-wider mb-1">{step.label}</h3>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">{step.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
