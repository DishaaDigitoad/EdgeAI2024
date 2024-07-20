import React from "react";

const Button = ({ text, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button
        className="py-5 px-9 text-xl bg-green-600 hover:bg-green-800 text-white font-semibold py-3 px-6 border border-green-800 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105
                      sm:py-5 sm:px-8 sm:text-xl
                      md:py-5 md:px-8 md:text-xl
                      lg:py-5 lg:px-6 lg:text-xl
                      xl:py-5 xl:px-8 xl:text-xl
                      2xl:py-5 2xl:px-10 2xl:text-xl"
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
