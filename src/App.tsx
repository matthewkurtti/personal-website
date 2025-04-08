import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <div
        className="bg-light-background dark:bg-dark-background"
        data-theme="dark"
      >
        <Navbar />
        <About />
      </div>
    </>
  );
}

export default App;
