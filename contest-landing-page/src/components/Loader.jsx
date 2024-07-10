// Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-green-500"></div>
    </div>
  );
};

export default Loader;
