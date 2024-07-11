import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="fixed w-full z-20 bg-darkBlue bg-opacity-90">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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
              className="cursor-pointer px-3 py-2 bg-dark-blue bg-opacity-50 rounded text-white hover:bg-opacity-75"
              offset={-70} // Adjust this offset to account for the fixed navbar height
            >
              {item.title}
            </ScrollLink>
          ))}
        </div>
        <button className="md:hidden" onClick={toggleSidebar}>
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
  );
};

export default Navbar;
