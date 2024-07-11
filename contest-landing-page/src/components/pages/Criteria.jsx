import React from "react";
import { criteria } from "../../Data";

const Criteria = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-500">
        Eligibility Criteria
      </h2>
      <div className="space-y-8">
        {criteria.map((criterion, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {criterion.title}
            </h3>
            <p className="text-gray-600">{criterion.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Criteria;
