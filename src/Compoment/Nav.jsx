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
    borderRadius: "0.5rem",
    transition: { duration: 0.15, ease: "easeOut" },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { opacity: 0.85, backdropFilter: "blur(4px)", transition: { duration: 0.3 } },
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
        <div className="max-w-7xl mx-auto flex items-center justify-between p-3 md:p-4 gap-3 md:gap-4">
          {/* Left section: Hamburger + Logo */}
          <div className="flex items-center gap-3 flex-shrink-0 min-w-[140px] md:min-w-[150px]">
            <button
              onClick={toggleSidebar}
              aria-label="Toggle menu"
              className="text-white focus:outline-none"
              style={{ padding: "6px" }}
            >
              {sidebarOpen ? (
                <FiX size={28} className="text-yellow-400" />
              ) : (
                <FiMenu size={28} />
              )}
            </button>
            <Link
              to="/"
              className="text-2xl sm:text-3xl font-extrabold cursor-pointer select-none tracking-wide hover:text-yellow-400 transition whitespace-nowrap"
              style={{ userSelect: "none" }}
            >
              TeeStore
            </Link>
          </div>

          {/* Center: Search Bar — VISIBLE ONLY ON MD+ */}
          <div className="flex-grow max-w-full md:max-w-lg px-2 sm:px-4 hidden md:block">
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
                 focus:scale-105 text-sm sm:text-base"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                whileHover={{ scale: 1.03 }}
                whileFocus={{
                  scale: 1.05,
                  boxShadow: "0 0 20px #facc15, 0 0 30px #facc15",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Right section: Icons */}
          <div className="flex items-center gap-4 min-w-[120px] justify-end text-sm sm:text-base">
            <MotionLink
              to="/cart"
              className="relative flex items-center space-x-1 text-white select-none"
              aria-label="Cart"
              whileHover={navLinkHover}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FiShoppingCart size={24} />
              <span className="hidden sm:inline">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </MotionLink>

            <MotionLink
              to="/login"
              className="flex items-center space-x-1 text-white select-none"
              aria-label="Login"
              whileHover={navLinkHover}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FiUser size={22} />
              <span className="hidden sm:inline">Login</span>
            </MotionLink>

            <MotionLink
              to="/register"
              className="flex items-center space-x-1 text-white select-none"
              aria-label="Register"
              whileHover={navLinkHover}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FiUser size={22} />
              <span className="hidden sm:inline">Register</span>
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
              className="fixed inset-0 bg-black bg-opacity-80 z-40 backdrop-blur-sm"
            />
            {/* Sidebar */}
            <motion.aside
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
              className="fixed top-0 left-0 bottom-0 w-72 sm:w-64 p-6 sm:p-10 flex flex-col z-50 bg-black text-white shadow-2xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <motion.button
                onClick={toggleSidebar}
                aria-label="Close menu"
                className="self-end mb-6 focus:outline-none text-white hover:text-yellow-400 rounded-full p-2"
                whileHover={{ scale: 1.4, color: "#facc15", rotate: 15 }}
                whileTap={{ scale: 0.9, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <FiX size={28} />
              </motion.button>

              {/* SEARCH BAR - MOBILE ONLY */}
              <div className="mb-8 md:hidden">
                <label htmlFor="sidebar-search" className="sr-only">
                  Search products
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FiSearch
                      size={20}
                      className="text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-300"
                    />
                  </div>
                  <motion.input
                    id="sidebar-search"
                    type="search"
                    name="search"
                    placeholder="Search products..."
                    className="w-full bg-white border border-gray-300 rounded-full py-2 pl-10 pr-4
                     text-black placeholder-gray-500
                     focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:border-yellow-400
                     transition duration-300 ease-in-out
                     hover:bg-white
                     focus:scale-105 text-base"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                    whileHover={{ scale: 1.03 }}
                    whileFocus={{
                      scale: 1.05,
                      boxShadow: "0 0 20px #facc15, 0 0 30px #facc15",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </div>
              </div>

              <h2 className="text-3xl sm:text-2xl font-semibold mb-6 border-b border-gray-700 pb-3 select-none tracking-wide">
                Categories
              </h2>

              <motion.nav className="flex flex-col space-y-4 text-xl sm:text-lg font-semibold">
                {categories.map((cat) => (
                  <motion.a
                    key={cat}
                    href={`#${cat.toLowerCase()}`}
                    className="cursor-pointer px-4 py-3 rounded-lg transition select-none"
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
      <div className="pt-16 sm:pt-20" />
    </>
  );
};

export default Nav;
