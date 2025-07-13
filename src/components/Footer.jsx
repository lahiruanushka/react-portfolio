import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFileDownload,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/lahiruanushka",
      icon: FaGithub,
      hoverColor: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/lahiruanushka",
      icon: FaLinkedinIn,
      hoverColor: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/lahiruanushz",
      icon: FaTwitter,
      hoverColor: "hover:text-sky-500 dark:hover:text-sky-400",
    },
    {
      name: "Email",
      url: "mailto:lahiruanushkaofficial@gmail.com",
      icon: MdEmail,
      hoverColor: "hover:text-red-500 dark:hover:text-red-400",
    },
  ];

  const portfolioSections = [
    { title: "About Me", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Education", href: "#education" },
    { title: "Projects", href: "#projects" },
    { title: "Tech Stack", href: "#tech" },
    { title: "Contact", href: "#contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 bg-gradient-to-b from-transparent to-white/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:justify-between">
          {/* Brand Section - Full width on mobile, 1/3 on desktop */}
          <div className="w-full lg:w-1/3 space-y-4">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] overflow-hidden transition-transform duration-300 group-hover:scale-110">
                <div className="w-full h-full rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-xl">
                    LA
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Lahiru Anushka
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Software Engineer
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Passionate about creating innovative web solutions and turning
              complex problems into elegant interfaces.
            </p>
            <a
              href="/Lahiru-Anushka-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <FaFileDownload className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Navigation and Connect Sections - Stack on mobile, side by side on desktop */}
          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-12 lg:space-x-24">
            {/* Navigation Links */}
            <div className="w-full sm:w-auto">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Navigation
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
                {portfolioSections.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-1"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Section */}
            <div className="w-full sm:w-auto">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Let&apos;s Connect
              </h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2 rounded-lg bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon
                      className={`w-5 h-5 text-gray-600 dark:text-gray-400 ${social.hoverColor} transition-colors duration-200`}
                    />
                  </a>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Open for freelance projects and collaborations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Lahiru Anushka. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Made by ❤️ Lahiru Anushka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
