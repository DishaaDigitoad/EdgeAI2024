import React from "react";
import DigiLogo from "../../assets/DigiLogo.jpg";
import Button from "./Button";
const About = () => {
  return (
    <div
      id="about"
      className="text-black shadow-md rounded-lg p-8 max-w-4xl mx-auto my-10 bg-white"
    >
      <div className="flex flex-wrap items-center">
        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 2xl:w-5/6 order-last md:order-first">
          <h2 className="text-2xl font-extrabold mb-4 text-center md:text-left">
            Who are we?
          </h2>
          <p className="text-lg leading-relaxed">
            Since our establishment in{" "}
            <span className="font-bold text-[#5ABB47]">2018</span>, DigiToad
            Technologies has emerged as a leading provider of customized
            solutions in{" "}
            <span className="font-bold text-[#5ABB47]">
              Automated Test and Measurement
            </span>
            ,{" "}
            <span className="font-bold text-[#5ABB47]">
              Real-Time Monitoring and Control
            </span>
            ,
            <span className="font-bold text-[#5ABB47]">
              {" "}
              Data Acquisition and Analysis Tools
            </span>{" "}
            &{" "}
            <span className="font-bold text-[#5ABB47]">
              Industrial Automation
            </span>
            .Our collaborative efforts span across industries such as
            Automotive, Energy, Aerospace, Semiconductor, Wireless, and Academic
            Research, ensuring tailored engineering solutions to meet your
            unique needs.
          </p>
          <Button text="Learn more" link="https://www.digitoadtech.com/" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 order-first md:order-last mb-4 md:mb-0">
          <img
            src={DigiLogo}
            alt="DigiToad Technologies Logo"
            className="w-24 h-auto mx-auto md:mx-0 lg:w-48"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
