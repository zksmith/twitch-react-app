import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Landing from "./components/Landing";
import Streams from "./components/Streams";
import Games from "./components/Games";
import Channel from "./components/Channel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <main className="main-wrapper">
          <Router>
            <Landing path="/" />
            <Streams path="streams">
              <Streams path="/:category" />
            </Streams>
            <Games path="games" />
            <Channel path="channel/:channelName" />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
