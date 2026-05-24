import React from 'react';
import { Cpu, Layout, Zap, Workflow } from 'lucide-react';
import NewMarquee from './NewMarquee';
import NewReverseMarquee from './NewReverseMarquee';

const offerings = [
  { title: "Production Frontend", description: "Lightning-fast, optimized for high retention.", icon: <Cpu size={24} /> },
  { title: "Pixel-Perfect UI", description: "Flawless Figma to high-fidelity code.", icon: <Layout size={24} /> },
  { title: "Performance Tuning", description: "Strategic code-splitting & Core Web Vitals.", icon: <Zap size={24} /> },
  { title: "Scalable Workflow", description: "Modular code built for future growth.", icon: <Workflow size={24} /> }
];

export default function HireMe() {
  return (
<div style={{ backgroundColor: '#FFF5F8' }} className="w-full min-h-screen">
      <NewMarquee />

      <section className="px-6 md:px-20 lg:px-32 py-16 flex justify-center">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-4/12">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#b4647d] font-bold">Qualities</span>
            <h2 className="text-4xl font-serif text-[#334155] mt-2">What I Offer</h2>
          </div>

          <div className="w-full md:w-8/12 grid grid-cols-2 gap-4">
            {offerings.map((item, index) => (
              <div 
                key={index}
                // flex flex-col items-center centers everything inside the card
                className="group flex flex-col items-center text-center bg-white p-8 border border-[#b4647d]/10 rounded-xl transition-all duration-300 hover:shadow-[0_20px_30px_-10px_rgba(180,100,125,0.15)] hover:-translate-y-1"
              >
                {/* Centered Icon */}
                <div className="mb-4 text-[#b4647d] transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-sm font-serif text-[#334155] mb-2">{item.title}</h3>
                <p className="text-[11px] text-[#334155]/60 leading-relaxed max-w-[180px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewReverseMarquee />
    </div>
  );
}