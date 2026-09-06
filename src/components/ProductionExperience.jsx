'use client';

import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Card from '@/components/ui/Card';
import { Shield, Zap, Users, Gauge, LayoutDashboard } from 'lucide-react';

const PRODUCTION_METRICS = [
  { value: 3000, suffix: '+', label: 'Active Tickets', icon: Shield },
  { value: 200, suffix: '+', label: 'New Tickets / Day', icon: Zap },
  { value: 177, suffix: 'ms', label: 'INP', icon: Gauge },
  { value: 0.08, suffix: '', label: 'CLS', icon: LayoutDashboard },
];

const ENGINEERING_WORK = [
  'High-throughput ticket management system with concurrent user support',
  'React.js frontend with optimized Core Web Vitals',
  'REST API integration with proper loading and error state management',
  'Debouncing input handlers for search and filter operations',
  'Lazy loading components and routes for faster initial page load',
  'Memory optimization — eliminating unnecessary re-renders and state bloat',
  'Concurrent scanning workflows supporting multiple simultaneous users',
  'Production-grade error boundaries and fallback UI',
];

export default function ProductionExperience() {
  return (
    <section className="py-24 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/[0.05] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs text-emerald-400 font-medium">Production System</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Production Engineering
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Real-world engineering at scale — building and maintaining systems that handle
              thousands of daily operations.
            </p>
          </div>
        </ScrollReveal>

        {/* RMA System label */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 mb-8 text-center">
            <h3 className="text-lg font-semibold text-white mb-1">
              RMA Ticket Management System
            </h3>
            <p className="text-sm text-zinc-500">Diatoz Solutions — Production Application</p>
          </div>
        </ScrollReveal>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {PRODUCTION_METRICS.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.08}>
              <Card className="p-5 text-center">
                <metric.icon size={18} className="text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-xs text-zinc-400">{metric.label}</div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Engineering work list */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-2xl mx-auto">
            <h4 className="text-sm font-semibold text-white mb-4">
              Engineering Work
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {ENGINEERING_WORK.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm text-zinc-400 leading-relaxed"
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
