import { useEffect, useState } from "react";

// import i18n from '../i18nconfig';
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);
  
  const { t } = useTranslation();


  return (
    <>
      <div className="mt-23 flex justify-center bg-[url(/mountain-pic.JPG)] bg-left bg-cover w-full h-[90vh] bg-light-background dark:bg-dark-background">
        <h1 className={`
          mt-6 text-4xl md:text-6xl font-bold text-black 
          transition-opacity duration-1400 ease-in-out 
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}>{t('hero.greeting')}</h1>
      </div>
    </>
  );
};

export default Hero;
