import React from "react";
import Hero from "./pages/Hero";
import Button from "./pages/Button";
import ProblemStatement from "./pages/ProblemStatement";
import Criteria from "./pages/Criteria";
import Timeline from "./pages/timeline/Timeline";
import Partners from "./pages/Partners";
import Faq from "./pages/Faq";

import { images } from "../Data";

const sections = [
  { id: "problemstatement", title: "Problem Statement" },
  { id: "criteria", title: "Criteria" },
  { id: "timeline", title: "Timeline" },
  { id: "faq", title: "FAQ" },
  { id: "partners", title: "Partners" },
];

const Content = () => {
  return (
    <>
      <Hero images={images} />
      
      <div className="px-4 sm:px-5 py-8 space-y-8 rounded mx-0 sm:mx-auto">
        <div className="mx-auto px-4 space-y-8 rounded">
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              {section.id === "criteria" && (
                <div id="criteria">
                  <Criteria />
                </div>
              )}
              {section.id === "timeline" && (
                <div id="timeline">
                  <Timeline />
                </div>
              )}
              {section.id === "faq" && (
                <div id="faq">
                  <Faq />
                </div>
              )}
              {section.id === "partners" && (
                <div id="partners">
                  <Partners />
                </div>
              )}
              {section.id === "problemstatement" && (
                <div id="problemstatement">
                  <ProblemStatement />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Content;
