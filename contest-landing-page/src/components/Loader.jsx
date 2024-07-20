import React from "react";
import loaderLogo from "../assets/loaderlogo.jpg";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen relative">
      <img 
        src={loaderLogo} 
        alt="Loading" 
        className="w-1/2 h-auto max-w-xs sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/4 rounded-full"
      />
    </div>
  );
};

export default Loader;
