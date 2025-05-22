// import i18n from '../i18nconfig';
import { useTranslation } from 'react-i18next';


const About = () => {
  const { t } = useTranslation();


  return (
    <>
      <div className="w-full flex flex-col-reverse items-center lg:flex-row lg:justify-around lg:items-center bg-light-background-100">
        <div className="mt-5 mb-5 flex flex-col items-center justify-center">
          <h1 className="m-1 p-1 text-3xl font-bold underline"> {t("about.title")} </h1>
          <p className="m-1 p-1 text-2xl">
            {t("about.from")}🗽 {t("about.live")} 🗾
          </p>
          <p className="m-1 p-1 text-2xl">
            {t("about.university")} ⚛️ {t("about.teach")} 👨🏼‍🏫
          </p>
          <p className="m-1 p-1 text-2xl">
            {t("about.engineer1")} -actively contributing on {" "}
            <a
              className="text-light-accent-500 hover:text-light-accent-700 underline"
              href="https://www.findadoc.jp"
              target="_blank"
            >
              FindaDoc
            </a>
            -{t("about.engineer2")} 🧑🏼‍💻
          </p>
          <p className="m-1 p-1 text-2xl">
            {t("about.hobby")} 🏃🏼‍♂️ 🚴‍♂️ 🌳
          </p>
          <p className="m-1 p-1 text-2xl">
            {t("about.collaborate")} 🤝
          </p>
        </div>
        <img
          className="mt-4 mb-4 w-[40vh] h-auto border-black border-solid border-1"
          src="/bike-pic.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default About;
