import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import MainLayout from '../Layouts/MainLayout';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
