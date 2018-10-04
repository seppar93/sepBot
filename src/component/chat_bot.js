import React, { Component } from "react";
import theme from "./theme.js";
import steps from "../Steps.js";

class chat_bot extends Component {
  render() {
    return (
      <div>
        <theme steps={steps} />
      </div>
    );
  }
}

export default chat_bot;
