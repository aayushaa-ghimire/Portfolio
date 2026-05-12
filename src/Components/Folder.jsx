// import { useState } from 'react';

// const darkenColor = (hex, percent) => {
//   let color = hex.startsWith('#') ? hex.slice(1) : hex;
//   if (color.length === 3) {
//     color = color.split('').map(c => c + c).join('');
//   }
//   const num = parseInt(color, 16);
//   let r = Math.max(0, Math.min(255, Math.floor(((num >> 16) & 0xff) * (1 - percent))));
//   let g = Math.max(0, Math.min(255, Math.floor(((num >> 8) & 0xff) * (1 - percent))));
//   let b = Math.max(0, Math.min(255, Math.floor((num & 0xff) * (1 - percent))));
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
// };

// const Folder = ({ color = '#b4647d', size = 1, items = [], className = '' }) => {
//   const maxItems = 3;
//   const [open, setOpen] = useState(false);
//   const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));

//   const folderBackColor = darkenColor(color, 0.15);

//   const handleClick = () => {
//     setOpen(prev => !prev);
//     if (open) {
//       setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
//     }
//   };

//   const handlePaperMouseMove = (e, index) => {
//     if (!open) return;
//     const rect = e.currentTarget.getBoundingClientRect();
//     const offsetX = (e.clientX - (rect.left + rect.width / 2)) * 0.1;
//     const offsetY = (e.clientY - (rect.top + rect.height / 2)) * 0.1;
//     setPaperOffsets(prev => {
//       const newOffsets = [...prev];
//       newOffsets[index] = { x: offsetX, y: offsetY };
//       return newOffsets;
//     });
//   };

//   const getOpenTransform = index => {
//     if (index === 0) return 'translate(-115%, -65%) rotate(-12deg)';
//     if (index === 1) return 'translate(15%, -65%) rotate(12deg)';
//     if (index === 2) return 'translate(-50%, -95%) rotate(0deg)';
//     return '';
//   };

//   return (
//     <div style={{ transform: `scale(${size})`, zIndex: open ? 50 : 10 }} className={className}>
//       <div
//         className={`group relative transition-all duration-300 ease-out cursor-pointer ${
//           !open ? 'hover:-translate-y-3' : ''
//         }`}
//         style={{ transform: open ? 'translateY(-10px)' : undefined }}
//         onClick={handleClick}
//       >
//         {/* Back Flap - Darker shade for depth */}
//         <div
//           className="relative w-[120px] h-[90px] rounded-tr-[14px] rounded-br-[14px] rounded-bl-[14px]"
//           style={{ backgroundColor: folderBackColor }}
//         >
//           {/* Top Tab */}
//           <span
//             className="absolute bottom-[99%] left-0 w-[42px] h-[12px] rounded-t-[7px]"
//             style={{ backgroundColor: folderBackColor }}
//           ></span>

//           {/* Stacked Papers */}
//           {items.slice(0, maxItems).map((item, i) => {
//             const transformStyle = open
//               ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
//               : `translateX(-50%) translateY(${-i * 3}px)`;

//             return (
//               <div
//                 key={i}
//                 onMouseMove={e => handlePaperMouseMove(e, i)}
//                 onMouseLeave={() => setPaperOffsets(p => { p[i] = { x: 0, y: 0 }; return [...p]; })}
//                 className={`absolute z-20 bottom-[18%] left-1/2 transition-all duration-500 shadow-xl border border-black/[0.04] ${
//                   !open 
//                     ? 'translate-y-[8%] group-hover:translate-y-[-12%]' 
//                     : 'hover:scale-105 hover:z-50'
//                 }`}
//                 style={{
//                   width: '92%',
//                   height: '90%',
//                   transform: transformStyle,
//                   backgroundColor: 'white',
//                   borderRadius: '8px',
//                   overflow: 'hidden',
//                   transitionDelay: !open ? `${i * 40}ms` : '0ms' // Staggered peek-a-boo effect
//                 }}
//               >
//                 {item}
//               </div>
//             );
//           })}

//           {/* Front Flap - Dual Skew to create the "Pocket" look in image_9ec300.png */}
//           <div
//             className="absolute inset-0 z-30 transition-all duration-700 origin-bottom"
//             style={{
//               backgroundColor: color,
//               borderRadius: '4px 14px 14px 14px',
//               transform: open ? 'skewX(18deg) scaleY(0.35)' : 'none'
//             }}
//           />
//           <div
//             className="absolute inset-0 z-30 transition-all duration-700 origin-bottom"
//             style={{
//               backgroundColor: color,
//               borderRadius: '4px 14px 14px 14px',
//               transform: open ? 'skewX(-18deg) scaleY(0.35)' : 'none'
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Folder;


import { useState } from 'react';

const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color.split('').map(c => c + c).join('');
  }
  const num = parseInt(color, 16);
  let r = Math.max(0, Math.min(255, Math.floor(((num >> 16) & 0xff) * (1 - percent))));
  let g = Math.max(0, Math.min(255, Math.floor(((num >> 8) & 0xff) * (1 - percent))));
  let b = Math.max(0, Math.min(255, Math.floor((num & 0xff) * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder = ({ color = '#b4647d', size = 1, items = [], className = '' }) => {
  const maxItems = 3;
  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));

  const folderBackColor = darkenColor(color, 0.15);

  const handleClick = () => {
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e, index) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - (rect.left + rect.width / 2)) * 0.1;
    const offsetY = (e.clientY - (rect.top + rect.height / 2)) * 0.1;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const getOpenTransform = index => {
    // Adjusted Y-axis values to keep cards lower and closer to folder body
    if (index === 0) return 'translate(-110%, -20%) rotate(-12deg)';
    if (index === 1) return 'translate(10%, -20%) rotate(12deg)';
    if (index === 2) return 'translate(-50%, -40%) rotate(0deg)';
    return '';
  };

  return (
    <div style={{ transform: `scale(${size})`, zIndex: open ? 50 : 10 }} className={className}>
      <div
        className={`group relative transition-all duration-300 ease-out cursor-pointer ${
          !open ? 'hover:-translate-y-3' : ''
        }`}
        style={{ transform: open ? 'translateY(-10px)' : undefined }}
        onClick={handleClick}
      >
        {/* Back Flap */}
        <div
          className="relative w-[120px] h-[90px] rounded-tr-[14px] rounded-br-[14px] rounded-bl-[14px]"
          style={{ backgroundColor: folderBackColor }}
        >
          {/* Top Tab */}
          <span
            className="absolute bottom-[99%] left-0 w-[42px] h-[12px] rounded-t-[7px]"
            style={{ backgroundColor: folderBackColor }}
          ></span>

          {/* Stacked Papers */}
          {items.slice(0, maxItems).map((item, i) => {
            const transformStyle = open
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
              : `translateX(-50%) translateY(${-i * 3}px)`;

            return (
              <div
                key={i}
                onMouseMove={e => handlePaperMouseMove(e, i)}
                onMouseLeave={() => setPaperOffsets(p => { p[i] = { x: 0, y: 0 }; return [...p]; })}
                className={`absolute z-20 bottom-[18%] left-1/2 transition-all duration-500 shadow-xl border border-black/[0.04] ${
                  !open 
                    ? 'translate-y-[8%] group-hover:translate-y-[-12%]' 
                    : 'hover:scale-105 hover:z-50'
                }`}
                style={{
                  width: '92%',
                  height: '90%',
                  transform: transformStyle,
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transitionDelay: !open ? `${i * 40}ms` : '0ms'
                }}
              >
                {item}
              </div>
            );
          })}

          {/* Front Flap - Left Skew */}
          <div
            className="absolute inset-0 z-30 transition-all duration-700 origin-bottom"
            style={{
              backgroundColor: color,
              borderRadius: '4px 14px 14px 14px',
              transform: open ? 'skewX(18deg) scaleY(0.35)' : 'none'
            }}
          />
          {/* Front Flap - Right Skew */}
          <div
            className="absolute inset-0 z-30 transition-all duration-700 origin-bottom"
            style={{
              backgroundColor: color,
              borderRadius: '4px 14px 14px 14px',
              transform: open ? 'skewX(-18deg) scaleY(0.35)' : 'none'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Folder;