import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Navbar from './components/navbar';
import Home from './pages/home';
import Services from './pages/Services';
import Testimonials from './pages/testinomial';
import Contact from './pages/Contact';
import Footer from './components/footer';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 overflow-x-hidden  max-w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        
        {/* Sticky Call Button */}
        <a
          href="tel:18002022413"
          className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Phone className="h-5 w-5" />
          <span className="font-semibold">Book Now</span>
        </a>
      </div>
    </Router>
  );
}

export default App;