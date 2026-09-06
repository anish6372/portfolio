'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  Gauge,
  Network,
  Container,
  Server,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const DEEP_DIVES = [
  {
    id: 'performance',
    title: 'Performance Optimization',
    icon: Gauge,
    color: '#10b981',
    summary: 'Making applications fast by default',
    details: [
      { term: 'Debouncing', description: 'Throttle expensive operations like search and API calls to reduce unnecessary processing' },
      { term: 'Lazy Loading', description: 'Code-split routes and components to reduce initial bundle size and improve Time to Interactive' },
      { term: 'Memory Optimization', description: 'Identify and eliminate memory leaks from event listeners, closures, and stale references' },
      { term: 'Render Optimization', description: 'Reduce unnecessary re-renders using React.memo, useMemo, useCallback, and proper state architecture' },
      { term: 'Core Web Vitals', description: 'Measure and optimize INP, CLS, and LCP to meet Google\'s performance thresholds' },
    ],
  },
  {
    id: 'api',
    title: 'API Architecture',
    icon: Network,
    color: '#3b82f6',
    summary: 'Designing reliable and secure API layers',
    details: [
      { term: 'REST Design', description: 'Resource-oriented endpoints with proper HTTP methods, status codes, and response formatting' },
      { term: 'Authentication', description: 'JWT-based stateless auth with refresh tokens, OAuth2 integration, and secure session management' },
      { term: 'Authorization', description: 'Role-based access control with middleware guards and permission hierarchies' },
      { term: 'Error Handling', description: 'Centralized error middleware with structured error responses and proper HTTP status mapping' },
      { term: 'Pagination & Filtering', description: 'Cursor/offset pagination, multi-field sorting, and composable filter queries' },
    ],
  },
  {
    id: 'deployment',
    title: 'Deployment',
    icon: Container,
    color: '#f97316',
    summary: 'Shipping code reliably to production',
    details: [
      { term: 'Docker', description: 'Multi-stage builds to separate build and runtime environments, minimizing image size' },
      { term: 'AWS EC2', description: 'Instance provisioning, security groups, and production server configuration' },
      { term: 'Nginx', description: 'Reverse proxy configuration, SSL termination, and static file serving' },
      { term: 'Environment Config', description: 'Secret management, environment-specific configuration, and twelve-factor app principles' },
      { term: 'Health Checks', description: 'Application and infrastructure health monitoring for zero-downtime deployments' },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    icon: Server,
    color: '#8b5cf6',
    summary: 'Automating infrastructure provisioning',
    details: [
      { term: 'Terraform', description: 'Declarative infrastructure definitions for VPCs, subnets, security groups, and compute resources' },
      { term: 'Ansible', description: 'Idempotent playbooks for server configuration, package installation, and application deployment' },
      { term: 'Security Groups', description: 'Network-level access control with least-privilege ingress and egress rules' },
      { term: 'Networking', description: 'VPC design with public and private subnets, route tables, and internet gateways' },
      { term: 'Automated Provisioning', description: 'One-command infrastructure deployment from version-controlled configuration' },
    ],
  },
];

function DeepDiveCard({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.08}>
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.12] transition-all duration-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-4 p-5 text-left"
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${item.color}15` }}
          >
            <item.icon size={20} style={{ color: item.color }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white text-sm">{item.title}</h3>
            <p className="text-xs text-zinc-500 mt-0.5">{item.summary}</p>
          </div>
          {isOpen ? (
            <ChevronUp size={16} className="text-zinc-500 shrink-0" />
          ) : (
            <ChevronDown size={16} className="text-zinc-500 shrink-0" />
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-0 space-y-3">
                {item.details.map((detail, i) => (
                  <motion.div
                    key={detail.term}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <span className="text-sm font-medium text-white">
                        {detail.term}
                      </span>
                      <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                        {detail.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function EngineeringDeepDives() {
  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              How I Solve Engineering Problems
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Beyond listing skills — the engineering patterns and thinking I apply.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {DEEP_DIVES.map((item, i) => (
            <DeepDiveCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
