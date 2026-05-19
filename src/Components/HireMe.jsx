import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Parallax } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const offerings = [
  {
    id: "01",
    title: "Production-Ready Frontend",
    tag: "React, Next.js, TypeScript",
    description: "I build robust, type-safe web applications engineered for scale. Utilizing modular architecture ensures the codebase remains clean, predictable, and maintainable."
  },
  {
    id: "02",
    title: "Pixel-Perfect UI Execution",
    tag: "Tailwind CSS, Radix UI, Figma",
    description: "Bridging the gap between complex Figma designs and flawless code. I deliver responsive, highly polished user interfaces with sharp attention to spacing and layout tokens."
  },
  {
    id: "03",
    title: "Performance & Optimization",
    tag: "Vite, Core Web Vitals, SEO",
    description: "Maximizing user retention through lightning-fast loading speeds. Optimized with strategic code-splitting, asset compression, and premier Core Web Vitals scores."
  },
  {
    id: "04",
    title: "Agile & Maintainable Workflow",
    tag: "Git, ESLint, Atomic Commits",
    description: "Writing self-documenting, reusable components with future scaling in mind. Rigid linting and structured workflows drastically eliminate long-term technical debt."
  }
];

export default function HireMe() {
  return (
    <div className="w-full h-screen bg-[#FFF5F8] px-12 md:px-24 flex items-center justify-center select-none relative overflow-hidden">
      
      {/* Delicate floating sparkles for that magical, high-end girly touch */}
      <div className="absolute top-[20%] left-[15%] text-[#b4647d]/20 text-2xl animate-pulse">✦</div>
      <div className="absolute bottom-[25%] right-[10%] text-[#b4647d]/30 text-xl animate-bounce duration-4000">✦</div>
      <div className="absolute top-[15%] right-[40%] text-[#b4647d]/15 text-3xl animate-pulse duration-3000">✦</div>

      {/* Background Editorial Watermark */}
      <div className="absolute right-[-2%] bottom-[-3%] font-serif text-[18vw] italic font-normal text-[#b4647d]/[0.04] pointer-events-none select-none leading-none">
        Aayusha
      </div>

      {/* Main Structural Layout Block */}
      <div 
        className="w-full max-w-7xl h-[520px] relative z-10"
        style={{
          '--swiper-theme-color': '#b4647d',
        }}
      >
        {/* Custom style overrides to turn pagination bullets into pretty pulsing hearts */}
        <style>{`
          .swiper-pagination-bullet {
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23b4647d' opacity='0.25'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>") !important;
            background-color: transparent !important;
            width: 16px !important;
            height: 16px !important;
            opacity: 1 !important;
            transition: transform 0.3s ease, opacity 0.3s ease !important;
          }
          .swiper-pagination-bullet-active {
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23b4647d'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>") !important;
            transform: scale(1.3);
          }
        `}</style>

        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={0}
          parallax={true}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination, Parallax]}
          className="w-full h-full [&_.swiper-wrapper]:transition-transform [&_.swiper-wrapper]:duration-[1000ms] [&_.swiper-wrapper]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] [&_.swiper-pagination-vertical]:!right-0"
        >
          {offerings.map((item) => (
            <SwiperSlide 
              key={item.id} 
              className="w-full h-full bg-transparent will-change-transform"
            >
              <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
                
                {/* Left Column: Elegant Editorial Header Block */}
                <div 
                  className="w-full md:w-2/5 flex flex-col justify-center text-left"
                  data-swiper-parallax="-80"
                >
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#b4647d]/60 block font-sans">
                      What I Offer
                    </span>
                    <span className="text-[10px] font-medium tracking-[0.25em] text-[#b4647d]/40 block font-sans uppercase italic">
                      sweetly curated code & design
                    </span>
                  </div>
                  
                  <h2 className="text-6xl md:text-7xl font-serif font-normal text-[#b4647d] tracking-normal leading-none">
                    Services
                  </h2>
                  
                  <div className="flex items-center gap-2 mt-8 mb-6">
                    <div className="w-12 h-[1px] bg-[#b4647d]/30" />
                    <span className="text-[#b4647d]/40 text-xs">✦</span>
                    <div className="w-4 h-[1px] bg-[#b4647d]/30" />
                  </div>
                  
                  <p className="text-[13px] font-sans text-[#b4647d]/70 max-w-xs leading-relaxed tracking-wide">
                    Interactive, systemized frameworks constructed to bridge premium design execution with scalable code.
                  </p>
                </div>

                {/* Right Column: Content Card Panel with soft girly layout attributes */}
                <div className="w-full md:w-3/5 flex flex-col justify-center items-start text-left border-l border-[#b4647d]/15 pl-12 md:pl-20 h-full relative">
                  
                  {/* Subtle soft node design dot on the vertical axis border */}
                  <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#b4647d]/40 shadow-[0_0_8px_#b4647d]" />

                  {/* Accent Tag Line with slow parallax */}
                  <div 
                    className="flex items-center gap-3 mb-6"
                    data-swiper-parallax="-180"
                  >
                    <span className="text-xl font-serif italic text-[#b4647d]/70 font-medium leading-none">
                      {item.id}
                    </span>
                    <div className="h-[1px] w-8 bg-[#b4647d]/30" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-sans text-[#b4647d]/70 bg-[#b4647d]/5 px-3 py-1 rounded-full border border-[#b4647d]/10">
                      {item.tag}
                    </span>
                  </div>
                  
                  {/* Title using a romantic, soft deep-wine hue */}
                  <h3 
                    className="text-4xl md:text-5xl font-serif font-normal text-[#3A2A2F] mb-5 tracking-wide leading-tight"
                    data-swiper-parallax="-350"
                  >
                    {item.title}
                  </h3>
                  
                  {/* Body Text updated to a softer feminine gray-pink hue */}
                  <p 
                    className="text-[14px] md:text-[15px] font-sans font-normal text-[#5A4B50] leading-relaxed max-w-xl tracking-wide"
                    data-swiper-parallax="-500"
                  >
                    {item.description}
                  </p>
                  
                  {/* Bottom Interactive Hint */}
                  <div 
                    className="mt-8 flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#b4647d]/60 uppercase font-sans"
                    data-swiper-parallax="-650"
                  >
                    <span>Scroll anywhere to explore</span>
                    <span className="animate-pulse text-xs">💖</span>
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}