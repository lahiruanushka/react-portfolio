import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* ComputersCanvas container */}
      <div className="absolute inset-0">
        <ComputersCanvas />
      </div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-[2] pointer-events-none" />

      {/* Main content container  */}
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-[3] pointer-events-none">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">
          {/* Text Content */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className={`${styles.heroHeadText} text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I&apos;m{" "}
              <span className="text-[#915EFF]">Lahiru Anushka</span>
            </motion.h1>
            <p
              className={`${styles.heroSubText} mt-4 text-white-100 text-base sm:text-lg md:text-xl max-w-md`}
            >
              I develop desktop and web applications with a passion for creating
              innovative and user-friendly solutions
            </p>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex flex-col items-center justify-center w-full lg:w-auto pointer-events-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative group w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <div
                className="absolute -inset-1.5 bg-gradient-to-r from-[#915EFF] to-purple-600 
                rounded-full opacity-75 group-hover:opacity-100 transition duration-300 animate-tilt"
              ></div>
              <div
                className="w-full h-full rounded-full border-4 border-transparent 
                relative z-10 bg-white p-1 overflow-hidden"
              >
                <img
                  src="/lahiru-anushka.png"
                  alt="Lahiru Anushka"
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </div>
            </div>
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF] mt-4 animate-bounce" />
            <div className="w-1 h-40 sm:h-60 lg:h-80 violet-gradient" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-[3] pointer-events-none">
        <a href="#about" className="pointer-events-auto">
          <div className="relative w-[35px] h-[64px] rounded-3xl flex justify-center items-start p-2 overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin blur-sm opacity-75" />

            {/* Inner black background */}
            <div className="absolute inset-[2px] rounded-3xl bg-black" />

            {/* Scrolling dot */}
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="relative w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-1 z-10"
            >
              {/* Glow effect for the dot */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-sm" />
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
