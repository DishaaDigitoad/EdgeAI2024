import React from "react";
import statement from "../../assets/statement.jpg";
const ProblemStatement = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#E6F4EA] shadow-md rounded-lg p-8 md:p-12">
      <div className="pt-10 md:w-1/2 md:pr-8">
        <p className="text-m text-gray-800 mb-8">
          <span className="block mb-4">
            <span className="text-xl">In</span> response to the accelerating
            demand for integrated AI solutions across industries such as
            Automotive, Energy, Aerospace, Semiconductor, Wireless, and Academic
            Research,
          </span>
          <span className="block mb-4 text-green-700 text-xl font-semibold">
            Participants are invited to leverage their passion for innovation
            and engineering expertise to create solutions
          </span>
          <span className="block mb-4 text-#E6F4EA ">
            that not only meet current industry needs but also pave the way for
            future advancements in embedded AI technology.
          </span>
        </p>
      </div>
      <div className="md:w-1/2 md:pl-8 flex justify-center items-center">
        <img
          src={statement}
          alt="Problem Statement"
          className="w-full h-auto md:h-49 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProblemStatement;
