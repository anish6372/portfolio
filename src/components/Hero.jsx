'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SITE_CONFIG } from '@/data/constants';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden bg-zinc-900 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Blue background block matching Dribbble design */}
        <div className="absolute top-0 right-0 w-[95%] md:w-[80%] h-[120%] bg-[#5A7EE2] rounded-3xl -z-10 transform origin-top-right skew-y-2 md:-skew-y-2 -translate-y-12 shadow-2xl"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Text Column */}
          <div className="w-full md:w-1/2 pt-12 md:pt-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#F9E13E] text-xl md:text-2xl font-black mb-2 tracking-widest uppercase">
                HI, I AM {SITE_CONFIG.name.toUpperCase()}
              </h2>
              <h1 className="text-white text-6xl sm:text-7xl lg:text-[6.5rem] font-black leading-[0.85] tracking-tighter mb-8 drop-shadow-md">
                FULL<br/>STACK<br/>ENGINEER
              </h1>
              
              <p className="text-white/90 text-sm md:text-base max-w-md font-semibold mb-10 leading-relaxed uppercase tracking-wider drop-shadow-sm">
                I design scalable backend systems and develop user-centric interfaces, blending technical expertise to craft seamless digital products.
              </p>

              <div className="flex items-center gap-6">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#F9E13E] hover:bg-[#E5D036] text-zinc-900 font-black px-8 py-4 rounded-full transition-all hover:scale-105 uppercase tracking-widest text-sm shadow-lg"
                >
                  View Works ↗
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Photo Column */}
          <div className="w-full md:w-1/2 relative flex justify-center items-end h-[500px] md:h-[650px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-full flex items-end justify-center"
            >
              <div className="relative w-[85%] max-w-[420px] h-[90%] rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl bg-zinc-800">
                <Image
                  src="/profile.png"
                  alt={SITE_CONFIG.name}
                  fill
                  priority
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Floating Badges */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring' }}
              className="absolute top-1/4 -left-4 md:left-2 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-4 border border-white/20 hidden sm:block z-20"
            >
              <div className="text-zinc-900 font-black text-2xl">2+</div>
              <div className="text-zinc-600 text-xs font-bold uppercase tracking-widest">YEARS EXP.</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="absolute bottom-1/4 -right-4 md:right-4 bg-zinc-900/95 backdrop-blur-md shadow-2xl rounded-2xl p-4 border border-zinc-700 text-white hidden sm:block z-20"
            >
              <div className="text-[#F9E13E] font-black text-2xl">AWS</div>
              <div className="text-zinc-300 text-xs font-bold uppercase tracking-widest">CERTIFIED</div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
