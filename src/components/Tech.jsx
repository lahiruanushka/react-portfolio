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
      stiffness: 400,
      damping: 25,
    }}
    className="relative group cursor-pointer"
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center transition-all duration-300">
      <BallCanvas icon={technology.icon} />
    </div>

    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full z-10 w-max"
        >
          <div className="bg-gradient-to-r from-purple-600/90 to-blue-500/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-medium shadow-xl border border-white/20 flex flex-col items-center gap-1">
            <span className="whitespace-nowrap">{technology.name}</span>
            {technology.level && (
              <span className="text-xs opacity-80">{technology.level}</span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const CategoryHeader = ({ category, count }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
    <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 whitespace-nowrap">
      {category}
    </h3>
    <div className="flex-1 flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
        {count} {count === 1 ? 'technology' : 'technologies'}
      </span>
    </div>
  </div>
);

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = technologies.reduce((acc, tech) => {
    const category = tech.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(tech);
    return acc;
  }, {});

  const allCategories = ["All", ...Object.keys(categories)];
  const filteredTechnologies = selectedCategory === "All" 
    ? technologies 
    : categories[selectedCategory] || [];

  return (
    <div className="relative py-16 lg:py-24 overflow-hidden">
      {/* Enhanced Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
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
            className="text-sm uppercase tracking-wider text-purple-500 font-medium mb-2"
          >
            Technical Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`${styles.sectionHeadText} text-center mb-4`}
          >
            Tech Stack.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
          >
            A curated collection of technologies I leverage to craft modern, 
            scalable, and innovative solutions
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 px-4">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 shadow-2xl"
        >
          <CategoryHeader 
            category={selectedCategory} 
            count={filteredTechnologies.length}
          />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
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
            {filteredTechnologies.map((technology) => (
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

        {/* Learning Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <span className="inline-flex items-center gap-3 py-2.5 px-5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600/90 to-blue-600/90 text-white shadow-lg backdrop-blur-sm border border-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Always learning and expanding my technical horizons
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");