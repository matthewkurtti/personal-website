import { createRoot } from "react-dom/client";
import "./index.css";
import React, { Suspense } from "react";
import LoadingScreen from "./components/LoadingScreen";
const LazyApp = React.lazy(() => {
  return import("./App");
});

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingScreen />}>
    <LazyApp />
  </Suspense>
);
