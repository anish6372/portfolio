'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const CERTIFICATIONS = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2026',
    image: '/aws-certification.png',
    verifyUrl: 'https://cp.certmetrics.com/amazon/en/public/verify/cert', // Replace with your exact Credly / AWS verify link if desired
  },
];

export default function Certification() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter uppercase mb-12">
            CERTIFICATIONS
          </h2>
          <div className="flex flex-col items-center justify-center gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                onClick={() => setSelectedCert(cert)}
                className="flex flex-col items-center justify-center cursor-pointer group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-24 h-24 bg-zinc-100 rounded-full flex items-center justify-center mb-6 border-4 border-[#F9E13E] group-hover:border-zinc-900 transition-colors shadow-md">
                  <span className="font-black text-xl text-zinc-900">AWS</span>
                </div>
                <h3 className="font-black text-2xl text-zinc-900 uppercase tracking-tight mb-2 group-hover:text-amber-600 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                  {cert.issuer} • {cert.date}
                </p>
                <span className="mt-3 text-xs font-semibold px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full border border-zinc-300 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  Click to View Certificate ↗
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Certificate Image Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-900 rounded-2xl p-4 md:p-6 shadow-2xl border border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 px-2">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                {selectedCert.name}
              </h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-full w-8 h-8 flex items-center justify-center transition-colors font-bold"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="overflow-hidden rounded-xl bg-zinc-950 flex items-center justify-center max-h-[75vh] mb-4">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-lg"
              />
            </div>
            {selectedCert.verifyUrl && (
              <div className="flex justify-end px-2">
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 bg-[#F9E13E] text-zinc-900 rounded-lg hover:bg-amber-400 transition-colors"
                >
                  Verify Official Badge ↗
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}


