import React from 'react';
import { motion } from 'framer-motion';
import NewMarquee from './NewMarquee';
import NewReverseMarquee from './NewReverseMarquee';

const offerings = [
  { title: "Production Frontend", description: "Lightning-fast, optimized, and built for high retention." },
  { title: "Pixel-Perfect UI", description: "Flawless translation of Figma designs into high-fidelity code." },
  { title: "Performance Tuning", description: "Strategic code-splitting and top-tier Core Web Vitals." },
  { title: "Scalable Workflow", description: "Modular, self-documenting code built for long-term growth." }
];

export default function HireMe() {
  return (
    <div className="bg-[#FFF5F8]">
      <NewMarquee />

      <section className="px-6 md:px-20 lg:px-32 py-10 flex justify-center">
        <div className="max-w-6xl flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full md:w-4/12"
          >
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#b4647d]/60 font-semibold">Qualities</span>
            <h2 className="text-3xl font-serif text-[#334155] mt-1">What I Offer</h2>
          </motion.div>

          <div className="w-full md:w-8/12 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {offerings.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/40 border border-[#b4647d]/10 p-5 rounded-2xl hover:bg-white/60 transition-colors"
              >
                <h3 className="text-sm font-serif text-[#b4647d] mb-1">{item.title}</h3>
                <p className="text-[11px] text-[#334155]/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NewReverseMarquee />
    </div>
  );
}