

// import './App.css';
// import AppRoutes from './Routes/AppRoutes';
// import { useEffect, useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import { Loader } from "./components/Loader";


// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import ScrollToTop from './Components/ScrollToTop';
// import CustomCursor from './Components/CustonCursor';
// import Preloader from './Components/Preloader';

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [showContent, setShowContent] = useState(false);

//   useEffect(function() {
//     if (!isLoading) {
//       // 850ms gives the preloader slide-up animation enough time to clear the viewport
//       const animationTimeout = setTimeout(function() {
//         setShowContent(true);
        
//         // Boot all scroll animations perfectly right as the screen clears
//         AOS.init({
//           duration: 1200,
//           once: false,
//           easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
//         });
//         AOS.refresh();
//       }, 850); 

//       return function() {
//         clearTimeout(animationTimeout);
//       };
//     }
//   }, [isLoading]);

//   return (
//     <div>
//       <AnimatePresence mode="wait">
//         {isLoading && <Preloader finishLoading={function() { setIsLoading(false); }} />}
//       </AnimatePresence>

//       <ScrollToTop />
//       <CustomCursor />
      
//       {/* Wrapper maintains scroll control and smooth display handling */}
//       <div className={isLoading ? "h-screen overflow-hidden opacity-0" : "opacity-100"}>
//         {showContent && <AppRoutes />}
//       </div>
//     </div>
//   );
// }

// export default App;



import './App.css';
import AppRoutes from './Routes/AppRoutes';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './Components/ScrollToTop';
import CustomCursor from './Components/CustonCursor';
import Preloader from './Components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(function() {
    if (!isLoading) {
      const animationTimeout = setTimeout(function() {
        setShowContent(true);
        
        AOS.init({
          duration: 1200,
          once: false,
          easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
        });
        AOS.refresh();
      }, 850); 

      return function() {
        clearTimeout(animationTimeout);
      };
    }
  }, [isLoading]);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader finishLoading={function() { setIsLoading(false); }} />}
      </AnimatePresence>

      <ScrollToTop />
      <CustomCursor />
      
      <div className={isLoading ? "h-screen overflow-hidden opacity-0" : "opacity-100"}>
        {showContent && <AppRoutes />}
      </div>
    </div>
  );
}

export default App;