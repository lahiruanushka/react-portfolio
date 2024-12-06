import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../config/constants";
import { LuQuote, LuUserCircle2 } from "react-icons/lu";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="group relative"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-lg"></div>

    <div className="relative bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6 h-full flex flex-col justify-between">
      <div>
        <LuQuote
          className="w-12 h-12 text-purple-500 mb-4 opacity-70"
          strokeWidth={1.5}
        />

        <p className="text-gray-300 text-base sm:text-lg tracking-wide leading-relaxed mb-6">
          {testimonial}
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex-grow">
          <div className="flex items-center space-x-2">
            {image ? (
              <img
                src={image}
                alt={`feedback_by-${name}`}
                className="w-10 h-10 rounded-full object-cover border-2 border-purple-500"
              />
            ) : (
              <LuUserCircle2 className="w-10 h-10 text-gray-500" />
            )}
            <div>
              <p className="text-white font-semibold text-sm sm:text-base">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  @{name}
                </span>
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                {designation} {company && `at ${company}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="relative py-16 lg:py-24 bg-gray-950 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm uppercase tracking-wider text-purple-500 font-medium mb-2"
          >
            Social Proof
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`${styles.sectionHeadText} text-white`}
          >
            Testimonials.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-2xl mx-auto mt-4 text-gray-400"
          >
            Discover what others have shared about their experiences working
            with me.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-500 text-xl">
                Coming soon! Stay tuned for what others have to say.
              </p>
            </div>
          ) : (
            testimonials.map((testimonial, index) => (
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
