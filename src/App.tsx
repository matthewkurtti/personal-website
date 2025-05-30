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
        <Navbar theme={theme} setTheme={setTheme} />
        <div
          className="mt-15 md:mt-22 bg-light-background dark:bg-dark-background"
          data-theme={theme}
        >
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
      </>
      )
    </>
  );
};

export default App;
