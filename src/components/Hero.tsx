import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <>
      <div className="flex justify-center bg-[url(/mountain-pic.JPG)] bg-left bg-cover w-full h-[90vh] bg-light-background dark:bg-dark-background">
        <h1 className={`
          mt-6 text-4xl md:text-6xl font-bold text-black 
          transition-opacity duration-1400 ease-in-out 
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}>Hi, I'm Matt</h1>
      </div>
    </>
  );
};

export default Hero;
