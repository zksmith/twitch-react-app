import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Landing from "./components/Landing";
import Streams from "./components/Streams";
import Games from "./components/Games";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Router>
          <Landing path="/" />
          <Streams path="streams" />
          <Games path="games" />
        </Router>
      </div>
    );
  }
}

export default App;
