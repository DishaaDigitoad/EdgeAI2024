import React from "react";
import posterImage from "../../assets/Poster.png";

const Hero = () => {
  return (
    <div className="relative bg-gray-800 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img
        src={posterImage}
        alt="Poster"
        className="w-full h-auto object-cover sm:h-96"
      />
      {/* Optional: Overlay text if needed */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Event</h1>
      </div> */}
    </div>
  );
};

export default Hero;
