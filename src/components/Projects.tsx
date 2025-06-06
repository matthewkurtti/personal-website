import { useTranslation } from "react-i18next";
import YouTubeEmbed from "./YoutubeEmbed";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="border-t-solid flex w-full flex-col items-center border-t-1 border-t-gray-400 bg-gray-50 shadow-lg">
        <h1 className="m-2 mt-10 text-3xl font-bold underline">
          {" "}
          {t("projects.title")}{" "}
        </h1>
        <h1 className="mt-3 text-3xl font-bold"> {t("projects.team")} </h1>
        <div className="mt-5 flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="m-2 mb-10 flex w-[40vh] flex-col items-center justify-center rounded-xl bg-gray-100 p-4 shadow-lg outline sm:mr-8">
            <img
              className="m-2 h-auto w-1/3"
              src="/find_a_doc_japan_logo.jpg"
              alt=""
            />
            <a
              className="m-2 flex flex-col items-center text-2xl font-bold text-green-700 underline hover:text-green-800"
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
                className="hover:bg-light-accent-300 h-auto w-1/6"
                src="/github(1).png"
                alt=""
              />
            </a>
          </div>
          <div className="m-2 mb-10 flex w-[40vh] flex-col items-center rounded-xl bg-gray-100 p-4 shadow-lg outline">
            <img
              className="h-auto w-1/2"
              src="/dragon_orange_neutral.png"
              alt=""
            />
            <a
              className="m-2 flex flex-col items-center text-2xl font-bold text-green-700 underline hover:text-green-800"
              href="https://www.arcane-kitchen.com/"
              target="_blank"
            >
              {t("projects.arcane-kitchen-title")}
            </a>
            <p>{t("projects.arcane-kitchen-description")}</p>
            <YouTubeEmbed videoId="WF1mtNuVZyw" />
            <a
              className="mt-3 flex flex-col items-center"
              href="https://github.com/Arcane-Kitchen"
              target="_blank"
            >
              <img
                className="hover:bg-light-accent-300 h-auto w-1/6"
                src="/github(1).png"
                alt=""
              />
            </a>
          </div>
        </div>

        <h1 className="mt-4 text-3xl font-bold"> {t("projects.solo")} </h1>

        <div className="mt-4 mb-10 flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="m-2 mb-10 flex w-[40vh] flex-col items-center rounded-xl bg-gray-100 p-4 shadow-lg outline sm:mr-8">
            <img className="m-2 h-auto w-1/4" src="logo2.png" alt="" />
            <h2 className="m-2 text-2xl font-bold">
              {" "}
              {t("projects.website-title")}
            </h2>
            <p className="m-2">{t("projects.website-description")}</p>
            <a
              className="mt-3 flex flex-col items-center"
              href="https://github.com/matthewkurtti/personal-website"
              target="_blank"
            >
              <img
                className="hover:bg-light-accent-300 h-auto w-1/6"
                src="/github(1).png"
                alt=""
              />
            </a>
          </div>
          <div className="m-2 mb-10 flex w-[40vh] flex-col items-center rounded-xl bg-gray-100 p-4 shadow-lg outline sm:mr-8">
            <img className="m-2 h-auto w-1/4" src="/strawberry.png" alt="" />
            <h2 className="m-2 text-2xl font-bold">
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
                className="hover:bg-light-accent-300 h-auto w-1/6"
                src="/github(1).png"
                alt=""
              />
            </a>
          </div>
          <div className="m-2 mb-10 flex w-[40vh] flex-col items-center rounded-xl bg-gray-100 p-4 shadow-lg outline">
            <img className="m-2 h-auto w-1/3" src="/flashcard.png" alt="" />
            <h2 className="m-2 text-2xl font-bold">
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
                className="hover:bg-light-accent-300 h-auto w-1/6"
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
