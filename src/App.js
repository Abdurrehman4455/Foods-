import React from 'react';
import {  HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Route from react-router-dom
import Navbar from './Compoment/Nav';  // Ensure to import Navbar correctly
  // Ensure to import Home correctly
import Menu from './Compoment/pages/Menu';  // Ensure to import Menu correctly
import Contact from './Compoment/pages/Contact';  // Ensure to import Contact correctly
import About from './Compoment/pages/About';  // Ensure to import About correctly
import Home from './Compoment/pages/Home';

function App() {
  return (
    <div>
    <Router>
      <Navbar />  {/* Navbar is placed outside the Routes */}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    
    
    </div>
    
    
  );
}

export default App;
