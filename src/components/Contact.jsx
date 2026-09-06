'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { SITE_CONFIG } from '@/data/constants';
import { Send, Loader2, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('sent');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase leading-[0.9]">
              LET'S<br />CONNECT.
            </h2>
            <p className="text-zinc-500 font-medium uppercase tracking-widest max-w-sm text-sm">
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          <ScrollReveal delay={0.1}>
            <div className="bg-zinc-50 p-8 md:p-12 border-2 border-zinc-900 rounded-none shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-widest text-zinc-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-zinc-200 focus:outline-none focus:border-[#5A7EE2] transition-colors rounded-none"
                    placeholder="YOUR NAME"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-widest text-zinc-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-zinc-200 focus:outline-none focus:border-[#5A7EE2] transition-colors rounded-none"
                    placeholder="YOU@COMPANY.COM"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-widest text-zinc-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border-2 border-zinc-200 focus:outline-none focus:border-[#5A7EE2] transition-colors rounded-none resize-none"
                    placeholder="TELL ME ABOUT YOUR PROJECT..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-[#5A7EE2] text-white font-black rounded-none hover:bg-[#4338ca] disabled:opacity-60 disabled:cursor-not-allowed transition-colors uppercase tracking-widest text-sm"
                >
                  {status === 'sending' && (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      SENDING...
                    </>
                  )}
                  {status === 'sent' && (
                    <>
                      <CheckCircle size={18} />
                      MESSAGE SENT
                    </>
                  )}
                  {status === 'idle' && (
                    <>
                      <Send size={18} />
                      SEND MESSAGE
                    </>
                  )}
                  {status === 'error' && 'FAILED — TRY AGAIN'}
                </button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
             <div className="flex flex-col gap-12 pt-8">
                <div>
                  <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-4">EMAIL DIRECTLY</h3>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-2xl md:text-3xl font-black text-zinc-900 hover:text-[#5A7EE2] transition-colors">
                    {SITE_CONFIG.email.toUpperCase()}
                  </a>
                </div>

                <div>
                  <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-4">SOCIALS</h3>
                  <div className="flex flex-col gap-2">
                    <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-black text-zinc-900 hover:text-[#5A7EE2] transition-colors">
                      LINKEDIN ↗
                    </a>
                    <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-black text-zinc-900 hover:text-[#5A7EE2] transition-colors">
                      GITHUB ↗
                    </a>
                  </div>
                </div>
             </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
