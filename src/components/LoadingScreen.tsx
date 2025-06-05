import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="h-20 w-20 animate-spin rounded-full border-4 border-gray-300 border-t-green-700"></div>
    </div>
  );
};

export default LoadingScreen;
