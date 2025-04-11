import { useState } from "react";
import About from "./components/About";
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
        <About />
      </div>
    </>
  );
}

export default App;
