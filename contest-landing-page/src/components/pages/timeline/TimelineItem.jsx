import React from "react";

const TimelineItem = ({ title, date, description }) => {
  return (
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="order-1 w-5/12 px-1 py-4 text-right">
        <p className="mb-3 text-base text-black-300">{date}</p>
        <h4 className="mb-3 font-bold text-lg md:text-2xl">{title}</h4>
        <p className="text-sm md:text-base leading-snug text-black-50 text-opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
