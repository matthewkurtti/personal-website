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
      <div className="flex h-[100vh] w-full flex-col-reverse items-center justify-end bg-white shadow-lg sm:justify-center md:flex-row">
        <img
          onLoad={handleHeroImageLoad}
          className={`h-auto w-1/2 rounded-xl shadow-lg outline sm:w-[40vw] md:mt-0 md:mr-10 md:w-[35vw] lg:w-[30vw] xl:w-[25vw] ${isHeroImageLoaded ? "opacity-100" : "opacity-0"}`}
          src="new-hero-pic.jpg"
          alt=""
        />
        <div className="xl:1/5 flex w-full flex-col items-center p-3 sm:w-4/5 md:ml-15 md:w-1/2 lg:w-2/5">
          <h1
            className={`mt-4 text-5xl font-bold text-black transition-opacity duration-1400 ease-in-out md:text-6xl ${isVisible1 ? "opacity-100" : "opacity-0"} `}
          >
            {t("hero.greeting")}
          </h1>
          <div className="flex w-full justify-center">
            <h1
              className={`mt-6 mr-3 text-5xl font-bold text-green-700 transition-opacity duration-1400 ease-in-out md:text-6xl ${isVisible2 ? "opacity-100" : "opacity-0"} `}
            >
              {t("hero.I")}
            </h1>
            <h1
              className={`mt-6 ml-3 text-5xl font-bold text-green-700 transition-opacity duration-1400 ease-in-out md:text-6xl ${isVisible2 ? "opacity-100" : "opacity-0"} `}
            >
              {t("hero.Matt")}
            </h1>
          </div>
          <div className="mt-10 flex w-4/5 flex-col items-center justify-around p-5 md:w-full md:flex-row">
            <a
              href="#about"
              className="m-2 cursor-pointer rounded-xl bg-green-700 p-3 text-white shadow-lg outline hover:bg-green-800 lg:text-2xl"
            >
              {t("hero.button")}
            </a>
            {props.selectedLanguage === "en" && (
              <button
                onClick={() => {
                  props.handleChangeLanguage();
                }}
                className="m-2 cursor-pointer rounded-xl bg-white p-3 text-green-700 shadow-lg outline outline-green-500 hover:bg-green-700 hover:text-white hover:outline-transparent active:bg-green-700 active:text-white lg:text-2xl"
              >
                EN ➡️ JP
              </button>
            )}
            {props.selectedLanguage === "jp" && (
              <button
                onClick={() => {
                  props.handleChangeLanguage();
                }}
                className="m-2 cursor-pointer rounded-xl bg-white p-3 text-green-700 shadow-lg outline outline-green-500 hover:bg-green-700 hover:text-white hover:outline-transparent active:bg-green-700 active:text-white lg:text-2xl"
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
