import React from "react";

const steps = {[
  {
    id: "1",
    message: "Hello I'm SepBot what would you like to learn about Sepehr Parirokh? ",
    trigger: "2"
  },
  {
    id: "2",
    options:[
      {value: 1, label: "Github", trigger:"github"},
      { value: 2, label: "LinkedIn", trigger:"linkedin"},
      { value: 3, label: "resume", trigger:"resume"},
    ],
  },
  {
    id: "github",
    // component: </>
    trigger: "project-message"
  },
  {
    id: "project-message",
    message: "Here is a link to Github. Here are some links to current projects.",
    trigger: "projects"
  },
  {
    id: "projects",
    options: [
      { value: 1, label: "visualizeMe", trigger: "project1"},
      { value: 2, label: "OneDot-web-app", trigger: "project2" },
      { value: 3, label: "chatFlight", trigger: "project3" },
    ],
  },
  {
    id: "project1",
    // component: </>
    trigger:
  },
  {
    id: "project2",
    // component: </>
    trigger: 
  },
  {
    id: "project3",
    // component: </>
    trigger: 
  },
  {
    id: "resume",
    // component: </>
    trigger:
  },
  {
  id: "linkedin",
    // component: </>
    trigger:
  },
  {
    id: "loop-message",
    message: "Thank you for taking a look at Sepehr. Wpild you like to look at something else",
    trigger: "response-choice-loop",
  },
  {
  id: "response-choice-loop",
  options: [
      { value: 1, label: "yes", trigger: "start-at-2"},
      { value: 2, label: "no", trigger: "end-message" },
    ],
  },
  {
    id: "start-at-2",
    message: "what would you look at now",
    trigger: "2"
  },
  {
    id: "end-message",
    message: "Thank you for your time. Sepehr hopes to hear from you :)",
    end: true,
  }
  ]}

};
