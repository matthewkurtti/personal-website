import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  selectedLanguage: string;
  handleChangeLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { t } = useTranslation();
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // close hamburger menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setHamburgerOpen(false);
      }
    };

    if (hamburgerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hamburgerOpen]);

  const toggleMenu = () => setHamburgerOpen(!hamburgerOpen);

  return (
    <>
      <div className="shadow-lg fixed top-0 left-0 z-1000 bg-gray-100 dark:bg-dark-background-50 w-full h-[10vh] p-2 flex justify-between items-center border-b-solid border-b-1 border-b-black/5 dark:border-b-dark-accent-950">
        <a
          className="ml-2 flex justify-center w-1/7 h-2/3 md:w-1/14 md:h-4/5"
          href="#hero"
        >
          <img
            className="cursor-pointer w-full h-full"
            src="logo2.png"
            alt=""
          />
        </a>

        {/* Vertical Menu Items for Mobile */}
        <div
          ref={menuRef}
          className={`md:hidden flex flex-col items-center mt-34 bg-gray-100 px-4 transition-all duration-300 ease-in-out overflow-hidden ${
            hamburgerOpen ? "max-h-60 py-2" : "max-h-0"
          }`}
        >
          <a
            href="#about"
            className="mt-2 mb-2 p-2 rounded-xl bg-white outline outline-green-500 cursor-pointer text-2xl text-green-700 active:text-white active:bg-green-700 active:border-transparent"
          >
            {t("navbar.about")}
          </a>
          <a
            href="#skills"
            className="mb-2 p-2 rounded-xl bg-white outline outline-green-500 cursor-pointer text-2xl text-green-700 active:text-white active:bg-green-700 active:border-transparent"
          >
            {t("navbar.skills")}
          </a>
          <a
            href="#projects"
            className="mb-2 p-2 rounded-xl bg-white outline outline-green-500 cursor-pointer text-2xl text-green-700 active:text-white active:bg-green-700 active:border-transparent"
          >
            {t("navbar.projects")}
          </a>
          {props.selectedLanguage === "en" && (
            <button
              className="p-2 rounded-xl bg-white outline outline-green-500 cursor-pointer text-2xl text-green-700 active:text-white active:bg-green-700 active:border-transparent"
              onClick={() => {
                props.handleChangeLanguage();
              }}
            >
              EN ➡️ JP
            </button>
          )}
          {props.selectedLanguage === "jp" && (
            <button
              className="p-2 rounded-xl bg-white outline outline-green-500 cursor-pointer text-2xl text-green-700 active:text-white active:bg-green-700 active:border-transparent"
              onClick={() => {
                props.handleChangeLanguage();
              }}
            >
              JP ➡️ EN
            </button>
          )}
        </div>

        {/* Horizontal menu for desktop */}
        <div className="hidden md:flex md:items-center">
          <a
            href="#about"
            className="mr-8 p-3 rounded-xl bg-white outline outline-green-500 cursor-pointer text-2xl text-green-700 hover:text-white hover:bg-green-700 hover:border-transparent"
          >
            {t("navbar.about")}
          </a>
          <a
            href="#skills"
            className="mr-8 p-3 rounded-xl bg-white outline outline-green-500 cursor-pointer text-2xl text-green-700 hover:text-white hover:bg-green-700 hover:border-transparent"
          >
            {t("navbar.skills")}
          </a>
          <a
            href="#projects"
            className="mr-8 p-3 rounded-xl bg-white outline outline-green-500 cursor-pointer text-2xl text-green-700 hover:text-white hover:bg-green-700 hover:border-transparent"
          >
            {t("navbar.projects")}
          </a>
          {props.selectedLanguage === "en" && (
            <button
              className="mr-4 p-3 rounded-xl bg-white outline outline-green-500 cursor-pointer text-2xl text-green-700 hover:text-white hover:bg-green-700 hover:border-transparent"
              onClick={() => {
                props.handleChangeLanguage();
              }}
            >
              EN ➡️ JP
            </button>
          )}
          {props.selectedLanguage === "jp" && (
            <button
              className="mr-4 p-3 rounded-xl bg-white outline outline-green-500 cursor-pointer text-2xl text-green-700 hover:text-white hover:bg-green-700 hover:border-transparent"
              onClick={() => {
                props.handleChangeLanguage();
              }}
            >
              JP ➡️ EN
            </button>
          )}
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden mr-2">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {hamburgerOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
