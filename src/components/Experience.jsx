import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../config/constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { LuExternalLink } from "react-icons/lu";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(29, 24, 54, 0.9)",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "1.5rem",
        padding: "2rem",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease-in-out",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(29, 24, 54, 0.9)",
        filter: "drop-shadow(2px 0 2px rgba(0,0,0,0.1))",
      }}
      date={experience.date}
      dateClassName="sm:text-[18px] text-[14px] font-semibold text-white/80 backdrop-blur-sm px-4 py-1 rounded-full bg-white/5"
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
        border: "4px solid rgba(255, 255, 255, 0.1)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full group">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain transition-all duration-300 group-hover:scale-110"
          />
        </div>
      }
    >
      <div className="relative group cursor-default">
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />

        <div className="relative">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="text-white text-[24px] sm:text-[28px] font-bold leading-tight">
                {experience.title}
              </h3>
              <p className="text-secondary text-[16px] sm:text-[18px] font-semibold mt-1 flex items-center gap-2">
                {experience.company_name}
                <LuExternalLink className="w-4 h-4 inline hover:text-white transition-colors" />
              </p>
            </div>
          </div>

          <ul className="mt-6 space-y-4">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white/90 text-[14px] sm:text-[16px] pl-1 tracking-wide flex items-start gap-3 group/item"
              >
                <span className="w-2 h-2 rounded-full bg-purple-500/80 mt-2 flex-shrink-0 group-hover/item:bg-cyan-400 transition-colors" />
                <span className="group-hover/item:text-white transition-colors">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="relative">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline animate={true} lineColor="rgba(255, 255, 255, 0.1)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
