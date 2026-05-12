import { useState } from 'react';

const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) color = color.split('').map(c => c + c).join('');
  const num = parseInt(color, 16);
  let r = Math.max(0, Math.min(255, Math.floor(((num >> 16) & 0xff) * (1 - percent))));
  let g = Math.max(0, Math.min(255, Math.floor(((num >> 8) & 0xff) * (1 - percent))));
  let b = Math.max(0, Math.min(255, Math.floor((num & 0xff) * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder = ({ color = '#b4647d', size = 1, items = [], className = '' }) => {
  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: 3 }, () => ({ x: 0, y: 0 })));

  const folderBackColor = darkenColor(color, 0.12);

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
    if (index === 0) return 'translate(-110%, -60%) rotate(-10deg)';
    if (index === 1) return 'translate(10%, -60%) rotate(10deg)';
    if (index === 2) return 'translate(-50%, -90%) rotate(0deg)';
    return '';
  };

  return (
    <div style={{ transform: `scale(${size})`, zIndex: open ? 50 : 1 }} className={`${className} relative transition-all duration-500`}>
      <div className="group relative cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="relative w-[115px] h-[88px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px]" style={{ backgroundColor: folderBackColor }}>
          <span className="absolute bottom-[99%] left-0 w-[38px] h-[10px] rounded-t-[5px]" style={{ backgroundColor: folderBackColor }}></span>
          
          {items.slice(0, 3).map((item, i) => (
            <div
              key={i}
              onMouseMove={e => handlePaperMouseMove(e, i)}
              onMouseLeave={() => setPaperOffsets(p => { p[i] = {x:0,y:0}; return [...p]; })}
              className={`absolute z-20 bottom-[15%] left-1/2 transition-all duration-500 shadow-xl border border-black/[0.03] ${!open ? 'transform -translate-x-1/2 translate-y-[5%] group-hover:translate-y-0' : 'hover:scale-105 hover:z-50'}`}
              style={{
                width: '90%', height: '85%',
                transform: open ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)` : 'translateX(-50%)',
                backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden'
              }}
            >
              {item}
            </div>
          ))}

          <div className="absolute inset-0 z-30 transition-all duration-500 origin-bottom" style={{ backgroundColor: color, borderRadius: '4px 12px 12px 12px', transform: open ? 'skewX(15deg) scaleY(0.4)' : 'none' }} />
          <div className="absolute inset-0 z-30 transition-all duration-500 origin-bottom" style={{ backgroundColor: color, borderRadius: '4px 12px 12px 12px', transform: open ? 'skewX(-15deg) scaleY(0.4)' : 'none' }} />
        </div>
      </div>
    </div>
  );
};

export default Folder;