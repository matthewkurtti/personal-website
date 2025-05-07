import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <div
        className="bg-light-background dark:bg-dark-background"
        data-theme={theme}
      >
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
      </div>
    </>
  );
}

export default App;
