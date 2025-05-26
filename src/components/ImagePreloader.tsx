import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

interface ImagePreloaderProps {
  src: string;
  children: React.ReactNode;
}

const ImagePreloader = ({ src, children }: ImagePreloaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  if (!isLoaded) {
    return (
      <>
        <LoadingScreen />
      </>
    );
  }

  return <>{children}</>;
};

export default ImagePreloader;
