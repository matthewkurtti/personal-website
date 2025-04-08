const Navbar = () => {
  return (
    <>
      <div className="bg-light-primary dark:bg-dark-primary w-full h-12 flex flex-row-reverse">
        <div className="flex items-center">
          <h1 className="mr-8 cursor-pointer text-2xl text-light-text dark:text-dark-text">
            About
          </h1>
          <h1 className="mr-8 cursor-pointer text-2xl text-light-text dark:text-dark-text">
            Projects
          </h1>
          <h1 className="mr-8 cursor-pointer text-2xl text-light-text dark:text-dark-text">
            Contact
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
