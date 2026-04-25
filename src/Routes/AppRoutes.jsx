import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
