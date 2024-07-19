import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";

const Timeline = () => {
  return (
    <>
      <h1 className="text-3xl text-green-700 sm:text-3xl font-extrabold mb-8 text-center uppercase tracking-wide">
        Timeline
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 20th, 2024 - August 5th, 2024"
          iconStyle={{ background: "#5DBA47", color: "#fff" }}
          contentStyle={{ background: "#E6F4EA", color: "#000" }}
        >
          <div className="p-4 sm:p-6 ">
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Proposal on Problem Statement
            </h3>
            <p className="text-sm sm:text-base font-normal text-justify">
              Participants will
              <span className="text-green-700">
                {" "}
                submit detailed project proposals that include abstract
                methodologies, relevance to Edge AI, and potential impact.
              </span>{" "}
              The selection process will identify the top-notch proposals based
              on originality, relevance to Edge AI, and potential impact.
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work text-xl font-bold"
          date="August 15th, 2024 - September 30th, 2024"
          iconStyle={{ background: "#5DBA47", color: "#fff" }}
          contentStyle={{ background: "#E6F4EA", color: "#000" }}
        >
          <div className="p-4 sm:p-6 ">
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Development of Initial Prototypes and Presentation
            </h3>
            <p className="text-sm sm:text-base font-normal">
              <span className="text-green-700">
                The shortlisted teams from Stage 1 will embark on developing
                initial prototypes.{" "}
              </span>
              Assessment will focus on evaluating the progress and functionality
              of these prototypes, narrowing down to the top teams based on
              initial evaluations. The top teams will then proceed to deliver
              detailed online presentations showcasing their prototypes and
              technical approaches.{" "}
              <span className="text-green-700">
                Evaluation criteria will include project-based technical
                content, innovation, problem-solving approach, and application
                potential.
              </span>
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="October 2024 (Exact dates TBD)"
          iconStyle={{ background: "#5DBA47", color: "#fff" }}
          contentStyle={{ background: "#E6F4EA", color: "#000" }}
        >
          <div className="p-4 sm:p-6 ">
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Submission of Polished Final Prototypes
            </h3>
            <p className="text-sm sm:text-base font-normal text-justify">
              Teams will submit polished final versions of their prototypes
              along with detailed reports.{" "}
              <span className="text-green-700">
                The final evaluation will determine the top 10 teams based on
                prototype performance and innovation.
              </span>
              Winners will be announced, and awards and recognition will be
              distributed to the top teams for their achievements in advancing
              Edge AI solutions.
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
