'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import Image from 'next/image';

const PROCESS_STEPS = [
  {
    id: '01',
    title: '1. RESEARCH & ARCHITECTURE',
    description: 'UNDERSTAND THE PRODUCT GOALS, AUDIENCE, AND TECHNICAL REQUIREMENTS TO DESIGN SCALABLE SYSTEMS.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
    className: 'mt-0',
  },
  {
    id: '02',
    title: '2. FRONTEND DEVELOPMENT',
    description: 'CREATE VISUALLY APPEALING, ACCESSIBLE, AND HIGH-PERFORMANCE REACT & NEXT.JS INTERFACES.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    className: 'mt-12 md:mt-24',
  },
  {
    id: '03',
    title: '3. BACKEND & API DESIGN',
    description: 'BUILD SECURE, ROBUST NODE.JS REST APIS WITH EFFICIENT DATABASE MODELING.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    className: 'mt-0 md:mt-8',
  },
  {
    id: '04',
    title: '4. DEPLOY & AUTOMATE',
    description: 'DELIVER THE PRODUCT USING DOCKER, AWS, AND CI/CD PIPELINES FOR REPEATABLE DEPLOYMENTS.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80',
    className: 'mt-12',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <ScrollReveal>
          <h2 className="text-5xl md:text-7xl font-black text-zinc-900 mb-16 tracking-tighter uppercase border-b-4 border-zinc-900 pb-4 inline-block">
            MY WORK PROCESS
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal key={step.id} delay={i * 0.1}>
              <div className={`flex flex-col ${step.className}`}>
                <div className="relative w-full aspect-square md:aspect-[4/5] bg-zinc-100 mb-6 overflow-hidden">
                  <Image 
                    src={step.image} 
                    alt={step.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-bold text-xl text-zinc-900 mb-2 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-500 font-medium tracking-widest leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
