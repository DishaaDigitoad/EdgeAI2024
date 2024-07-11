import React from "react";

const ParallaxSection = ({ image, children }) => {
  return (
    <div
      className="parallax-section flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">{children}</div>
    </div>
  );
};

export default ParallaxSection;
