const About = () => {
  return (
    <>
      <div className="w-full flex flex-col-reverse items-center lg:flex-row lg:justify-around lg:items-center bg-light-background-100">
        <div className="mt-5 mb-5 flex flex-col items-center justify-center">
          <h1 className="m-1 p-1 text-3xl font-bold underline">About me</h1>
          <p className="m-1 p-1 text-2xl">
            I'm from Fargo, ND in the U.S.A. 🗽 I currently live in Kumamoto
            City, Kumamoto, Japan 🗾
          </p>
          <p className="m-1 p-1 text-2xl">
            I studied Physics in university ⚛️ After university, I taught
            English in Japan 👨🏼‍🏫
          </p>
          <p className="m-1 p-1 text-2xl">
            I'm currently a remote software engineer working on team and solo
            projects 🧑🏼‍💻
          </p>
          <p className="m-1 p-1 text-2xl">
            When I'm not coding, I like to run 🏃🏼‍♂️, cycle 🚴‍♂️, and enjoy nature 🌳
          </p>
          <p className="m-1 p-1 text-2xl">
            Feel free to check out my projects or reach out if you'd like to
            collaborate 🤝
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
