import React, { Component, Suspense, lazy } from "react";
import { Router } from "@reach/router";
import { getFeaturedStreams } from "./components/utility/TwitchAPI";
import "./App.css";
import Loading from "./components/Loading";

const Sidebar = lazy(() => import("./components/Sidebar"));
const Landing = lazy(() => import("./components/Landing"));
const Streams = lazy(() => import("./components/Streams"));
const Games = lazy(() => import("./components/Games"));
const Channel = lazy(() => import("./components/Channel"));
const NotFound = lazy(() => import("./components/NotFound"));

class App extends Component {
  state = { allFeaturedStreams: [] };

  async componentDidMount() {
    const { featured } = await getFeaturedStreams();
    this.setState({ allFeaturedStreams: featured });
  }

  render() {
    return (
      <div className="App">
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </div>
    );
  }
}

export default App;
