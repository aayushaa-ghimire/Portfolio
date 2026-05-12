// import React from 'react';

// const ParallaxCutout = () => {
//   return (
   
//     <div className="relative pt-20 pb-40 w-full h-screen bg-[#fce4ec] flex items-center justify-center ">
//       <h1 
      
//         className="select-none text-[48vw] uppercase tracking-tighter leading-none m-0 p-0 text-center w-full"
//         style={{ 
//           fontFamily: "'Poppins', sans-serif",  
//           fontWeight: 900, 
//           backgroundImage: "url('/img1.jpeg')",
//           backgroundAttachment: 'fixed',
//           backgroundPosition: "center",
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           backgroundClip: 'text',
//           /* Force display if clipping occurs */
//           display: 'block'
//         }}
//       >
//         🎀
//       </h1> 
//     </div>
//   );
// };

// export default ParallaxCutout;

import React from 'react';

const ParallaxCutout = () => {
  return (
    /* Changed h-screen to min-h-screen and removed pb-40 to prevent overflow issues */
    <div className="relative w-full min-h-screen bg-[#fce4ec] flex items-center justify-center px-10 py-20 box-border">
      <h1 
        className="select-none text-[40vw] uppercase tracking-tighter leading-none m-0 p-0 text-center w-full block"
        style={{ 
          fontFamily: "'Poppins', sans-serif",  
          /* Using normal weight as per design preference */
          fontWeight: 400, 
          backgroundImage: "url('/cutout.jpeg')",
          backgroundAttachment: 'fixed',
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        🎀
      </h1> 
    </div>
  );
};

export default ParallaxCutout;