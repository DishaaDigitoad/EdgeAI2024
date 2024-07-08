import React from "react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="fixed backdrop-blur-lg w-full z-10 border-b border-neutral-700/80">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-bold ">Logo</div>
        <div className="hidden md:flex space-x-4">
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
              className="hover:text-blue-500"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="md:hidden" onClick={toggleSidebar}>
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
