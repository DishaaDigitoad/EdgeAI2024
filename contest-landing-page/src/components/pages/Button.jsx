import React from "react";

const Button = ({ text, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button
        className="bg-white hover:text-green-600 text-green-500 font-semibold py-3 px-6 border border-green-800 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105
                      sm:py-4 sm:px-8 sm:text-lg
                      md:py-4 md:px-8 md:text-lg
                      lg:py-3 lg:px-6 lg:text-lg
                      xl:py-4 xl:px-8 xl:text-lg
                      2xl:py-5 2xl:px-10 2xl:text-xl"
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
