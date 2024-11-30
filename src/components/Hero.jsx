import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse lg:flex-row items-center lg:items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center lg:items-start mt-5 z-10 w-full lg:w-auto">
          <motion.h1
            className={`${styles.heroHeadText} text-white text-center lg:text-left`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I&apos;m <span className="text-[#915EFF]">Lahiru Anushka</span>
          </motion.h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-center lg:text-left`}>
            I develop desktop and web applications
          </p>
          <div className="flex justify-center lg:justify-start mt-5">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-5 z-10 w-full lg:w-auto">
          <div className="w-56 h-56 rounded-full border-4 border-[#915EFF] mb-4">
            <img
              src="/lahiru-anushka.png"
              alt="Lahiru Anushka"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;