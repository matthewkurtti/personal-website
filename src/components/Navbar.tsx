const Navbar = () => {
  return (
    <>
      <div className="bg-blue-400 w-full h-12 flex flex-row-reverse">
        <div className="flex items-center">
          <h1 className="mr-8 cursor-pointer text-2xl">About</h1>
          <h1 className="mr-8 cursor-pointer text-2xl">Projects</h1>
          <h1 className="mr-8 cursor-pointer text-2xl">Contact</h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;