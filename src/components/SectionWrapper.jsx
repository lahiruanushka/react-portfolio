const SectionWrapper = ({ children, className = "" }) => (
  <section
    className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 ${className}`}
  >
    {children}
  </section>
);

export default SectionWrapper;
