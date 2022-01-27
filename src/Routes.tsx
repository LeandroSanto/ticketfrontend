import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SideBar } from './components/SideBar';

import { Home } from './pages/Home';
import { NewClient } from './pages/NewClient';

import './global.css'

export function AppRoutes() {
  return(
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newclient" element={<NewClient />} />
      </Routes>
    </Router>
  )
}