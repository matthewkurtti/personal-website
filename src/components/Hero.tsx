import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface HeroProps {
  selectedLanguage: string;
  handleChangeLanguage: () => void;
}

const Hero: React.FC<HeroProps> = (props) => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isHeroImageLoaded, setIsHeroImageLoaded] = useState(false);
  const { t } = useTranslation();

  const handleHeroImageLoad = () => {
    setIsHeroImageLoaded(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible1(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible2(true), 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse items-center justify-end w-full h-[100vh] sm:justify-center md:flex-row shadow-lg bg-white">
        <img
          onLoad={handleHeroImageLoad}
          className={`mt-10 w-1/2 h-auto rounded-xl shadow-lg outline sm:w-[40vw] md:mt-0  md:w-[35vw] md:mr-10 lg:w-[30vw] xl:w-[25vw]
            ${isHeroImageLoaded ? "opacity-100" : "opacity-0"}`}
          src="new-hero-pic.jpg"
          alt=""
        />
        <div className="w-full p-3 flex flex-col items-center sm:w-4/5 md:w-1/2 md:ml-15 lg:w-2/5 xl:1/5">
          <h1
            className={`
          mt-4 text-5xl md:text-6xl font-bold text-black 
          transition-opacity duration-1400 ease-in-out 
          ${isVisible1 ? "opacity-100" : "opacity-0"}
        `}
          >
            {t("hero.greeting")}
          </h1>
          <div className="flex w-full justify-center">
            <h1
              className={`
          mt-6 mr-3 text-5xl md:text-6xl font-bold text-green-700 
          transition-opacity duration-1400 ease-in-out 
          ${isVisible2 ? "opacity-100" : "opacity-0"}
        `}
            >
              {t("hero.I")}
            </h1>
            <h1
              className={`
          mt-6 ml-3 text-5xl md:text-6xl font-bold text-green-700 
          transition-opacity duration-1400 ease-in-out 
          ${isVisible2 ? "opacity-100" : "opacity-0"}
        `}
            >
              {t("hero.Matt")}
            </h1>
          </div>
          <div className="mt-10 p-5 w-4/5 flex flex-col justify-around items-center md:flex-row md:w-full">
            <a
              href="#about"
              className="m-2 p-3 outline rounded-xl shadow-lg bg-green-700 hover:bg-green-800 text-white lg:text-2xl cursor-pointer animate-bounce"
            >
              {t("hero.button")}
            </a>
            {props.selectedLanguage === "en" && (
              <button
                onClick={() => {
                  props.handleChangeLanguage();
                }}
                className="m-2 p-3 outline outline-green-500 rounded-xl shadow-lg bg-white text-green-700 hover:bg-green-700 hover:text-white hover:outline-transparent lg:text-2xl cursor-pointer"
              >
                EN ➡️ JP
              </button>
            )}
            {props.selectedLanguage === "jp" && (
              <button
                onClick={() => {
                  props.handleChangeLanguage();
                }}
                className="m-2 p-3 outline outline-green-500 rounded-xl shadow-lg bg-white text-green-700 hover:bg-green-700 hover:text-white hover:outline-transparent lg:text-2xl cursor-pointer"
              >
                JP ➡️ EN
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
