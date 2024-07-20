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
       <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        Timeline
      </h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span className="text-lg text-[#235f16] sm:text-xl md:text-2xl font-bold">{"July 27th, 2024 - August 9th, 2024"}</span>}
          iconStyle={{ background: "#235f16", color: "#fff" }}
          contentStyle={{ background: "#E6F4EA", color: "#000" }}
        >
          <div className="p-4 sm:p-6">
            <h3 className="vertical-timeline-element-title text-lg sm:text-xl md:text-2xl font-bold">
              Stage I: Registration and Proposal Submission on Problem Statement
            </h3>
            <p className="text-sm sm:text-base font-normal mt-2">
              Participants will{" "}
              <span className="text-green-700">
                submit detailed project proposals that include abstract
                methodologies, relevance to Edge AI, and potential impact.
              </span>{" "}
              The selection process will identify the top-notch proposals based
              on originality, relevance to Edge AI, and potential impact.
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span className="text-lg text-[#235f16] sm:text-xl md:text-2xl font-bold">{"August 17th, 2024 - September 17th, 2024"}</span>}
          iconStyle={{ background: "#235f16", color: "#fff" }}
          contentStyle={{ background: "#E6F4EA", color: "#000" }}
        >
          <div className="p-4 sm:p-6">
            <h3 className="vertical-timeline-element-title text-lg sm:text-xl md:text-2xl font-bold">
              Stage II: Development of Initial Prototypes and Presentation
            </h3>
            <p className="text-sm sm:text-base font-normal mt-2">
              <span className="text-green-700">
                The shortlisted teams from Stage 1 will embark on developing
                initial prototypes.
              </span>{" "}
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
          date={<span className="text-lg text-[#235f16] sm:text-xl md:text-2xl font-bold">{"October 4th, 2024"}</span>}
          iconStyle={{ background: "#235f16", color: "#fff" }}
          contentStyle={{ background: "#E6F4EA", color: "#000" }}
        >
          <div className="p-4 sm:p-6">
            <h3 className="vertical-timeline-element-title text-lg sm:text-xl md:text-2xl font-bold">
              Stage III: Submission of Polished Final Prototypes
            </h3>
            <p className="text-sm sm:text-base font-normal mt-2">
              Teams will submit polished final versions of their prototypes
              along with detailed reports.{" "}
              <span className="text-green-700">
                The final evaluation will determine the top 10 teams based on
                prototype performance and innovation.
              </span>{" "}
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
