import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Men's Collection",
    description: "Explore timeless styles and modern classics.",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Women's Collection",
    description: "Find your perfect look with elegant and trendy pieces.",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Kids' Fashion",
    description: "Comfortable and cute styles for your little ones.",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Accessories",
    description: "Complete your outfit with stylish accessories.",
    image:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=600&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

const ShopByCategory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-gray-50 text-gray-900 font-poppins">
      <h2 className="text-5xl font-extrabold mb-16 text-center tracking-wide">
        Shop by Category
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map(({ id, name, description, image }) => (
          <motion.div
            key={id}
            className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg group"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-cover brightness-90 group-hover:brightness-75 transition duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-3xl font-semibold mb-2 drop-shadow-lg">{name}</h3>
              <p className="text-sm font-light max-w-xs drop-shadow-md">{description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ShopByCategory;
