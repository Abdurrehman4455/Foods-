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

// Animation variants for sliding effect
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

const FeaturedProductsSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([
      (page + newDirection + products.length) % products.length,
      newDirection,
    ]);
  };

  // Show 10 products at a time (adjust as needed)
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
          className="z-20 p-3 bg-black text-white rounded-full hover:bg-yellow-400 hover:text-black shadow-lg transition transform hover:scale-110 active:scale-95 absolute left-0 top-1/2 transform -translate-y-1/2"
        >
          ‹
        </button>

        {/* Grid container for the product cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 overflow-hidden mx-4 flex-grow">
          <AnimatePresence initial={false} custom={direction}>
            {displayedProducts.map((product) => (
              <motion.div
                key={product.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 30,
                  ease: "easeOut",
                }}
                className="relative rounded-xl bg-gray-50 cursor-pointer select-none shadow-lg overflow-hidden flex flex-col transition-all duration-300"
              >
                {/* Product Image */}
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold mb-2 text-center">{product.name}</h3>
                  <p className="text-yellow-500 font-bold text-lg text-center">{product.price}</p>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300 ease-in-out"
                  whileHover={{ opacity: 0.6 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Next button */}
        <button
          onClick={() => paginate(1)}
          aria-label="Next"
          className="z-20 p-3 bg-black text-white rounded-full hover:bg-yellow-400 hover:text-black shadow-lg transition transform hover:scale-110 active:scale-95 absolute right-0 top-1/2 transform -translate-y-1/2"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default FeaturedProductsSlider;
