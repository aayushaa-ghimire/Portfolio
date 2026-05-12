import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';

import './InfiniteMarquee.css';

import { Autoplay, FreeMode } from 'swiper/modules';

const projects = [
  { id: "1", title: "Project One", link: "View Project" },
  { id: "2", title: "Project Two", link: "View Project" },
  { id: "3", title: "Project Three", link: "View Project" },
  { id: "4", title: "Project Four", link: "View Project" },
  { id: "5", title: "Project Five", link: "View Project" },
  { id: "6", title: "Project Six", link: "View Project" },
];

export default function ExperienceSection() {
  return (
    <section className="project-carousel-viewport ">
      <div className="section-header">
        {/* <span className="header-sub">WORK SELECTION</span> */}
        <h2 className="header-title">Projecs</h2>
      </div>

      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        loop={true}
        speed={10000} 
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2.5, spaceBetween: 40 },
          1024: { slidesPerView: 4.5, spaceBetween: 60 },
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
        >
        {projects.map((proj) => (
          <SwiperSlide key={proj.id}>
            <div className="project-slide-card">
              <div className="card-top-content">
                <h3 className="proj-display-title">{proj.title}</h3>
              </div>

              <div className="image-wrapper">
                <img 
                  src={`https://picsum.photos/seed/${proj.id + 25}/800/800`} 
                  alt={proj.title} 
                  className="card-image"
                  />
              </div>

              <div className="card-footer">
                <a href="#" className="project-link">{proj.link}</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}