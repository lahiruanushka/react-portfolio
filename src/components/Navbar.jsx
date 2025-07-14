import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { id: "about", title: "About Me" },
    { id: "experience", title: "Experience" },
    { id: "education", title: "Education" },
    { id: "projects", title: "Projects" },
    { id: "tech", title: "Tech Stack" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);

      // Calculate scroll progress
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for section highlighting
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (sections.length === 0) return;

    let ticking = false;
    const handleSectionScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let currentSection = "";
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const rect = section.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom > 120) {
              currentSection = section.id;
              break;
            }
          }
          const found = navLinks.find((link) => link.id === currentSection);
          if (found) {
            setActive(found.title);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleSectionScroll);
    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, [navLinks]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && toggle) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [toggle]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg dark:bg-slate-900/90"
          : "bg-transparent"
        }`}
    >
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-200/20 dark:bg-gray-700/20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{
            width: `${scrollProgress}%`,
            transition: "width 0.1s",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Name */}
          <Link
            to="/"
            className="group flex items-center space-x-3 z-50"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <div className="w-full h-full rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-lg sm:text-xl">
                  LA
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Lahiru Anushka
              </span>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <div className="flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setActive(link.title)}
                  className="group relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                >
                  <span
                    className={`relative z-10 text-sm font-medium transition-colors duration-200 ${active === link.title
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      }`}
                  >
                    {link.title}
                  </span>
                  {active === link.title && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setToggle(!toggle)}
            className="sm:hidden p-2 rounded-lg transition-colors duration-200
              text-gray-700 dark:text-gray-300 
              hover:bg-gray-100 dark:hover:bg-gray-800
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            <span className="sr-only">Toggle menu</span>
            {toggle ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-black/10 dark:bg-black/30 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${toggle ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setToggle(false)}
      >
        <div
          className={`absolute right-0 top-16 w-3/4 max-w-sm h-[calc(100vh-4rem)] bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 ease-out ${toggle ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full overflow-y-auto py-6 px-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setToggle(false);
                  setActive(link.title);
                }}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 
                  ${active === link.title
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
