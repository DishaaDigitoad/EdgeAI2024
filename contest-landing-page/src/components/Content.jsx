import React from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Program from "./pages/Program";
import Timeline from "./pages/timeline/Timeline";
import Partners from "./pages/Partners";
import Faq from "./pages/Faq";

const sections = [
  { id: "about", title: "About Us" },

  {
    id: "program",
    title: "Program",
  },
  { id: "timeline", title: "Timeline" },
  { id: "faq", title: "FAQ" },
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
    <div className="pt-16">
      <Hero />
      <div className="container mx-auto px-4 space-y-8 rounded">
        {sections.map((section) => {
          if (section.id === "timeline") {
            return <Timeline key={section.id} />;
          }
          if (section.id === "about") {
            return <About key={section.id} />;
          }
          if (section.id === "faq") {
            return <Faq key={section.id} />;
          }
          if (section.id === "program") {
            return <Program key={section.id} />;
          }
          if (section.id === "partners") {
            return <Partners key={section.id} />;
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
