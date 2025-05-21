// import i18n from '../i18nconfig';
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const { t } = useTranslation();


  return (
    <>
      <div className="flex justify-center bg-[url(/mountain-pic.JPG)] bg-left bg-cover w-full h-[90vh] bg-light-background dark:bg-dark-background">
        <h1 className="mt-3 text-6xl">{t('hero.greeting')} </h1>
      </div>
    </>
  );
};

export default Hero;
