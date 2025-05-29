import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [theme, setTheme] = useState("light");

  return (
    <>
      (
      <>
        <div data-theme={theme}>
          <Navbar theme={theme} setTheme={setTheme} />
          <div className="mt-15 md:mt-22">
            <div id="hero">
              <Hero />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <Footer />
          </div>
        </div>
      </>
      )
    </>
  );
};

export default App;
