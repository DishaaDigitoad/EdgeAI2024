import React from "react";
import moment from "moment";

const Timeline = () => {
  const stages = [
    {
      id: 1,
      startDate: "2024-06-01",
      endDate: "2024-06-30",
      description: "Stage 1",
    },
    {
      id: 2,
      startDate: "2024-05-01",
      endDate: "2024-08-31",
      description: "Stage 2",
    },
    {
      id: 3,
      startDate: "2024-08-01",
      endDate: "2024-08-31",
      description: "Stage 3",
    },
  ];
  const today = moment();
  const formatDate = (date) => moment(date).format("MMMM YYYY");

  const getStatus = (startDate, endDate) => {
    const startMoment = moment(startDate);
    const endMoment = moment(endDate);

    if (endMoment.isBefore(today, "day")) {
      return "completed";
    } else if (
      startMoment.isSameOrBefore(today, "day") &&
      endMoment.isSameOrAfter(today, "day")
    ) {
      return "active";
    } else {
      return "upcoming";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        {stages.map((stage) => (
          <div
            key={stage.id}
            className={`flex items-center mb-4 ${
              getStatus(stage.startDate, stage.endDate) === "active"
                ? "text-blue-600"
                : "text-gray-500"
            }`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-${
                getStatus(stage.startDate, stage.endDate) === "completed"
                  ? "green"
                  : getStatus(stage.startDate, stage.endDate) === "active"
                  ? "blue"
                  : "gray"
              }-500 text-white`}
            >
              {getStatus(stage.startDate, stage.endDate) === "completed" ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                stage.id
              )}
            </div>
            <div className="ml-4">
              <div className="font-bold">
                {formatDate(stage.startDate)} - {formatDate(stage.endDate)}
              </div>
              <div className="text-gray-700">{stage.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
