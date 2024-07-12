import React from "react";
import { partners } from "../../Data";

const Partners = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-8">
        In Partnership With
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={partner.logo}
              alt={`Partner ${index + 1}`}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-25 lg:h-25 xl:w-30 xl:h-30 2xl:w-32 2xl:h-32 mb-4 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
