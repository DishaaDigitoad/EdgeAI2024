import React from "react";
import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    date: "January 2024",
    title: "Event One",
    description: "Description for the first event.",
  },
  {
    date: "February 2024",
    title: "Event Two",
    description: "Description for the second event.",
  },
];

const Timeline = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8">Timeline</h2>
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          date={item.date}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Timeline;
