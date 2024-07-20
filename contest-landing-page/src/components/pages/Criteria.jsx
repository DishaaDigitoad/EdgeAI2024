import React from "react";
import { criteria } from "../../Data";

const Criteria = () => {
  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto  bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        Eligibility Criteria
      </h2>
      <div className="space-y-11">
        {criteria.map((criterion, index) => (
          <div key={index} className="p-4 bg-[#E6F4EA] rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {criterion.title}
            </h3>
            <p className="text-black text-md font-semibold">{criterion.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Criteria;
