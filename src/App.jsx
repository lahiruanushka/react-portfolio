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
  Education,
} from "./components";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Education />
        <Projects />
        <Tech />
        <Feedbacks />
        
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
