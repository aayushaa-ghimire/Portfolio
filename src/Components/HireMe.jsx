// // import React from 'react';
// // import { Cpu, Layout, Zap, Workflow } from 'lucide-react';
// // import NewMarquee from './NewMarquee';
// // import NewReverseMarquee from './NewReverseMarquee';

// // // const offerings = [
// // //   { title: "Production Frontend", description: "Lightning-fast, optimized for high retention.", icon: <Cpu size={24} /> },
// // //   { title: "Pixel-Perfect UI", description: "Flawless Figma to high-fidelity code.", icon: <Layout size={24} /> },
// // //   { title: "Performance Tuning", description: "Strategic code-splitting & Core Web Vitals.", icon: <Zap size={24} /> },
// // //   { title: "Scalable Workflow", description: "Modular code built for future growth.", icon: <Workflow size={24} /> }
// // // ];

// // const offerings = [
// //   { 
// //     title: "Modern Frontend Development", 
// //     description: "Building fast, responsive, and user-focused web interfaces with clean architecture.", 
// //     icon: <Cpu size={24} /> 
// //   },
// //   { 
// //     title: "UI Implementation", 
// //     description: "Translating designs into precise, responsive, and accessible interfaces.", 
// //     icon: <Layout size={24} /> 
// //   },
// //   { 
// //     title: "Performance Optimization", 
// //     description: "Improving load speed, Core Web Vitals, and overall application efficiency.", 
// //     icon: <Zap size={24} /> 
// //   },
// //   { 
// //     title: "Scalable Code Structure", 
// //     description: "Writing modular and maintainable code that supports long-term growth.", 
// //     icon: <Workflow size={24} /> 
// //   }
// // ];
// // export default function HireMe() {
// //   return (
// // <div style={{ backgroundColor: '#FFF5F8' }} className="w-full min-h-screen">
// //       <NewMarquee />

// //       <section className="px-6 md:px-20 lg:px-32 py-10 flex justify-center">
// //         <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-16">
          
// //           <div 
// //           data-aos="fade-up"
// //           data-aos-offset="5"
// //           data-aos-delay="40"
// //           data-aos-duration="1000"
// //            className="w-full md:w-4/12">
// //             <span className="text-[10px] tracking-[0.3em] uppercase text-[#334155] font-bold">Qualities</span>
// //             <h2 className="text-5xl font-serif text-[#9b586d] mt-2">What I Offer</h2>
// //           </div>

// //           <div 
// //             data-aos="fade-up"
// //             data-aos-offset="80"
// //             data-aos-delay="100"
// //             data-aos-duration="1000"
// //             className="w-full md:w-8/12 grid grid-cols-2 gap-4"
// //           >
// //             {offerings.map((item, index) => (
// //               <div 
// //                 key={index}
// //                 className="group flex flex-col items-center text-center bg-[#e9dce0] p-8 border border-[#b4647d]/10 rounded-xl transition-all duration-300 hover:shadow-[0_20px_30px_-10px_rgba(180,100,125,0.15)] hover:-translate-y-1"
// //               >
// //                 <div className="mb-4 text-[#b4647d] shadow-2xl shadow-inner shadow-[#FFF5F8] transition-transform duration-300 group-hover:scale-110">
// //                   {item.icon}
// //                 </div>
// //                 <h3 className="text-sm font-serif text-[#334155] mb-2">{item.title}</h3>
// //                 <p className="text-[11px] text-[#334155]/60 leading-relaxed max-w-[180px]">{item.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <NewReverseMarquee />
// //     </div>
// //   );
// // }


// import React from 'react';
// import { Cpu, Layout, Zap, Workflow } from 'lucide-react';
// import NewMarquee from './NewMarquee';
// import NewReverseMarquee from './NewReverseMarquee';

// const offerings = [
//   { 
//     title: "Modern Frontend Development", 
//     description: "Building fast, responsive, and user-focused web interfaces with clean architecture.", 
//     icon: <Cpu size={22} /> 
//   },
//   { 
//     title: "UI Implementation", 
//     description: "Translating designs into precise, responsive, and accessible interfaces.", 
//     icon: <Layout size={22} /> 
//   },
//   { 
//     title: "Performance Optimization", 
//     description: "Improving load speed, Core Web Vitals, and overall application efficiency.", 
//     icon: <Zap size={22} /> 
//   },
//   { 
//     title: "Scalable Code Structure", 
//     description: "Writing modular and maintainable code that supports long-term growth.", 
//     icon: <Workflow size={22} /> 
//   }
// ];

// export default function HireMe() {
//   return (
//     <div style={{ backgroundColor: '#FFF5F8' }} className="w-full min-h-screen font-sans selection:bg-[#b4647d]/20 selection:text-[#b4647d]">
//       <NewMarquee />

//       <section className="px-6 md:px-16 lg:px-24 py-16 flex justify-center">
//         <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
//           {/* Left Heading Side */}
//           <div 
//             data-aos="fade-up"
//             data-aos-offset="5"
//             data-aos-delay="40"
//             data-aos-duration="1000"
//             className="w-full md:w-4/12 text-center md:text-left"
//           >
//             <span className="text-[11px] tracking-[0.25em] uppercase text-[#9b586d]/70 font-bold bg-[#b4647d]/10 px-3 py-1 rounded-full">
//               ✨ Qualities
//             </span>
//             <h2 className="text-4xl md:text-5xl font-serif text-[#9b586d] mt-4 leading-tight">
//               What I <br className="hidden md:block"/> Offer
//             </h2>
//           </div>

//           {/* Right Cards Side */}
//           <div 
//             data-aos="fade-up"
//             data-aos-offset="80"
//             data-aos-delay="100"
//             data-aos-duration="1000"
//             className="w-full md:w-8/12 grid grid-cols-1 sm:grid-cols-2 gap-6"
//           >
//             {offerings.map((item, index) => (
//               <div 
//                 key={index}
//                 className="group flex flex-col items-center text-center bg-[#f4e9ec] p-6 border-2 border-white/60 rounded-2xl transition-all duration-300 ease-out hover:bg-white hover:border-[#b4647d]/20 hover:shadow-[0_15px_30px_-10px_rgba(180,100,125,0.2)] hover:-translate-y-1.5"
//               >
//                 {/* Icon Container */}
//                 <div className="mb-4 p-3 bg-white text-[#b4647d] rounded-xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FFF5F8] group-hover:rotate-3">
//                   {item.icon}
//                 </div>
                
//                 {/* Title */}
//                 <h3 className="text-sm font-bold text-[#5c444c] mb-2 px-2">
//                   {item.title}
//                 </h3>
                
//                 {/* Description */}
//                 <p className="text-[12px] text-[#5c444c]/75 leading-relaxed max-w-[200px]">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       <NewReverseMarquee />
//     </div>
//   );
// }

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
          
          {/* Left Heading Side (Exactly as your original, with responsive alignment) */}
          <div 
            data-aos="fade-up"
            data-aos-offset="5"
            data-aos-delay="40"
            data-aos-duration="1000"
            className="w-full md:w-4/12 text-center md:text-left"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#334155] font-bold">Qualities</span>
            <h2 className="text-5xl font-serif text-[#9b586d] mt-2">What I Offer</h2>
          </div>

          {/* Right Cards Side (Cute & Fully Responsive Grid) */}
          <div 
            data-aos="fade-up"
            data-aos-offset="80"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="w-full md:w-8/12 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full"
          >
            {offerings.map((item, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center text-center bg-[#f4e9ec] p-6 border-2 border-white/60 rounded-2xl transition-all duration-300 ease-out hover:bg-white hover:border-[#b4647d]/20 hover:shadow-[0_15px_30px_-10px_rgba(180,100,125,0.2)] hover:-translate-y-1.5"
              >
                {/* Icon Box */}
                <div className="mb-4 p-3 bg-white text-[#b4647d] rounded-xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FFF5F8] group-hover:rotate-3">
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-sm font-bold text-[#334155] mb-2 px-2">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-[12px] text-[#334155]/75 font-medium leading-relaxed max-w-[200px]">
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