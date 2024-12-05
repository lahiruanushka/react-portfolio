import React, { useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../config/constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon, index }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: index * 0.1,
      }}
      className="w-full group relative"
    >
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-[#915EFF] to-purple-600 
        rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"
      />

      <div
        className="relative overflow-hidden border border-[#915EFF]/20 
        rounded-2xl p-4 sm:p-6 bg-[#1D1836] transform transition-all duration-300 
        group-hover:border-[#915EFF]/50 group-hover:scale-[1.03] group-hover:shadow-2xl"
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-grid-white/5 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
              rotate: -180,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: index * 0.2,
            }}
          >
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 flex items-center justify-center 
              bg-[#915EFF]/10 rounded-full border border-[#915EFF]/30 
              group-hover:bg-[#915EFF]/20 transition-all duration-300"
            >
              <img
                src={icon}
                alt={`${title} icon`}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain 
                group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <h3
            className="text-white text-base sm:text-lg md:text-xl font-bold text-center 
            relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 
            after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[#915EFF] 
            after:transition-all after:duration-300 
            group-hover:after:w-full"
          >
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Animated Background Elements */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none 
        opacity-20 mix-blend-overlay overflow-hidden"
      >
        <div
          className="absolute top-0 right-0 w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-[#915EFF] 
          rounded-full blur-[150px] sm:blur-[200px] animate-pulse"
        />
        <div
          className="absolute bottom-0 left-0 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-purple-600 
          rounded-full blur-[150px] sm:blur-[200px] animate-pulse delay-500"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block">
            <p
              className={`${styles.sectionSubText} text-[#915EFF] 
              relative overflow-hidden text-sm sm:text-base`}
            >
              <span className="block">
                <motion.span
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                >
                  Introduction
                </motion.span>
              </span>
            </p>

            <h2
              className={`${styles.sectionHeadText} mt-2 text-2xl sm:text-3xl md:text-4xl`}
            >
              Overview<span className="text-[#915EFF]">.</span>
            </h2>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-secondary text-base sm:text-lg max-w-3xl leading-relaxed 
          bg-[#1D1836]/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 
          border border-[#915EFF]/10 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-grid-white/5 opacity-50 
            pointer-events-none"
          />
          <span className="relative z-10">
            I am an IT graduate from SLIATE, having completed my coursework with
            graduation pending. During my internship as a trainee Software
            Engineer, I gained valuable hands-on experience in software
            development, which solidified my passion for creating dynamic,
            innovative digital solutions that balance creativity with
            functionality.
          </span>
        </motion.p>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
