import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Services from './pages/services';
import Navbar from './pages/Navbar';
import Brand from './pages/Brand';
import Contacts from './pages/Contacts';
import Footer from './pages/Footer';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Home from './pages/home';
function App() {
  const brands = [
    "Voltas", "Daikin", "Samsung", "Haier", "Panasonic", "Blue Star",
    "Carrier", "Godrej", "LG", "Lloyd"
  ];
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 overflow-x-hidden  max-w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About  />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/:brandname" element={<Brand />} />
          <Route path="/privacy" element={<Privacy />} />
          
        </Routes>
        <Footer />
        
        {/* Sticky Call Button */}
        <a
          href="tel:18002022413"
          className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Phone className="h-5 w-5" />
          <span className="font-semibold">1800-202-2413</span>
        </a>
      </div>
    </Router>
  );
}

export default App;