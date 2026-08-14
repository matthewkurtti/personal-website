import Navbar from "./components/Navbar";
import SkipLink from "./components/SkipLink";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Path from "./components/Path";
import Music from "./components/Music";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import { useLanguage } from "./hooks/useLanguage";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  return (
    <>
      <SkipLink />
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        selectedLanguage={language}
        onChangeLanguage={changeLanguage}
      />
      <main>
        <Hero />
        <Work />
        <Path />
        <Music />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
