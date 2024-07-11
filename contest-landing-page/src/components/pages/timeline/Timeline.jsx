import React from "react";
import { contestFlow } from "../../../Data";

const Timeline = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-500">
        Contest Flow
      </h2>
      <div className="relative border-l border-gray-200 pl-6 space-y-12 overflow-x-auto">
        {contestFlow.map((stage, index) => (
          <div key={index} className="relative mb-8">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
            <div className="ml-10 p-4 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-gray-700">
                {stage.stage}
              </h3>
              {stage.startDate && (
                <p className="text-gray-600">
                  <span className="font-semibold">Start Date:</span>{" "}
                  {stage.startDate}
                </p>
              )}
              {stage.endDate && (
                <p className="text-gray-600">
                  <span className="font-semibold">End Date:</span>{" "}
                  {stage.endDate}
                </p>
              )}
              {stage.date && (
                <p className="text-gray-600">
                  <span className="font-semibold">Date:</span> {stage.date}
                </p>
              )}
              <p className="text-gray-600 mt-4">{stage.outcomes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
