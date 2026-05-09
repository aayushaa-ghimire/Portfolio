// // // import React from 'react';
// // // import { Swiper, SwiperSlide } from 'swiper/react';

// // // import 'swiper/css';
// // // import 'swiper/css/free-mode';

// // // import './ExperienceSection.css';

// // // import { Autoplay, FreeMode } from 'swiper/modules';

// // // const projects = [
// // //   { id: "1", title: "Project name", link: "Link to the project" },
// // //   { id: "2", title: "Project name", link: "Link to the project" },
// // //   { id: "3", title: "Project name", link: "Link to the project" },
// // //   { id: "4", title: "Project name", link: "Link to the project" },
// // //   { id: "5", title: "Project name", link: "Link to the project" },
// // //   { id: "6", title: "Project name", link: "Link to the project" },
// // // ];

// // // export default function ExperienceSection() {
// // //   return (
// // //     <section className="project-carousel-viewport">
// // //       <div className="section-header">
// // //         <span className="header-sub">SELECTED WORKS</span>
// // //         <h2 className="header-title">Project Philosophy</h2>
// // //       </div>

// // //       <Swiper
// // //         slidesPerView={4}
// // //         spaceBetween={30}
// // //         loop={true}
// // //         speed={5000} // Speed of the transition in ms
// // //         freeMode={true}
// // //         autoplay={{
// // //           delay: 0, // 0 delay for constant motion
// // //           disableOnInteraction: false,
// // //         }}
// // //         modules={[Autoplay, FreeMode]}
// // //         className="mySwiper"
// // //       >
// // //         {projects.map((proj) => (
// // //           <SwiperSlide key={proj.id}>
// // //             <div className="project-slide-card">
// // //               <div className="card-top">
// // //                 <span className="proj-number">{proj.id}</span>
// // //                 <h3 className="proj-display-title">Project <br/>name</h3>
// // //               </div>

// // //               <div className="image-wrapper">
// // //                 <img 
// // //                   src={`https://picsum.photos/seed/${proj.id + 50}/500/500`} 
// // //                   alt="Work" 
// // //                   className="card-image"
// // //                 />
// // //               </div>

// // //               <div className="card-bottom">
// // //                 <a href="#" className="project-link">{proj.link}</a>
// // //               </div>
// // //             </div>
// // //           </SwiperSlide>
// // //         ))}
// // //       </Swiper>
// // //     </section>
// // //   );
// // // }


// // import React from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react';

// // import 'swiper/css';
// // import 'swiper/css/free-mode';

// // import './InfiniteMarquee.css';

// // import { Autoplay, FreeMode } from 'swiper/modules';

// // const projects = [
// //   { id: "1", title: "Project name", link: "Link to the project" },
// //   { id: "2", title: "Project name", link: "Link to the project" },
// //   { id: "3", title: "Project name", link: "Link to the project" },
// //   { id: "4", title: "Project name", link: "Link to the project" },
// //   { id: "5", title: "Project name", link: "Link to the project" },
// //   { id: "6", title: "Project name", link: "Link to the project" },
// // ];

// // export default function ExperienceSection() {
// //   return (
// //     <section className="project-carousel-viewport">
// //       <div className="section-header">
// //         <span className="header-sub">SELECTED WORKS</span>
// //         <h2 className="header-title">Project Philosophy</h2>
// //       </div>

// //       <Swiper
// //         slidesPerView={4}
// //         spaceBetween={30}
// //         loop={true}
// //         speed={6000} // Adjust for scroll speed (higher = slower/smoother)
// //         freeMode={true}
// //         allowTouchMove={false} // Prevents jerky movement on drag
// //         autoplay={{
// //           delay: 0,
// //           disableOnInteraction: false,
// //         }}
// //         modules={[Autoplay, FreeMode]}
// //         className="mySwiper"
// //       >
// //         {projects.map((proj) => (
// //           <SwiperSlide key={proj.id}>
// //             <div className="project-slide-card">
// //               <div className="card-top">
// //                 <span className="proj-number">{proj.id}</span>
// //                 <h3 className="proj-display-title">Project <br/>name</h3>
// //               </div>

// //               <div className="image-wrapper">
// //                 <img 
// //                   src={`https://picsum.photos/seed/${proj.id + 123}/600/600`} 
// //                   alt="Portfolio Work" 
// //                   className="card-image"
// //                 />
// //               </div>

// //               <div className="card-footer">
// //                 <a href="#" className="project-link">{proj.link}</a>
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </section>
// //   );
// // }


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/free-mode';

// import './ExperienceSection.css';

// import { Autoplay, FreeMode } from 'swiper/modules';

// const projects = [
//   { id: "1", title: "Project name", link: "Link to the project" },
//   { id: "2", title: "Project name", link: "Link to the project" },
//   { id: "3", title: "Project name", link: "Link to the project" },
//   { id: "4", title: "Project name", link: "Link to the project" },
//   { id: "5", title: "Project name", link: "Link to the project" },
//   { id: "6", title: "Project name", link: "Link to the project" },
// ];

// export default function ExperienceSection() {
//   return (
//     <section className="project-carousel-viewport">
//       <div className="section-header">
//         <span className="header-sub">WORK SELECTION</span>
//         <h2 className="header-title">Project Philosophy</h2>
//       </div>

//       <Swiper
//         slidesPerView={4}
//         spaceBetween={50}
//         loop={true}
//         speed={8000}
//         freeMode={true}
//         allowTouchMove={false}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay, FreeMode]}
//         className="mySwiper"
//       >
//         {projects.map((proj) => (
//           <SwiperSlide key={proj.id}>
//             <div className="project-slide-card">
//               <div className="card-top">
//                 <span className="proj-number">{proj.id}</span>
//                 <h3 className="proj-display-title">Project <br/>name</h3>
//               </div>

//               <div className="image-wrapper">
//                 <img 
//                   src={`https://picsum.photos/seed/${proj.id + 500}/800/800`} 
//                   alt="Portfolio" 
//                   className="card-image"
//                 />
//               </div>

//               <div className="card-bottom">
//                 <a href="#" className="project-link">{proj.link}</a>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/free-mode';

// import './InfiniteMarquee.css';

// import { Autoplay, FreeMode } from 'swiper/modules';

// const projects = [
//   { id: "1", title: "Floral Essence", link: "View Case Study" },
//   { id: "2", title: "Urban Minimal", link: "View Case Study" },
//   { id: "3", title: "Soft Aesthetic", link: "View Case Study" },
//   { id: "4", title: "Modern Muse", link: "View Case Study" },
//   { id: "5", title: "Pink Theory", link: "View Case Study" },
//   { id: "6", title: "Silk & Stone", link: "View Case Study" },
// ];

// export default function ExperienceSection() {
//   return (
//     <section className="project-carousel-viewport">
//       <div className="section-header">
//         <span className="header-sub">PORTFOLIO COLLECTION</span>
//         <h2 className="header-title">Design Philosophy</h2>
//       </div>

//       <Swiper
//         slidesPerView={1.5} // Mobile default
//         spaceBetween={30}
//         centeredSlides={false}
//         loop={true}
//         speed={10000} // Smooth, constant cinematic motion
//         freeMode={{
//           enabled: true,
//           momentum: false,
//         }}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false, // Prevents stopping on touch/drag
//           pauseOnMouseEnter: false,
//         }}
//         breakpoints={{
//           640: { slidesPerView: 2.5, spaceBetween: 40 },
//           1024: { slidesPerView: 4.5, spaceBetween: 60 },
//         }}
//         modules={[Autoplay, FreeMode]}
//         className="mySwiper"
//       >
//         {projects.map((proj) => (
//           <SwiperSlide key={proj.id}>
//             <div className="project-slide-card">
//               <div className="image-wrapper">
//                 <img 
//                   src={`https://picsum.photos/seed/${proj.id + 105}/800/800`} 
//                   alt={proj.title} 
//                   className="card-image"
//                 />
//               </div>

//               <div className="card-info">
//                 <h3 className="proj-display-title">{proj.title}</h3>
//                 <a href="#" className="project-link">{proj.link}</a>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';

import './ExperienceSection.css';

import { Autoplay, FreeMode } from 'swiper/modules';

// Placeholder array for your future projects
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
    <section className="project-carousel-viewport">
      <div className="section-header">
        <span className="header-sub">WORK SELECTION</span>
        <h2 className="header-title">Project Philosophy</h2>
      </div>

      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        loop={true}
        speed={10000} // Constant cinematic pace
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false, // Keeps moving after drag
          pauseOnMouseEnter: false,
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