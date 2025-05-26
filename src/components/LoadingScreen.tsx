import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="w-20 h-20 border-4 border-gray-300 border-t-green-700 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingScreen;
