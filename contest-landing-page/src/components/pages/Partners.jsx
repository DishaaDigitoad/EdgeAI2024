import React from "react";
import { partners } from "../../Data";

const Partners = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-green-700 font-semibold text-center mb-8">
        In Partnership With
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center items-center p-4">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center m-4">
            <img
              src={partner.logo}
              alt="Partner logo"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
