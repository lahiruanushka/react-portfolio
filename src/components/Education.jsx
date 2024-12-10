import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { LuAward, LuCalendar, LuMapPin } from "react-icons/lu";
import { educationDetails } from "../config/constants";

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative w-full p-6 sm:p-8 rounded-2xl group"
    >
      {/* Gradient Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-blue-900/10 rounded-2xl opacity-70 blur-sm group-hover:opacity-90 transition-all duration-500"></div>
      
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-blue-500/20 opacity-50 group-hover:opacity-80 transition-all duration-500"></div>
      
      {/* Content Container */}
      <div className="relative z-10 backdrop-blur-md bg-transparent">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-tr from-indigo-600/80 to-purple-600/80 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform">
              {education.icon ? (
                <img
                  src={education.icon}
                  alt={education.institute}
                  className="w-3/5 h-3/5 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <LuAward className="w-8 h-8 sm:w-10 sm:h-10 text-white/90 group-hover:text-white transition-colors" />
              )}
            </div>
          </div>

          <div className="flex-grow">
            <h3 className="text-xl sm:text-2xl font-bold text-white/90 group-hover:text-white mb-2 transition-colors">
              {education.course}
            </h3>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-secondary/80 group-hover:text-secondary mb-4">
              <div className="flex items-center gap-2">
                <LuMapPin className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm sm:text-base">
                  {education.institute}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <LuCalendar className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm sm:text-base">{education.duration}</span>
              </div>
            </div>

            <div className="space-y-3">
              {education.achievements.map((achievement, idx) => (
                <div
                  key={`achievement-${idx}`}
                  className="flex items-start gap-3 group/item"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-2 group-hover/item:scale-125 transition-transform" />
                  <p className="text-white/80 group-hover/item:text-white text-sm sm:text-base leading-relaxed transition-colors">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <div className="min-h-screen">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Educational Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col gap-8">
        {educationDetails.map((education, index) => (
          <EducationCard
            key={`education-${index}`}
            index={index}
            education={education}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
