import { useState } from "react";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ toggleSidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-20 bg-darkBlue">
        <div className="container mx-auto px-4 py-1 flex justify-between items-center">
          <div className="flex-1 flex justify-center md:justify-center space-x-4">
            {[
              { id: "about", title: "About Us" },
              { id: "problemstatement", title: "Problem Statement" },
              { id: "criteria", title: "Criteria" },
              { id: "timeline", title: "Timeline" },
              { id: "faq", title: "FAQ" },
              { id: "partners", title: "Partners" },
            ].map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className="cursor-pointer px-3 py-2 bg-dark-blue bg-opacity-50 rounded text-white hover:bg-opacity-75 hidden md:block"
                offset={-70}
              >
                {item.title}
              </ScrollLink>
            ))}
          </div>
          <button className="md:hidden" onClick={handleSidebarToggle}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50"
          onClick={handleSidebarToggle}
        >
          <div
            className="fixed top-0 right-0 w-64 bg-darkBlue h-full z-30 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="mb-4" onClick={handleSidebarToggle}>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="space-y-4">
              {[
                { id: "about", title: "About Us" },
                { id: "problemstatement", title: "Problem Statement" },
                { id: "criteria", title: "Criteria" },
                { id: "timeline", title: "Timeline" },
                { id: "faq", title: "FAQ" },
                { id: "partners", title: "Partners" },
              ].map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  className="block px-3 py-2 bg-dark-blue bg-opacity-50 rounded text-white hover:bg-opacity-75"
                  offset={-70}
                  onClick={handleSidebarToggle}
                >
                  {item.title}
                </ScrollLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
