import React, { Component } from "react";
import theme from "./theme.js";
import Steps from "Steps.js";

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
