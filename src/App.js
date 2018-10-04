import React, { Component } from "react";
import CB from "./component/chat_bot.js";
// import { ThemeProvider } from "styled-components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>This is sepBot here to show you more about Sepehr</h1>
        </div>
        <div className="theme">
          <CB />
        </div>
      </div>
    );
  }
}

export default App;
