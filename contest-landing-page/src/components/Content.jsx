import React from "react";
import Timeline from "./pages/Timeline";
import Hero from "./pages/Hero";

const sections = [
  {
    id: "about",
    title: "About",
    content:
      "Since our establishment in 2018, DigiToad Technologies has emerged as a leading provider of customized solutions in Automated Test and Measurement, Real-Time Monitoring and Control, Data Acquisition and Analysis Tools & Industrial Automation. Our collaborative efforts span across industries such as Automotive, Energy, Aerospace, Semiconductor, Wireless, and Academic Research, ensuring tailored engineering solutions to meet your unique needs. ",
  },
  {
    id: "timeline",
    title: "Timeline",
    content: "This is the timeline section.",
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
      <div className="container mx-auto px-4">
        {sections.map((section) => {
          if (section.id === "timeline") {
            return <Timeline key={section.id} />;
          }
          return (
            <div
              key={section.id}
              id={section.id}
              className="bg-white shadow-md rounded-lg p-6 mb-4"
            >
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
