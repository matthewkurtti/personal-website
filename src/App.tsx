import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import i18n from "./i18nconfig";

function App() {
  const [theme, setTheme] = useState("light");

  const handleChangeLanguage = async () => {
    i18n.changeLanguage('en', (err) => {
      if (err) return console.log('something went wrong loading', err);
      i18n.options.lng = "jp"
    });
  }

  return (
    <>
      <div
        className="bg-light-background dark:bg-dark-background"
        data-theme={theme}
      >
        <button className="bg-light-accent" onClick={() => {handleChangeLanguage()}}>en to jp</button>
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
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
  );
}

export default App;
