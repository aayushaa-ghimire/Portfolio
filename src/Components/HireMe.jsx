import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

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
    <div className="w-full h-screen bg-[#FFF5F8] p-8 flex items-center justify-center select-none">
      <div 
        className="w-full max-w-4xl h-[450px] rounded-[32px] bg-white p-12 shadow-[0_8px_30px_rgb(180,100,125,0.04)] border border-[#b4647d]/10 overflow-hidden"
        style={{
          '--swiper-theme-color': '#b4647d',
        }}
      >
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={40}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="w-full h-full [&_.swiper-wrapper]:ease-out [&_.swiper-wrapper]:duration-600"
        >
          {offerings.map((item) => (
            <SwiperSlide 
              key={item.id} 
              className="w-full h-full flex flex-col justify-center items-start text-left bg-transparent will-change-transform pr-12"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-sm font-normal tracking-widest text-[#b4647d]/50">
                  {item.id}
                </span>
                <span className="text-xs font-normal tracking-wider uppercase bg-[#b4647d]/10 text-[#b4647d] px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              
              <h3 className="text-3xl font-normal text-[#b4647d] mb-4 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-base font-normal text-[#b4647d]/80 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}