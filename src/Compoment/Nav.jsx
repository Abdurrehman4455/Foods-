import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MotionLink = motion(Link);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-orange-600 p-4 shadow-md fixed w-full top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo with fade-in */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="text-white text-2xl font-extrabold hover:text-yellow-400 select-none"
          >
            <span className="font-semibold">Foodie</span>{" "}
            <span className="text-yellow-400">Delight</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Menu", "About", "Contact"].map((item) => (
            <MotionLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-white text-lg hover:text-yellow-400 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
            </MotionLink>
          ))}
        </div>

        {/* Mobile Menu Icon (Hamburger Button) */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMobileMenu}
            className="text-white text-2xl focus:outline-none"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
              animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-green-700 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="p-4 space-y-4 flex flex-col">
              {[
                { name: "Home", path: "/" },
                { name: "Menu", path: "/menu" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map(({ name, path }) => (
                <MotionLink
                  key={name}
                  to={path}
                  className="text-white text-lg hover:text-yellow-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {name}
                </MotionLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
