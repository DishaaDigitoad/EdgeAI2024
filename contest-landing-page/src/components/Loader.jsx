import React from "react";
import DigiToad from "../assets/DigiToad.png";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <img
          src={DigiToad}
          alt="Loading"
          className="absolute inset-0 object-cover h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 z-10"
        />
        <div className="animate-spin rounded-full h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 border-t-4 border-b-4 border-green-500"></div>
      </div>
    </div>
  );
};

export default Loader;
