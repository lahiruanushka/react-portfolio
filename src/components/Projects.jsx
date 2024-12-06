import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaLink,
  FaTimes,
  FaEye,
} from "react-icons/fa";
import { projects } from "../config/constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          delay: index * 0.1,
        },
      }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl 
        shadow-xl transform transition-all duration-300 
        bg-gradient-to-br from-gray-800/60 to-gray-900/60 
        hover:from-indigo-900/40 hover:to-purple-900/40 
        border border-gray-700/30 hover:border-indigo-500/30"
    >
      {/* Project Image */}
      <div
        className="relative w-full h-48 md:h-56 overflow-hidden rounded-t-3xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-500 
            ${
              isHovered ? "scale-110 brightness-50" : "scale-100 brightness-75"
            }`}
        />

        {/* Project Links Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 flex justify-center 
            items-center transition-all duration-500 
            ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex space-x-4">
            {source_code_link && (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Source Code"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full 
                  hover:bg-white/40 transition-all group"
              >
                <FaGithub
                  className="text-white text-xl md:text-2xl 
                  group-hover:scale-110 transition-transform"
                />
              </a>
            )}
            {live_demo_link && (
              <a
                href={live_demo_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full 
                  hover:bg-white/40 transition-all group"
              >
                <FaEye
                  className="text-white text-xl md:text-2xl 
                  group-hover:scale-110 transition-transform"
                />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between mb-3">
          <h3
            className="text-xl md:text-2xl font-bold text-white 
            group-hover:text-indigo-300 transition-colors"
          >
            {name}
          </h3>
          <FaCode
            className="text-gray-500 group-hover:text-indigo-400 
            transition-colors text-lg"
          />
        </div>

        <p
          className="text-gray-400 text-xs md:text-sm mb-4 
          group-hover:text-gray-200 transition-colors"
        >
          {description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`px-2 py-1 text-[10px] md:text-xs rounded-full 
                transition-all ${tag.color} text-white/80 
                group-hover:text-white group-hover:scale-105`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const GitHubProjectsButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-center mt-8 md:mt-12">
      <motion.button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="inline-flex items-center 
          text-white 
          bg-gradient-to-r from-indigo-600 to-purple-600 
          hover:from-indigo-700 hover:to-purple-700 
          px-4 py-2 rounded-xl
          transition-all duration-300 ease-in-out 
          group text-sm md:text-base 
          relative overflow-hidden 
          shadow-lg hover:shadow-xl"
        initial={{ opacity: 0.6 }}
        animate={{
          opacity: [0.6, 0.4, 0.6],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
      >
        {/* Animated GitHub Icon */}
        <motion.div
          className="mr-2"
          animate={{
            rotate: isHovered ? [0, 10, -10, 0] : 0,
            scale: isHovered ? [1, 1.1, 1] : 1,
            transition: {
              duration: 0.5,
              repeat: isHovered ? Infinity : 0,
            },
          }}
        >
          <FaGithub className="text-lg transition-transform" />
        </motion.div>
        {/* Animated Underline */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              className="absolute bottom-0 left-0 h-0.5 bg-white/50"
            />
          )}
        </AnimatePresence>
        View All Projects
      </motion.button>
    </div>
  );
};

const GitHubPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center 
        bg-gradient-to-br from-black/80 to-black/90 backdrop-blur-lg p-4"
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-[#1a2238] via-[#2c3e50] to-[#34495e] 
          rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl 
          border border-gray-800/50 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        {/* Accent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 opacity-50 pointer-events-none"></div>

        <div className="flex items-center justify-between mb-4 relative z-10">
          <h3 className="text-xl md:text-2xl font-bold text-white flex items-center">
            <FaGithub className="mr-3 text-indigo-400 text-2xl" />
            GitHub Projects
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-gray-300 hover:text-white 
              transition-all duration-300 p-2 rounded-full 
              hover:bg-gray-800/50 hover:backdrop-blur-sm"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        <p className="text-gray-300 mb-6 text-sm md:text-base relative z-10">
          Explore my open-source projects, contributions, and code repositories.
          Feel free to browse, star, and fork projects that spark your interest.
        </p>

        <div className="flex flex-col space-y-4 relative z-10">
          <a
            href="https://github.com/lahiruanushka"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 
              hover:from-indigo-700 hover:to-purple-700 text-white 
              font-bold py-3 px-4 rounded-xl 
              transition-all duration-300 ease-in-out transform 
              hover:-translate-y-1 flex items-center justify-center 
              space-x-2 group text-sm md:text-base 
              shadow-lg hover:shadow-xl"
          >
            <FaLink className="mr-2" />
            View Full GitHub Profile
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [isGitHubPopupOpen, setIsGitHubPopupOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br min-h-screen py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            Innovative Solutions & Creative Coding
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
        </motion.div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-6 md:gap-8 mt-20"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${project.name}`}
              index={index}
              {...project}
            />
          ))}
        </div>

        {/* GitHub Projects Link */}
        <GitHubProjectsButton onClick={() => setIsGitHubPopupOpen(true)} />

        {/* GitHub Popup */}
        <AnimatePresence>
          {isGitHubPopupOpen && (
            <GitHubPopup
              isOpen={isGitHubPopupOpen}
              onClose={() => setIsGitHubPopupOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
