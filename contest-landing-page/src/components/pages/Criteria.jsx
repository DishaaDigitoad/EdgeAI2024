import React from "react";
import { criteria } from "../../Data";

const Criteria = () => {
  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto bg-[#F7FBF9]">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        Eligibility Criteria
      </h2>
      <div className="space-y-11">
        <div className="p-4 bg-[#E6F4EA] rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2">
            STMicroelectronics Edge AI Suite Selection:
          </h3>
          <p className="text-md text-green-700 font-normal">
            The proposal for solutions should highlight the incorporation of{" "}
            <a
              href="https://stm32ai.st.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              STMicroelectronics Edge AI Suite
            </a>
            , which includes STM32 Hardware, NanoEdge AI Studio, Cube AI, etc.,
            at the time of registration.
          </p>
        </div>
        {criteria.map((criterion, index) => (
          <div key={index} className="p-4 bg-[#E6F4EA] rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2">
              {criterion.title}
            </h3>
            <p className="text-md text-green-700 font-normal">
              {criterion.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Criteria;
