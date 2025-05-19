import { useViewportScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const { scrollY } = useViewportScroll();

  // Parallax 3D rotation & scale (smaller ranges on mobile)
  const rotateX = useTransform(scrollY, [0, 300], [0, 15]);
  const rotateY = useTransform(scrollY, [0, 300], [0, -15]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.85]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Button scroll effects (less intense on mobile)
  const btnY = useTransform(scrollY, [0, 300], [0, -15]);
  const btnRotateX = useTransform(scrollY, [0, 300], [0, 10]);
  const btnRotateY = useTransform(scrollY, [0, 300], [0, -10]);

  // Limit animation frequency for performance
  const [canAnimate, setCanAnimate] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setCanAnimate(true), 50);
    return () => clearTimeout(id);
  }, [scrollY]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-black text-white font-poppins px-6 overflow-hidden">
      {/* Content Container */}
      <motion.div
        style={{ opacity }}
        className="max-w-3xl text-center"
      >
        <motion.h1
          style={{ rotateX, rotateY, scale }}
          className="cursor-default select-none font-extrabold mb-6 leading-tight
            text-4xl sm:text-5xl md:text-6xl"
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          Discover Your{" "}
          <span className="text-yellow-400">Style</span> Today
        </motion.h1>

        <motion.p
          style={{ rotateX, rotateY, scale }}
          className="mb-10 text-gray-400 select-none
            text-base sm:text-lg md:text-xl max-w-lg mx-auto"
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          Premium quality clothing for every occasion. Explore the latest trends with us.
        </motion.p>

        <motion.a
          href="/shop"
          role="button"
          tabIndex={0}
          className="inline-block bg-yellow-400 text-black font-semibold px-7 py-4 rounded-full uppercase tracking-widest shadow-lg cursor-pointer select-none
            text-sm sm:text-base md:text-lg"
          style={{
            y: btnY,
            rotateX: btnRotateX,
            rotateY: btnRotateY,
            scale: canAnimate ? 1.05 : 1,
            boxShadow: canAnimate
              ? "0 0 25px #facc15, 0 0 50px #facc15"
              : "none",
          }}
          whileHover={{
            scale: 1.15,
            rotateX: 15,
            rotateY: -15,
            boxShadow: "0 0 40px #facc15, 0 0 80px #facc15",
          }}
          whileTap={{ scale: 0.95, rotateX: 0, rotateY: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          Shop Now
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
