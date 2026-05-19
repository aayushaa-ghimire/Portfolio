import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function HireMe() {
  return (
    <div className="w-full h-screen bg-[#FFF5F8] p-8 flex items-center justify-center select-none">
      <div 
        className="w-full max-w-5xl h-[500px] rounded-3xl overflow-hidden shadow-sm"
        style={{
          '--swiper-theme-color': '#b4647d',
        }}
      >
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="w-full h-full [&_.swiper-wrapper]:ease-out [&_.swiper-wrapper]:duration-500"
        >
          <SwiperSlide className="bg-[#b4647d]/10 text-[#b4647d] text-2xl font-normal flex items-center justify-center rounded-3xl will-change-transform">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className="bg-[#b4647d]/10 text-[#b4647d] text-2xl font-normal flex items-center justify-center rounded-3xl will-change-transform">
            Slide 2
          </SwiperSlide>
          <SwiperSlide className="bg-[#b4647d]/10 text-[#b4647d] text-2xl font-normal flex items-center justify-center rounded-3xl will-change-transform">
            Slide 3
          </SwiperSlide>
          <SwiperSlide className="bg-[#b4647d]/10 text-[#b4647d] text-2xl font-normal flex items-center justify-center rounded-3xl will-change-transform">
            Slide 4
          </SwiperSlide>
          <SwiperSlide className="bg-[#b4647d]/10 text-[#b4647d] text-2xl font-normal flex items-center justify-center rounded-3xl will-change-transform">
            Slide 5
          </SwiperSlide>
          <SwiperSlide className="bg-[#b4647d]/10 text-[#b4647d] text-2xl font-normal flex items-center justify-center rounded-3xl will-change-transform">
            Slide 6
          </SwiperSlide>
          <SwiperSlide className="bg-[#b4647d]/10 text-[#b4647d] text-2xl font-normal flex items-center justify-center rounded-3xl will-change-transform">
            Slide 7
          </SwiperSlide>
          <SwiperSlide className="bg-[#b4647d]/10 text-[#b4647d] text-2xl font-normal flex items-center justify-center rounded-3xl will-change-transform">
            Slide 8
          </SwiperSlide>
          <SwiperSlide className="bg-[#b4647d]/10 text-[#b4647d] text-2xl font-normal flex items-center justify-center rounded-3xl will-change-transform">
            Slide 9
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}