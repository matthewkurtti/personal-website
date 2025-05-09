const About = () => {
  return (
    <>
      <div className="w-full h-[90vh] flex justify-around items-center bg-light-background-100">
        <div className="flex flex-col items-center">
            <h1 className="m-1 p-1 text-3xl font-bold underline">About me</h1>
            <p className="m-1 p-1 text-2xl">
                I'm from Fargo, ND in the U.S.A. 🗽 I currently live in Kumamoto City,
                Kumamoto, Japan 🗾<br /><br />

                I studies Physics in university ⚛️ After university, I taught
                English in Japan 👨🏼‍🏫

                <br /><br />

                I'm currently a remote software engineer working on team and solo projects 🧑🏼‍💻
                <br /><br />

                When I'm not coding, I like to run 🏃🏼‍♂️, cycle 🚴‍♂️, and enjoy nature 🌳 <br /><br />
            </p>
        </div>
        <img className="w-[40vh] h-auto border-black border-solid border-1" src="/bike-pic.jpg" alt="" />
      </div>
    </>
  );
};

export default About;