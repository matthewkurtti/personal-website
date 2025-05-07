import { useState } from "react";

interface NavbarProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = (props) => {

  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false)

  const handleChangeTheme = () => {
    if (props.theme === "dark") {
      props.setTheme("light");
      return;
    }
    if (props.theme === "light") {
      props.setTheme("dark");
      return;
    }
  };

  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <h1>Matt Kurtti</h1>
        </div>
        <div className="bg-light-background-50 dark:bg-dark-background-50 w-full h-[10vh] p-2 flex flex-row-reverse border-b-solid border-b-1 border-b-light-accent-950 dark:border-b-dark-accent-950">
        <div className="flex items-center">
          <h1 className="mr-8 cursor-pointer text-2xl text-light-text dark:text-dark-text">
            About
          </h1>
          <h1 className="mr-8 cursor-pointer text-2xl text-light-text dark:text-dark-text">
            Projects
          </h1>
          <h1 className="mr-8 cursor-pointer text-2xl text-light-text dark:text-dark-text">
            Contact
          </h1>
          <button
            className="mr-2 p-1 bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text border-solid border-1 border-light-accent-950 dark:border-dark-accent-950"
            onClick={() => {
              handleChangeTheme();
            }}
          >
            Change theme
          </button>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Navbar;
