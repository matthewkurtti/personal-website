import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import i18n from "./i18nconfig";

const App: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // uses local storage to check user's previously chosen language
  useEffect(() => {
    const currentLanguage = localStorage.getItem("i18nextLng");
    if (currentLanguage === "en") {
      setSelectedLanguage("en");
    }
    if (currentLanguage === "jp") {
      setSelectedLanguage("jp");
    }
  }, []);

  const handleChangeLanguage = () => {
    if (selectedLanguage === "en") {
      i18n.changeLanguage("jp");
      localStorage.setItem("i18nextLng", "jp");
      setSelectedLanguage("jp");
    }
    if (selectedLanguage === "jp") {
      i18n.changeLanguage("en");
      localStorage.setItem("i18nextLng", "en");
      setSelectedLanguage("en");
    }
  };

  return (
    <>
      (
      <>
        <Navbar
          theme={theme}
          setTheme={setTheme}
          selectedLanguage={selectedLanguage}
          handleChangeLanguage={handleChangeLanguage}
        />
        <div
          className="mt-15 md:mt-22 bg-light-background dark:bg-dark-background"
          data-theme={theme}
        >
          <div id="hero">
            <Hero
              selectedLanguage={selectedLanguage}
              handleChangeLanguage={handleChangeLanguage}
            />
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
