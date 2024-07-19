import React from "react";
import Hero from "./pages/Hero";
import Button from "./pages/Button";
import ProblemStatement from "./pages/ProblemStatement";
import Criteria from "./pages/Criteria";
import Timeline from "./pages/timeline/Timeline";
import Partners from "./pages/Partners";
import Faq from "./pages/Faq";

import { images } from "../Data";
import landscapesky from "../assets/landscapesky.jpg";

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
      <div className="sm:container my-0 mx-0 container space-y-8 rounded">
        <div className="flex justify-center mt-4">
          <Button
            text="Register now"
            link="https://forms.gle/GeCCGATNAbi8ke728"
            className="justify-center"
          />
        </div>
        <div className="container mx-auto px-4 space-y-8 rounded">
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
