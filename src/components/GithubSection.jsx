'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import { SITE_CONFIG } from '@/data/constants';
import { ExternalLink, Star, GitFork, Code } from 'lucide-react';
import { GithubIcon as Github } from '@/components/ui/Icons';

const LANGUAGE_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  HCL: '#844FBA',
};

export default function GithubSection({ repos, user }) {
  return (
    <section id="github" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase leading-[0.9]">
              OPEN SOURCE<br />&amp; GITHUB.
            </h2>
          </div>
        </ScrollReveal>

        {user && (
          <ScrollReveal delay={0.1}>
            <div className="max-w-xl mb-12 p-8 border-2 border-zinc-900 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] bg-white">
              <div className="flex items-center gap-4 mb-6">
                <Github size={32} className="text-zinc-900" />
                <div>
                  <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">@{user.login}</h3>
                  {user.bio && <p className="text-sm text-zinc-500 font-medium">{user.bio}</p>}
                </div>
              </div>
              <div className="flex gap-8 mb-6 border-t border-zinc-200 pt-6">
                <div>
                  <div className="text-3xl font-black text-[#5A7EE2]">{user.publicRepos}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Repositories</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#5A7EE2]">{user.followers}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Followers</div>
                </div>
              </div>
              <a
                href={user.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-zinc-900 hover:text-[#5A7EE2] uppercase tracking-widest text-sm transition-colors"
              >
                View Profile <ExternalLink size={16} />
              </a>
            </div>
          </ScrollReveal>
        )}

        {repos && repos.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <ScrollReveal key={repo.name} delay={i * 0.06}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full p-6 bg-white border border-zinc-200 hover:border-zinc-900 hover:shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] transition-all group"
                >
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2 min-w-0">
                      <Code size={18} className="text-zinc-400 group-hover:text-[#5A7EE2] transition-colors shrink-0" />
                      <span className="text-lg font-bold text-zinc-900 truncate uppercase tracking-tight">
                        {repo.name}
                      </span>
                    </div>
                  </div>
                  {repo.description && (
                    <p className="text-sm text-zinc-600 mb-6 font-medium line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                  <div className="flex items-center gap-4 mt-auto">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-zinc-500">
                        <span
                          className="w-3 h-3"
                          style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || '#8b949e' }}
                        />
                        {repo.language}
                      </span>
                    )}
                    {repo.stars > 0 && (
                      <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-zinc-500">
                        <Star size={14} /> {repo.stars}
                      </span>
                    )}
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
