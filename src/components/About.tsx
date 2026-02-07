// import i18n from '../i18nconfig';
import { useTranslation } from "react-i18next";

interface AboutProps {
  selectedLanguage: string;
}

const About: React.FC<AboutProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="border-t-solid flex w-full flex-col-reverse items-center border-t-1 border-t-gray-400 bg-gray-50 p-5 shadow-lg lg:flex-row lg:items-center lg:justify-around">
        <div className="mt-5 mb-5 flex flex-col items-center justify-center lg:max-w-1/2">
          <h1 className="m-1 p-1 text-3xl font-bold underline">
            {" "}
            {t("about.title")}{" "}
          </h1>
          <p className="m-1 p-1 text-center text-2xl">
            {t("about.from")}🗽 {t("about.live")} 🗾
          </p>
          <p className="m-1 p-1 text-center text-2xl">
            {t("about.university")} ⚛️ {t("about.teach")} 👨🏼‍🏫
          </p>
          {props.selectedLanguage === "en" && (
          <p className="m-1 p-1 text-center text-2xl">
            {t("about.engineer1")} {" "}
            <a
              className="font-bold text-blue-400 hover:text-blue-500 underline"
              href="https://nekkolabs.com/"
              target="_blank"
            >
              NekkoLabs
            </a>
             🧑🏼‍💻
          </p>
          )}
          {props.selectedLanguage === "jp" && (
          <p className="m-1 p-1 text-center text-2xl">
            {t("about.engineer1")} {" "}
            <a
              className="font-bold text-blue-400 hover:text-blue-500 underline"
              href="https://www.findadoc.jp"
              target="_blank"
            >
              Find A Doc, Japan
            </a>
            {t("about.engineer2")}
             🧑🏼‍💻
          </p>
          )}
          <p className="m-1 p-1 text-center text-2xl">
            {t("about.hobby")} 🏃🏼‍♂️ 🚴‍♂️ 🌳
          </p>
          <p className="m-1 p-1 text-center text-2xl">
            {t("about.collaborate")} 🤝
          </p>
        </div>
        <img
          className="mt-10 mb-10 h-auto w-[40vh] rounded-xl shadow-lg outline"
          src="/bike-pic.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default About;
