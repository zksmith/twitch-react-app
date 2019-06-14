import React, { Component } from "react";
import { Router } from "@reach/router";
import { getFeaturedStreams } from "./components/utility/TwitchAPI";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Landing from "./components/Landing";
import Streams from "./components/Streams";
import Games from "./components/Games";
import Channel from "./components/Channel";
import NotFound from "./components/NotFound";

class App extends Component {
  state = { allFeaturedStreams: [] };

  async componentDidMount() {
    const { featured } = await getFeaturedStreams();
    this.setState({ allFeaturedStreams: featured });
  }

  render() {
    return (
      <div className="App">
        <Sidebar allFeaturedStreams={this.state.allFeaturedStreams} />
        <main className="main-wrapper">
          <Router>
            <Landing
              path="/"
              allFeaturedStreams={this.state.allFeaturedStreams}
            />
            <Streams path="streams">
              <Streams path="/:category" />
            </Streams>
            <Games path="games" />
            <Channel path="channel/:channelName" />
            <NotFound default />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
