import React from "react";
import Github from "./component/Github.js";
import Linkedin from "./component/Linkedin.js";
import VisualizeMe from "./component/project1.js";
import Tetris from "./component/project2.js";
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
    trigger: "git-hub-message"
  },
  {
    id: "git-hub-message",
    message: "Here is a link to Sepehr's Github.",
    trigger: "loop-message"
  },
  {
    id: "projects",
    options: [
      { value: 1, label: "visualizeMe", trigger: "project1" },
      { value: 2, label: "Tetris", trigger: "project2" },
      { value: 3, label: "CRUD app", trigger: "project3" }
    ]
  },
  {
    id: "project1",
    component: <VisualizeMe />,
    trigger: "loop-message"
  },
  {
    id: "project2",
    component: <Tetris />,
    trigger: "loop-message"
  },
  {
    id: "project3",
    component: <Crud />,
    trigger: "loop-message"
  },
  {
    id: "resume",
    component: <Resume />,
    trigger: "resume-message"
  },
  {
    id: "resume-message",
    message: "Here is a link to Sepehr's resume",
    trigger: "loop-message"
  },
  {
    id: "linkedin",
    component: <Linkedin />,
    trigger: "linkedin-message"
  },
  {
    id: "linkedin-message",
    message: "Here is a link to Sepehr's LinkedIn",
    trigger: "loop-message"
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
    message: "What would you look at now?",
    trigger: "2"
  },
  {
    id: "end-message",
    message: "Thank you for your time. Sepehr hopes to hear from you :)",
    end: true
  }
];
export default steps;
