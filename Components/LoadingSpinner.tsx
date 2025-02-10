import React from "react";

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-background-300 border-t-4 border-t-primary-500 rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner;
