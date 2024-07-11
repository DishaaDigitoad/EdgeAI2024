import React from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import ProblemStatement from "./pages/ProblemStatement";
import Criteria from "./pages/Criteria";
import Timeline from "./pages/timeline/Timeline";
import Partners from "./pages/Partners";
import Faq from "./pages/Faq";
import ParallaxSection from "./ParallaxSection";
import skybg from "../assets/skybg.jpg";
import { images } from "../Data";

const sections = [
  { id: "about", title: "About Us" },
  { id: "problemstatement", title: "Problem Statement" },
  { id: "criteria", title: "Criteria" },
  { id: "timeline", title: "Timeline" },
  { id: "faq", title: "FAQ" },
  { id: "partners", title: "Partners" },
];

const Content = () => {
  return (
    <div>
      <Hero images={images} />
      <div className="container mx-auto px-4 space-y-8 rounded">
        {sections.map((section, index) => (
          <React.Fragment key={section.id}>
            {section.id === "about" && (
              <div id="about">
                <About />
              </div>
            )}
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
              <ParallaxSection image={skybg}>
                <div id="problemstatement">
                  <ProblemStatement />
                </div>
              </ParallaxSection>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Content;
