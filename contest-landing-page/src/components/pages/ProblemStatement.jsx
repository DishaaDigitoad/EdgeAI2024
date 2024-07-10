import React from "react";
import PS from "../../assets/problemstatement.jpg";

const ProblemStatement = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-3xl mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={PS}
            alt="Problem statement"
            className="w-full h-auto mx-auto md:mx-0 lg:w-2/3"
            loading="lazy"
          />
        </div>
        {/* Text Content */}
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Problem Statement
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            <span className="block mb-4">
              In response to the accelerating demand for integrated AI solutions
              across industries such as Automotive, Energy, Aerospace,
              Semiconductor, Wireless, and Academic Research,
            </span>
            <span className="block mb-4">
              Participants are invited to leverage their passion for innovation
              and engineering expertise to create solutions
            </span>
            <span className="block mb-4">
              that not only meet current industry needs but also pave the way
              for future advancements in embedded AI technology.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;
