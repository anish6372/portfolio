'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';

const CERTIFICATIONS = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    link: '#', 
  },
];

export default function Certification() {
  return (
    <section className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter uppercase mb-12">
            CERTIFICATIONS
          </h2>
          <div className="flex flex-col items-center justify-center gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-zinc-100 rounded-full flex items-center justify-center mb-6 border-4 border-[#F9E13E]">
                  <span className="font-black text-xl text-zinc-900">AWS</span>
                </div>
                <h3 className="font-black text-2xl text-zinc-900 uppercase tracking-tight mb-2">{cert.name}</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">{cert.issuer} • {cert.date}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
