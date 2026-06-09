import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';

import './InfiniteMarquee.css';

import { Autoplay, FreeMode } from 'swiper/modules';

const projects = [
  { 
    id: "1", 
    title: "Age Calculator", 
    image: "/age-calculator.png",
    link: "https://age-calculator-gamma-orcin.vercel.app/" 
  },
  { 
    id: "2", 
    title: "Number Guessing Game", 
    image: "/guessing-game.png",
    link: "https://number-guessing-game-zeta-amber.vercel.app/" 
  },
  { 
    id: "3", 
    title: "Rock Paper Scissor", 
    image: "/rock-paper-scissors.png",
    link: "https://rock-paper-scissor-beta-five-26.vercel.app/" 
  },
  { 
    id: "4", 
    title: "To Do List", 
    image: "/to-do-list.png",
    link: "https://to-do-list-ipba.vercel.app/" 
  },
  { 
    id: "5", 
    title: "Vividify IT Solutions", 
    image: "/vividify.png",
    link: "https://vividify.vercel.app/" 
  },
  { 
    id: "6", 
    title: "Minimalist Calculator", 
    image: "/calculator.png",
    link: "https://calculator-ten-umber-83.vercel.app/" 
  },
];

export default function ExperienceSection() {
  return (
    <section className="project-carousel-viewport">
      <div
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
        className="section-header"
      >
        <span className="font-['Poppins'] text-[10px] tracking-[0.6em] uppercase text-[#334155] font-bold opacity-60">
          My Projects
        </span>
        <div>
          <h2 className="header-title">Projects</h2>
        </div>
      </div>

      <Swiper
        slidesPerView={1.4}
        spaceBetween={40}
        loop={true}
        speed={6777} 
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
            <div 
              data-aos="fade-up"
              data-aos-offset="5"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease-in"
              data-aos-mirror="true"
              data-aos-once="false"
              className="project-slide-card"
            >
              <div className="card-top-content">
                <h3 className="proj-display-title">{proj.title}</h3>
              </div>

              <div className="image-wrapper">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="card-image"
                />
              </div>

              <div className="card-footer">
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
