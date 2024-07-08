import React from "react";

const Program = () => {
  return (
    <div className=" text-black p-10 rounded-lg shadow-lg max-w-3xl mx-auto my-10">
      <h1 className="text-5xl font-extrabold mb-8 text-center uppercase tracking-wide">
        Program
      </h1>
      <p className="text-xl leading-relaxed mb-6">
        <span className="block text-2xl font-bold uppercase mb-2">
          Join us in our inaugural
        </span>
        <span className="block text-3xl font-extrabold uppercase mb-4">
          Edge AI Innovation Challenge
        </span>
        <span className="block mb-4">
          where teams harness the power of{" "}
          <span className="text-yellow-300 font-semibold">
            ST Micro controller boards
          </span>{" "}
          to develop groundbreaking solutions integrating{" "}
          <span className="text-yellow-300 font-semibold">
            embedded Artificial Intelligence
          </span>
          .
        </span>
        <span className="block mb-4">
          Spanning multiple stages from{" "}
          <span className="underline font-medium">proposal submissions</span> to{" "}
          <span className="underline font-medium">prototype development</span>{" "}
          and{" "}
          <span className="underline font-medium">technical presentations</span>
          , this challenge aims to foster innovation and showcase the practical
          applications of AI in diverse industrial contexts.
        </span>
        <span className="block text-2xl font-bold mt-6">
          Certificates will be issued
        </span>
        <span className="block mt-2">
          to participants at each stage of the competition, recognizing their
          achievements and contributions to advancing Edge AI technology.
        </span>
      </p>
    </div>
  );
};

export default Program;
