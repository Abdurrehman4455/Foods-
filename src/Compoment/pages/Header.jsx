import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="w-full bg-orange-500 h-[90vh] mt-5 relative overflow-hidden">
      {/* Background Image with fade-in */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/your-food-image.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Content */}
      <motion.section
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto px-4 h-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          style={{ color: "white" }} // keep text white for "Savor Every Bite at"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
        >
          Savor Every Bite at{" "}
          <motion.span
            className="text-yellow-300"
            initial={{ color: "#FBBF24" }}
            animate={{
              color: ["#FBBF24", "#F59E0B", "#FBBF24"], // yellow shades as original
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          >
            Foodie Delight
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg mb-6 max-w-md"
          style={{ color: "white" }} // keep paragraph text white
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Fresh ingredients, bold flavors, and a menu you’ll fall in love with.
        </motion.p>

        <div className="flex space-x-4">
          <motion.a
            href="/menu"
            className="bg-yellow-300 text-orange-800 font-semibold py-2 px-6 rounded shadow hover:bg-yellow-400"
            whileHover={{ scale: 1.1, boxShadow: "0 0 8px #FBBF24" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            View Menu
          </motion.a>

          <motion.a
            href="/order"
            className="border border-white py-2 px-6 rounded hover:bg-white hover:text-orange-600"
            whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#ea580c", boxShadow: "0 0 8px #ea580c" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Order Now
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Header;
