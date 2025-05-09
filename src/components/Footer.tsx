const Footer = () => {
  return (
    <>
      <div className="w-full h-[10vh] flex items-center justify-around">
        <a
          href="https://www.linkedin.com/in/matthew-kurtti-737ab2123/"
          target="_blank"
        >
          <img className="w-[3vw] h-auto" src="/linkedin(1).png" alt="" />
        </a>
        <a href="https://github.com/matthewkurtti" target="_blank">
          <img className="w-[3vw] h-auto" src="/github(1).png" alt="" />
        </a>
        <a href="mailto:matthew.b.kurtti@gmail.com" target="_blank">
          <img className="w-[3vw] h-auto" src="/email.png" alt="" />
        </a>
      </div>
    </>
  );
};

export default Footer;
