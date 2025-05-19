import React, { useState, useRef } from "react";
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
    x: "-110%",
    opacity: 0,
    transition: { duration: 0.25, ease: "easeInOut" },
    boxShadow: "none",
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 30,
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
    boxShadow: "0 0 15px 2px rgba(255, 255, 255, 0.3)",
  },
  exit: {
    x: "-110%",
    opacity: 0,
    transition: { duration: 0.25, ease: "easeInOut" },
    boxShadow: "none",
  },
};

const overlayVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.3 } },
  visible: { opacity: 0.85, backdropFilter: "blur(6px)", transition: { duration: 0.3 } },
  exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.3 } },
};

const categoryButtonVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

const navLinkHover = {
  scale: 1.12,
  rotateX: 7,
  rotateY: -7,
  textShadow: "0 0 12px rgba(255, 255, 255, 0.8)",
  filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))",
  transition: { duration: 0.25, ease: "easeInOut" },
};

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const sliderRef = useRef(null);

  const cartItemCount = 3;

  const handleDragEnd = () => {
    if (!sliderRef.current) return;

    const itemHeight = 56;
    const scrollTop = sliderRef.current.scrollTop;
    const snapIndex = Math.round(scrollTop / itemHeight);
    sliderRef.current.scrollTo({
      top: snapIndex * itemHeight,
      behavior: "auto",
    });
  };

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.25, ease: "linear" }}
        className="fixed top-0 left-0 right-0 bg-black text-white shadow-lg z-50"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between p-3 md:p-4 gap-3 md:gap-4">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-3 flex-shrink-0 min-w-[140px] md:min-w-[150px]">
            <button
              onClick={toggleSidebar}
              aria-label="Toggle menu"
              className="text-white focus:outline-none p-1 rounded hover:bg-gray-800 transition duration-150"
            >
              {sidebarOpen ? (
                <FiX size={28} className="text-white" />
              ) : (
                <FiMenu size={28} className="text-white" />
              )}
            </button>
            <MotionLink
              to="/"
              className="text-2xl sm:text-3xl font-extrabold cursor-pointer select-none tracking-wide transition duration-150 ease-linear whitespace-nowrap"
              style={{ userSelect: "none" }}
              whileHover={navLinkHover}
              whileTap={{ scale: 0.95, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 0.25 }}
            >
              TeeStore
            </MotionLink>
          </div>

          {/* Center: Search Bar — only on md+ */}
          <div className="flex-grow max-w-full md:max-w-lg px-2 sm:px-4 hidden md:block">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <FiSearch
                  size={22}
                  className="text-gray-400 group-focus-within:text-white transition-colors duration-150"
                />
              </div>
              <motion.input
                id="search"
                type="search"
                name="search"
                placeholder="Search products..."
                className="w-full bg-black border border-gray-700 rounded-full py-3 pl-14 pr-5
                 text-white placeholder-gray-500
                 focus:outline-none focus:ring-4 focus:ring-white focus:border-white
                 transition duration-150 ease-linear
                 hover:bg-black
                 focus:scale-105 text-sm sm:text-base"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                whileHover={{ scale: 1.03 }}
                whileFocus={{
                  scale: 1.05,
                  boxShadow: "0 0 12px rgba(255,255,255,0.8)",
                }}
                transition={{ duration: 0.15, ease: "linear" }}
              />
            </div>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4 min-w-[120px] justify-end text-sm sm:text-base">
            <MotionLink
              to="/cart"
              className="relative flex items-center space-x-1 text-white select-none"
              aria-label="Cart"
              whileHover={navLinkHover}
              whileTap={{ scale: 0.95, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 0.25 }}
            >
              <FiShoppingCart size={24} />
              <span className="hidden sm:inline">Cart</span>
              {cartItemCount > 0 && (
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="absolute -top-2 -right-3 bg-white text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {cartItemCount}
                </motion.span>
              )}
            </MotionLink>

            <MotionLink
              to="/login"
              className="flex items-center space-x-1 text-white select-none"
              aria-label="Login"
              whileHover={navLinkHover}
              whileTap={{ scale: 0.95, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 0.25 }}
            >
              <FiUser size={22} />
              <span className="hidden sm:inline">Login</span>
            </MotionLink>

            <MotionLink
              to="/register"
              className="flex items-center space-x-1 text-white select-none"
              aria-label="Register"
              whileHover={navLinkHover}
              whileTap={{ scale: 0.95, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 0.25 }}
            >
              <FiUser size={22} />
              <span className="hidden sm:inline">Register</span>
            </MotionLink>
          </div>
        </div>

        {/* Animated nav links with underline */}
        <nav className="hidden md:flex justify-center space-x-8 border-t border-gray-800 pt-2">
          {categories.map((cat) => (
            <motion.div
              key={cat}
              className="relative cursor-pointer text-white font-semibold px-2 py-1 select-none"
              whileHover={{
                scale: 1.1,
                rotateX: 7,
                rotateY: -7,
                textShadow: "0 0 12px rgba(255, 255, 255, 0.8)",
                filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))",
              }}
              whileTap={{ scale: 0.95, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <a href={`#${cat.toLowerCase()}`} className="relative z-10">
                {cat}
              </a>
              {/* Underline */}
              <motion.span
                className="absolute bottom-0 left-0 h-1 bg-white rounded"
                variants={{
                  hidden: { width: 0, opacity: 0 },
                  visible: { width: "100%", opacity: 1, transition: { duration: 0.15, ease: "linear" } },
                }}
                initial="hidden"
                whileHover="visible"
              />
            </motion.div>
          ))}
        </nav>
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
              className="fixed inset-0 bg-black bg-opacity-85 z-40 backdrop-blur-sm"
            />
            {/* Sidebar */}
            <motion.aside
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
              className="fixed top-0 left-0 bottom-0 w-72 sm:w-64 p-6 sm:p-10 flex flex-col z-50 bg-black text-white shadow-xl"
              style={{
                fontFamily: "'Poppins', sans-serif",
                boxShadow: sidebarOpen ? "0 0 15px 2px rgba(255, 255, 255, 0.3)" : "none",
              }}
            >
              <motion.button
                onClick={toggleSidebar}
                aria-label="Close menu"
                className="self-end mb-6 focus:outline-none text-white hover:text-gray-300 rounded-full p-2"
                whileHover={{ scale: 1.3, rotate: 15 }}
                whileTap={{ scale: 0.9, rotate: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 15, duration: 0.15 }}
              >
                <FiX size={28} />
              </motion.button>

              {/* SEARCH BAR - MOBILE ONLY */}
              <div className="mb-6 md:hidden">
                <label htmlFor="sidebar-search" className="sr-only">
                  Search products
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FiSearch
                      size={20}
                      className="text-gray-400 group-focus-within:text-gray-200 transition-colors duration-150"
                    />
                  </div>
                  <motion.input
                    id="sidebar-search"
                    type="search"
                    name="search"
                    placeholder="Search products..."
                    className="w-full bg-black border border-gray-700 rounded-full py-2 pl-10 pr-4
                     text-white placeholder-gray-500
                     focus:outline-none focus:ring-4 focus:ring-gray-300 focus:border-gray-300
                     transition duration-150 ease-linear
                     hover:bg-black
                     focus:scale-105 text-base"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                    whileHover={{ scale: 1.03 }}
                    whileFocus={{
                      scale: 1.05,
                      boxShadow: "0 0 12px rgba(255,255,255,0.8)",
                    }}
                    transition={{ duration: 0.15, ease: "linear" }}
                  />
                </div>
              </div>

              {/* Vertical draggable slider for categories */}
              <motion.div
                ref={sliderRef}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-200px)] pr-2"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(255, 255, 255, 0.5) transparent",
                  perspective: 800,
                }}
              >
                {categories.map((cat, idx) => {
                  const selected = selectedCategory === idx;
                  return (
                    <motion.button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(idx);
                        toggleSidebar();
                      }}
                      variants={categoryButtonVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{
                        scale: 1.05,
                        rotateX: 7,
                        rotateY: -7,
                        backgroundColor: selected ? "#fff" : "#000",
                        color: selected ? "#000" : "#fff",
                        boxShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                      whileTap={{ scale: 0.95, rotateX: 0, rotateY: 0 }}
                      className={`cursor-pointer rounded-md border ${
                        selected
                          ? "border-white bg-white text-black shadow-md"
                          : "border-white bg-black text-white"
                      } py-3 px-6 font-semibold select-none
                                 focus:outline-none focus:ring-2 focus:ring-white
                                 transition`}
                      tabIndex={0}
                      type="button"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {cat}
                    </motion.button>
                  );
                })}
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Push page content down so it's not hidden by fixed navbar */}
      <div className="pt-16 sm:pt-28" />

      {/* Custom scrollbar styles */}
      <style>{`
        /* Webkit scrollbar */
        .flex-col::-webkit-scrollbar {
          width: 8px;
        }
        .flex-col::-webkit-scrollbar-track {
          background: transparent;
        }
        .flex-col::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
      `}</style>
    </>
  );
};

export default Nav;
