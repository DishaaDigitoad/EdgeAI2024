import STM from "./assets/STM.png";
import NI from "./assets/NI.png";
import Digilent from "./assets/Digilent.png";
import IS from "./assets/IS.png";
import VT from "./assets/VT.png";
import Landscape from "./assets/landscapesky.jpg";

export const faqs = [
  {
    question:
      "Is there a registration fee to participate in the Edge AI Design Contest?",
    answer: "No, registration for the contest is free of charge.",
  },
  {
    question:
      "Can teams submit proposals and prototypes developed in previous competitions or projects?",
    answer:
      "No, submissions must be original and developed specifically for the Edge AI Design Contest 2024.",
  },
  {
    question:
      "Are there restrictions on the size or complexity of prototypes developed in the contest?",
    answer:
      "No specific restrictions are imposed, but prototypes should demonstrate practical applications and feasibility within industrial contexts.",
  },
  {
    question:
      "What recognition do participants receive at each stage of the contest?",
    answer:
      "Certificates will be issued at each stage to acknowledge participants contributions and achievements in advancing Edge AI technology.",
  },
  {
    question: "How are winners determined in the contest?",
    answer:
      "Winners are determined based on the evaluation of final prototypes, focusing on performance, innovation, and market potential.",
  },
];

export const partners = [
  { logo: STM },
  { logo: NI },
  { logo: Digilent },
  { logo: IS },
  { logo: VT },
];

export const images = [Landscape, Landscape, Landscape];

export const criteria = [
  {
    title: "ST Micro controller Board Selection:",
    description:
      "Teams must manually specify the type of ST board they have chosen to use for their project while registration.",
  },
  {
    title: "Team Composition:",
    description:
      "Each team must consist of a minimum of 3 members and a maximum of 4 members.",
  },
  {
    title: "Passion for Innovation:",
    description:
      "We encourage teams to demonstrate a passion for innovation in their proposed solutions and problem-solving approaches.",
  },
  {
    title: "All Years of Engineering Students(UG/PG):",
    description:
      "The challenge is open to students from all years of engineering programs, fostering interdisciplinary collaboration and creativity.",
  },
  {
    title: "Innovation Encouraged:",
    description:
      "Teams are encouraged to propose innovative and real-time problem-solving ideas that demonstrate the practical application of AI in industrial contexts.",
  },
];

export const contestFlow = [
  {
    stage: "Stage 1: Proposal on Problem Statement",
    startDate: "July 20th, 2024",
    endDate: "August 5th, 2024",
    outcomes:
      "Participants will submit detailed project proposals that include abstract methodologies, relevance to Edge AI, and potential impact. The selection process will identify the top-notch proposals based on originality, relevance to Edge AI, and potential impact.",
  },
  {
    stage: "Stage 2: Development of Initial Prototypes and Presentation",
    startDate: "August 15th, 2024",
    endDate: "September 30th, 2024",
    outcomes:
      "The shortlisted teams from Stage 1 will embark on developing initial prototypes. Assessment will focus on evaluating the progress and functionality of these prototypes, narrowing down to the top teams based on initial evaluations. The top teams will then proceed to deliver detailed online presentations showcasing their prototypes and technical approaches. Evaluation criteria will include project-based technical content, innovation, problem-solving approach, and application potential.",
  },
  {
    stage: "Stage 3: Submission of Polished Final Prototypes",
    date: "October 2024",
    outcomes:
      "Teams will submit polished final versions of their prototypes along with detailed reports. The final evaluation will determine the top 10 teams based on prototype performance and innovation. Winners will be announced, and awards and recognition will be distributed to the top teams for their achievements in advancing Edge AI solutions.",
  },
];
