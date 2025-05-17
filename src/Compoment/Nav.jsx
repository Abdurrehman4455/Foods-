import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when the screen size is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false); // Close the mobile menu on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-orange-600 p-4 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white text-2xl font-extrabold hover:text-yellow-400">
            <span className="font-semibold">Foodie</span> <span className="text-yellow-400">Delight</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
         
          <Link to="/menu" className="text-white text-lg hover:text-yellow-400">
            Menu
          </Link>
          <Link to="/about" className="text-white text-lg hover:text-yellow-400">
            About
          </Link>
          <Link to="/contact" className="text-white text-lg hover:text-yellow-400">
            Contact
          </Link>
          <Link to="/login" className="text-white text-lg hover:text-yellow-400">
          Login
          </Link>
        </div>

        {/* Mobile Menu Icon (Hamburger Button) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl"
          >
            {/* Hamburger icon or close icon (SVGs) */}
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-2 h-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
    <div
  className={`${
    isMobileMenuOpen ? 'block' : 'hidden'
  } md:hidden p-6 space-y-6 rounded-b-lg shadow-lg transition-all duration-300 ease-in-out
    bg-gradient-to-br from-orange-500 via-yellow-400 to-yellow-300`}
>
  <Link
    to="/"
    className="text-white text-lg font-medium hover:text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 rounded"
  >
    Home
  </Link>
  <Link
    to="/menu"
    className="text-white text-lg font-medium hover:text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 rounded"
  >
    Menu
  </Link>
  <Link
    to="/about"
    className="text-white text-lg font-medium hover:text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 rounded"
  >
    About
  </Link>
  <Link
    to="/contact"
    className="text-white text-lg font-medium hover:text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 rounded"
  >
    Contact
  </Link>
  <Link
    to="/login"
    className="text-white text-lg font-medium hover:text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 rounded"
  >
    Login
  </Link>
</div>


    </nav>
  );
};

export default Navbar;
