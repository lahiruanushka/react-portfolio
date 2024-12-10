import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import {
  LuAlertCircle,
  LuCheckCircle,
  LuSend,
  LuUser,
  LuMail,
  LuMessageCircle,
} from "react-icons/lu";
import { styles } from "../styles";
import {
  FaExclamationTriangle,
  FaTwitter,
  FaLinkedin,
  FaTimes,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";

const UnavailableServiceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        className="bg-white/5 border border-slate-700 rounded-xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>

        <div className="text-center">
          <div className="flex justify-center mb-6">
            <FaTools className="text-6xl text-blue-400 opacity-70" />
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">
            Service Under Maintenance
          </h2>

          <p className="text-slate-400 mb-6 text-sm">
            Thank you for your patience! I'm currently improving this service.
            Apologies for the temporary inconvenience.
          </p>

          <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
            <h3 className="text-sm text-slate-300 mb-3 uppercase tracking-wider">
              Connect With Me
            </h3>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:lahiruanushkaofficial@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <FaEnvelope className="text-2xl" />
              </a>
              <a
                href="https://twitter.com/lahiruanushz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#1DA1F2] transition-colors"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/in/lahiruanushka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#0A66C2] transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 transition-colors"
          >
            Understood
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Your message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear specific error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsModalOpen(true);
    return;

    // setLoading(true);
    // setStatus({ type: "", message: "" });

    // emailjs
    //   .send(
    //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //     {
    //       from_name: formData.name,
    //       to_name: "Lahiru Anushka",
    //       from_email: formData.email,
    //       to_email: "yourmail@gmail.com",
    //       message: formData.message,
    //     },
    //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       setStatus({
    //         type: "success",
    //         message: "Message sent successfully! I'll respond soon.",
    //       });
    //       setFormData({ name: "", email: "", message: "" });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);
    //       setStatus({
    //         type: "error",
    //         message: "Message send failed. Please try again.",
    //       });
    //     }
    //   );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-10 relative">
      {/* StarsCanvas */}
      <div className="absolute inset-0 z-0">
        <StarsCanvas />
      </div>

      <div className="relative py-16 lg:py-24 bg-transparent overflow-hidden w-full max-w-6xl z-10">
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
              Let's Connect
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className={`${styles.sectionHeadText} text-white`}
            >
              Contact.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="max-w-2xl mx-auto mt-4 text-gray-400"
            >
              Have a project or collaboration in mind? Send me a message, and
              I'll get back to you promptly.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 bg-gray-900/60 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-800"
        >
          {/* Form Section */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 order-2 lg:order-1 flex items-center justify-center"
          >
            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
              {/* Name Input */}
              <motion.div variants={itemVariants} className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LuUser className="text-gray-500 h-5 w-5" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby="name-error"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl 
                    bg-gray-800/50 text-white placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-indigo-500
                    transition duration-300
                    ${errors.name ? "ring-2 ring-red-500" : ""}`}
                  />
                </div>
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      id="name-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-xs mt-2 flex items-center"
                    >
                      <LuAlertCircle className="mr-2 h-4 w-4" /> {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Email Input */}
              <motion.div variants={itemVariants} className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LuMail className="text-gray-500 h-5 w-5" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby="email-error"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl 
        bg-gray-800/50 text-white placeholder-gray-500
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        transition duration-300
        ${errors.email ? "ring-2 ring-red-500" : ""}`}
                  />
                </div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      id="email-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-xs mt-2 flex items-center"
                    >
                      <LuAlertCircle className="mr-2 h-4 w-4" /> {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Message Input */}
              <motion.div variants={itemVariants} className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                    <LuMessageCircle className="text-gray-500 h-5 w-5" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby="message-error"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full pl-10 pr-4 py-3 rounded-xl 
        bg-gray-800/50 text-white placeholder-gray-500
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        transition duration-300
        ${errors.message ? "ring-2 ring-red-500" : ""}`}
                  />
                </div>
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      id="message-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-xs mt-2 flex items-center"
                    >
                      <LuAlertCircle className="mr-2 h-4 w-4" />{" "}
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={loading}
                className={`w-full py-3.5 px-6 rounded-xl text-white font-semibold 
                transition duration-300 ease-in-out transform
                bg-gradient-to-r from-indigo-600 to-purple-600
                hover:from-indigo-700 hover:to-purple-700
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-[1.02]"
                }
                flex items-center justify-center space-x-2`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <LuSend className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Earth Canvas Section */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center w-full h-full order-1 lg:order-2"
          >
            <div className="w-full max-w-md lg:max-w-full h-64 md:h-80 lg:h-full">
              <EarthCanvas />
            </div>
          </motion.div>
        </motion.div>

        <UnavailableServiceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
