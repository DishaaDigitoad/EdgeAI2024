import React from "react";
import statement from "../../assets/statement.png";

const ProblemStatement = () => {
  return (
    <div
      className="problem-statement flex flex-col md:flex-row items-center justify-center bg-[#E6F4EA] shadow-md rounded-lg p-8 md:p-12"
      style={{ maxWidth: "1200px", margin: "0 auto" }}
    >
      <div className="flex flex-col justify-center items-center md:w-1/2">
        <p className="text-base md:text-lg text-black mb-8 text-center md:text-left">
          <span className="block mb-4">
            In response to the accelerating demand for integrated AI solutions
            across industries such as Automotive, Energy, Aerospace,
            Semiconductor, Wireless, and Academic Research,
          </span>
          <span className="block mb-4 text-green-700 text-xl">
            Participants are invited to leverage their passion for innovation
            and engineering expertise to create solutions
          </span>
          <span className="block mb-4 text-black">
            that not only meet current industry needs but also pave the way for
            future advancements in embedded AI technology.
          </span>
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={statement}
          alt="Problem Statement"
          className="w-full h-auto max-w-[400px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProblemStatement;
