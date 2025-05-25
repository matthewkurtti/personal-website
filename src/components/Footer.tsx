const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 w-full flex items-center justify-around border-t-black/5 border-t-solid border-t-1">
        <a
          className="mt-4 mb-4 w-1/8 sm:w-1/23 h-auto"
          href="https://www.linkedin.com/in/matthew-kurtti-737ab2123/"
          target="_blank"
        >
          <img
            className="hover:bg-light-accent-700"
            src="/linkedin(1).png"
            alt=""
          />
        </a>
        <a
          className="mt-4 mb-4 w-1/8 sm:w-1/23 h-auto"
          href="https://github.com/matthewkurtti"
          target="_blank"
        >
          <img
            className="hover:bg-light-accent-700"
            src="/github(1).png"
            alt=""
          />
        </a>
        <a
          className="mt-4 mb-4 w-1/8 sm:w-1/23 h-auto"
          href="mailto:matthew.b.kurtti@gmail.com"
          target="_blank"
        >
          <img className="hover:bg-light-accent-700" src="/email.png" alt="" />
        </a>
      </div>
    </>
  );
};

export default Footer;
