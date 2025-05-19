import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const categories = [
  "Shirts",
  "Pants",
  "Men",
  "Women",
  "Accessories",
  "Sale",
];

const sidebarVariants = {
  hidden: {
    x: "-100%",
    opacity: 0,
    scale: 0.95,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    scale: 0.95,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const sidebarItemVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  hover: {
    y: -6,
    backgroundColor: "#ffffff",
    color: "#000000",
    borderRadius: "0.375rem",
    transition: { duration: 0.15, ease: "easeOut" },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { opacity: 0.8, backdropFilter: "blur(3px)", transition: { duration: 0.3 } },
  exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.3 } },
};

const navLinkHover = {
  scale: 1.1,
  color: "#facc15",
  textShadow: "0 0 20px #facc15, 0 0 30px #facc15",
  filter: "drop-shadow(0 0 10px #facc15)",
  transition: { duration: 0.3, ease: "easeInOut" },
};

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const cartItemCount = 0;

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 bg-black text-white shadow-lg z-50"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center p-4 md:px-8 gap-4 md:gap-0">
          {/* Hamburger Left */}
          <button
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            className="text-white focus:outline-none mr-4 md:mr-6"
          >
            {sidebarOpen ? (
              <FiX size={28} className="text-gray-400" />
            ) : (
              <FiMenu size={28} />
            )}
          </button>

          {/* Logo */}
          <div className="text-3xl font-extrabold cursor-pointer select-none tracking-wide flex-shrink-0 mr-8 whitespace-nowrap">
            <Link to="/" className="hover:text-gray-400 transition">
              TeeStore
            </Link>
          </div>

          {/* Search Bar Center */}
          <div className="flex-grow max-w-full md:max-w-lg mx-auto w-full md:w-auto">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <FiSearch
                  size={22}
                  className="text-gray-600 group-focus-within:text-yellow-400 transition-colors duration-300"
                />
              </div>
              <motion.input
                id="search"
                type="search"
                name="search"
                placeholder="Search products..."
                className="w-full bg-white border border-gray-300 rounded-full py-3 pl-14 pr-5
                 text-black placeholder-gray-500
                 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:border-yellow-400
                 transition duration-300 ease-in-out
                 hover:bg-white
                 focus:scale-105"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                whileHover={{ scale: 1.03 }}
                whileFocus={{ scale: 1.05, boxShadow: "0 0 20px #facc15, 0 0 30px #facc15" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Right Icons: Cart, Login/Register */}
          <div className="ml-0 md:ml-6 flex items-center space-x-4 md:space-x-6 whitespace-nowrap">
            <MotionLink
              to="/cart"
              className="relative flex items-center space-x-1 text-white"
              aria-label="Cart"
              whileHover={navLinkHover}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FiShoppingCart size={26} />
              <span className="hidden md:inline">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-white text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </MotionLink>

            <MotionLink
              to="/login"
              className="flex items-center space-x-1 text-white"
              aria-label="Login"
              whileHover={navLinkHover}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FiUser size={24} />
              <span className="hidden md:inline">Login</span>
            </MotionLink>

            <MotionLink
              to="/register"
              className="flex items-center space-x-1 text-white"
              aria-label="Register"
              whileHover={navLinkHover}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FiUser size={24} />
              <span className="hidden md:inline">Register</span>
            </MotionLink>
          </div>
        </div>
      </motion.header>

      {/* Sidebar & Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              onClick={toggleSidebar}
              className="fixed inset-0 bg-black z-40"
            />
            {/* Sidebar */}
            <motion.aside
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
              className="fixed top-0 left-0 bottom-0 w-64 p-8 flex flex-col z-50 bg-black text-white shadow-lg"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <motion.button
                onClick={toggleSidebar}
                aria-label="Close menu"
                className="self-end mb-6 focus:outline-none text-white hover:text-yellow-400 rounded-full p-1"
                whileHover={{ scale: 1.4, color: "#facc15", rotate: 15 }}
                whileTap={{ scale: 0.9, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <FiX size={28} />
              </motion.button>

              <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2 select-none">
                Categories
              </h2>

              <motion.nav className="flex flex-col space-y-2 text-lg font-medium">
                {categories.map((cat) => (
                  <motion.a
                    key={cat}
                    href={`#${cat.toLowerCase()}`}
                    className="cursor-pointer px-2 py-2 rounded transition"
                    onClick={toggleSidebar}
                    variants={sidebarItemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    tabIndex={0}
                  >
                    {cat}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Push page content down so it's not hidden by fixed navbar */}
      <div className="pt-16" />
    </>
  );
};

export default Nav;
