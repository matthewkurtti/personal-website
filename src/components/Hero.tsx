import { useEffect, useState } from "react";

// import i18n from '../i18nconfig';
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible1(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible2(true), 600);
    return () => clearTimeout(timeout);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col-reverse items-center justify-end w-full h-[100vh] sm:justify-center md:flex-row shadow-lg bg-light-background">
        <img
          className="mt-10 w-[62vw] h-auto rounded-xl shadow-lg md:mt-0 sm:w-[40vw] md:w-[35vw] md:mr-10 lg:w-[30vw] xl:w-[25vw]"
          src="new-hero-pic.jpg"
          alt=""
        />
        <div className="mt-15 w-full p-3 flex flex-col items-center sm:w-4/5 md:w-1/2 md:ml-15 lg:w-2/5 xl:1/5">
          <h1
            className={`
          mt-4 text-6xl md:text-6xl font-bold text-black 
          transition-opacity duration-1400 ease-in-out 
          ${isVisible1 ? "opacity-100" : "opacity-0"}
        `}
          >
            {t("hero.greeting")}
          </h1>
          <div className="flex w-full justify-center">
            <h1
              className={`
          mt-6 mr-3 text-6xl md:text-6xl font-bold text-green-700 
          transition-opacity duration-1400 ease-in-out 
          ${isVisible2 ? "opacity-100" : "opacity-0"}
        `}
            >
              {t("hero.I")}
            </h1>
            <h1
              className={`
          mt-6 ml-3 text-6xl md:text-6xl font-bold text-green-700 
          transition-opacity duration-1400 ease-in-out 
          ${isVisible2 ? "opacity-100" : "opacity-0"}
        `}
            >
              {t("hero.Matt")}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
