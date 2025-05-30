import { useTranslation } from "react-i18next";
import YouTubeEmbed from "./YoutubeEmbed";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full bg-gray-50 flex flex-col items-center shadow-lg border-t-gray-400 border-t-solid border-t-1">
        <h1 className="m-2 mt-10 text-3xl font-bold underline">
          {" "}
          {t("projects.title")}{" "}
        </h1>
        <h1 className="mt-3 text-3xl font-bold"> {t("projects.team")} </h1>
        <div className="mt-5 flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="m-2 mb-10 sm:mr-8 p-4 w-[40vh] bg-gray-100 flex flex-col items-center justify-center rounded-xl shadow-lg outline">
            <img
              className="m-2 w-1/3 h-auto"
              src="/find_a_doc_japan_logo.jpg"
              alt=""
            />
            <a
              className="m-2 flex flex-col items-center font-bold underline text-2xl text-green-700 hover:text-green-800"
              href="https://www.findadoc.jp/"
              target="_blank"
            >
              {t("projects.findadoc-title")}
            </a>

            <p>{t("projects.findadoc-description")}</p>
            <a
              className="mt-3 flex flex-col items-center"
              href="https://github.com/ourjapanlife"
              target="_blank"
            >
              <img
                className="w-1/6 h-auto hover:bg-light-accent-300"
                src="/github(1).png"
                alt=""
              />
            </a>
          </div>
          <div className="m-2 mb-10 p-4 bg-gray-100 w-[40vh] flex flex-col items-center rounded-xl shadow-lg outline">
            <img
              className="w-1/2 h-auto"
              src="/dragon_orange_neutral.png"
              alt=""
            />
            <a
              className="m-2 flex flex-col items-center font-bold underline text-2xl text-green-700 hover:text-green-800"
              href="https://www.arcane-kitchen.com/"
              target="_blank"
            >
              {t("projects.arcane-kitchen-title")}
            </a>

            <p>{t("projects.arcane-kitchen-description")}</p>
            <a
              className="mt-3 flex flex-col items-center"
              href="https://github.com/Arcane-Kitchen"
              target="_blank"
            >
              <img
                className="w-1/6 h-auto hover:bg-light-accent-300"
                src="/github(1).png"
                alt=""
              />
            </a>
          </div>
        </div>

        <h1 className="mt-4 text-3xl font-bold"> {t("projects.solo")} </h1>

        <div className="mt-4 mb-10 flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="sm:mr-8 m-2 mb-10 p-4 bg-gray-100 w-[40vh] flex flex-col items-center rounded-xl shadow-lg outline">
            <img className="m-2 w-1/4 h-auto" src="/strawberry.png" alt="" />
            <h2 className="m-2 font-bold text-2xl">
              {" "}
              {t("projects.ichigo-title")}{" "}
            </h2>
            <p className="m-2">{t("projects.ichigo-description")}</p>
            <YouTubeEmbed videoId="zWgbrLDfZn4" />
            <a
              className="mt-3 flex flex-col items-center"
              href="https://github.com/matthewkurtti/IchiGo"
              target="_blank"
            >
              <img
                className="w-1/6 h-auto hover:bg-light-accent-300"
                src="/github(1).png"
                alt=""
              />
            </a>
          </div>
          <div className="m-2 mb-10 p-4 bg-gray-100 w-[40vh] flex flex-col items-center rounded-xl shadow-lg outline">
            <img className="m-2 w-1/3 h-auto" src="/flashcard.png" alt="" />
            <h2 className="m-2 font-bold text-2xl">
              {" "}
              {t("projects.goraku-title")}{" "}
            </h2>
            <p className="m-2">{t("projects.goraku-description")}</p>
            <YouTubeEmbed videoId="ZUyVUouvXjw" />
            <a
              className="mt-3 flex flex-col items-center"
              href="https://github.com/matthewkurtti/goraku"
              target="_blank"
            >
              <img
                className="w-1/6 h-auto hover:bg-light-accent-300"
                src="/github(1).png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
