const Footer = () => {
  return (
    <>
      <div className="border-t-solid flex w-full items-center justify-around border-t-1 border-t-black/5 bg-gray-100">
        <a
          className="mt-4 mb-4 h-auto w-1/8 sm:w-1/23"
          href="https://www.linkedin.com/in/matthew-kurtti-737ab2123/"
          target="_blank"
        >
          <img
            className="rounded-4xl hover:bg-light-accent-700"
            src="/linkedin(1).png"
            alt=""
          />
        </a>
        <a
          className="mt-4 mb-4 h-auto w-1/8 sm:w-1/23"
          href="https://github.com/matthewkurtti"
          target="_blank"
        >
          <img
            className="rounded-xl hover:bg-light-accent-700"
            src="/github(1).png"
            alt=""
          />
        </a>
        <a
          className="mt-4 mb-4 h-auto w-1/8 sm:w-1/23"
          href="mailto:matthew.b.kurtti@gmail.com"
          target="_blank"
        >
          <img className="rounded-4xl hover:bg-light-accent-700" src="/email.png" alt="" />
        </a>
      </div>
    </>
  );
};

export default Footer;
