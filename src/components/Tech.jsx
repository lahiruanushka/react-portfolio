import { useState } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../config/constants";
import { styles } from "../styles";

const TechBall = ({ technology, isHovered, onHover, onLeave }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative group"
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    {/* Fixed size container for BallCanvas */}
    <div className="w-28 h-28 flex items-center justify-center">
      <BallCanvas icon={technology.icon} />
    </div>

    {/* Tooltip */}
    {isHovered && (
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full z-10">
        <div className="bg-gray-900 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap">
          {technology.name}
        </div>
      </div>
    )}
  </motion.div>
);

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Group technologies by category
  const categories = technologies.reduce((acc, tech) => {
    const category = tech.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tech);
    return acc;
  }, {});

  return (
    <div className="py-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.p
            className={`${styles.sectionSubText} text-center`}
            variants={itemVariants}
          >
            What I use for development
          </motion.p>
          <motion.h2
            className={`${styles.sectionHeadText} text-center`}
            variants={itemVariants}
          >
            Tech Stack
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
            variants={itemVariants}
          >
            A comprehensive collection of technologies I work with to build
            modern, scalable applications
          </motion.p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {Object.entries(categories).map(([category, techs]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="rounded-2xl bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-gray-800 p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category}
              </h3>

              {/* Tech Icons Grid */}
              <div className="flex flex-wrap justify-center gap-8">
                {techs.map((technology) => (
                  <TechBall
                    key={technology.name}
                    technology={technology}
                    isHovered={hoveredTech === technology.name}
                    onHover={() => setHoveredTech(technology.name)}
                    onLeave={() => setHoveredTech(null)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Badge */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Always learning new technologies
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
