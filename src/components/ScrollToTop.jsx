import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuArrowUp } from "react-icons/lu";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{
            opacity: 0,
            scale: 0.5,
            rotateX: -180,
            y: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateX: 0,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            rotateX: 180,
            y: 50,
            transition: { duration: 0.3 },
          }}
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div className="relative">
            {/* Outer Glow Layer */}
            <div
              className="absolute -inset-1 bg-gradient-to-r from-[#915EFF] to-purple-600 
              rounded-full opacity-50 group-hover:opacity-75 blur-lg transition duration-300"
            ></div>

            {/* 3D Button with Depth and Hover Effect */}
            <div
              className="relative z-10 transform transition-all duration-300 
              group-hover:-translate-y-1 group-hover:scale-105"
            >
              <div
                className="w-14 h-14 bg-[#915EFF] rounded-full flex items-center justify-center 
                shadow-xl border-2 border-white/10 
                group-hover:shadow-2xl group-hover:bg-purple-600 transition duration-300"
              >
                <LuArrowUp
                  className="text-white w-8 h-8 transform transition-transform 
                  group-hover:scale-110 group-hover:rotate-6"
                />
              </div>
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
