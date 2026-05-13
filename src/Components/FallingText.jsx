// import React, { useEffect, useRef, useState } from 'react';
// import Matter from 'matter-js';

// function FallingText() {
//   const containerRef = useRef(null);
//   const engineRef = useRef(Matter.Engine.create());
//   const constraintRef = useRef(null);
//   const [items, setItems] = useState([]);
  
//   const skills = [
//     "React", "Java", "Tailwind v4", "Vite", "UI/UX", 
//     "Generics", "Reflection", "Web Dev", "IntelliJ", "VS Code",
//     "Figma", "CSS3", "HTML5", "JavaScript", "OOP", "Spring",
//     "PostgreSQL", "Git", "Animations", "Responsive", "Frontend"
//   ];

//   useEffect(function() {
//     const Engine = Matter.Engine;
//     const World = Matter.World;
//     const Bodies = Matter.Bodies;
//     const Runner = Matter.Runner;

//     const engine = engineRef.current;
//     const width = containerRef.current.offsetWidth;
//     const height = containerRef.current.offsetHeight;

//     const floor = Bodies.rectangle(width / 2, height - 10, width, 20, { 
//       isStatic: true,
//       friction: 0.1 
//     });
//     const leftWall = Bodies.rectangle(-20, height / 2, 40, height, { isStatic: true });
//     const rightWall = Bodies.rectangle(width + 20, height / 2, 40, height, { isStatic: true });

//     const chipBodies = skills.map(function(skill, i) {
//       return Bodies.rectangle(
//         Math.random() * (width - 140) + 70,
//         -100 - (i * 50), 
//         130, 
//         45, 
//         { 
//           restitution: 0.6, 
//           friction: 0.1, 
//           chamfer: { radius: 22 },
//           label: skill 
//         }
//       );
//     });

//     const runner = Runner.create();
//     let requestID;

//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         Runner.run(runner, engine);
//         World.add(engine.world, [floor, leftWall, rightWall, ...chipBodies]);
        
//         function syncPhysics() {
//           const updatedItems = chipBodies.map(function(body) {
//             return {
//               name: body.label,
//               x: body.position.x,
//               y: body.position.y,
//               angle: body.angle,
//               id: body.id
//             };
//           });
//           setItems(updatedItems);
//           requestID = requestAnimationFrame(syncPhysics);
//         }
//         syncPhysics();
//         observer.disconnect(); // Stop observing once started
//       }
//     }, { threshold: 0.1 });

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return function() {
//       observer.disconnect();
//       cancelAnimationFrame(requestID);
//       Runner.stop(runner);
//       Engine.clear(engine);
//       World.clear(engine.world);
//     };
//   }, []);

//   function handlePointerDown(e) {
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const clickedBody = Matter.Query.point(engineRef.current.world.bodies, { x: x, y: y })[0];
    
//     if (clickedBody && !clickedBody.isStatic) {
//       const constraint = Matter.Constraint.create({
//         pointA: { x: x, y: y },
//         bodyB: clickedBody,
//         stiffness: 0.2,
//         damping: 0.1
//       });
//       constraintRef.current = constraint;
//       Matter.World.add(engineRef.current.world, constraint);
//     }
//   }

//   function handlePointerMove(e) {
//     if (constraintRef.current) {
//       const rect = containerRef.current.getBoundingClientRect();
//       constraintRef.current.pointA = { 
//         x: e.clientX - rect.left, 
//         y: e.clientY - rect.top 
//       };
//     }
//   }

//   function handlePointerUp() {
//     if (constraintRef.current) {
//       Matter.World.remove(engineRef.current.world, constraintRef.current);
//       constraintRef.current = null;
//     }
//   }

//   return (
//     <div className="flex flex-col items-center w-full min-h-[90vh] bg-[#FFF5F8]">
//       <div className="text-center mb-8">
//         <p className="font-['Poppins'] text-[10px] tracking-[0.6em] uppercase text-[#334155] font-bold opacity-60">
//           Toolkit
//         </p>
//         <h2 className="font-['Playfair_Display'] text-[#b4647d] text-5xl font-medium mt-4">
//           My Skills
//         </h2>
//       </div>

//       <div 
//         ref={containerRef} 
//         onPointerDown={handlePointerDown}
//         onPointerMove={handlePointerMove}
//         onPointerUp={handlePointerUp}
//         onPointerLeave={handlePointerUp}
//         className="relative w-[94%] max-w-7xl h-[80vh] overflow-hidden bg-white/70 backdrop-blur-3xl rounded-[40px] border-[10px] border-white shadow-[0_30px_80px_rgba(214,133,169,0.1)] cursor-grab active:cursor-grabbing"
//       >
//         {items.map(function(item) {
//           return (
//             <div
//               key={item.id}
//               className="absolute px-6 py-2 bg-white text-[#D685A9] border-2 border-[#D685A9]/30 rounded-full font-bold text-[12px] uppercase tracking-wider select-none shadow-sm transition-transform active:scale-95"
//               style={{
//                 left: 0,
//                 top: 0,
//                 width: '130px',
//                 textAlign: 'center',
//                 transform: `translate(${item.x - 65}px, ${item.y - 22}px) rotate(${item.angle}rad)`,
//                 willChange: 'transform',
//                 zIndex: 10,
//                 pointerEvents: 'none'
//               }}
//             >
//               {item.name}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default FallingText;


import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

function FallingText() {
  const containerRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const constraintRef = useRef(null);
  const [items, setItems] = useState([]);
  
  const skills = [
    "React", "Java", "Tailwind v4", "Vite", "UI/UX", 
    "Generics", "Reflection", "Web Dev", "IntelliJ", "VS Code",
    "Figma", "CSS3", "HTML5", "JavaScript", "OOP", "Spring",
    "PostgreSQL", "Git", "Animations", "Responsive", "Frontend"
  ];

  // Refined smaller chip dimensions
  const CHIP_WIDTH = 136;
  const CHIP_HEIGHT = 46;

  useEffect(function() {
    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Runner = Matter.Runner;

    const engine = engineRef.current;
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;

    const floor = Bodies.rectangle(width / 2, height + 20, width, 40, { 
      isStatic: true, 
      friction: 0.4 
    });
    const leftWall = Bodies.rectangle(-20, height / 2, 40, height, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 20, height / 2, 40, height, { isStatic: true });

    const chipBodies = skills.map(function(skill, i) {
      return Bodies.rectangle(
        Math.random() * (width - CHIP_WIDTH) + CHIP_WIDTH / 2,
        -100 - (i * 70), 
        CHIP_WIDTH, 
        CHIP_HEIGHT, 
        { 
          restitution: 0.4, 
          friction: 0.2, 
          chamfer: { radius: 20 },
          label: skill 
        }
      );
    });

    const runner = Runner.create();
    let requestID;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        Runner.run(runner, engine);
        World.add(engine.world, [floor, leftWall, rightWall, ...chipBodies]);
        
        function syncPhysics() {
          const updatedItems = chipBodies.map(function(body) {
            return {
              name: body.label,
              x: body.position.x,
              y: body.position.y,
              angle: body.angle,
              id: body.id
            };
          });
          setItems(updatedItems);
          requestID = requestAnimationFrame(syncPhysics);
        }
        syncPhysics();
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return function() {
      observer.disconnect();
      cancelAnimationFrame(requestID);
      Runner.stop(runner);
      Engine.clear(engine);
      World.clear(engine.world);
    };
  }, []);

  function handlePointerDown(e) {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const clickedBody = Matter.Query.point(engineRef.current.world.bodies, { x: x, y: y })[0];
    
    if (clickedBody && !clickedBody.isStatic) {
      const constraint = Matter.Constraint.create({
        pointA: { x: x, y: y },
        bodyB: clickedBody,
        stiffness: 0.2,
        damping: 0.1
      });
      constraintRef.current = constraint;
      Matter.World.add(engineRef.current.world, constraint);
    }
  }

  function handlePointerMove(e) {
    if (constraintRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      constraintRef.current.pointA = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
    }
  }

  function handlePointerUp() {
    if (constraintRef.current) {
      Matter.World.remove(engineRef.current.world, constraintRef.current);
      constraintRef.current = null;
    }
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#FFF5F8] py-16">
      <div className="text-center mb-12">
        <p className="font-['Poppins'] text-[10px] tracking-[0.6em] uppercase text-[#b4647d] font-normal opacity-60">
          Tech Stack
        </p>
        <h2 className="font-['Playfair_Display'] text-[#334155] text-5xl font-normal mt-2">
          My <span className="font-['Playfair_Display'] text-[#b4647d] text-5xl font-medium mt-4"> Skills</span>
        </h2>
      </div>

      <div 
        ref={containerRef} 
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative w-[85%] max-w-4xl h-[75vh] overflow-hidden bg-white/60 backdrop-blur-3xl rounded-[3.5rem] border-[16px] border-white shadow-[0_40px_100px_-20px_rgba(180,100,125,0.12)] cursor-grab active:cursor-grabbing"
      >
        {items.map(function(item) {
          return (
            <div
              key={item.id}
              className="absolute flex items-center justify-center bg-white text-[#b4647d] border border-[#b4647d]/10 rounded-full font-normal text-[10px] uppercase tracking-[0.2em] select-none shadow-sm transition-transform font-['Poppins']"
              style={{
                left: 0,
                top: 0,
                width: `${CHIP_WIDTH}px`,
                height: `${CHIP_HEIGHT}px`,
                transform: `translate(${item.x - CHIP_WIDTH / 2}px, ${item.y - CHIP_HEIGHT / 2}px) rotate(${item.angle}rad)`,
                willChange: 'transform',
                zIndex: 10,
                pointerEvents: 'none'
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FallingText;