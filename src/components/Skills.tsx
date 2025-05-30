// import i18n from '../i18nconfig';
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const languages = [
    "/typescript-icon.png",
    "/javascript-icon.webp",
    "/java-icon.png",
    "/python-icon.png",
  ];

  const frontend = [
    "/react-icon.webp",
    "/vue-icon.png",
    "/nuxt-logo.svg",
    "/html-icon.png",
    "/css-icon.png",
    "/tailwind-icon.png",
  ];

  const backend = [
    "/node-icon.png",
    "/express-icon.png",
    "/postgres-icon.png",
    "/graphql-logo.svg.png",
    "/supabase-icon.png",
  ];

  const testing = [
    "/github-icon.png",
    "/git-icon.png",
    "/heroku-icon.png",
    "/render-logo.png",
    "/cypress-icon.png",
  ];

  return (
    <>
      <div className="w-full flex flex-col items-center shadow-lg">
        <h1 className="m-2 mt-10 p-2 text-3xl font-bold underline">
          {" "}
          {t("skills.title")}{" "}
        </h1>
        <div className="m-2 mt-10 p-2 flex flex-col items-center rounded-xl shadow-lg outline outline-black">
          <h2 className="m-2 p-2 font-bold text-2xl">
            {" "}
            {t("skills.languages")}{" "}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {languages.map((path, index) => (
              <img
                className="m-4 ml-4 mr-4 w-[10vh] h-auto"
                key={index}
                src={path}
                alt={`Language ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="m-2 mt-10 p-2 flex flex-col items-center rounded-xl shadow-lg outline outline-black">
          <h2 className="m-2 p-2 font-bold text-2xl">
            {" "}
            {t("skills.frontend")}{" "}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-6">
            {frontend.map((path, index) => (
              <img
                className="m-4 ml-4 mr-4 w-[10vh] h-auto"
                key={index}
                src={path}
                alt={`Frontend ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="m-2 mt-10 p-2 flex flex-col items-center rounded-xl shadow-lg outline outline-black">
          <h2 className="m-2 p-2 font-bold text-2xl">
            {" "}
            {t("skills.backend")}{" "}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5">
            {backend.map((path, index) => (
              <img
                className="m-4 ml-4 mr-4 w-[10vh] h-auto"
                key={index}
                src={path}
                alt={`Backend ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="m-2 mt-10 mb-15 p-2 flex flex-col items-center rounded-xl shadow-lg outline outline-black">
          <h2 className="m-2 p-2 font-bold text-2xl">
            {" "}
            {t("skills.testing")}{" "}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5">
            {testing.map((path, index) => (
              <img
                className="m-4 ml-4 mr-4 w-[10vh] h-auto"
                key={index}
                src={path}
                alt={`Testing ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
