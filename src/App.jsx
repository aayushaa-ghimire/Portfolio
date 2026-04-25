import './App.css';
import AppRoutes from './Routes/AppRoutes';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  );
}

export default App;
