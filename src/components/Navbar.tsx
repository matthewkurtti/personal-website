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
      <div className="dark:bg-dark-background-50 border-b-solid dark:border-b-dark-accent-950 fixed top-0 left-0 z-1000 flex h-[10vh] w-full items-center justify-between border-b-1 border-b-black/5 bg-gray-100 p-2 shadow-lg">
        <a
          className="ml-2 flex h-2/3 w-1/7 justify-center md:h-4/5 md:w-1/14"
          href="#hero"
        >
          <img
            className="h-full w-full cursor-pointer"
            src="logo2.png"
            alt=""
          />
        </a>

        {/* Vertical Menu Items for Mobile */}
        <div
          ref={menuRef}
          className={`mt-34 flex flex-col items-center overflow-hidden bg-gray-100 px-4 transition-all duration-300 ease-in-out md:hidden ${
            hamburgerOpen ? "max-h-60 py-2" : "max-h-0"
          }`}
        >
          <a
            href="#about"
            className="mt-2 mb-2 cursor-pointer rounded-xl bg-white p-2 text-2xl text-green-700 outline outline-green-500 active:border-transparent active:bg-green-700 active:text-white"
          >
            {t("navbar.about")}
          </a>
          <a
            href="#skills"
            className="mb-2 cursor-pointer rounded-xl bg-white p-2 text-2xl text-green-700 outline outline-green-500 active:border-transparent active:bg-green-700 active:text-white"
          >
            {t("navbar.skills")}
          </a>
          <a
            href="#projects"
            className="mb-2 cursor-pointer rounded-xl bg-white p-2 text-2xl text-green-700 outline outline-green-500 active:border-transparent active:bg-green-700 active:text-white"
          >
            {t("navbar.projects")}
          </a>
          {props.selectedLanguage === "en" && (
            <button
              className="cursor-pointer rounded-xl bg-white p-2 text-2xl text-green-700 outline outline-green-500 active:border-transparent active:bg-green-700 active:text-white"
              onClick={() => {
                props.handleChangeLanguage();
              }}
            >
              EN ➡️ JP
            </button>
          )}
          {props.selectedLanguage === "jp" && (
            <button
              className="cursor-pointer rounded-xl bg-white p-2 text-2xl text-green-700 outline outline-green-500 active:border-transparent active:bg-green-700 active:text-white"
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
            className="mr-8 cursor-pointer rounded-xl bg-white p-3 text-2xl text-green-700 outline outline-green-500 hover:border-transparent hover:bg-green-700 hover:text-white"
          >
            {t("navbar.about")}
          </a>
          <a
            href="#skills"
            className="mr-8 cursor-pointer rounded-xl bg-white p-3 text-2xl text-green-700 outline outline-green-500 hover:border-transparent hover:bg-green-700 hover:text-white"
          >
            {t("navbar.skills")}
          </a>
          <a
            href="#projects"
            className="mr-8 cursor-pointer rounded-xl bg-white p-3 text-2xl text-green-700 outline outline-green-500 hover:border-transparent hover:bg-green-700 hover:text-white"
          >
            {t("navbar.projects")}
          </a>
          {props.selectedLanguage === "en" && (
            <button
              className="mr-4 cursor-pointer rounded-xl bg-white p-3 text-2xl text-green-700 outline outline-green-500 hover:border-transparent hover:bg-green-700 hover:text-white"
              onClick={() => {
                props.handleChangeLanguage();
              }}
            >
              EN ➡️ JP
            </button>
          )}
          {props.selectedLanguage === "jp" && (
            <button
              className="mr-4 cursor-pointer rounded-xl bg-white p-3 text-2xl text-green-700 outline outline-green-500 hover:border-transparent hover:bg-green-700 hover:text-white"
              onClick={() => {
                props.handleChangeLanguage();
              }}
            >
              JP ➡️ EN
            </button>
          )}
        </div>

        {/* Hamburger Button */}
        <div className="mr-2 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-9 w-9"
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
