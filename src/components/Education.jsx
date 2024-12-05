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
      className="w-full p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-indigo-900/40 to-indigo-900/20 backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
            {education.icon ? (
              <img
                src={education.icon}
                alt={education.institute}
                className="w-3/5 h-3/5 object-contain"
              />
            ) : (
              <LuAward className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            )}
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {education.course}
          </h3>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-secondary mb-4">
            <div className="flex items-center gap-2">
              <LuMapPin className="w-4 h-4" />
              <span className="text-sm sm:text-base">
                {education.institute}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <LuCalendar className="w-4 h-4" />
              <span className="text-sm sm:text-base">{education.duration}</span>
            </div>
          </div>

          <div className="space-y-3">
            {education.achievements.map((achievement, idx) => (
              <div
                key={`achievement-${idx}`}
                className="flex items-start gap-3 group"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 group-hover:bg-indigo-400 transition-colors" />
                <p className="text-white-100 text-sm sm:text-base leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
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
        <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>
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
