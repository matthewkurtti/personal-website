const Skills = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col items-center">
        <h1 className="m-2 p-2 text-3xl font-bold underline">Skills</h1>
        <div className="m-2 p-2 flex flex-col items-center border-solid border-1 border-black">
            <h2 className="m-2 p-2 font-bold text-2xl">Languages</h2>
            <div className="flex">
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/typescript-icon.png" alt="" />
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/javascript-icon.webp" alt="" />
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/java-icon.png" alt="" />
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/python-icon.png" alt="" />
            </div>
        </div>
        <div className="m-2 p-2 flex flex-col items-center border-solid border-1 border-black">
            <h2 className="m-2 p-2 font-bold text-2xl">Frontend</h2>
            <div className="flex">
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/react-icon.webp" alt="" />
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/vue-icon.png" alt="" />
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/tailwind-icon.png" alt="" />
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/html-icon.png" alt="" />
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/css-icon.png" alt="" />
            </div>
        </div>
        <div className="m-2 p-2 flex flex-col items-center border-solid border-1 border-black">
            <h2 className="m-2 p-2 font-bold text-2xl">Backend and Database</h2>
            <div className="flex">
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/node-icon.png" alt="" />
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/express-icon.png" alt="" />
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/postgres-icon.png" alt="" />
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/supabase-icon.png" alt="" />
            </div>
        </div>
        <div className="m-2 p-2 flex flex-col items-center border-solid border-1 border-black">
            <h2 className="m-2 p-2 font-bold text-2xl">Testing and Deployment</h2>
            <div className="flex">
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/github-icon.png" alt="" />
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/git-icon.png" alt="" />
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/heroku-icon.png" alt="" />
                <img className="m-1 ml-4 mr-4 w-[10vh] h-auto" src="/cypress-icon.png" alt="" />
                
            </div>
        </div>
      </div>
    </>
  );
};

export default Skills;