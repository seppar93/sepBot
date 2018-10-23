import React from "react";
import Github from "./component/Github.js";
import Linkedin from "./component/Linkedin.js";
import visualizeMe from "./component/project1.js";
import chatFlight from "./component/project2.js";
import Crud from "./component/project3.js";
import Resume from "./component/Resume.js";

const steps = [
  {
    id: "1",
    message:
      "Hello I'm SepBot what would you like to learn about Sepehr Parirokh?",
    trigger: "2"
  },
  {
    id: "2",
    options: [
      { value: 1, label: "Github", trigger: "github" },
      { value: 2, label: "LinkedIn", trigger: "linkedin" },
      { value: 3, label: "Resume", trigger: "resume" },
      { value: 4, label: "Projects", trigger: "projects" }
    ]
  },
  {
    id: "github",
    component: <Github />,
    trigger: "project-message"
  },
  {
    id: "project-message",
    message:
      "Here is a link to Github. Here are some links to current projects.",
    trigger: "projects"
  },
  {
    id: "projects",
    options: [
      { value: 1, label: "visualizeMe", trigger: "project1" },
      { value: 2, label: "OneDot-web-app", trigger: "project2" },
      { value: 3, label: "chatFlight", trigger: "project3" },
      { value: 4, label: "Exist", trigger: "start-at-2" }
    ]
  },
  {
    id: "project1",
    component: <visualizeMe />,
    trigger: "2"
  },
  {
    id: "project2",
    component: <chatFlight />,
    trigger: "2"
  },
  {
    id: "project3",
    component: <Crud />,
    trigger: "2"
  },
  {
    id: "resume",
    component: <Resume />,
    trigger: "2"
  },
  {
    id: "linkedin",
    component: <Linkedin />,
    trigger: "2"
  },
  {
    id: "loop-message",
    message:
      "Thank you for taking a look at Sepehr. Would you like to look at something else?",
    trigger: "response-choice-loop"
  },
  {
    id: "response-choice-loop",
    options: [
      { value: 1, label: "yes", trigger: "start-at-2" },
      { value: 2, label: "no", trigger: "end-message" }
    ]
  },
  {
    id: "start-at-2",
    message: "what would you look at now",
    trigger: "2"
  },
  {
    id: "end-message",
    message: "Thank you for your time. Sepehr hopes to hear from you :)",
    end: true
  }
];
export default steps;
