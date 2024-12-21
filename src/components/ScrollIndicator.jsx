import React from 'react';
import { motion } from 'framer-motion';
import { LuChevronDown } from 'react-icons/lu';

const ScrollIndicator = ({ href = '#about' }) => {
  return (
    <a href={href} className="cursor-pointer">
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-12 h-12 bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 rounded-full opacity-20 blur-lg animate-pulse" />
        <motion.div
          className="relative z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <LuChevronDown className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </a>
  );
};

export default ScrollIndicator;