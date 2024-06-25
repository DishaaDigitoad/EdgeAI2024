// src/components/Sidebar.jsx
import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-20 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:hidden`}
    >
      <div className="bg-white w-64 h-full p-4">
        <button className="mb-4" onClick={toggleSidebar}>
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
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <nav className="space-y-4">
          {[
            "About",
            "Timeline",
            "Program",
            "FAQ",
            "Partners",
            "Contact",
            "Register Now",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block text-gray-900 hover:text-blue-500"
              onClick={toggleSidebar}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
