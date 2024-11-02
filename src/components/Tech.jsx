import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../config/constants";
import { styles } from "../styles";

const TechBall = ({ technology, isHovered, onHover, onLeave }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
    className="relative group cursor-pointer"
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <div className="w-28 h-28 flex items-center justify-center">
      <BallCanvas icon={technology.icon} />
    </div>

    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full z-10"
        >
          <div className="bg-gray-900 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap shadow-lg">
            {technology.name}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  // Group technologies by category
  const categories = technologies.reduce((acc, tech) => {
    const category = tech.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(tech);
    return acc;
  }, {});

  return (
    <div className="py-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`${styles.sectionSubText} text-center`}
          >
            What I use for development
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`${styles.sectionHeadText} text-center`}
          >
            Tech Stack.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400"
          >
            A comprehensive collection of technologies I work with to build
            modern, scalable applications
          </motion.p>
        </motion.div>

        {/* Categories with Staggered Animation */}
        <motion.div className="space-y-12">
          {Object.entries(categories).map(
            ([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.2,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-gray-800 p-6 shadow-lg"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-6"
                >
                  {category}
                </motion.h3>

                <motion.div
                  className="flex flex-wrap justify-center gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {techs.map((technology) => (
                    <TechBall
                      key={technology.name}
                      technology={technology}
                      isHovered={hoveredTech === technology.name}
                      onHover={() => setHoveredTech(technology.name)}
                      onLeave={() => setHoveredTech(null)}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Experience Badge with Pulse Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Always learning new technologies
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
