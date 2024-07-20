import React, { useEffect, useState } from "react";
import statement from "../../assets/statement.jpg";

const ProblemStatement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.problem-statement');
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check if already in view

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="problem-statement flex flex-col md:flex-row bg-[#E6F4EA] shadow-md rounded-lg p-8 md:p-12 transition-transform duration-1000 ease-in-out transform 
      {isVisible ? 'translate-x-0' : 'translate-x-[50vw]'}">
      <div className={`flex flex-col justify-center items-center md:w-1/2 md:pr-8 
        transition-transform duration-1000 ease-in-out transform 
        ${isVisible ? 'translate-x-0' : 'translate-x-[-50vw]'}`}>
        <p className="text-base md:text-lg text-black font-semibold mb-8 text-center md:text-left">
          <span className="block mb-4">
            <span className="text-xl">In</span> response to the accelerating
            demand for integrated AI solutions across industries such as
            Automotive, Energy, Aerospace, Semiconductor, Wireless, and Academic
            Research,
          </span>
          <span className="block mb-4 text-green-700 text-xl font-semibold">
            Participants are invited to leverage their passion for innovation
            and engineering expertise to create solutions
          </span>
          <span className="block mb-4 text-black font-semibold">
            that not only meet current industry needs but also pave the way for
            future advancements in embedded AI technology.
          </span>
        </p>
      </div>
      <div className={`md:w-1/2 md:pl-8 flex justify-center md:justify-end items-center 
        transition-transform duration-1000 ease-in-out transform 
        ${isVisible ? 'translate-x-0' : 'translate-x-[50vw]'}`}>
        <img
          src={statement}
          alt="Problem Statement"
          className="w-full max-w-[90vw] h-auto md:max-w-[400px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProblemStatement;
