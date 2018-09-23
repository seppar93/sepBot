import React from "react";

const steps = {
  {
    id: "1",
    message: "Hello I'm SepBot what would you like to learn about Sepehr Parirokh? ",
    trigger: "2"
  },
  {
    id: "2",
    options:[
      {value: 1, label: "Github", trigger:"github"},
      { value: 1, label: "LinkedIn", trigger:"linkedin"},
      { value: 1, label: "resume", trigger:"resume"},
    ],
  },
  {
    id: "github",
    // component: </>
    trigger: "project-message"
  },
  {
    id: "project-message",
    message: ""
  }
};
