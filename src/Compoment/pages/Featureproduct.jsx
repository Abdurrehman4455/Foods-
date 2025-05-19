import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample product data
const products = [
  { id: 1, name: "Classic Shirt", price: "$49", image: "https://via.placeholder.com/300x400?text=Classic+Shirt" },
  { id: 2, name: "Casual Pants", price: "$69", image: "https://via.placeholder.com/300x400?text=Casual+Pants" },
  { id: 3, name: "Leather Jacket", price: "$199", image: "https://via.placeholder.com/300x400?text=Leather+Jacket" },
  { id: 4, name: "Sport Sneakers", price: "$89", image: "https://via.placeholder.com/300x400?text=Sport+Sneakers" },
  { id: 5, name: "Summer Dress", price: "$59", image: "https://via.placeholder.com/300x400?text=Summer+Dress" },
  { id: 6, name: "Formal Shoes", price: "$120", image: "https://via.placeholder.com/300x400?text=Formal+Shoes" },
  { id: 7, name: "Winter Jacket", price: "$180", image: "https://via.placeholder.com/300x400?text=Winter+Jacket" },
  { id: 8, name: "Running Shoes", price: "$99", image: "https://via.placeholder.com/300x400?text=Running+Shoes" },
  { id: 9, name: "Stylish Cap", price: "$25", image: "https://via.placeholder.com/300x400?text=Stylish+Cap" },
  { id: 10, name: "Trendy Watch", price: "$159", image: "https://via.placeholder.com/300x400?text=Trendy+Watch" },
];

// Animation variants (same as before)
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 400 : -400,
    opacity: 0,
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const cardEntranceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
};

const FeaturedProductsSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([
      (page + newDirection + products.length) % products.length,
      newDirection,
    ]);
  };

  const visibleCount = 10;
  const startIndex = page;
  const displayedProducts = [];
  for (let i = 0; i < visibleCount; i++) {
    displayedProducts.push(products[(startIndex + i) % products.length]);
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white text-black font-poppins">
      <h2 className="text-4xl font-bold mb-10 text-center">Featured Products</h2>

      <div className="relative">
        {/* Prev button */}
        <button
          onClick={() => paginate(-1)}
          aria-label="Previous"
          className="
            z-20 p-3 sm:p-4 bg-black text-white rounded-full 
            hover:bg-yellow-400 hover:text-black shadow-lg 
            transition transform hover:scale-110 active:scale-95 
            absolute top-1/2 -translate-y-1/2 left-2 sm:left-4
            touch-manipulation
            w-10 h-10 sm:w-12 sm:h-12
            flex items-center justify-center
          "
        >
          ‹
        </button>

        {/* Grid container with entrance animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 overflow-hidden mx-4 flex-grow"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence initial={false} custom={direction}>
            {displayedProducts.map((product) => (
              <motion.div
                key={product.id}
                custom={direction}
                variants={{ ...variants, ...cardEntranceVariants }}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 30,
                  ease: "easeOut",
                }}
                className="relative rounded-xl bg-gray-50 cursor-pointer select-none shadow-md overflow-hidden flex flex-col transition-all duration-300"
                whileHover={{ scale: 1.04, boxShadow: "0 8px 20px rgba(250, 204, 21, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Square image container */}
                <div className="relative w-full pt-[100%] overflow-hidden rounded-t-xl">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-center">
                  <h3 className="text-lg font-semibold mb-1 text-center">{product.name}</h3>
                  <p className="text-yellow-500 font-bold text-lg text-center">{product.price}</p>
                </div>

                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"
                  whileHover={{ opacity: 0.3 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Next button */}
        <button
          onClick={() => paginate(1)}
          aria-label="Next"
          className="
            z-20 p-3 sm:p-4 bg-black text-white rounded-full 
            hover:bg-yellow-400 hover:text-black shadow-lg 
            transition transform hover:scale-110 active:scale-95 
            absolute top-1/2 -translate-y-1/2 right-2 sm:right-4
            touch-manipulation
            w-10 h-10 sm:w-12 sm:h-12
            flex items-center justify-center
          "
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default FeaturedProductsSlider;
