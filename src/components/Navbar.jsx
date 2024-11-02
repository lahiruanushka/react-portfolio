import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "about", title: "About Me" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "tech", title: "Tech Stack" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/10 backdrop-blur-lg shadow-lg dark:bg-slate-900/50"
          : "bg-transparent"
      }`}
    >
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
          style={{
            width: `${
              (window.scrollY /
                (document.documentElement.scrollHeight - window.innerHeight)) *
              100
            }%`,
            transition: "width 0.1s",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name */}
          <Link
            to="/"
            className="group flex items-center space-x-3"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <div className="w-full h-full rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-xl">
                  LA
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Lahiru Anushka
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setActive(link.title)}
                  className="group relative px-1 py-2"
                >
                  <span
                    className={`relative z-10 text-sm font-medium transition-colors duration-200 ${
                      active === link.title
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    }`}
                  >
                    {link.title}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-300 transform 
                    ${
                      active === link.title
                        ? "scale-x-100 bg-gradient-to-r from-blue-500 to-purple-500"
                        : "scale-x-0 group-hover:scale-x-100 bg-blue-500"
                    } origin-left`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setToggle(!toggle)}
              className="relative inline-flex items-center justify-center p-2 rounded-xl transition-colors duration-200
                text-gray-700 dark:text-gray-300 
                hover:text-blue-600 dark:hover:text-blue-400 
                hover:bg-blue-50 dark:hover:bg-blue-900/20
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="relative w-6 h-6">
                <span
                  className={`absolute w-6 h-0.5 transform transition-all duration-300 
                  bg-current rounded-full ${
                    toggle ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-current rounded-full transition-all duration-300 
                  ${toggle ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute w-6 h-0.5 transform transition-all duration-300 
                  bg-current rounded-full ${
                    toggle ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          toggle ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } fixed top-20 right-0 bottom-0 w-64 backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 
        shadow-xl transform transition-all duration-300 ease-in-out sm:hidden`}
      >
        <div className="relative py-6 px-4 space-y-2">
          {/* Decorative gradient line */}
          <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setToggle(false);
                setActive(link.title);
              }}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 
                ${
                  active === link.title
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                }`}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
