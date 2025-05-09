const Projects = () => {
  return (
    <>
      <div className="w-full bg-light-background-200 flex flex-col items-center">
        <h1 className="m-2 text-3xl font-bold underline">Projects</h1>
        <div className="w-full flex justify-around">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Team</h1>
            <div className="m-2 p-2 w-[40vh] flex flex-col items-center border-solid border-1 border-black">
              <a
                className="flex flex-col items-center"
                href="https://www.arcane-kitchen.com/"
                target="_blank"
              >
                <img
                  className="w-1/2 h-auto"
                  src="/dragon_orange_neutral.png"
                  alt=""
                />
              </a>

              <h2 className="font-bold">Arcane Kitchen</h2>
              <p>
                Arcane Kitchen is a fantasy RPG themed meal planning app that
                aims to motivate users to eat healthy in a fun and engaging way.
              </p>
              <a
                className="mt-3 flex flex-col items-center"
                href="https://github.com/Arcane-Kitchen"
                target="_blank"
              >
                <img className="w-1/6 h-auto" src="/github(1).png" alt="" />
              </a>
            </div>
            <div className="m-2 p-2 w-[40vh] flex flex-col items-center border-solid border-1 border-black">
              <a
                className="flex flex-col items-center"
                href="https://www.findadoc.jp/"
                target="_blank"
              >
                <img
                  className="w-1/2 h-auto"
                  src="/find_a_doc_japan_logo.jpg"
                  alt=""
                />
              </a>

              <h2 className="font-bold">Find a Doc, Japan</h2>
              <p>
                Find a Doc, Japan is an NPO that helps people find healthcare in
                Japan in their language.
              </p>
              <a
                className="mt-3 flex flex-col items-center"
                href="https://github.com/ourjapanlife"
                target="_blank"
              >
                <img className="w-1/6 h-auto" src="/github(1).png" alt="" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Solo</h1>

            <div className="m-2 p-2 w-[40vh] flex flex-col items-center border-solid border-1 border-black">
              <img className="w-1/4 h-auto" src="/strawberry.png" alt="" />
              <h2 className="font-bold">IchiGo</h2>
              <p>
                A game where you are so excited to eat strawberries that you
                just keep running faster and faster! But be careful not to hit
                the other runners! See how long you can keep running in Ichi Go!
              </p>
              <a
                className="mt-3 flex flex-col items-center"
                href="https://github.com/matthewkurtti/IchiGo"
                target="_blank"
              >
                <img className="w-1/6 h-auto" src="/github(1).png" alt="" />
              </a>
            </div>
            <div className="m-2 p-2 w-[40vh] flex flex-col items-center border-solid border-1 border-black">
              <img className="w-1/3 h-auto" src="/flashcard.png" alt="" />
              <h2 className="font-bold">GoRaku</h2>
              <p>
                Aims to assist language learners who enjoy watching shows or
                anime in their target language. GoRaku can take an audio clip in
                the target language from your favorite show and automatically
                turn that audio into a text flash card with a front and back.
              </p>
              <a
                className="mt-3 flex flex-col items-center"
                href="https://github.com/matthewkurtti/goraku"
                target="_blank"
              >
                <img className="w-1/6 h-auto" src="/github(1).png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
