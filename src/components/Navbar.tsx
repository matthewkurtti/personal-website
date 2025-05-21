import { useEffect, useState } from 'react';
import i18n from '../i18nconfig';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    const currentLanguage = localStorage.getItem('i18nextLng');
    if(currentLanguage === 'en'){
      setSelectedLanguage('en');
    }
    if(currentLanguage === 'jp'){
      setSelectedLanguage('jp');
    }
  }, [])

  const handleChangeLanguage =  () => {
    if(selectedLanguage === 'en'){
      i18n.changeLanguage('jp');
      localStorage.setItem('i18nextLng', 'jp');
      setSelectedLanguage('jp');
    }
    if(selectedLanguage === 'jp'){
      i18n.changeLanguage('en');
      localStorage.setItem('i18nextLng', 'en');
      setSelectedLanguage('en');
    }
  }
  // These features below will be implemented in the future
  // const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  // const handleChangeTheme = () => {
  //   if (props.theme === "dark") {
  //     props.setTheme("light");
  //     return;
  //   }
  //   if (props.theme === "light") {
  //     props.setTheme("dark");
  //     return;
  //   }
  // };

  return (
    <>
      <div className="flex">
        <div className="bg-light-background-50 dark:bg-dark-background-50 w-full h-[10vh] p-2 flex flex-row-reverse border-b-solid border-b-1 border-b-light-accent-950 dark:border-b-dark-accent-950">
          <div className="flex items-center">
            <a
              href="#about"
              className="mr-8 cursor-pointer text-2xl text-light-text dark:text-dark-text"
            >
              {t("navbar.about")}
            </a>
            <a
              href="#skills"
              className="mr-8 cursor-pointer text-2xl text-light-text dark:text-dark-text"
            >
              {t("navbar.skills")}
            </a>
            <a
              href="#projects"
              className="mr-8 cursor-pointer text-2xl text-light-text dark:text-dark-text"
            >
              {t("navbar.projects")}
            </a>
            {/* <button className='bg-light-background-200 p-2' onClick={() => {handleChangeLanguage()}}>EN ➡️ 日本語 </button> */}
            {selectedLanguage === 'en' && (<button className='bg-light-background-200 p-2' onClick={() => {handleChangeLanguage()}}>EN ➡️ 日本語</button>)}
            {selectedLanguage === 'jp' && (<button className='bg-light-background-200 p-2' onClick={() => {handleChangeLanguage()}}>日本語 ➡️ EN</button>)}

            {/* temporarily removing theme changer until it is optimized later */}
            {/* <button
              className="mr-2 p-1 bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text border-solid border-1 border-light-accent-950 dark:border-dark-accent-950"
              onClick={() => {
                handleChangeTheme();
              }}
            >
              Change theme
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
