import React from "react";
import Timeline from "./pages/timeline/Timeline";
import Hero from "./pages/Hero";
import DigiLogo from "../assets/DigiLogo.jpg";

const sections = [
  {
    id: "about",
    title: "About Us",
    content: (
      <>
        <img
          src={DigiLogo}
          alt="DigiToad Technologies logo"
          className="w-full max-w-md h-auto mb-4 rounded"
          loading="lazy"
        />
        <p>
          "Since our establishment in 2018, DigiToad Technologies has emerged as
          a leading provider of customized solutions in Automated Test and
          Measurement, Real-Time Monitoring and Control, Data Acquisition and
          Analysis Tools & Industrial Automation. Our collaborative efforts span
          across industries such as Automotive, Energy, Aerospace,
          Semiconductor, Wireless, and Academic Research, ensuring tailored
          engineering solutions to meet your unique needs."
        </p>
      </>
    ),
  },
  {
    id: "timeline",
    title: "Timeline",
  },
  { id: "program", title: "Program", content: "This is the program section." },
  { id: "faq", title: "FAQ", content: "This is the FAQ section." },
  {
    id: "partners",
    title: "Partners",
    content: "This is the partners section.",
  },
  { id: "contact", title: "Contact", content: "This is the contact section." },
  {
    id: "register-now",
    title: "Register Now",
    content: "This is the register now section.",
  },
];

const Content = () => {
  return (
    <div className="pt-16 bg-gray-100">
      <Hero />
      <div className="container mx-auto px-4 space-y-8">
        {sections.map((section) => {
          if (section.id === "timeline") {
            return <Timeline key={section.id} />;
          }
          return (
            <div
              key={section.id}
              id={section.id}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg text-gray-700">{section.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
