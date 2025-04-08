const Navbar = () => {
  return (
    <>
      <div className="bg-primary-base w-full h-12 flex flex-row-reverse">
        <div className="flex items-center">
          <h1 className="mr-8 cursor-pointer text-2xl text-text-base">About</h1>
          <h1 className="mr-8 cursor-pointer text-2xl text-text-base">
            Projects
          </h1>
          <h1 className="mr-8 cursor-pointer text-2xl text-text-base">
            Contact
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
