import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HireMe() {
  return (
    <div className="w-full h-screen bg-[#FFF5F8] p-8 flex items-center justify-center select-none">
      <div 
        className="w-full max-w-5xl h-[500px] rounded-3xl overflow-hidden shadow-sm"
        style={{
          '--swiper-theme-color': '#b4647d',
          '--swiper-navigation-size': '24px',
        }}
      >
        <Swiper
          direction="vertical"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
          }}
          modules={[Autoplay, Pagination, Navigation, Mousewheel]}
          className="w-full h-full [&_.swiper-wrapper]:ease-out [&_.swiper-wrapper]:duration-500 [&_.swiper-button-next]:opacity-70 [&_.swiper-button-prev]:opacity-70 [&_.swiper-button-next]:hover:scale-110 [&_.swiper-button-prev]:hover:scale-110 [&_.swiper-button-next]:transition-transform [&_.swiper-button-prev]:transition-transform"
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
        </Swiper>
      </div>
    </div>
  );
}