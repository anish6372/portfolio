'use client';

import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/ui/ScrollReveal';

const METRICS = [
  { value: 2, suffix: '+', label: 'YEARS\nOF EXPERIENCE' },
  { value: 3000, suffix: '+', label: 'ACTIVE\nTICKETS' },
  { value: 177, suffix: 'ms', label: 'INP\nSCORE' },
  { value: 4.8, suffix: '', label: 'OVERALL\nRATING' }, // Placeholder based on dribbble design, but changed text
];

export default function ImpactMetrics() {
  return (
    <section id="impact" className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="bg-[#5A7EE2] rounded-2xl p-6 sm:p-12 md:p-20 shadow-xl overflow-hidden relative">
            
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-4 relative z-10">
              {METRICS.map((metric, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-2 sm:gap-4 text-white">
                  <div className="text-4xl sm:text-5xl md:text-7xl font-black leading-none drop-shadow-md">
                    <AnimatedCounter
                      value={metric.value}
                      suffix={""}
                      duration={2}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-2xl sm:text-3xl font-black leading-none">{metric.suffix}</span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest whitespace-pre-line text-white/90 mt-1 leading-tight">
                      {metric.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
