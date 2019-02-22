import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Landing from "./components/Landing";
import Channels from "./components/Channels";
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
          <Channels path="channels" />
          <Games path="games" />
        </Router>
      </div>
    );
  }
}

export default App;
