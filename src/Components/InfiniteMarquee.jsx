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


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';

import './InfiniteMarquee.css';

import { Autoplay, FreeMode } from 'swiper/modules';

const projects = [
  { id: "1", title: "Project name", link: "Link to the project" },
  { id: "2", title: "Project name", link: "Link to the project" },
  { id: "3", title: "Project name", link: "Link to the project" },
  { id: "4", title: "Project name", link: "Link to the project" },
  { id: "5", title: "Project name", link: "Link to the project" },
  { id: "6", title: "Project name", link: "Link to the project" },
];

export default function ExperienceSection() {
  return (
    <section className="project-carousel-viewport">
      <div className="section-header">
        <span className="header-sub">WORK SELECTION</span>
        <h2 className="header-title">Project Philosophy</h2>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        loop={true}
        speed={8000}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false, // Prevents stopping on touch/drag
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {projects.map((proj) => (
          <SwiperSlide key={proj.id}>
            <div className="project-slide-card">
              <h3 className="proj-display-title">Project name</h3>

              <div className="image-wrapper">
                <img 
                  src={`https://picsum.photos/seed/${proj.id + 33}/800/800`} 
                  alt="Portfolio Work" 
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