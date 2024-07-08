import React from "react";

const Partners = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {/* Partner 1 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">ST Microelectronics</h3>
          <p className="text-gray-700">Description of Company 1</p>
        </div>

        {/* Partner 2 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">National Instruments</h3>
          <p className="text-gray-700">Description of Company 2</p>
        </div>

        {/* Partner 3 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">
            Digilent (An NI Company)
          </h3>
          <p className="text-gray-700">Description of Company 3</p>
        </div>

        {/* Partner 4 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Industrial Shields</h3>
          <p className="text-gray-700">Description of Company 4</p>
        </div>

        {/* Partner 5 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Vedhya Technologies</h3>
          <p className="text-gray-700">Description of Company 5</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
