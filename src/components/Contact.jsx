import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import {
  LuAlertCircle,
  LuCheckCircle,
  LuSend,
  LuUser,
  LuMail,
  LuMessageCircle,
} from "react-icons/lu";

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

    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Lahiru Anushka",
          from_email: formData.email,
          to_email: "lahiruanushka121@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            message: "Message sent successfully! I'll respond soon.",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatus({
            type: "error",
            message: "Message send failed. Please try again.",
          });
        }
      );
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
    <div className="min-h-screen bg-gray-950 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 bg-gray-900/60 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-800"
      >
        {/* Form Section */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="text-white">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              Let's Connect
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 mb-6">
              Have a project or collaboration in mind? Send me a message, and
              I'll get back to you promptly.
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                    <LuAlertCircle className="mr-2 h-4 w-4" /> {errors.message}
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
          className="hidden lg:flex items-center justify-center"
        >
          <EarthCanvas />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
