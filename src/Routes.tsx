import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewClient } from './pages/NewClient';

export function AppRoutes() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newclient" element={<NewClient />} />
      </Routes>
    </Router>
  )
}