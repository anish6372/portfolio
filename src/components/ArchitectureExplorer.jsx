'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  Monitor,
  Server,
  Database,
  Cloud,
  GitBranch,
} from 'lucide-react';

const EXPLORER_DATA = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Monitor,
    color: '#3b82f6',
    technologies: [
      { name: 'React.js', description: 'Component-based UI development with hooks and context' },
      { name: 'Next.js', description: 'Server-side rendering, static generation, file-based routing' },
      { name: 'Redux', description: 'Predictable state management for complex UI flows' },
      { name: 'Tailwind CSS', description: 'Utility-first styling for rapid responsive development' },
      { name: 'Material UI / ShadCN', description: 'Pre-built component systems for consistent design' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    color: '#8b5cf6',
    technologies: [
      { name: 'Node.js', description: 'Event-driven JavaScript runtime for scalable APIs' },
      { name: 'Express.js', description: 'Lightweight HTTP framework with middleware architecture' },
      { name: 'REST APIs', description: 'Resource-oriented endpoints with proper HTTP semantics' },
      { name: 'JWT Authentication', description: 'Stateless token-based auth with role-based access control' },
      { name: 'OAuth2', description: 'Third-party authentication integration (Google, GitHub)' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: Database,
    color: '#10b981',
    technologies: [
      { name: 'MongoDB', description: 'Document-based NoSQL for flexible schema and rapid iteration' },
      { name: 'PostgreSQL', description: 'Relational database for structured data with ACID guarantees' },
      { name: 'MySQL', description: 'Production-grade relational DB for transactional workloads' },
    ],
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    icon: Cloud,
    color: '#f97316',
    technologies: [
      { name: 'Docker', description: 'Containerization with multi-stage builds for optimized images' },
      { name: 'AWS EC2', description: 'Cloud compute instances for production workloads' },
      { name: 'Terraform', description: 'Infrastructure as Code — declarative resource provisioning' },
      { name: 'Ansible', description: 'Configuration management and automated server setup' },
      { name: 'Nginx', description: 'Reverse proxy and static file serving for production traffic' },
    ],
  },
  {
    id: 'cicd',
    label: 'CI/CD',
    icon: GitBranch,
    color: '#ef4444',
    technologies: [
      { name: 'GitHub Actions', description: 'Workflow automation for build, test, and deploy pipelines' },
      { name: 'Jenkins', description: 'Continuous integration and delivery orchestration' },
      { name: 'Multi-stage Pipelines', description: 'Build → Test → Deploy with environment promotion' },
    ],
  },
];

export default function ArchitectureExplorer() {
  const [activeLayer, setActiveLayer] = useState('frontend');
  const active = EXPLORER_DATA.find((d) => d.id === activeLayer);

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              System Architecture Explorer
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Click a layer to see how my skills connect across the stack.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto">
            {/* Layer tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {EXPLORER_DATA.map((layer) => {
                const isActive = activeLayer === layer.id;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(layer.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                      isActive
                        ? 'bg-white/[0.08] border-white/[0.15] text-white'
                        : 'bg-transparent border-white/[0.06] text-zinc-500 hover:text-zinc-300 hover:border-white/[0.1]'
                    }`}
                  >
                    <layer.icon size={16} style={{ color: isActive ? layer.color : undefined }} />
                    {layer.label}
                  </button>
                );
              })}
            </div>

            {/* Active layer content */}
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${active.color}15` }}
                    >
                      <active.icon size={18} style={{ color: active.color }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{active.label}</h3>
                  </div>

                  <div className="grid gap-3">
                    {active.technologies.map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.03] transition-colors"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: active.color }}
                        />
                        <div>
                          <span className="text-sm font-medium text-white">
                            {tech.name}
                          </span>
                          <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                            {tech.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Connection indicator */}
            <div className="flex items-center justify-center gap-1 mt-6">
              {EXPLORER_DATA.map((layer) => (
                <div
                  key={layer.id}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeLayer === layer.id ? 'w-8' : 'w-2'
                  }`}
                  style={{
                    backgroundColor:
                      activeLayer === layer.id ? layer.color : 'rgba(255,255,255,0.1)',
                  }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
