import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Compoment/Nav";
import Home from "./Compoment/pages/Home";
import Menu from "./Compoment/pages/Menu";
import Contact from "./Compoment/pages/Contact";
import About from "./Compoment/pages/About";
import Login from "./Compoment/pages/Login";
import Hero from "./Compoment/pages/Hero";
import FeaturedProductsSlider from "./Compoment/pages/Featureproduct";
import ShopByCategory from "./Compoment/pages/ShopByCategory";  // <-- Import here

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar shows on all pages */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedProductsSlider />
              <ShopByCategory /> {/* <-- Add ShopByCategory here */}
            </>
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
