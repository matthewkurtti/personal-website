import { createRoot } from "react-dom/client";
import "./index.css";
import React, { Suspense } from "react";
import LoadingScreen from "./components/LoadingScreen";
import ImagePreloader from "./components/ImagePreloader";
const LazyApp = React.lazy(() => {
  return import("./App");
});

createRoot(document.getElementById("root")!).render(
  <ImagePreloader src="/new-hero-pic.jpg">
    <Suspense fallback={<LoadingScreen />}>
      <LazyApp />
    </Suspense>
  </ImagePreloader>
);
