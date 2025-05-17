import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Compoment/Nav';
import Home from './Compoment/pages/Home';
import Menu from './Compoment/pages/Menu';
import Contact from './Compoment/pages/Contact';
import About from './Compoment/pages/About';
import Login from './Compoment/pages/Login';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar placed outside Routes so it shows on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
