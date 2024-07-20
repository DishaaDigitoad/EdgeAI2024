import React from "react";
import STM from "../../assets/STM.png";

const Partners = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-green-700 font-semibold text-center mb-8">
        In Partnership With
      </h2>
      <div className="flex justify-center items-center">
        <a href="https://www.st.com/" target="_blank" rel="noopener noreferrer">
          <img
            src={STM}
            alt="Partner logo"
            className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
};

export default Partners;
