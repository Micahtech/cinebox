import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MobileNavbar from './components/MobileNavbar';
import './App.css';
import ServicesSection from './components/ServicesSection';
import ReelsPortfolio from './components/ReelsPortfolio';

function App() {
  return (
    <Router>
      <div className="background-wrapper">
        <Navbar />
        <Hero />
        <ServicesSection />
<ReelsPortfolio />
      </div>

      <MobileNavbar />
    </Router>
  );
}

export default App;
