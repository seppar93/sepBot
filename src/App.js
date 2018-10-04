import React, { Component } from "react";
import chat_bot from "./component/chat_bot.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>This is sepBot here to show you more about Sepehr</h1>
        </div>
        <div className="theme">
          <chat_bot />
        </div>
      </div>
    );
  }
}

export default App;
