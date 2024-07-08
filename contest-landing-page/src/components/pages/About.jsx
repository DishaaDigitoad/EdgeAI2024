import React from "react";
import DigiLogo from "../../assets/DigiLogo.jpg";

const About = () => {
  return (
    <div
      id="about"
      className=" text-black shadow-md rounded-lg p-8 max-w-4xl mx-auto my-10"
    >
      <div className="flex flex-wrap items-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 md:order-last mb-4 md:mb-0">
          <img
            src={DigiLogo}
            alt="DigiToad Technologies Logo"
            className="w-24 h-auto mx-auto md:mx-0"
            loading="lazy"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 2xl:w-5/6">
          <h2 className="text-3xl font-extrabold mb-4 text-center md:text-left">
            About Us
          </h2>
          <p className="text-lg leading-relaxed">
            Since our establishment in{" "}
            <span className="font-bold text-green-300">2018</span>, DigiToad
            Technologies has emerged as a leading provider of customized
            solutions in{" "}
            <span className="font-bold text-green-300">
              Automated Test and Measurement
            </span>
            ,{" "}
            <span className="font-bold text-yellow-300">
              Real-Time Monitoring and Control
            </span>
            ,
            <span className="font-bold text-yellow-300">
              {" "}
              Data Acquisition and Analysis Tools
            </span>{" "}
            &{" "}
            <span className="font-bold text-yellow-300">
              Industrial Automation
            </span>
            . Our collaborative efforts span across industries such as{" "}
            <span className="underline">Automotive</span>,{" "}
            <span className="underline">Energy</span>,{" "}
            <span className="underline">Aerospace</span>,
            <span className="underline"> Semiconductor</span>,{" "}
            <span className="underline">Wireless</span>, and{" "}
            <span className="underline">Academic Research</span>, ensuring
            tailored engineering solutions to meet your unique needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
