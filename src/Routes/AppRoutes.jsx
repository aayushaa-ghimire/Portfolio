import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
