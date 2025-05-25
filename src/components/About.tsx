// import i18n from '../i18nconfig';
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="p-5 w-full flex flex-col-reverse items-center lg:flex-row lg:justify-around lg:items-center border-t-solid border-t-gray-400 border-t-1 bg-gray-50 shadow-lg">
        <div className="mt-5 mb-5 flex flex-col items-center justify-center lg:max-w-1/2">
          <h1 className="m-1 p-1 text-3xl font-bold underline">
            {" "}
            {t("about.title")}{" "}
          </h1>
          <p className="m-1 p-1 text-2xl text-center">
            {t("about.from")}🗽 {t("about.live")} 🗾
          </p>
          <p className="m-1 p-1 text-2xl text-center">
            {t("about.university")} ⚛️ {t("about.teach")} 👨🏼‍🏫
          </p>
          <p className="m-1 p-1 text-2xl text-center">
            {t("about.engineer1")} -actively contributing on{" "}
            <a
              className="text-green-800 hover:text-green-800 animate-pulse underline font-bold"
              href="https://www.findadoc.jp"
              target="_blank"
            >
              FindaDoc
            </a>
            -{t("about.engineer2")} 🧑🏼‍💻
          </p>
          <p className="m-1 p-1 text-2xl text-center">
            {t("about.hobby")} 🏃🏼‍♂️ 🚴‍♂️ 🌳
          </p>
          <p className="m-1 p-1 text-2xl text-center">
            {t("about.collaborate")} 🤝
          </p>
        </div>
        <img
          className="mt-10 mb-10 w-[40vh] h-auto rounded-xl shadow-lg outline"
          src="/bike-pic.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default About;
