import React from 'react';

const ParallaxCutout = () => {
  return (
    /* - bg-[#fce4ec]: Using your heavy pink theme.
       - h-screen: Full height section.
       - overflow-hidden: Prevents letters from creating a horizontal scrollbar.
    */
    <div className="relative w-full h-screen bg-[#fce4ec] flex items-center justify-center overflow-hidden">
      <h1 
        /* - text-[18vw]: Reduced from 28vw so the full "Aayusha" fits on desktop.
           - leading-none: Removes extra vertical spacing.
           - font-black: Keeps the cutout thick for the image.
        */
        className="select-none text-[50vw] uppercase tracking-tighter leading-none m-0 p-0 text-center w-full"
        style={{ 
          fontFamily: "'Poppins', sans-serif", 
          fontWeight: 900, 
          backgroundImage: "url('/textcutout.jpeg')",
          backgroundAttachment: 'fixed',
          backgroundPosition: "bottom",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          /* Force display if clipping occurs */
          display: 'block'
        }}
      >
        🎀
      </h1> 
    </div>
  );
};

export default ParallaxCutout;