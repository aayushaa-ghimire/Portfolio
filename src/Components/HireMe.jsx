import React from 'react';
import { Cpu, Layout, Zap, Workflow } from 'lucide-react';
import NewMarquee from './NewMarquee';
import NewReverseMarquee from './NewReverseMarquee';

const offerings = [
  { 
    title: "Modern Frontend Development", 
    description: "Building fast, responsive, and user-focused web interfaces with clean architecture.", 
    icon: <Cpu size={22} /> 
  },
  { 
    title: "UI Implementation", 
    description: "Translating designs into precise, responsive, and accessible interfaces.", 
    icon: <Layout size={22} /> 
  },
  { 
    title: "Performance Optimization", 
    description: "Improving load speed, Core Web Vitals, and overall application efficiency.", 
    icon: <Zap size={22} /> 
  },
  { 
    title: "Scalable Code Structure", 
    description: "Writing modular and maintainable code that supports long-term growth.", 
    icon: <Workflow size={22} /> 
  }
];

export default function HireMe() {
  return (
    <div style={{ backgroundColor: '#FFF5F8' }} className="w-full min-h-screen font-sans">
      <NewMarquee />

      <section className="px-6 md:px-20 lg:px-32 py-12 md:py-16 flex justify-center">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Left Heading Side */}
          <div 
            data-aos="fade-up"
            data-aos-offset="5"
            data-aos-delay="40"
            data-aos-duration="1080"
            className="w-full md:w-4/12 text-center md:text-left"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#334155] font-bold">Qualities</span>
            <h2 className="text-5xl font-serif text-[#9b586d] mt-2">What I Offer</h2>
          </div>

          {/* Right Cards Side */}
          <div 
            data-aos="fade-up"
            data-aos-offset="80"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="w-full md:w-8/12 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {offerings.map((item, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center text-center bg-[#b4647d93] p-6 border-2 border-white/60 rounded-2xl transition-all duration-500 ease-out hover:bg-white hover:border-[#b4647d]/20 hover:shadow-[0_20px_40px_-15px_rgba(180,100,125,0.15)] hover:-translate-y-2"
              >
                {/* Icon Box */}
                <div className="mb-4 p-3 bg-white text-[#b4647d] rounded-xl shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FFF5F8] group-hover:rotate-3">
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-sm font-bold text-white mb-2 px-2 transition-colors duration-500 group-hover:text-[#334155]">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-[12px] text-white/75 font-normal leading-relaxed max-w-[200px] transition-colors duration-500 group-hover:text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <NewReverseMarquee />
    </div>
  );
}