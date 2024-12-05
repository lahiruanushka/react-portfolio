import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Projects />
        <Tech />
        <Feedbacks />

        <div className="relative z-0">
          <Contact />
        </div>

        <Footer />
        <StarsCanvas />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
